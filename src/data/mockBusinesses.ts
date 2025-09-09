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
  reviewCount: number;
}

export const mockBusinesses: Business[] = [
  {
    id: "1",
    name: "Brew & Bean Coffee",
    rating: 4.8,
    category: "Coffee Shop",
    description: "Artisanal coffee and fresh pastries in a cozy atmosphere. Perfect for work or catching up with friends.",
    image: coffeeShop,
    address: "123 Main Street, Downtown",
    reviewCount: 142
  },
  {
    id: "2", 
    name: "Bella Vista Restaurant",
    rating: 4.6,
    category: "Restaurant",
    description: "Authentic Italian cuisine with modern flair. Award-winning pasta dishes and extensive wine selection.",
    image: restaurant,
    address: "456 Oak Avenue, Little Italy",
    reviewCount: 89
  },
  {
    id: "3",
    name: "Peak Fitness Center",
    rating: 4.5,
    category: "Fitness",
    description: "State-of-the-art equipment and expert trainers. Group classes and personal training available.",
    image: gym,
    address: "789 Fitness Blvd, Sports District",
    reviewCount: 203
  },
  {
    id: "4", 
    name: "Luxe Boutique",
    rating: 4.7,
    category: "Shopping",
    description: "Curated collection of designer fashion and accessories. Personalized styling services available.",
    image: boutique,
    address: "321 Fashion Lane, Uptown",
    reviewCount: 67
  },
  {
    id: "5",
    name: "The Morning Grind",
    rating: 4.4,
    category: "Coffee Shop", 
    description: "Local favorite for specialty coffee drinks and homemade breakfast items. Great WiFi for remote work.",
    image: coffeeShop,
    address: "654 Elm Street, Midtown",
    reviewCount: 156
  },
  {
    id: "6",
    name: "Sunset Bistro",
    rating: 4.3,
    category: "Restaurant",
    description: "Farm-to-table dining with seasonal menu. Beautiful patio seating with city views.",
    image: restaurant,
    address: "987 Hill Road, Sunset District",
    reviewCount: 78
  },
  {
    id: "7",
    name: "Iron Gym",
    rating: 4.2,
    category: "Fitness",
    description: "No-nonsense fitness facility with heavy lifting focus. Open 24/7 for serious athletes.",
    image: gym,
    address: "147 Muscle Ave, Industrial District",
    reviewCount: 134
  },
  {
    id: "8",
    name: "Vintage Threads",
    rating: 4.6,
    category: "Shopping",
    description: "Unique vintage clothing and accessories from different eras. Carefully curated selection.",
    image: boutique,
    address: "258 Retro Street, Arts Quarter",
    reviewCount: 92
  },
  // Additional Coffee Shops
  {
    id: "9",
    name: "Daily Grind Cafe",
    rating: 4.5,
    category: "Coffee Shop",
    description: "Fresh roasted beans daily with artisan pastries. Cozy atmosphere perfect for studying.",
    image: coffeeShop,
    address: "159 Coffee Lane, University District",
    reviewCount: 87
  },
  {
    id: "10",
    name: "Espresso Express",
    rating: 4.3,
    category: "Coffee Shop",
    description: "Quick service specialty coffee for busy professionals. Mobile ordering available.",
    image: coffeeShop,
    address: "753 Business Blvd, Financial District",
    reviewCount: 124
  },
  {
    id: "11",
    name: "Roasted Dreams",
    rating: 4.7,
    category: "Coffee Shop",
    description: "Third-wave coffee experience with single-origin beans and expert baristas.",
    image: coffeeShop,
    address: "456 Artisan Ave, Hipster Quarter",
    reviewCount: 95
  },
  {
    id: "12",
    name: "Corner Cafe",
    rating: 4.4,
    category: "Coffee Shop",
    description: "Neighborhood favorite with homemade treats and friendly service since 1985.",
    image: coffeeShop,
    address: "321 Corner St, Residential Area",
    reviewCount: 178
  },
  {
    id: "13",
    name: "Bean There Done That",
    rating: 4.6,
    category: "Coffee Shop",
    description: "Quirky coffee shop with board games and live acoustic music on weekends.",
    image: coffeeShop,
    address: "789 Music Row, Entertainment District",
    reviewCount: 103
  },
  {
    id: "14",
    name: "Steam & Beans",
    rating: 4.2,
    category: "Coffee Shop",
    description: "Industrial-style coffee house with craft beer on tap after 4 PM.",
    image: coffeeShop,
    address: "147 Industrial Way, Warehouse District",
    reviewCount: 76
  },
  {
    id: "15",
    name: "Morning Glory Coffee",
    rating: 4.8,
    category: "Coffee Shop",
    description: "Farm-to-cup coffee with organic, fair-trade beans. Vegan options available.",
    image: coffeeShop,
    address: "852 Green Street, Eco Village",
    reviewCount: 159
  },
  {
    id: "16",
    name: "Cappuccino Corner",
    rating: 4.1,
    category: "Coffee Shop",
    description: "Traditional Italian-style coffee bar with imported espresso machines.",
    image: coffeeShop,
    address: "963 Little Italy, Heritage District",
    reviewCount: 68
  },
  {
    id: "17",
    name: "The Coffee Lab",
    rating: 4.9,
    category: "Coffee Shop",
    description: "Experimental coffee brewing methods and unique flavor combinations.",
    image: coffeeShop,
    address: "741 Innovation Blvd, Tech Hub",
    reviewCount: 211
  },
  {
    id: "18",
    name: "Sunrise Roasters",
    rating: 4.4,
    category: "Coffee Shop",
    description: "Early bird special with fresh donuts and premium coffee blends.",
    image: coffeeShop,
    address: "258 Dawn Street, Sunrise Heights",
    reviewCount: 132
  },
  // Additional Restaurants
  {
    id: "19",
    name: "The Garden Table",
    rating: 4.5,
    category: "Restaurant",
    description: "Fresh garden-to-table cuisine with seasonal ingredients and outdoor seating.",
    image: restaurant,
    address: "159 Garden Ave, Green District",
    reviewCount: 94
  },
  {
    id: "20",
    name: "Spice Route",
    rating: 4.7,
    category: "Restaurant",
    description: "Authentic Indian cuisine with traditional spices and modern presentation.",
    image: restaurant,
    address: "753 Curry Lane, International Quarter",
    reviewCount: 167
  },
  {
    id: "21",
    name: "Ocean's Catch",
    rating: 4.6,
    category: "Restaurant",
    description: "Fresh seafood restaurant with daily catches and waterfront views.",
    image: restaurant,
    address: "456 Harbor Drive, Marina District",
    reviewCount: 128
  },
  {
    id: "22",
    name: "The Steakhouse",
    rating: 4.8,
    category: "Restaurant",
    description: "Prime cuts and classic sides in an upscale atmosphere. Wine pairings available.",
    image: restaurant,
    address: "321 Premium Blvd, Luxury District",
    reviewCount: 234
  },
  {
    id: "23",
    name: "Noodle Bar",
    rating: 4.3,
    category: "Restaurant",
    description: "Authentic ramen and Asian fusion dishes in a casual setting.",
    image: restaurant,
    address: "789 Noodle Street, Asia Town",
    reviewCount: 87
  },
  {
    id: "24",
    name: "Fire & Smoke BBQ",
    rating: 4.4,
    category: "Restaurant",
    description: "Slow-smoked meats and homemade sauces. Live country music on weekends.",
    image: restaurant,
    address: "147 BBQ Road, Country Side",
    reviewCount: 145
  },
  {
    id: "25",
    name: "Mediterranean Breeze",
    rating: 4.6,
    category: "Restaurant",
    description: "Healthy Mediterranean dishes with olive oils and fresh herbs.",
    image: restaurant,
    address: "852 Olive Street, Mediterranean Quarter",
    reviewCount: 112
  },
  {
    id: "26",
    name: "The Breakfast Club",
    rating: 4.2,
    category: "Restaurant",
    description: "All-day breakfast menu with creative pancakes and eggs benedict variations.",
    image: restaurant,
    address: "963 Morning Lane, Breakfast District",
    reviewCount: 76
  },
  {
    id: "27",
    name: "Taco Libre",
    rating: 4.5,
    category: "Restaurant",
    description: "Authentic Mexican street tacos with house-made salsas and margaritas.",
    image: restaurant,
    address: "741 Fiesta Ave, Latino Quarter",
    reviewCount: 189
  },
  {
    id: "28",
    name: "The Corner Diner",
    rating: 4.1,
    category: "Restaurant",
    description: "Classic American diner with comfort food and 24-hour service.",
    image: restaurant,
    address: "258 Main Street, Downtown Core",
    reviewCount: 98
  },
  // Additional Fitness Centers
  {
    id: "29",
    name: "Flex Fitness Studio",
    rating: 4.6,
    category: "Fitness",
    description: "Modern fitness studio with yoga, pilates, and HIIT classes.",
    image: gym,
    address: "159 Wellness Way, Health District",
    reviewCount: 156
  },
  {
    id: "30",
    name: "CrossFit Thunder",
    rating: 4.4,
    category: "Fitness",
    description: "High-intensity CrossFit training with certified coaches and community events.",
    image: gym,
    address: "753 Power Street, Athletic Quarter",
    reviewCount: 187
  },
  {
    id: "31",
    name: "Zen Yoga Center",
    rating: 4.8,
    category: "Fitness",
    description: "Peaceful yoga studio with meditation classes and wellness workshops.",
    image: gym,
    address: "456 Tranquil Ave, Mindfulness District",
    reviewCount: 143
  },
  {
    id: "32",
    name: "Aqua Fitness Pool",
    rating: 4.3,
    category: "Fitness",
    description: "Indoor pool with swimming lessons, water aerobics, and lap swimming.",
    image: gym,
    address: "321 Pool Lane, Aquatic Center",
    reviewCount: 92
  },
  {
    id: "33",
    name: "Boulder Climbing Gym",
    rating: 4.7,
    category: "Fitness",
    description: "Indoor rock climbing with bouldering walls and climbing courses for all levels.",
    image: gym,
    address: "789 Climb Street, Adventure District",
    reviewCount: 124
  },
  {
    id: "34",
    name: "Dance Fitness Studio",
    rating: 4.5,
    category: "Fitness",
    description: "Fun dance classes including Zumba, hip-hop, and ballroom dancing.",
    image: gym,
    address: "147 Rhythm Road, Arts Quarter",
    reviewCount: 78
  },
  {
    id: "35",
    name: "Powerhouse Gym",
    rating: 4.2,
    category: "Fitness",
    description: "Serious weightlifting facility with Olympic equipment and powerlifting focus.",
    image: gym,
    address: "852 Strength Ave, Muscle District",
    reviewCount: 167
  },
  {
    id: "36",
    name: "Cardio Central",
    rating: 4.4,
    category: "Fitness",
    description: "Cardio-focused gym with latest treadmills, bikes, and elliptical machines.",
    image: gym,
    address: "963 Cardio Blvd, Endurance Zone",
    reviewCount: 134
  },
  {
    id: "37",
    name: "Martial Arts Dojo",
    rating: 4.6,
    category: "Fitness",
    description: "Traditional martial arts training including karate, judo, and self-defense classes.",
    image: gym,
    address: "741 Warrior Way, Discipline District",
    reviewCount: 89
  },
  {
    id: "38",
    name: "Cycle Studio",
    rating: 4.3,
    category: "Fitness",
    description: "High-energy spin classes with motivating music and experienced instructors.",
    image: gym,
    address: "258 Spin Street, Cycle Center",
    reviewCount: 156
  },
  // Additional Shopping
  {
    id: "39",
    name: "Urban Outfitters",
    rating: 4.4,
    category: "Shopping",
    description: "Trendy fashion for young adults with unique accessories and home decor.",
    image: boutique,
    address: "159 Trend Ave, Fashion District",
    reviewCount: 203
  },
  {
    id: "40",
    name: "Artisan Market",
    rating: 4.7,
    category: "Shopping",
    description: "Local handmade crafts, jewelry, and artwork from regional artists.",
    image: boutique,
    address: "753 Craft Lane, Artisan Quarter",
    reviewCount: 87
  },
  {
    id: "41",
    name: "Tech Gadgets Plus",
    rating: 4.3,
    category: "Shopping",
    description: "Latest electronics, gadgets, and tech accessories with expert advice.",
    image: boutique,
    address: "456 Silicon Street, Tech Hub",
    reviewCount: 145
  },
  {
    id: "42",
    name: "The Book Nook",
    rating: 4.8,
    category: "Shopping",
    description: "Independent bookstore with rare finds, local authors, and cozy reading corners.",
    image: boutique,
    address: "321 Literature Lane, Intellectual District",
    reviewCount: 167
  },
  {
    id: "43",
    name: "Home & Garden Center",
    rating: 4.2,
    category: "Shopping",
    description: "Everything for home improvement, gardening supplies, and seasonal decorations.",
    image: boutique,
    address: "789 Garden Blvd, Home District",
    reviewCount: 123
  },
  {
    id: "44",
    name: "Luxury Watches",
    rating: 4.9,
    category: "Shopping",
    description: "Premium timepieces from renowned brands with professional repair services.",
    image: boutique,
    address: "147 Time Square, Luxury Row",
    reviewCount: 245
  },
  {
    id: "45",
    name: "Organic Market",
    rating: 4.5,
    category: "Shopping",
    description: "Organic produce, natural products, and eco-friendly household items.",
    image: boutique,
    address: "852 Green Market, Eco District",
    reviewCount: 178
  },
  {
    id: "46",
    name: "Shoe Paradise",
    rating: 4.4,
    category: "Shopping",
    description: "Wide selection of footwear for all occasions, from casual to formal.",
    image: boutique,
    address: "963 Shoe Street, Fashion Mile",
    reviewCount: 134
  },
  {
    id: "47",
    name: "Kids Toy Store",
    rating: 4.6,
    category: "Shopping",
    description: "Educational and fun toys for children of all ages with expert recommendations.",
    image: boutique,
    address: "741 Play Avenue, Family District",
    reviewCount: 98
  },
  {
    id: "48",
    name: "Music Instruments Shop",
    rating: 4.3,
    category: "Shopping",
    description: "Musical instruments, sheet music, and sound equipment with rental options.",
    image: boutique,
    address: "258 Melody Street, Music Quarter",
    reviewCount: 112
  }
];