import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

export function MapPlaceholder() {
  return (
    <Card className="shadow-card border-0 bg-muted/30">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-primary" />
          Interactive Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
          <div className="text-center space-y-2">
            <Navigation className="h-12 w-12 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground font-medium">Map will be integrated here</p>
            <p className="text-sm text-muted-foreground">Interactive business locations and directions</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}