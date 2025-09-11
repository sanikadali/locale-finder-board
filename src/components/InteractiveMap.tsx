import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Business } from '@/data/mockBusinesses';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface InteractiveMapProps {
  businesses: Business[];
  onBusinessHighlight: (businessId: string | null) => void;
  highlightedBusinessId: string | null;
}

export function InteractiveMap({ businesses, onBusinessHighlight, highlightedBusinessId }: InteractiveMapProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<{ [key: string]: mapboxgl.Marker }>({});
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [72.8777, 19.0760], // Mumbai center
      zoom: 11
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Add markers for businesses
    addBusinessMarkers();
  };

  const addBusinessMarkers = () => {
    if (!map.current) return;

    // Clear existing markers
    Object.values(markers.current).forEach(marker => marker.remove());
    markers.current = {};

    businesses.forEach(business => {
      // Create marker element
      const markerEl = document.createElement('div');
      markerEl.className = 'business-marker';
      markerEl.innerHTML = `
        <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 ${
          highlightedBusinessId === business.id ? 'ring-4 ring-primary/50 scale-125' : ''
        }">
          <svg class="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
          </svg>
        </div>
      `;

      // Create marker
      const marker = new mapboxgl.Marker(markerEl)
        .setLngLat([business.longitude, business.latitude])
        .addTo(map.current!);

      // Add click handler
      markerEl.addEventListener('click', () => {
        onBusinessHighlight(business.id);
      });

      markers.current[business.id] = marker;
    });
  };

  // Update marker styles when highlighted business changes
  useEffect(() => {
    Object.entries(markers.current).forEach(([businessId, marker]) => {
      const markerEl = marker.getElement();
      const innerDiv = markerEl.querySelector('div');
      if (innerDiv) {
        if (highlightedBusinessId === businessId) {
          innerDiv.className = 'w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110 ring-4 ring-primary/50 scale-125';
        } else {
          innerDiv.className = 'w-8 h-8 bg-primary rounded-full flex items-center justify-center cursor-pointer transition-all hover:scale-110';
        }
      }
    });
  }, [highlightedBusinessId]);

  // Re-add markers when businesses change
  useEffect(() => {
    if (map.current) {
      addBusinessMarkers();
    }
  }, [businesses]);

  // Initialize map when token is provided
  useEffect(() => {
    if (mapboxToken && !map.current) {
      initializeMap();
      setShowTokenInput(false);
    }
  }, [mapboxToken]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap();
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <Card className="shadow-card border-0 bg-muted/30">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            Interactive Map Setup
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              To display the interactive map, please enter your Mapbox public token. 
              You can get one from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Enter your Mapbox public token..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
                Load Map
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-card border-0 bg-muted/30">
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