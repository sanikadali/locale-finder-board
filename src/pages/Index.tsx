import { useState, useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { BusinessCard } from "@/components/BusinessCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { mockBusinesses } from "@/data/mockBusinesses";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);

  const filteredBusinesses = useMemo(() => {
    return mockBusinesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           business.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategories.length === 0 || 
                             selectedCategories.includes(business.category);
      
      const matchesRating = business.rating >= minRating;
      
      return matchesSearch && matchesCategory && matchesRating;
    });
  }, [searchQuery, selectedCategories, minRating]);

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-hero-gradient shadow-lg border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/lovable-uploads/c1605732-d979-42cd-9df5-086fc62ec48d.png" 
                alt="Local Explorer Logo" 
                className="h-10 w-10 object-contain"
              />
              <h1 className="text-2xl font-bold text-white">Local Explorer</h1>
            </div>
            <SearchBar 
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search businesses, cuisine, services..."
            />
          </div>
        </div>
      </header>

      <div className="flex pt-20 min-h-screen">
        {/* Sidebar */}
        <aside className="w-80 bg-background border-r">
          <div className="p-6">
            <FilterSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              minRating={minRating}
              onRatingChange={setMinRating}
            />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-6">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  {filteredBusinesses.length} businesses found
                </h2>
                <p className="text-muted-foreground">
                  Showing results in your area
                </p>
              </div>

              {/* Business Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBusinesses.map((business) => (
                  <BusinessCard key={business.id} {...business} />
                ))}
              </div>

              {/* Map Section */}
              <MapPlaceholder />
            </div>
          </div>
        </main>
      </div>

      {/* Full Width Footer */}
      <footer className="bg-primary/10 border-t border-primary/20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-foreground font-medium">
              © 2024 Local Explorer
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              Discover amazing businesses in your area
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
