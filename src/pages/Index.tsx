import { useState, useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { BusinessCard } from "@/components/BusinessCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { mockBusinesses } from "@/data/mockBusinesses";
import { BusinessList } from "@/components/BusinessList";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [minRating, setMinRating] = useState(0);
  const [displayCount, setDisplayCount] = useState(8);

  const filteredBusinesses = useMemo(() => {
    return mockBusinesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           business.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "All Categories" || 
                             business.category === selectedCategory;
      
      const matchesRating = business.rating >= minRating;
      
      return matchesSearch && matchesCategory && matchesRating;
    });
  }, [searchQuery, selectedCategory, minRating]);
  const displayedBusinesses = filteredBusinesses.slice(0, displayCount);
  const hasMoreBusinesses = filteredBusinesses.length > displayCount;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 8);
  };
  return (
    <div className="min-h-screen bg-background">
       {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-hero-gradient shadow-lg border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="src/assets/web logo.png" 
                alt="Local Explorer Logo" 
                className="h-14 w-16 object-contain"
              />
              <h1 className="text-2xl font-bold text-white">Local Explorer</h1>
            </div>
            <div className="flex-1 max-w-md mx-4">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search businesses..."
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="fixed top-24 bottom-0 bg-background border-r overflow-y-auto overflow-x-hidden z-40 w-64">
          <div className="p-3">
            <FilterSidebar
              selectedCity={selectedCity}
              onCityChange={setSelectedCity}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              minRating={minRating}
              onRatingChange={setMinRating}
              onClearFilters={() => {
                setSelectedCity("Mumbai");
                setSelectedCategory("All Categories");
                setMinRating(0);
              }}
            />
          </div>
        </aside>

        {/* Scrollable Main Content */}
        <main className="flex-1 ml-64 overflow-y-auto">
          <div className="w-full px-3 py-4">
            <div className="space-y-4">
              {/* Results Header */}
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-xl font-semibold text-foreground">
                  {filteredBusinesses.length} businesses found
                </h2>
                <p className="text-base text-muted-foreground">
                  Showing results in {selectedCity}
                </p>
              </div>

              {/* Business Grid */}
              <div className="grid grid-cols-4 gap-4">
                
              {displayedBusinesses.map((business) => (
                  <BusinessCard key={business.id} {...business} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreBusinesses && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors text-base"
                  >
                    Load More
                  </button>
                </div>
              )}
              <BusinessList></BusinessList>
              {/* Map Section */}
              <MapPlaceholder />
              {/* Footer */}
              <footer className="bg-primary/10 border-t border-primary/20">
                <div className="container mx-auto px-6 py-8 text-center">
                  <p className="text-foreground font-medium text-base">
                    © 2024 Local Explorer.
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Discover amazing businesses in your area
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
