import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

interface BusinessCardProps {
  name: string;
  rating: number;
  category: string;
  description: string;
  image: string;
  address: string;
}

export function BusinessCard({ name, rating, category, description, image, address }: BusinessCardProps) {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-200 cursor-pointer border-0">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
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
            <span className="text-muted-foreground text-sm">({Math.floor(Math.random() * 200) + 50} reviews)</span>
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{description}</p>
          
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{address}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}