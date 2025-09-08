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
      {/* Header */}
      <header className="bg-hero-gradient shadow-lg border-b">
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

      <div className="container mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              minRating={minRating}
              onRatingChange={setMinRating}
            />
          </aside>

          {/* Main Content */}
          <main className="flex-1 space-y-6">
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
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
