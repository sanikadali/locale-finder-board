import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Heart, X } from "lucide-react";
import { useFavorites } from "@/contexts/FavoritesContext";
import { Business } from "@/data/mockBusinesses";

interface BusinessDetailsModalProps {
  business: Business | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function BusinessDetailsModal({ business, open, onOpenChange }: BusinessDetailsModalProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  if (!business) return null;

  const favorite = isFavorite(business.id);
  const mapsQuery = `${business.name} ${business.address}`;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

  const handleFavoriteClick = () => {
    toggleFavorite(business);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Image Section */}
          <div className="aspect-[16/9] overflow-hidden relative">
            <img 
              src={business.image} 
              alt={business.name}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-all duration-200"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <DialogHeader className="space-y-4 text-left">
              <div className="flex items-start justify-between gap-4">
                <DialogTitle className="text-3xl font-bold text-foreground leading-tight">
                  {business.name}
                </DialogTitle>
                <Badge variant="secondary" className="shrink-0 text-sm">
                  {business.category}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                  <span className="font-semibold text-lg text-foreground">{business.rating}</span>
                  <span className="text-muted-foreground">
                    ({business.reviewCount} reviews)
                  </span>
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleFavoriteClick}
                  className="flex items-center gap-2"
                >
                  <Heart 
                    className={`h-4 w-4 transition-colors ${
                      favorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'
                    }`}
                  />
                  {favorite ? 'Remove from favorites' : 'Add to favorites'}
                </Button>
              </div>
            </DialogHeader>

            <div className="mt-6 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">About</h3>
                <p className="text-foreground leading-normal text-lg font-medium">
                  {business.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Location</h3>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors group"
                >
                  <MapPin className="h-5 w-5" />
                  <span className="underline underline-offset-2 group-hover:underline-offset-4 transition-all">
                    {business.address}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}