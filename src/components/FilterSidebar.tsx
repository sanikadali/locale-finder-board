import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
  "Delhi", 
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Surat"
];

const categories = [
  "All Categories",
  "Restaurant",
  "Coffee Shop", 
  "Fitness",
  "Shopping",
  "Healthcare",
  "Beauty",
  "Entertainment",
  "Services"
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
          <Select value={selectedCity} onValueChange={onCityChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Category Dropdown */}
      <Card className="shadow-card border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Category</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
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
              min={0}
              step={0.5}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <Badge variant="outline">{minRating.toFixed(1)}+ stars</Badge>
            <span>5</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center pt-1">
        <button
          type="button"
          onClick={onClearFilters}
          disabled={selectedCity === "" && selectedCategory === "All Categories" && minRating === 0}
          className="text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/70 transition-colors disabled:opacity-50 disabled:cursor-pointer"
          title="Clear all filters"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}