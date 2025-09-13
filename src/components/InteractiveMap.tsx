import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Business } from '@/data/mockBusinesses';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface InteractiveMapProps {
  businesses: Business[];
  onBusinessHighlight: (businessId: string | null) => void;
  highlightedBusinessId: string | null;
}

export function InteractiveMap({ businesses, onBusinessHighlight, highlightedBusinessId }: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const markers = useRef<{ [key: string]: L.Marker }>({});

  const initializeMap = () => {
    if (!mapContainer.current || map.current) return;

    // Initialize map with OpenStreetMap tiles
    map.current = L.map(mapContainer.current).setView([19.0760, 72.8777], 11); // Mumbai center

    // Add OpenStreetMap tile layer (free)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map.current);

    // Add markers for businesses
    addBusinessMarkers();
  };

  const createCustomIcon = (isHighlighted: boolean) => {
    const iconHtml = `
      <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 ${
        isHighlighted ? 'ring-4 ring-primary/50 scale-125' : ''
      }" style="display: flex; align-items: center; justify-content: center;">
        <svg class="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
      </div>
    `;

    return L.divIcon({
      html: iconHtml,
      className: 'custom-marker',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
  };

  const addBusinessMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    Object.values(markers.current).forEach(marker => map.current?.removeLayer(marker));
    markers.current = {};

    businesses.forEach(business => {
      if (!map.current) return;

      const isHighlighted = highlightedBusinessId === business.id;
      const customIcon = createCustomIcon(isHighlighted);

      // Create marker
      const marker = L.marker([business.latitude, business.longitude], {
        icon: customIcon
      }).addTo(map.current);

      // Add click handler
      marker.on('click', () => {
        onBusinessHighlight(business.id);
      });

      markers.current[business.id] = marker;
    });
  };

  // Update marker styles when highlighted business changes
  useEffect(() => {
    if (!map.current) return;

    Object.entries(markers.current).forEach(([businessId, marker]) => {
      const isHighlighted = highlightedBusinessId === businessId;
      const customIcon = createCustomIcon(isHighlighted);
      marker.setIcon(customIcon);
    });
  }, [highlightedBusinessId]);

  // Re-add markers when businesses change
  useEffect(() => {
    if (map.current) {
      addBusinessMarkers();
    }
  }, [businesses]);

  // Initialize map on mount
  useEffect(() => {
    initializeMap();

    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <Card className="shadow-card border-0 bg-muted/30 relative z-10">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Business Locations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96 rounded-lg overflow-hidden">
          <div ref={mapContainer} className="w-full h-full" />
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Click on map pins to highlight corresponding business cards
        </p>
      </CardContent>
    </Card>
  );
}