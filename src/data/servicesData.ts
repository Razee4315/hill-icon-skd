// Hill Icon Services Data
import { images } from '../utils/images';

// Type definitions
interface Price {
  perNight?: number;
  daily?: number;
  halfDay?: number;
  perPerson?: number;
  currency: string;
  note: string;
}

interface Room {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  price: Price;
  amenities: string[];
  image: string;
  gallery: string[];
}

interface Vehicle {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  price: Price;
  features: string[];
  image: string;
  idealFor: string;
  airportTransfer?: number;
}

interface Tour {
  id: number;
  name: string;
  description: string;
  detailedDescription: string;
  price: Price;
  inclusions: string[];
  duration: string;
  image: string;
  highlights: string[];
  gallery?: string[];
}

interface ContactInfo {
  whatsapp: string;
  phone: string;
  email: string;
  address: string;
  socialMedia: {
    facebook: string;
    instagram: string;
  };
  aboutUs: string;
}

interface DiningInfo {
  description: string;
  features: string[];
  note: string;
}

export const roomsData: Room[] = [
  {
    id: 1,
    name: "Deluxe Room",
    description: "Spacious suite with panoramic mountain views",
    detailedDescription: "Experience luxury in our Deluxe Suite featuring floor-to-ceiling windows with breathtaking views of the Karakoram mountains. This spacious accommodation offers modern amenities while maintaining the authentic charm of the region.",
    price: {
      perNight: 7000,
      currency: "Rs",
      note: "All prices are per night. Free breakfast is available for up to 4 guests only. Additional guests will be charged separately for breakfast."
    },
    amenities: [
      "Free WiFi",
      "Free Parking",
      "Room Service",
      "Seating Area",
      "Private Bathroom",
      "Mountain View"
    ],
    image: images.deluxeRoom1,
    gallery: [
      images.deluxeRoom1,
      images.deluxeRoom2,
      images.deluxeRoom3
    ]
  },
  {
    id: 2,
    name: "Twin Bed Room",
    description: "Comfortable room with modern amenities",
    detailedDescription: "Our Premium Room combines comfort with style, featuring contemporary furnishings and all essential amenities for a memorable stay in Skardu. Perfect for couples and solo travelers seeking quality accommodation.",
    price: {
      perNight: 5000,
      currency: "Rs",
      note: "All prices are per night. Free breakfast is available for up to 4 guests only. Additional guests will be charged separately for breakfast."
    },
    amenities: [
      "Free WiFi",
      "Free Parking",
      "Room Service",
      "Seating Area",
      "Private Bathroom",
      "Mountain View"
    ],
    image: images.twinRoom1,
    gallery: [
      images.twinRoom1,
      images.twinRoom2,
      images.twinRoom3
    ]
  },
  {
    id: 3,
    name: "Family Room",
    description: "Spacious accommodation perfect for families",
    detailedDescription: "Designed with families in mind, our Family Suite offers ample space and comfort for up to 6 guests. Features separate sleeping areas and a common living space with stunning mountain views.",
    price: {
      perNight: 8000,
      currency: "Rs",
      note: "All prices are per night. Free breakfast is available for up to 4 guests only. Additional guests will be charged separately for breakfast."
    },
    amenities: [
      "Free WiFi",
      "Free Parking",
      "Room Service",
      "Seating Area",
      "Private Bathroom",
      "Mountain View"
    ],
    image: images.familyRoom1,
    gallery: [
      images.familyRoom1,
      images.familyBathroom
    ]
  },
  {
    id: 4,
    name: "Suite Room",
    description: "Spectacular suite with panoramic mountain vistas",
    detailedDescription: "Indulge in unparalleled luxury with our Mountain View Suite, featuring expansive windows showcasing the majestic Karakoram range. This premium accommodation offers the perfect blend of comfort and natural beauty.",
    price: {
      perNight: 9000,
      currency: "Rs",
      note: "All prices are per night. Free breakfast is available for up to 4 guests only. Additional guests will be charged separately for breakfast."
    },
    amenities: [
      "Free WiFi",
      "Free Parking",
      "Room Service",
      "Seating Area",
      "Private Bathroom",
      "Mountain View",
      "Sofa Sitting Area",
      "Garden View"
    ],
    image: images.suiteRoom1,
    gallery: [
      images.suiteRoom1,
      images.suiteRoom2,
      images.suiteRoom3,
      images.garden1
    ]
  }
];

export const transportData: Vehicle[] = [
  {
    id: 1,
    name: "Toyota Premio",
    description: "Comfortable sedan for city travel and airport pickups",
    detailedDescription: "The Toyota Premio offers a smooth, comfortable ride for city travel and airport transfers. Ideal for solo travelers, couples, or small families looking for comfort and reliability.",
    price: {
      daily: 6000,
      currency: "Rs",
      note: "Fuel at guest’s expense"
    },
    features: [
      "Air Conditioning",
      "Professional Driver",
      "Comfortable Seating",
      "Luggage Space"
    ],
    image: images.premioCar,
    airportTransfer: 2000,
    idealFor: "Airport transfers, city tours, business travel"
  },
  {
    id: 2,
    name: "Prado TZ (Up Model)",
    description: "Rugged SUV for valley tours and mountain terrain",
    detailedDescription: "Experience Skardu's valleys and mountain terrain with confidence in the Prado TZ (Up Model). Combining comfort with off-road capability, it's ideal for adventure and scenic trips.",
    price: {
      daily: 10000,
      currency: "Rs",
      note: "Fuel at guest’s expense"
    },
    features: [
      "4WD Capability",
      "High Ground Clearance",
      "Professional Driver",
      "Safety Equipment",
      "Spacious Interior",
      "Mountain Terrain Ready"
    ],
    image: images.pradoTZ,
    airportTransfer: 3000,
    idealFor: "Valley tours, mountain terrain, adventure trips"
  }
];

export const toursData: Tour[] = [
  {
    id: 1,
    name: "Deosai Tour - Prado TZ (Up Model)",
    description: "Explore Deosai with Prado TZ (Up Model)",
    detailedDescription: "Journey to the breathtaking Deosai National Park, known as the 'Land of Giants'. This package includes transport via Prado TZ (Up Model) for a comfortable and capable ride across the plateau.",
    price: {
      perPerson: 35000,
      currency: "Rs",
      note: "Vehicle: Prado TZ (Up Model)"
    },
    inclusions: [
      "Breakfast will be on us",
      "Jeep Rent",
      "Tour taxes",
      "Entry tickets"
    ],
    duration: "Full Day (8-10 hours)",
    image: images.deosai1,
    highlights: [
      "Deosai Plains",
      "Wildlife spotting",
      "Sheosar Lake",
      "Mountain photography"
    ]
  },
  {
    id: 2,
    name: "Deosai Tour - TZ (Down Model)",
    description: "Explore Deosai with TZ (Down Model)",
    detailedDescription: "Journey to the breathtaking Deosai National Park, known as the 'Land of Giants'. This package includes transport via TZ (Down Model) for a budget-friendly option while exploring the plateau.",
    price: {
      perPerson: 25000,
      currency: "Rs",
      note: "Vehicle: TZ (Down Model)"
    },
    inclusions: [
      "Breakfast will be on us",
      "Jeep Rent",
      "Tour taxes",
      "Entry tickets"
    ],
    duration: "Full Day (8-10 hours)",
    image: images.deosai2,
    highlights: [
      "Deosai Plains",
      "Wildlife spotting",
      "Sheosar Lake",
      "Mountain photography"
    ]
  },
  {
    id: 3,
    name: "Shigar & Nearby Highlights",
    description: "Visit Shigar Valley with stops at Blind Lake and the Cold Desert",
    detailedDescription: "Discover Shigar Valley with highlights including Shigar Fort, Blind Lake, and the mesmerizing Cold Desert (Katpana). Ideal for travelers who want to see the best of Shigar in a relaxed full-day experience.",
    price: {
      currency: "Rs",
      note: "Pricing changes in Skardu. Please contact us for current rates."
    },
    inclusions: [
      "Professional driver",
      "Comfortable vehicle",
      "Tour taxes",
      "Entry tickets (where applicable)"
    ],
    duration: "Full Day (6-8 hours)",
    image: images.shigarBlindLake,
    gallery: [
      images.shigarBlindLake,
      images.shigarColdDesert,
      images.shigarFort1,
      images.shigarFort2
    ],
    highlights: [
      "Shigar Fort",
      "Cold Desert (Katpana)",
      "Blind Lake"
    ]
  },
  
];

export const contactInfo: ContactInfo = {
  whatsapp: "+923487997495",
  phone: "+92 348 7997495",
  email: "zafarskd.007@gmail.com",
  address: "Olding Nangsoq Skardu, Gilgit-Baltistan, Pakistan",
  socialMedia: {
    facebook: "https://www.facebook.com/hillicon",
    instagram: "https://www.instagram.com/hill_icon_resort/"
  },
  aboutUs: "Hill Icon provides premium accommodation, transport, and tour services in the breathtaking Skardu region. We are committed to offering exceptional experiences while showcasing the natural beauty and cultural richness of Northern Pakistan."
};

export const diningInfo: DiningInfo = {
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
