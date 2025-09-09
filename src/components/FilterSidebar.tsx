import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

interface FilterSidebarProps {
  selectedCategories: string[];
  onCategoryChange: (categories: string[]) => void;
  minRating: number;
  onRatingChange: (rating: number) => void;
  onClearFilters: () => void;
}

const categories = [
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
  selectedCategories, 
  onCategoryChange, 
  minRating, 
  onRatingChange,
  onClearFilters
}: FilterSidebarProps) {
  const handleCategoryToggle = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    onCategoryChange(updatedCategories);
  };

  return (
    <div className="w-72 space-y-4">
      <div className="px-1">
        <span className="text-sm font-medium text-foreground">Filters</span>
      </div>
      <Card className="shadow-card border-0">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <label
                htmlFor={category}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                {category}
              </label>
            </div>
          ))}
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
            <Badge variant="outline">{minRating}+ stars</Badge>
            <span>5</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center pt-1">
        <button
          type="button"
          onClick={onClearFilters}
          disabled={selectedCategories.length === 0 && minRating === 0}
          className="text-sm px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/70 transition-colors disabled:opacity-50 disabled:cursor-pointer"
          title="Clear all filters"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}