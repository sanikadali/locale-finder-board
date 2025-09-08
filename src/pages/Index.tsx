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

      <div className="flex pt-20">
        {/* Fixed Sidebar */}
        <aside className="fixed left-0 top-20 bottom-0 w-80 bg-background border-r overflow-y-auto">
          <div className="p-6">
            <FilterSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              minRating={minRating}
              onRatingChange={setMinRating}
            />
          </div>
        </aside>

        {/* Scrollable Main Content */}
        <main className="flex-1 ml-80 overflow-y-auto">
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

              {/* Footer */}
              <footer className="border-t bg-muted/30 mt-12">
                <div className="py-8 text-center">
                  <p className="text-muted-foreground text-sm">
                    © 2024 Local Explorer. Discover amazing businesses in your area.
                  </p>
                </div>
              </footer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
