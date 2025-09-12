import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Heart } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";
import { Business } from "@/data/mockBusinesses";

interface BusinessCardProps extends Business {}

export function BusinessCard(business: BusinessCardProps) {
  const { name, rating, category, description, image, address, reviewCount } = business;
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(business.id);
  
  const mapsQuery = `${name} ${address}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(business);
  };
  
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer border-0 h-full relative">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <button
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-200 shadow-md"
          title={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              favorite ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>
      </div>
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-lg text-foreground leading-tight">{name}</h3>
            <Badge variant="secondary" className="ml-2 shrink-0">{category}</Badge>
          </div>
          
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="font-medium text-foreground">{rating}</span>
            <span className="text-muted-foreground text-sm">({reviewCount} reviews)</span>          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{description}</p>
          
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            title={`Open ${name} in Google Maps`}
            onClick={(e) => e.stopPropagation()}
          >
            <MapPin className="h-3 w-3" />
            <span className="text-xs underline underline-offset-2">{address}</span>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}