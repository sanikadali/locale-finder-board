import { useState, useMemo } from "react";
import { SearchBar } from "@/components/SearchBar";
import { FilterSidebar } from "@/components/FilterSidebar";
import { BusinessCard } from "@/components/BusinessCard";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { mockBusinesses } from "@/data/mockBusinesses";
import { BusinessList } from "@/components/BusinessList";
import gym from "@/assets/web logo.png";
const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
<<<<<<< HEAD
   const [displayCount, setDisplayCount] = useState(8); 
=======
  const [displayCount, setDisplayCount] = useState(8); // Start with 8 businesses
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414

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
  const displayedBusinesses = filteredBusinesses.slice(0, displayCount);
  const hasMoreBusinesses = filteredBusinesses.length > displayCount;

<<<<<<< HEAD
  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 8);
  };
  return (
    <div className="min-h-screen bg-background">
       {/* Fixed Header */}
=======
  const displayedBusinesses = filteredBusinesses.slice(0, displayCount);
  const hasMoreBusinesses = filteredBusinesses.length > displayCount;

  const handleLoadMore = () => {
    setDisplayCount(prev => prev + 8);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
      <header className="fixed top-0 left-0 right-0 z-50 bg-hero-gradient shadow-lg border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
<<<<<<< HEAD
                src="src/assets/web logo.png" 
                alt="Local Explorer Logo" 
                className="h-14 w-16 object-contain"
=======
                src="/lovable-uploads/c1605732-d979-42cd-9df5-086fc62ec48d.png" 
                alt="Local Explorer Logo" 
                className="h-10 w-10 object-contain"
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
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

<<<<<<< HEAD
      <div className="flex pt-20">
        {/* Fixed Sidebar */}
        <aside className="fixed left-0 top-20 bottom-0 w-72 bg-background border-r overflow-y-auto overflow-x-hidden">
          <div className="p-3">
=======
      <div className="flex pt-20 min-h-screen">
        {/* Sidebar */}
        <aside className="w-80 bg-background border-r">
          <div className="p-6">
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
            <FilterSidebar
              selectedCategories={selectedCategories}
              onCategoryChange={setSelectedCategories}
              minRating={minRating}
              onRatingChange={setMinRating}
              onClearFilters={() => {
                setSelectedCategories([]);
                setMinRating(0);
              }}
            />
          </div>
        </aside>

<<<<<<< HEAD
        {/* Scrollable Main Content */}
        <main className="flex-1 ml-72 overflow-y-auto">
=======
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
          <div className="container mx-auto px-6 py-6">
            <div className="space-y-6">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-foreground">
                  {filteredBusinesses.length} businesses found
                </h2>
                <p className="text-muted-foreground">
<<<<<<< HEAD
                  Showing results in Mumbai
=======
                  Showing results in your area
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
                </p>
              </div>

              {/* Business Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<<<<<<< HEAD
                
              {displayedBusinesses.map((business) => (
=======
                {displayedBusinesses.map((business) => (
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
                  <BusinessCard key={business.id} {...business} />
                ))}
              </div>

              {/* Load More Button */}
              {hasMoreBusinesses && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg font-medium transition-colors"
                  >
<<<<<<< HEAD
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
                  <p className="text-foreground font-medium">
                    © 2024 Local Explorer.
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">
              Discover amazing businesses in your area
            </p>
                </div>
              </footer>
=======
                    Load More ({filteredBusinesses.length - displayCount} remaining)
                  </button>
                </div>
              )}

              {/* Map Section */}
              <MapPlaceholder />
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
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
