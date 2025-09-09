
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
    description: "A pioneer in India's specialty coffee scene, known for freshly roasted, single-origin coffees. Multiple locations offer a modern, industrial vibe perfect for working or relaxing. They also sell coffee beans and brewing equipment.",
    image: "images/coffee-shop.jpg",
    address: "Multiple locations, including Bandra West, Mahalaxmi, and Kurla",
    reviewCount: 112
  },
  {
    id: "2", 
    name: "The Bombay Canteen", 
    rating: 4.8, 
    category: "Restaurant",
    description: "A trendy restaurant and bar celebrating the regional diversity of Indian cuisine with a modern twist. The ambiance is reminiscent of a 1960s Indian canteen, making it a vibrant and popular spot for both food and cocktails.",
    image: "images/restaurant.jpg", 
    address: "Kamala Mills, Lower Parel",
    reviewCount: 290
  },
  {
    id: "3",
    name: "Nitrro Bespoke Fitness",
    rating: 4.8,
    category: "Fitness",
    description: "A sprawling, luxurious fitness center with state-of-the-art equipment and a wide range of classes, including functional training, HIIT, and hot yoga. Known for its energetic atmosphere and live DJ.",
    image: "images/gym.jpg",
    address: "Breach Candy, South Mumbai",
    reviewCount: 490
  },
  {
    id: "4", 
    name: "Phoenix Palladium",
    rating: 4.4,
    category: "Shopping",
    description: "Mumbai's premier luxury shopping destination, featuring a wide array of international high-fashion brands, designer boutiques, and upscale dining options.",
    image: "images/shop.jpg",
    address: "Lower Parel",
    reviewCount: 140
  },
  {
    id: "5",
    name: "Subko Specialty Coffee Roasters & Bakehouse",
    rating: 4.8,
    category: "Coffee Shop", 
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
  },
  {
    id: "7",
    name: "The Space",
    rating: 4.9,
    category: "Fitness",
    description: "A premium functional training studio that offers group classes and personal training. It is known for its diverse programs, including strength and conditioning, calisthenics, and Pilates.",
    image: "images/gym1.jpg",
    address: "Juhu",
    reviewCount: 720
  },
  {
    id: "8",
    name: "Phoenix Marketcity",
    rating: 4.4,
    category: "Shopping",
    description: "One of the largest malls in India, this expansive shopping center offers a massive selection of national and international brands, a large food court, and various entertainment options.",
    image: "images/shop1.jpg",
    address: "Kurla",
    reviewCount: 254
  },
  // Additional Coffee Shops
  {
    id: "9",
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
  },
  // Additional Restaurants
  {
    id: "19",
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
  },
  // Additional Fitness Centers
  {
    id: "29",
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
  },
  // Additional Shopping
  {
    id: "39",
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
  }
];