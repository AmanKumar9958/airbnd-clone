export interface TourPhoto {
  url: string;
  caption?: string;
}

export interface PhotoTourSection {
  id: string;
  name: string;
  features: string;
  hasShowMore: boolean;
  thumbnail: string;
  photos: TourPhoto[];
  layoutType: "living_room" | "kitchen" | "bedroom" | "bathroom" | "gym" | "standard";
}

export const PHOTO_TOUR_SECTIONS: PhotoTourSection[] = [
  {
    id: "living-room",
    name: "Living room",
    features:
      "Single bed · Sofa · Air conditioning · Books and reading material · Heating · Sound system",
    hasShowMore: true,
    thumbnail: "/living_room/1.avif",
    layoutType: "living_room",
    photos: [
      { url: "/living_room/1.avif", caption: "Living room with bespoke chandelier & soft ambient lighting" },
      { url: "/living_room/2.avif", caption: "Living room overhead view looking down at coffee table & seating" },
      { url: "/living_room/3.avif", caption: "Full living room panoramic view from kitchen breakfast counter" },
      { url: "/living_room/4.avif", caption: "55-inch 4K Smart TV and wooden media console" },
      { url: "/living_room/5.avif", caption: "Cozy L-shaped seating with plush cushions & neutral accents" },
      { url: "/living_room/6.avif", caption: "Wall shelf with curated vases, greenery & full-length dressing mirror" },
      { url: "/living_room/7.avif", caption: "Ergonomic work desk setup and evening lighting" },
    ],
  },
  {
    id: "kitchen",
    name: "Full kitchen",
    features:
      "Kitchen · Refrigerator · Microwave · Cooking basics · Dishes and silverware · Stove · Oven",
    hasShowMore: true,
    thumbnail: "/kitchen/1.avif",
    layoutType: "kitchen",
    photos: [
      { url: "/kitchen/1.avif", caption: "Breakfast counter with banana plant, wine glasses, and city skyline view" },
      { url: "/kitchen/2.avif", caption: "Electric kettle, induction stove & gourmet coffee setup" },
      { url: "/kitchen/3.avif", caption: "Kitchen breakfast bar from upper angle" },
      { url: "/kitchen/4.avif", caption: "Modern upper cabinets and exhaust chimney" },
      { url: "/kitchen/5.avif", caption: "Refrigerator, microwave and kitchenware storage" },
    ],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    features:
      "King bed · Air conditioning · Balcony · Room darkening shades · Extra pillows and blankets",
    hasShowMore: true,
    thumbnail: "/bedroom/1.avif",
    layoutType: "bedroom",
    photos: [
      { url: "/bedroom/1.avif", caption: "Plush king-size bed with illuminated headboard lighting" },
      { url: "/bedroom/2.avif", caption: "Bedroom suite daytime angle with skyline window view" },
      { url: "/bedroom/3.avif", caption: "Spacious wardrobes, hangers and room lighting" },
      { url: "/bedroom/4.avif", caption: "Bedside mood lamp and luxury linens" },
      { url: "/bedroom/5.avif", caption: "Bedroom corner with mirror and ambient accents" },
    ],
  },
  {
    id: "bathroom",
    name: "Full bathroom",
    features:
      "Hair dryer · Shampoo · Hot water · Shower gel · Conditioner · Body soap · Cleaning products",
    hasShowMore: true,
    thumbnail: "/bathroom/1.avif",
    layoutType: "bathroom",
    photos: [
      { url: "/bathroom/1.avif", caption: "Designer rain shower with glass enclosure and black rail" },
      { url: "/bathroom/2.avif", caption: "Modern vanity basin and backlit mirror" },
      { url: "/bathroom/3.avif", caption: "Glass shower enclosure overview" },
      { url: "/bathroom/4.avif", caption: "Premium bath fittings and luxury toiletries" },
      { url: "/bathroom/5.avif", caption: "Toilet and rain shower fixture" },
    ],
  },
  {
    id: "gym",
    name: "Gym",
    features: "Free weights · Treadmill · Exercise bike · Yoga mat",
    hasShowMore: false,
    thumbnail: "/gym/1.avif",
    layoutType: "gym",
    photos: [
      { url: "/gym/1.avif", caption: "State-of-the-art fitness center on the 4th floor" },
      { url: "/gym/2.avif", caption: "Treadmills and cardio machines" },
      { url: "/gym/3.avif", caption: "Weight training bench and dumbbell rack" },
    ],
  },
  {
    id: "exterior",
    name: "Exterior",
    features: "Building exterior · City skyline view",
    hasShowMore: false,
    thumbnail: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/a95d630e-a06d-432d-be65-d83c0abaecb1.jpeg",
    layoutType: "standard",
    photos: [
      { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/a95d630e-a06d-432d-be65-d83c0abaecb1.jpeg", caption: "Iconic architectural glass tower of M3M Urbana Premium" },
      { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/290b2719-87a1-41e3-96ba-b91faafe1048.jpeg", caption: "Bustling ground-level retail promenade with cafes & dining" },
      { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/57d18950-58b9-4c58-8aff-ffdc5b73673d.jpeg", caption: "12th floor skyline view across Gurugram and Aravallis" },
    ],
  },
  {
    id: "pool",
    name: "Pool",
    features: "Rooftop infinity pool · 18th floor · City view · Open all year",
    hasShowMore: false,
    thumbnail: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/a0e7d1bc-dc1a-4994-9280-05ce598f712b.jpeg",
    layoutType: "standard",
    photos: [
      { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/a0e7d1bc-dc1a-4994-9280-05ce598f712b.jpeg", caption: "18th floor rooftop infinity pool overlooking city skyline" },
      { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/8dd29938-2a09-4e57-a0f2-3e9e3680a109.jpeg", caption: "Poolside loungers and sunset relaxation deck" },
    ],
  },
  {
    id: "additional-photos",
    name: "Additional photos",
    features: "Building lobby · Balcony seating · Skyline views",
    hasShowMore: false,
    thumbnail: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/c597c08d-b589-44e8-bdea-1257b391536f.jpeg",
    layoutType: "standard",
    photos: [
      { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/c597c08d-b589-44e8-bdea-1257b391536f.jpeg", caption: "Grand double-height lobby with emerald green velvet seating and gold accents" },
      { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/6081fd68-42bb-44d7-bd20-ef17a9643a0d.jpeg", caption: "Private balcony with round wicker chairs and evening wine glasses" },
      { url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/14a2a1aa-9a84-4629-9f05-39a7da021556.jpeg", caption: "Building lobby reception and high-speed elevators" },
    ],
  },
];
