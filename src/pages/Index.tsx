import { useState, useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { BusinessCard } from "@/components/BusinessCard";
import { InteractiveMap } from "@/components/InteractiveMap";
import { mockBusinesses } from "@/data/mockBusinesses";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("Mumbai");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [minRating, setMinRating] = useState(3);
  const [displayCount, setDisplayCount] = useState(8);
  const [highlightedBusinessId, setHighlightedBusinessId] = useState<string | null>(null);

  const filteredBusinesses = useMemo(() => {
    return mockBusinesses.filter(business => {
      const matchesSearch = business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           business.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCity = selectedCity === "All Cities" || business.city === selectedCity;

      const matchesCategory = selectedCategory === "All Categories" ||
                             business.category === selectedCategory;

      const matchesRating = business.rating >= minRating;

      return matchesSearch && matchesCity && matchesCategory && matchesRating;
    });
  }, [searchQuery, selectedCity, selectedCategory, minRating]);
  const displayedBusinesses = filteredBusinesses.slice(0, displayCount);
  const hasMoreBusinesses = filteredBusinesses.length > displayCount;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 8);
  };
  return (
    <div className="min-h-screen bg-background animate-fade-in">
       {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-hero-gradient shadow-elegant border-b animate-slide-in-right">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="src/assets/web logo.png" 
                alt="Local Explorer Logo" 
                className="h-14 w-16 object-contain hover-scale"
              />
              <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent animate-scale-in hover:scale-110 transition-transform duration-300">
                CityConnect
              </h1>
            </div>
            <div className="flex items-center gap-4 flex-1 max-w-md mx-4">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search businesses..."
              />
            </div>
            <div className="flex items-center gap-2">
              <a 
                href="/favorites"
                className="flex items-center gap-2 px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              >
                <span>❤️</span>
                <span className="hidden md:inline">Favorites</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="flex pt-20">
        

        {/* Sidebar */}
        <aside className="fixed top-24 bottom-0 bg-background border-r overflow-y-auto overflow-x-hidden z-50 w-64 animate-slide-in-right">
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
                setMinRating(3);
              }}
            />
          </div>
        </aside>

        {/* Scrollable Main Content */}
        <main className="flex-1 ml-64 overflow-y-auto animate-fade-in">
          <div className="w-full px-3 py-4">
            <div className="space-y-6">
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
              <div className="grid grid-cols-3 gap-4 animate-scale-in">
                
{displayedBusinesses.map((business) => (
  <div
    key={business.id}
    className={`transition-all duration-300 h-full ${
      highlightedBusinessId === business.id ? 'ring-4 ring-primary/50 rounded-lg scale-105' : ''
    }`}
  >
    <BusinessCard {...business} />
  </div>
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
              
              {/* Map Section */}
              <InteractiveMap 
                businesses={displayedBusinesses}
                onBusinessHighlight={setHighlightedBusinessId}
                highlightedBusinessId={highlightedBusinessId}
              />
              {/* Footer */}
              <footer className="bg-gradient-to-r from-primary via-accent to-primary text-white shadow-elegant animate-fade-in">
                <div className="container mx-auto px-6 py-12 text-center">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
                      CityConnect
                    </h3>
                  </div>
                  <p className="text-white/90 font-medium text-lg mb-3 hover-scale cursor-pointer transition-transform duration-300">
                    © 2024 Local Explorer
                  </p>
                  <p className="text-white/70 text-base mb-4">
                    Discover amazing businesses in your area
                  </p>
                  <div className="w-20 h-1 bg-white/30 mx-auto rounded-full"></div>
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
