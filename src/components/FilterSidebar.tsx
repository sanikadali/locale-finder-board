import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

interface FilterSidebarProps {
  selectedCity: string;
  onCityChange: (city: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  minRating: number;
  onRatingChange: (rating: number) => void;
  onClearFilters: () => void;
}

const cities = [
  "Mumbai", 
  "Bangalore",
  "Pune"
];

const categories = [
  "All Categories",
  "Restaurant",
  "Coffee Shop", 
  "Fitness",
  "Shopping",
  "Healthcare",
];

export function FilterSidebar({ 
  selectedCity,
  onCityChange,
  selectedCategory, 
  onCategoryChange, 
  minRating, 
  onRatingChange,
  onClearFilters
}: FilterSidebarProps) {

  return (
    <div className="w-full max-w-72 space-y-4">
      <div className="px-1">
        <span className="text-sm font-medium text-foreground">Filters</span>
      </div>

      {/* City Dropdown */}
      <Card className="shadow-card border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">City</CardTitle>
        </CardHeader>
        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <button className="w-full flex items-center justify-between px-3 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm">
                {selectedCity || "Select a city"}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-1 bg-popover z-50" align="start">
              <div className="grid gap-1">
                {cities.map((city) => (
                  <button
                    key={city}
                    onClick={() => onCityChange(city)}
                    className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm"
                  >
                    {city}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      {/* Category Dropdown */}
      <Card className="shadow-card border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Category</CardTitle>
        </CardHeader>
        <CardContent>
          <Popover>
            <PopoverTrigger asChild>
              <button className="w-full flex items-center justify-between px-3 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md text-sm">
                {selectedCategory || "Select a category"}
                <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-1 bg-popover z-50" align="start">
              <div className="grid gap-1">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className="w-full text-left px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground rounded-sm"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </CardContent>
      </Card>

      <Card className="shadow-card border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Minimum Rating</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="px-1">
            <Slider
              value={[minRating]}
              onValueChange={(value) => onRatingChange(value[0])}
              max={5}
              min={3}
              step={0.5}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>3</span>
            <Badge variant="outline">{minRating.toFixed(1)}+ stars</Badge>
            <span>5</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center pt-1">
        <button
          type="button"
          onClick={onClearFilters}
          disabled={selectedCity === "" && selectedCategory === "All Categories" && minRating === 3}
          className="text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/70 transition-colors disabled:opacity-50 disabled:cursor-pointer"
          title="Clear all filters"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}