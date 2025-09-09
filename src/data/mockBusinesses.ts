


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
    name: "Blue Tokai Coffee Roasters",
    rating: 4.4,
    category: "Coffee Shop",
<<<<<<< HEAD
    description: "A pioneer in India's specialty coffee scene, known for freshly roasted, single-origin coffees. Multiple locations offer a modern, industrial vibe perfect for working or relaxing. They also sell coffee beans and brewing equipment.",
    image: "images/coffee-shop.jpg",
    address: "Multiple locations, including Bandra West, Mahalaxmi, and Kurla",
    reviewCount: 112
=======
    description: "Artisanal coffee and fresh pastries in a cozy atmosphere. Perfect for work or catching up with friends.",
    image: coffeeShop,
    address: "123 Main Street, Downtown",
    reviewCount: 142
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  {
    id: "2", 
    name: "The Bombay Canteen", 
    rating: 4.8, 
    category: "Restaurant",
<<<<<<< HEAD
    description: "A trendy restaurant and bar celebrating the regional diversity of Indian cuisine with a modern twist. The ambiance is reminiscent of a 1960s Indian canteen, making it a vibrant and popular spot for both food and cocktails.",
    image: "images/restaurant.jpg", 
    address: "Kamala Mills, Lower Parel",
    reviewCount: 290
=======
    description: "Authentic Italian cuisine with modern flair. Award-winning pasta dishes and extensive wine selection.",
    image: restaurant,
    address: "456 Oak Avenue, Little Italy",
    reviewCount: 89
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  {
    id: "3",
    name: "Nitrro Bespoke Fitness",
    rating: 4.8,
    category: "Fitness",
<<<<<<< HEAD
    description: "A sprawling, luxurious fitness center with state-of-the-art equipment and a wide range of classes, including functional training, HIIT, and hot yoga. Known for its energetic atmosphere and live DJ.",
    image: "images/gym.jpg",
    address: "Breach Candy, South Mumbai",
    reviewCount: 490
=======
    description: "State-of-the-art equipment and expert trainers. Group classes and personal training available.",
    image: gym,
    address: "789 Fitness Blvd, Sports District",
    reviewCount: 203
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  {
    id: "4", 
    name: "Phoenix Palladium",
    rating: 4.4,
    category: "Shopping",
<<<<<<< HEAD
    description: "Mumbai's premier luxury shopping destination, featuring a wide array of international high-fashion brands, designer boutiques, and upscale dining options.",
    image: "images/shop.jpg",
    address: "Lower Parel",
    reviewCount: 140
=======
    description: "Curated collection of designer fashion and accessories. Personalized styling services available.",
    image: boutique,
    address: "321 Fashion Lane, Uptown",
    reviewCount: 67
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  {
    id: "5",
    name: "Subko Specialty Coffee Roasters & Bakehouse",
    rating: 4.8,
    category: "Coffee Shop", 
<<<<<<< HEAD
    description: "Sourced from the subcontinent, Subko offers a unique coffee experience with a focus on single-origin and a 'Pod-to-Bar' approach to cacao. The Byculla flagship is part roastery, lab, and cafe, all in a beautiful, plant-filled space.",
    image: "images/coffee-shop2.jpg",
    address: "Multiple locations, including Byculla and Bandra",
    reviewCount: 590
  },
  {
    id: "6",
    name: "O Pedro", 
    rating: 4.6, 
    category: "Restaurant", 
    description: "This restaurant brings the vibrant and relaxed spirit of Goa to Mumbai. It serves authentic Goan-Portuguese cuisine with a focus on fresh seafood and bold flavors in a colorful and lively setting.", 
    image: "images/restaurant1.jpg", 
    address: "Bandra Kurla Complex (BKC)",
    reviewCount: 350
=======
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
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  {
    id: "7",
    name: "The Space",
    rating: 4.9,
    category: "Fitness",
<<<<<<< HEAD
    description: "A premium functional training studio that offers group classes and personal training. It is known for its diverse programs, including strength and conditioning, calisthenics, and Pilates.",
    image: "images/gym1.jpg",
    address: "Juhu",
    reviewCount: 720
=======
    description: "No-nonsense fitness facility with heavy lifting focus. Open 24/7 for serious athletes.",
    image: gym,
    address: "147 Muscle Ave, Industrial District",
    reviewCount: 134
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  {
    id: "8",
    name: "Phoenix Marketcity",
    rating: 4.4,
    category: "Shopping",
<<<<<<< HEAD
    description: "One of the largest malls in India, this expansive shopping center offers a massive selection of national and international brands, a large food court, and various entertainment options.",
    image: "images/shop1.jpg",
    address: "Kurla",
    reviewCount: 254
=======
    description: "Unique vintage clothing and accessories from different eras. Carefully curated selection.",
    image: boutique,
    address: "258 Retro Street, Arts Quarter",
    reviewCount: 92
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  // Additional Coffee Shops
  {
    id: "9",
<<<<<<< HEAD
    name: "The Bagel Shop",
    rating: 4.2,
    category: "Coffee Shop",
    description: "A hidden gem in Pali Hill, The Bagel Shop is famous for its peaceful ambiance and delicious bagels.",
    image: "images/coffee-shop3.jpg",
    address: "Pali Hill, Bandra",
    reviewCount: 483
  },
  {
    id: "10",
    name: "Bombay Coffee House",
    rating: 4.2,
    category: "Coffee Shop",
    description: "With a vintage, old-world charm, this cafe evokes the spirit of 1970s Bombay. It's a great place for meetings or a quiet moment with a book, offering a wide menu from English breakfast to Parsi and Indian favorites.",
    image: "images/coffee-shop4.jpg",
    address: "Multiple locations, including Bandra and Fort",
    reviewCount: 249
  },
  {
    id: "11",
    name: "Kala Ghoda Cafe",
    rating: 4.5,
    category: "Coffee Shop",
    description: "Third-wave coffee experience with single-origin beans and expert baristas.",
    image: "images/coffee-shop5.jpg",
    address: "Fort",
    reviewCount: 169
  },
  {
    id: "12",
    name: "Cafe Zoe",
    rating: 4.3,
    category: "Coffee Shop",
    description: "With an industrial-chic decor and high ceilings, Cafe Zoe is a spacious and trendy spot for both work and social gatherings.",
    image: "images/coffee-shop6.jpg",
    address: "Lower Parel",
    reviewCount: 350
  },
  {
    id: "13",
    name: "The Nutcracker",
    rating: 4.2,
    category: "Coffee Shop",
    description: "Quirky coffee shop with board games and live acoustic music on weekends.",
    image: "images/coffee-shop7.jpg",
    address: "Bandra and Fort",
    reviewCount: 482
  },
  {
    id: "14",
    name: "Magnolia Bakery",
    rating: 4.3,
    category: "Coffee Shop",
    description: "Industrial-style coffee house with craft beer on tap after 4 PM.",
    image: "images/coffee-shop8.jpg",
    address: "Bandra West",
    reviewCount: 428
  },
  {
    id: "15",
    name: "Masa Bakery",
    rating: 4.8,
    category: "Coffee Shop",
    description: "A go-to for authentic flavors and fresh local ingredients.",
    image: "images/coffee-shop9.jpg",
    address: "Juhu",
    reviewCount: 750
  },
  {
    id: "16",
    name: "Birdsong",
    rating: 4.1,
    category: "Coffee Shop",
    description: "Traditional Italian-style coffee bar with imported espresso machines.",
    image: "images/coffee-shop10.jpg",
    address: "Bandra West",
    reviewCount: 472
  },
  {
    id: "17",
    name: "Paul",
    rating: 4.5,
    category: "Coffee Shop",
    description: "An Instagrammable French bakery and cafe offering an authentic Parisian experience. The aroma of fresh bread and pastries fills the air, and their artisanal coffees, like the mocha and cortado, are highly recommended.",
    image: "images/coffee-shop11.jpg",
    address: "Lower Parel",
    reviewCount: 448
  },
  {
    id: "18",
    name: "Leaping Windows",
    rating: 4.6,
    category: "Coffee Shop",
    description: "A whimsical cafe that combines coffee with an extensive collection of comic books. It has a relaxed, laid-back vibe with a quiet basement for working or reading, making it a favorite for creatives and students.",
    image: "images/coffee-shop12.jpg",
    address: "Yari Road, Versova, Andheri",
    reviewCount: 650
=======
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
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  // Additional Restaurants
  {
    id: "19",
<<<<<<< HEAD
    name: "The Table", 
    rating: 4.5, 
    category: "Restaurant", 
    description: "A pioneer of Mumbai's fine dining scene, The Table offers a globally-inspired menu with a strong emphasis on fresh, seasonal produce. Its elegant, bi-level space and communal dining concept create a sophisticated and welcoming atmosphere.", 
    image: "images/restaurant2.jpg", 
    address: "Colaba",
    reviewCount: 85
  },
  {
    id: "20",
    name: "Wasabi by Morimoto", 
    rating: 4.7, 
    category: "Restaurant", 
    description: "Located at the Taj Mahal Palace, this is a world-renowned Japanese restaurant by Iron Chef Masaharu Morimoto. It is acclaimed for its exceptional sushi, sashimi, and other authentic Japanese delicacies.", 
    image: "images/restaurant3.jpg", 
    address: "The Taj Mahal Palace, Apollo Bunder",
    reviewCount: 950
  },
  {
    id: "21",
    name: "Trishna", 
    rating: 4.2, 
    category: "Restaurant", 
    description: "A legendary seafood restaurant famous for its butter pepper garlic crab. Trishna is a no-frills establishment that has been serving some of Mumbai's best coastal cuisine for decades, attracting locals and tourists alike.", 
    image: "images/restaurant4.jpg", 
    address: "Fort",
    reviewCount: 490
  },
  {
    id: "22",
    name: "Peshawri", 
    rating: 4.6, 
    category: "Restaurant", 
    description: "Known for its North-West Frontier cuisine, Peshawri offers a rustic dining experience where food is served on copper platters. The menu is a celebration of tandoor-cooked kebabs and breads, perfect for a hearty meal.", 
    image: "images/restaurant5.jpg", 
    address: "ITC Maratha, Andheri East",
    reviewCount: 845
  },
  {
    id: "23",
    name: "Gajalee", 
    rating: 4.3, 
    category: "Restaurant", 
    description: "A Mumbai institution for Malvani and coastal seafood. Gajalee is a go-to spot for fresh and flavorful seafood dishes, with a reputation for its bombil fry and an array of fish preparations.", 
    image: "images/restaurant6.jpg",
    address: "Vile Parle East",
    reviewCount: 447
  },
  {
    id: "24",
    name: "Shree Thaker Bhojanalay", 
    rating: 4.7, 
    category: "Restaurant", 
    description: "Established in 1945, this restaurant is a historic gem serving an authentic and unlimited Gujarati Thali. It's a must-visit for a true taste of traditional home-style vegetarian food from Gujarat.", 
    image: "images/restaurant7.jpg",
    address: "Kalbadevi",
    reviewCount: 547
  },
  {
    id: "25",
    name: "Mirchi & Mime", 
    rating: 4.8, 
    category: "Restaurant", 
    description: "A unique restaurant with a socially conscious mission, as its staff is hearing and speech impaired. Diners are encouraged to communicate using sign language while enjoying modern Indian cuisine in a warm and inviting setting.", 
    image: "images/restaurant8.jpg", 
    address: "Powai",
    reviewCount: 569
  },
  {
    id: "26",
    name: "Yauatcha", 
    rating: 4.4, 
    category: "Restaurant", 
    description: "A modern Chinese dim sum teahouse from London, Yauatcha offers an elegant dining experience. It's renowned for its intricate dim sum, delectable wok dishes, and a wide selection of fine teas and cocktails.", 
    image: "images/restaurant9.jpg",
    address: "Bandra Kurla Complex (BKC)",
    reviewCount: 358
  },
  {
    id: "27",
    name: "San-Qi", 
    rating: 4.5, 
    category: "Restaurant", 
    description: "Located at the Four Seasons Hotel, San-Qi is a contemporary restaurant offering a diverse pan-Asian menu, including Japanese, Chinese, Thai, and Indian cuisines. It's celebrated for its dynamic open kitchens and luxurious ambiance.", 
    image: "images/restaurant10.jpg", 
    address: "Four Seasons Hotel, Worli",
    reviewCount: 598
  },
  {
    id: "28",
    name: "Dakshin", 
    rating: 4.6, 
    category: "Restaurant", 
    description: "A fine-dining restaurant that showcases the rich culinary traditions of South India. The menu features authentic dishes from the four Southern states, providing a royal and immersive dining experience.", 
    image: "images/restaurant11.png", 
    address: "ITC Maratha, Andheri East",
    reviewCount: 746
=======
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
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  // Additional Fitness Centers
  {
    id: "29",
<<<<<<< HEAD
    name: "Cult.fit",
    rating: 4.5,
    category: "Fitness",
    description: "A popular fitness chain with multiple locations across Mumbai, offering a variety of high-energy group classes, including strength training, yoga, and dance fitness. Known for its excellent trainers and modern facilities.",
    image: "images/gym2.jpg",
    address: "Multiple locations, including Bandra, Powai, and Chembur",
    reviewCount: 442
  },
  {
    id: "30",
    name: "Gold's Gym",
    rating: 4.3,
    category: "Fitness",
    description: "A well-known global fitness brand with numerous branches in Mumbai. It provides a full range of equipment for strength and cardio, along with expert trainers and group classes.",
    image: "images/gym3.jpg",
    address: "Multiple locations, including Bandra and Andheri",
    reviewCount: 147
  },
  {
    id: "31",
    name: "Anytime Fitness",
    rating: 4.7,
    category: "Fitness",
    description: "A convenient 24/7 gym chain, perfect for those with a busy schedule. It offers a clean and well-maintained space with certified trainers and a supportive community.",
    image: "images/gym4.jpg",
    address: "Multiple locations, including Kemps Corner and Prabhadevi",
    reviewCount: 247
  },
  {
    id: "32",
    name: "The Pilates Studio by Namrata Purohit",
    rating: 4.8,
    category: "Fitness",
    description: "A specialized studio focusing on Pilates, offering a unique approach to fitness. It is one of the few studios to provide Pilates with simulated altitude training.",
    image: "images/gym5.jpg",
    address: "Santacruz West",
    reviewCount: 47
  },
  {
    id: "33",
    name: "Breathe Studio",
    rating: 5.0,
    category: "Fitness",
    description: "An inclusive and serene fitness space with diverse training programs and expert coaches. It is known for its intense and effective workouts.",
    image: "images/gym6.jpg",
    address: "Khar West",
    reviewCount: 968
  },
  {
    id: "34",
    name: "CrossFit Kaali",
    rating: 4.7,
    category: "Fitness",
    description: "A high-intensity fitness center based on the CrossFit training philosophy. It focuses on functional movements performed at high intensity to build power and strength.",
    image: "images/gym7.jpg",
    address: "Andheri West",
    reviewCount: 885
  },
  {
    id: "35",
    name: "Vie:Fit",
    rating: 4.8,
    category: "Fitness",
    description: "A community-focused fitness center with a mission to change the perception of health and wellness. They offer a variety of classes, including rhythm fit, strength training, and yoga.",
    image: "images/gym8.jpg",
    address: "Andheri West and Tardeo",
    reviewCount: 758
  },
  {
    id: "36",
    name: "Why Not Fitness",
    rating: 4.6,
    category: "Fitness",
    description: "A well-equipped gym that caters to individual needs, offering a dynamic range of equipment and certified trainers. It also features an in-house healthy cafe.",
    image: "images/gym9.jpg",
    address: "Andheri West",
    reviewCount: 49
  },
  {
    id: "37",
    name: "Plus Fitness 24/7",
    rating: 4.5,
    category: "Fitness",
    description: "A global fitness franchise that offers affordable and convenient 24/7 access to its facilities. The gym is known for its group classes and functional training equipment.",
    image: "images/gym10.jpg",
    address: "Mumbai Central",
    reviewCount: 469


  },
  {
    id: "38",
    name: "Waves Gym",
    rating: 4.4,
    category: "Fitness",
    description: "Known for offering the best in wellness and innovation, Waves Gym features top-notch equipment and a team of dedicated personal trainers.",
    image: "images/gym11.jpg",
    address: "Andheri East",
    reviewCount: 985
=======
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
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  },
  // Additional Shopping
  {
    id: "39",
<<<<<<< HEAD
    name: "Colaba Causeway",
    rating: 4.3,
    category: "Shopping",
    description: "A vibrant and famous street market known for its eclectic mix of clothing, accessories, footwear, and souvenirs. A perfect place for bargain hunters.",
    image: "images/shop11.jpg",
    address: "Colaba",
    reviewCount: 114
  },
  {
    id: "40",
    name: "Linking Road",
    rating: 4.2,
    category: "Shopping",
    description: "A bustling street market in Bandra that's a blend of street stalls and branded stores. It's a go-to for trendy fashion, footwear, and accessories at affordable prices.",
    image: "images/shop2.jpg",
    address: "Bandra",
    reviewCount: 426
  },
  {
    id: "41",
    name: "Hill Road",
    rating: 4.1,
    category: "Shopping",
    description: "Another popular shopping street in Bandra, known for its mix of fashion boutiques, street vendors, and stores selling both trendy Western and traditional Indian wear.",
    image: "images/shop3.jpg",
    address: "Bandra",
    reviewCount: 568
  },
  {
    id: "42",
    name: "Chor Bazaar",
    rating: 4.0,
    category: "Shopping",
    description: "Mumbai's legendary 'Thieves Market,' a treasure trove for antique enthusiasts. It's the go-to place for unique vintage items, old furniture, and retro collectibles.",
    image: "images/shop4.jpg",
    address: "Mutton Street, Bhendi Bazaar",
    reviewCount: 712
  },
  {
    id: "43",
    name: "Inorbit Mall",
    rating: 4.3,
    category: "Shopping",
    description: "A well-established mall in the western suburbs, featuring a wide range of retail outlets, a multiplex cinema, and a variety of food and beverage options.",
    image: "images/shop5.jpg",
    address: "Malad",
    reviewCount: 129
  },
  {
    id: "44",
    name: "Zaveri Bazaar",
    rating: 4.5,
    category: "Shopping",
    description: "A historic and sprawling market that is the hub of Mumbai's jewelry trade. It's the best place to shop for gold, silver, diamonds, and precious gems.",
    image: "images/shop6.jpg",
    address: "Kalbadevi",
    reviewCount: 547
  },
  {
    id: "45",
    name: "Palladium",
    rating: 4.4,
    category: "Shopping",
    description: "The luxury wing of High Street Phoenix, this mall houses flagship stores of international designer brands, offering an exclusive and sophisticated shopping experience.",
    image: "images/shop7.jpg",
    address: "Lower Parel",
    reviewCount: 635
  },
  {
    id: "46",
    name: "High Street Phoenix",
    rating: 4.4,
    category: "Shopping",
    description: "A bustling retail and entertainment complex that combines a mall, a luxury zone (Palladium), and a mix of high-street brands, making it a complete lifestyle destination.",
    image: "images/shop8.jpg",
    address: "Lower Parel",
    reviewCount: 447
  },
  {
    id: "47",
    name: "Oberoi Mall",
    rating: 4.3,
    category: "Shopping",
    description: "A popular mall in Goregaon known for its curated mix of mid-range and premium brands, a large food court, and a cinema, making it a great family-friendly destination.",
    image: "images/shop9.jpg",
    address: "Goregaon East",
    reviewCount: 684


  },
  {
    id: "48",
    name: "R City Mall",
    rating: 4.4,
    category: "Shopping",
    description: "A massive and well-rounded mall that offers a wide selection of shopping, dining, and entertainment options, including a hypermarket and an indoor snow park.",
    image: "images/shop10.jpg",
    address: "Ghatkopar West",
    reviewCount: 357
=======
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
>>>>>>> d1d73a69d3b2a155467d6b0d87467c46164e2414
  }
];