// Hill Icon Services Data

export const roomsData = [
  {
    id: 1,
    name: "Deluxe Suite",
    description: "Spacious suite with panoramic mountain views",
    detailedDescription: "Experience luxury in our Deluxe Suite featuring floor-to-ceiling windows with breathtaking views of the Karakoram mountains. This spacious accommodation offers modern amenities while maintaining the authentic charm of the region.",
    price: {
      perNight: 15000,
      currency: "Rs",
      note: "Price per night"
    },
    amenities: [
      "Free WiFi",
      "Room Service",
      "Mountain View",
      "Air Conditioning",
      "Private Bathroom",
      "Mini Bar",
      "Flat Screen TV",
      "Balcony"
    ],
    image: "/src/assets/room-deluxe.jpg",
    gallery: [
      "/src/assets/room-deluxe.jpg",
      "/src/assets/room-delux-2.jpg",
      "/src/assets/double-bed-queen.jpg"
    ]
  },
  {
    id: 2,
    name: "Premium Room",
    description: "Comfortable room with modern amenities",
    detailedDescription: "Our Premium Room combines comfort with style, featuring contemporary furnishings and all essential amenities for a memorable stay in Skardu. Perfect for couples and solo travelers seeking quality accommodation.",
    price: {
      perNight: 12000,
      currency: "Rs",
      note: "Price per night"
    },
    amenities: [
      "Free WiFi",
      "Room Service",
      "Valley View",
      "Heating",
      "Private Bathroom",
      "Flat Screen TV",
      "Work Desk"
    ],
    image: "/src/assets/double-bed.jpg",
    gallery: [
      "/src/assets/double-bed.jpg",
      "/src/assets/guest.jpg"
    ]
  },
  {
    id: 3,
    name: "Family Suite",
    description: "Spacious accommodation perfect for families",
    detailedDescription: "Designed with families in mind, our Family Suite offers ample space and comfort for up to 6 guests. Features separate sleeping areas and a common living space with stunning mountain views.",
    price: {
      perNight: 20000,
      currency: "Rs",
      note: "Price per night"
    },
    amenities: [
      "Free WiFi",
      "Room Service",
      "Mountain View",
      "Air Conditioning",
      "Private Bathroom",
      "Kitchenette",
      "Flat Screen TV",
      "Separate Living Area",
      "Balcony"
    ],
    image: "/src/assets/guest-pc.jpeg",
    gallery: [
      "/src/assets/guest-pc.jpeg",
      "/src/assets/mess.jpg",
      "/src/assets/reciption.jpg"
    ]
  },
  {
    id: 4,
    name: "Mountain View Suite",
    description: "Spectacular suite with panoramic mountain vistas",
    detailedDescription: "Indulge in unparalleled luxury with our Mountain View Suite, featuring expansive windows showcasing the majestic Karakoram range. This premium accommodation offers the perfect blend of comfort and natural beauty.",
    price: {
      perNight: 18000,
      currency: "Rs",
      note: "Price per night"
    },
    amenities: [
      "Free WiFi",
      "24/7 Room Service", 
      "Panoramic Mountain View",
      "Air Conditioning",
      "Premium Bathroom",
      "Mini Bar",
      "Smart TV",
      "Private Balcony",
      "Seating Area"
    ],
    image: "/src/assets/view-from-top.jpg",
    gallery: [
      "/src/assets/view-from-top.jpg",
      "/src/assets/view-from-hill.jpg",
      "/src/assets/roof-view.jpg"
    ]
  },
  {
    id: 5,
    name: "Standard Room",
    description: "Comfortable and affordable accommodation",
    detailedDescription: "Perfect for budget-conscious travelers who don't want to compromise on quality. Our Standard Room offers all essential amenities in a cozy, well-appointed space with lovely valley views.",
    price: {
      perNight: 8000,
      currency: "Rs",
      note: "Price per night"
    },
    amenities: [
      "Free WiFi",
      "Room Service",
      "Valley View",
      "Heating",
      "Private Bathroom",
      "TV",
      "Work Desk",
      "Daily Housekeeping"
    ],
    image: "/src/assets/img-20220511-wa0015.jpg",
    gallery: [
      "/src/assets/img-20220511-wa0015.jpg",
      "/src/assets/guest.jpg"
    ]
  }
];

export const transportData = [
  {
    id: 1,
    name: "Premium Sedan",
    description: "Comfortable sedan for airport transfers and city travel",
    detailedDescription: "Our premium sedans are perfect for airport pickups, city tours, and comfortable travel on paved roads. Featuring air conditioning, comfortable seating, and professional drivers.",
    price: {
      daily: 8000,
      halfDay: 5000,
      currency: "Rs",
      note: "Airport transfer: Rs 3,000"
    },
    features: [
      "Air Conditioning",
      "Professional Driver",
      "GPS Navigation",
      "Comfortable Seating",
      "Luggage Space"
    ],
    image: "/src/assets/guest-pc.jpg",
    idealFor: "Airport transfers, city tours, business travel"
  },
  {
    id: 2,
    name: "Toyota Prado TZ",
    description: "Rugged SUV for valley tours and mountain terrain",
    detailedDescription: "Experience the rugged beauty of Skardu's valleys with our Toyota Prado TZ. Built for challenging terrain while maintaining comfort, perfect for adventure seekers and valley explorations.",
    price: {
      daily: 15000,
      halfDay: 9000,
      currency: "Rs",
      note: "Fuel and driver included"
    },
    features: [
      "4WD Capability",
      "High Ground Clearance",
      "Professional Driver",
      "Safety Equipment",
      "Spacious Interior",
      "Mountain Terrain Ready"
    ],
    image: "/src/assets/guest-pc.jpg",
    idealFor: "Valley tours, mountain terrain, adventure trips"
  },
  {
    id: 3,
    name: "Luxury Van",
    description: "Spacious van for group travel and family trips",
    detailedDescription: "Our luxury van accommodates larger groups comfortably, making it ideal for family trips, group tours, and corporate travel. Features modern amenities and ample luggage space.",
    price: {
      daily: 18000,
      halfDay: 12000,
      currency: "Rs",
      note: "Up to 12 passengers"
    },
    features: [
      "Seats up to 12 passengers",
      "Air Conditioning",
      "Professional Driver",
      "Ample Luggage Space",
      "Comfortable Seating",
      "Entertainment System"
    ],
    image: "/src/assets/guest-pc.jpg",
    idealFor: "Group travel, family trips, corporate transport"
  }
];

export const toursData = [
  {
    id: 1,
    name: "Deosai National Park Day Trip",
    description: "Explore the world's second-highest plateau",
    detailedDescription: "Journey to the breathtaking Deosai National Park, known as the 'Land of Giants'. Experience the world's second-highest plateau with its unique wildlife, stunning landscapes, and pristine natural beauty.",
    price: {
      perPerson: 12000,
      currency: "Rs",
      note: "Minimum 2 people, group discounts available"
    },
    inclusions: [
      "Round-trip transport",
      "Professional guide",
      "Packed lunch",
      "Entry permits",
      "Photography stops"
    ],
    duration: "Full Day (8-10 hours)",
    image: "/src/assets/view-from-hill.jpg",
    highlights: [
      "Deosai Plains",
      "Wildlife spotting",
      "Sheosar Lake",
      "Mountain photography"
    ]
  },
  {
    id: 2,
    name: "Shigar Valley Heritage Tour",
    description: "Discover the cultural heritage of Shigar Valley",
    detailedDescription: "Immerse yourself in the rich cultural heritage of Shigar Valley. Visit the historic Shigar Fort, explore traditional Balti architecture, and experience the local way of life in this picturesque valley.",
    price: {
      perPerson: 8500,
      currency: "Rs",
      note: "Includes lunch and entry fees"
    },
    inclusions: [
      "Round-trip transport",
      "Professional guide",
      "Fort entry tickets",
      "Traditional lunch",
      "Cultural experiences"
    ],
    duration: "Full Day (6-8 hours)",
    image: "/src/assets/trip-group.jpg",
    highlights: [
      "Shigar Fort",
      "Traditional architecture",
      "Local culture",
      "Apricot orchards"
    ]
  },
  {
    id: 3,
    name: "Skardu City & Lakes Tour",
    description: "Comprehensive tour of Skardu's main attractions",
    detailedDescription: "Explore the best of Skardu with visits to Shangrila Resort, Upper Kachura Lake, and Skardu Fort. This comprehensive tour showcases the natural beauty and historical significance of the region.",
    price: {
      perPerson: 10000,
      currency: "Rs",
      note: "All inclusive package"
    },
    inclusions: [
      "Round-trip transport",
      "Professional guide",
      "Lake boat ride",
      "Lunch at Shangrila",
      "Fort exploration"
    ],
    duration: "Full Day (7-9 hours)",
    image: "/src/assets/view-from-top.jpg",
    highlights: [
      "Shangrila Resort",
      "Upper Kachura Lake",
      "Skardu Fort",
      "Indus River views"
    ]
  },
  {
    id: 4,
    name: "Adventure Camp & Bonfire Experience",
    description: "Outdoor camping with traditional bonfire night",
    detailedDescription: "Experience the magic of Skardu under the stars with our adventure camping tour. Enjoy traditional bonfire activities, stargazing, local music, and authentic outdoor dining in the heart of nature.",
    price: {
      perPerson: 15000,
      currency: "Rs",
      note: "Includes camping gear and meals"
    },
    inclusions: [
      "Camping equipment",
      "Professional guide",
      "Bonfire setup",
      "Traditional dinner",
      "Breakfast",
      "Stargazing session"
    ],
    duration: "Overnight (2 Days / 1 Night)",
    image: "/src/assets/bone-fire.jpg",
    highlights: [
      "Bonfire under stars",
      "Traditional music",
      "Outdoor camping",
      "Local cuisine",
      "Stargazing",
      "Photography"
    ]
  }
];

export const contactInfo = {
  whatsapp: "+923001234567",
  phone: "+92 5815 123456",
  email: "info@hillicon.com",
  address: "Main Skardu Road, Skardu, Gilgit-Baltistan, Pakistan",
  socialMedia: {
    facebook: "https://facebook.com/hillicon",
    instagram: "https://instagram.com/hillicon",
    twitter: "https://twitter.com/hillicon"
  },
  aboutUs: "Hill Icon provides premium accommodation, transport, and tour services in the breathtaking Skardu region. We are committed to offering exceptional experiences while showcasing the natural beauty and cultural richness of Northern Pakistan."
};

export const diningInfo = {
  description: "Experience authentic Pakistani and traditional cuisine at Hill Icon. Our kitchen specializes in local Balti dishes, Pakistani favorites, and international options to cater to all tastes.",
  features: [
    "Traditional Pakistani cuisine",
    "Local Balti specialties",
    "International dishes",
    "Fresh local ingredients",
    "Vegetarian options available",
    "Room service available"
  ],
  note: "Complete menu and pricing available on-site. Special dietary requirements can be accommodated with advance notice."
};
