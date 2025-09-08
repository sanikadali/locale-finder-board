import coffeeShop from "@/assets/coffee-shop.jpg";
import restaurant from "@/assets/restaurant.jpg";
import gym from "@/assets/gym.jpg";
import boutique from "@/assets/boutique.jpg";

export interface Business {
  id: string;
  name: string;
  rating: number;
  category: string;
  description: string;
  image: string;
  address: string;
}

export const mockBusinesses: Business[] = [
  {
    id: "1",
    name: "Brew & Bean Coffee",
    rating: 4.8,
    category: "Coffee Shop",
    description: "Artisanal coffee and fresh pastries in a cozy atmosphere. Perfect for work or catching up with friends.",
    image: coffeeShop,
    address: "123 Main Street, Downtown"
  },
  {
    id: "2", 
    name: "Bella Vista Restaurant",
    rating: 4.6,
    category: "Restaurant",
    description: "Authentic Italian cuisine with modern flair. Award-winning pasta dishes and extensive wine selection.",
    image: restaurant,
    address: "456 Oak Avenue, Little Italy"
  },
  {
    id: "3",
    name: "Peak Fitness Center",
    rating: 4.5,
    category: "Fitness",
    description: "State-of-the-art equipment and expert trainers. Group classes and personal training available.",
    image: gym,
    address: "789 Fitness Blvd, Sports District"
  },
  {
    id: "4", 
    name: "Luxe Boutique",
    rating: 4.7,
    category: "Shopping",
    description: "Curated collection of designer fashion and accessories. Personalized styling services available.",
    image: boutique,
    address: "321 Fashion Lane, Uptown"
  },
  {
    id: "5",
    name: "The Morning Grind",
    rating: 4.4,
    category: "Coffee Shop", 
    description: "Local favorite for specialty coffee drinks and homemade breakfast items. Great WiFi for remote work.",
    image: coffeeShop,
    address: "654 Elm Street, Midtown"
  },
  {
    id: "6",
    name: "Sunset Bistro",
    rating: 4.3,
    category: "Restaurant",
    description: "Farm-to-table dining with seasonal menu. Beautiful patio seating with city views.",
    image: restaurant,
    address: "987 Hill Road, Sunset District"
  },
  {
    id: "7",
    name: "Iron Gym",
    rating: 4.2,
    category: "Fitness",
    description: "No-nonsense fitness facility with heavy lifting focus. Open 24/7 for serious athletes.",
    image: gym,
    address: "147 Muscle Ave, Industrial District"
  },
  {
    id: "8",
    name: "Vintage Threads",
    rating: 4.6,
    category: "Shopping",
    description: "Unique vintage clothing and accessories from different eras. Carefully curated selection.",
    image: boutique,
    address: "258 Retro Street, Arts Quarter"
  }
];