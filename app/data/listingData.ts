export interface PhotoItem {
  id: number;
  url: string;
  caption: string;
  room?: string;
}

export interface AmenityItem {
  name: string;
  category: string;
  iconName: string;
  available: boolean;
  description?: string;
}

export interface ReviewItem {
  id: string;
  author: {
    name: string;
    avatar: string;
    location: string;
    yearsOnAirbnb: string;
  };
  rating: number;
  date: string;
  stayDuration?: string;
  comment: string;
}

export const LISTING_DATA = {
  id: "1729476134054893611",
  title: "The Aurea | Luxury Boutique Stay | Infinity Pool",
  propertyType: "Entire rental unit",
  location: "Gurugram, India",
  neighborhood: "M3M Urbana Premium, Sector 67, Gurugram",
  rating: 5.0,
  reviewsCount: 20,
  isGuestFavorite: true,
  isSuperhost: true,
  capacity: {
    guests: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
  },
  price: {
    perNight: 5499,
    cleaningFee: 500,
    serviceFee: 780,
    taxes: 650,
    currency: "₹",
  },
  host: {
    name: "Lakshit",
    avatar: "https://a0.muscache.com/im/pictures/user/User/original/fa606afe-f266-4ac0-80cb-5407f23d39b4.jpeg",
    badge: "Superhost",
    isSuperhost: true,
    isVerified: true,
    reviewsCount: 116,
    rating: 4.96,
    monthsHosting: 7,
    yearsHosting: "7 months",
    responseRate: "100%",
    responseTime: "Responds within an hour",
    work: "IT Professional",
    generation: "Born in the 90s",
    coHosts: [
      {
        name: "Shivika",
        avatar: "https://a0.muscache.com/im/pictures/user/User/original/3d3ba782-a284-49a4-a340-5dc1de9718f2.jpeg",
      },
    ],
  },
  photos: [
    {
      id: 1,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/26f90a0b-929e-44a3-b7d2-739f2891c02c.jpeg",
      caption: "Living room with designer chandelier, comfortable sofa & panoramic skyline views",
      room: "Living room",
    },
    {
      id: 2,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/810da56f-7ce4-4b78-be65-4aee1be5c16c.jpeg",
      caption: "Bedroom suite featuring a plush king-size bed with ambient mood lighting",
      room: "Bedroom",
    },
    {
      id: 3,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/a0e7d1bc-dc1a-4994-9280-05ce598f712b.jpeg",
      caption: "Rooftop infinity swimming pool on the 18th floor overlooking city skyline",
      room: "Pool & Rooftop",
    },
    {
      id: 4,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/cad63bf7-aaeb-43b6-92c3-b0253eca42bf.jpeg",
      caption: "Modern breakfast bar & dining counter with bespoke taupe tones",
      room: "Kitchen & Dining",
    },
    {
      id: 5,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/fffd8e76-04a8-4cee-89df-b490d6e29b85.jpeg",
      caption: "Private balcony with lounge seating for evening golden hour",
      room: "Balcony",
    },
    {
      id: 6,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/395d0ebf-3114-4065-82f4-2d2f97fe26b0.jpeg",
      caption: "Artisan coffee bar setup and modern kitchenette appliances",
      room: "Kitchen",
    },
    {
      id: 7,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/b2b41a76-8806-47b9-a26b-cf58bc975609.jpeg",
      caption: "Pristine designer bathroom with rain shower and premium toiletries",
      room: "Bathroom",
    },
    {
      id: 8,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/91450715-eb23-4909-b45d-908d0278bcf6.jpeg",
      caption: "Spacious studio layout with dedicated ergonomic work desk",
      room: "Workspace",
    },
    {
      id: 9,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/57d18950-58b9-4c58-8aff-ffdc5b73673d.jpeg",
      caption: "Night view of the high-rise urban landscape from the 12th floor",
      room: "View",
    },
    {
      id: 10,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/8f529071-1be4-4df8-9170-6aac6def7021.jpeg",
      caption: "Modern fitness center & gym facilities on the 4th floor",
      room: "Gym",
    },
    {
      id: 11,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/99823004-17e3-43ee-ae83-e4879f5cadb6.jpeg",
      caption: "Full-length mirror and aesthetic dressing nook",
      room: "Bedroom",
    },
    {
      id: 12,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/7775ef82-b7b5-4c9a-b36e-8973cb1fe276.jpeg",
      caption: "L-shaped cozy sofa with premium boucle fabrics",
      room: "Living room",
    },
    {
      id: 13,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/a95d630e-a06d-432d-be65-d83c0abaecb1.jpeg",
      caption: "M3M Urbana building promenade and cafes",
      room: "Building Exterior",
    },
    {
      id: 14,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/34b2ffd4-7480-40e2-a66b-619daf5c506a.jpeg",
      caption: "Smart 55-inch TV with Netflix, Prime & OTT entertainment",
      room: "Living room",
    },
    {
      id: 15,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/6081fd68-42bb-44d7-bd20-ef17a9643a0d.jpeg",
      caption: "Balcony seating overlooking Aravalli foothills and Gurugram golf course",
      room: "Balcony",
    },
    {
      id: 16,
      url: "https://a0.muscache.com/im/pictures/hosting/Hosting-1729476134054893611/original/66bffd0f-7411-4083-9142-3d43869636be.jpeg",
      caption: "Tea, gourmet coffee & induction cooking essentials",
      room: "Kitchen",
    },
  ],
  highlights: [
    {
      icon: "Waves",
      title: "Dive right in",
      description: "This is one of the few places in the area with a pool.",
    },
    {
      icon: "Dumbbell",
      title: "Home gym",
      description: "The treadmill, stationary bike, yoga mat and free weights are ready for workouts.",
    },
    {
      icon: "Key",
      title: "Self check-in",
      description: "Check yourself in with the lockbox.",
    },
  ],
  overview: {
    description: `Welcome to The Aurea – A Luxury Boutique Stay🌿

The Aurea is a thoughtfully curated luxury boutique studio on the 12th floor, offering panoramic city views, timeless interiors, and modern comfort. Designed in soothing beige, taupe, and warm wood tones, it creates a calm, boutique-hotel ambiance with soft lighting, elegant furnishings, and carefully curated décor, ensuring a premium stay that feels both luxurious and welcoming.

Wake up to breathtaking skyline views as you sip your morning coffee at the breakfast counter overlooking floor-to-ceiling windows, unwind on the private balcony as the city lights come alive, or capture beautiful moments in the full-length mirror perfectly placed beside the window with the skyline as your backdrop.`,
    theSpace: [
      "Comfortable king-size bed with premium linens",
      "Stylish L-shaped sofa for relaxing",
      "55-inch 4K Smart TV with OTT apps",
      "Fully air-conditioned studio apartment",
      "High-speed 200 Mbps Wi-Fi",
      "Dedicated work/study desk with ergonomic chair",
      "Spacious wardrobe with hangers & iron",
      "Modern bathroom with rain shower & luxury toiletries",
      "Fully equipped kitchenette with Refrigerator, Induction cooktop, Electric kettle & cookware",
      "Beautiful private balcony with panoramic skyline views",
    ],
    guestAccess: [
      "Swimming Pool (18th Floor) — 7:00 AM – 10:00 AM & 5:00 PM – 9:00 PM (Closed Mondays)",
      "Gym & Fitness Center (4th Floor) — 7:00 AM – 9:00 PM",
      "Pool Table (4th Floor)",
      "On-site Fine Dining Restaurant (4th Floor, chargeable)",
      "Full exclusive private studio with self check-in lockbox",
    ],
  },
  sleepingArrangements: [
    {
      title: "Bedroom",
      description: "1 king bed",
      image: "/bedroom/1.avif",
    },
    {
      title: "Living room",
      description: "1 single bed, 1 sofa",
      image: "/living_room/1.avif",
    },
  ],
  previewAmenities: [
    { name: "Mountain view", icon: "Mountain" },
    { name: "City skyline view", icon: "Building2" },
    { name: "Kitchen", icon: "Utensils" },
    { name: "Wifi", icon: "Wifi" },
    { name: "Dedicated workspace", icon: "Laptop" },
    { name: "Free parking on premises", icon: "Car" },
    { name: "Pool", icon: "Waves" },
    { name: "Shared hot tub – available all year", icon: "Sparkles" },
    { name: "Pets allowed", icon: "PawPrint" },
    { name: "Exterior security cameras on property", icon: "ShieldCheck" },
  ],
  amenityGroups: [
    {
      title: "Scenic views",
      items: ["Pool view", "Mountain view", "City skyline view", "Golf course view"],
    },
    {
      title: "Bathroom",
      items: ["Hairdryer", "Cleaning products", "Shampoo", "Conditioner", "Body soap", "Bidet", "Hot water", "Shower gel"],
    },
    {
      title: "Bedroom and laundry",
      items: ["Essentials (Towels, bed sheets, soap, toilet paper)", "Hangers", "Bed linen", "Extra pillows and blankets", "Room-darkening blinds", "Iron", "Clothes storage"],
    },
    {
      title: "Entertainment",
      items: ["55-inch Smart TV", "Ethernet connection", "Sound system", "Exercise equipment (Treadmill, stationary bike, free weights, yoga mat)", "Pool table", "Books and reading material"],
    },
    {
      title: "Heating and cooling",
      items: ["Air conditioning", "Ceiling fan", "Heating"],
    },
    {
      title: "Home safety",
      items: ["Exterior security cameras (24x7 CCTV)", "Smoke alarm", "Carbon monoxide alarm", "Fire extinguisher", "First aid kit", "Noise decibel monitors"],
    },
    {
      title: "Kitchen and dining",
      items: ["Kitchen where guests can cook", "Fridge & Mini fridge", "Microwave", "Induction cooker", "Kettle", "Coffee maker & complimentary coffee", "Dishes, cutlery & wine glasses", "Dining table"],
    },
    {
      title: "Outdoor & facilities",
      items: ["Patio or private balcony", "Outdoor furniture", "Rooftop infinity pool", "Free parking on premises", "Lift/Elevator", "Private entrance"],
    },
  ],
  ratingCategories: [
    { label: "Cleanliness", score: 4.9 },
    { label: "Accuracy", score: 5.0 },
    { label: "Check-in", score: 5.0 },
    { label: "Communication", score: 5.0 },
    { label: "Location", score: 5.0 },
    { label: "Value", score: 5.0 },
  ],
  reviewTags: [
    { name: "Cleanliness", count: 7 },
    { name: "Hospitality", count: 9 },
    { name: "Comfort", count: 5 },
    { name: "Amenities", count: 4 },
    { name: "Indoor spaces", count: 4 },
    { name: "Accuracy", count: 3 },
    { name: "Location", count: 3 },
    { name: "View", count: 2 },
  ],
  reviews: [
    {
      id: "rev-1",
      author: {
        name: "Aarav Sharma",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80",
        location: "Mumbai, India",
        yearsOnAirbnb: "3 years on Airbnb",
      },
      rating: 5,
      date: "October 2026",
      stayDuration: "Stayed a few nights",
      comment:
        "The Aurea exceeded all our expectations! The 12th-floor balcony view at night is mesmerizing. Lakshit was an exceptional host—incredibly prompt with answers and seamless self check-in. The rooftop infinity pool on the 18th floor was the cherry on top. Will definitely be returning!",
    },
    {
      id: "rev-2",
      author: {
        name: "Pooja Hegde",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
        location: "Bengaluru, India",
        yearsOnAirbnb: "5 years on Airbnb",
      },
      rating: 5,
      date: "September 2026",
      stayDuration: "Stayed about a week",
      comment:
        "One of the cleanest and most beautifully designed Airbnbs I have stayed at in NCR. The warm taupe aesthetic and soft lighting give it an ultra-luxury boutique hotel feel. High-speed wifi made remote working very smooth.",
    },
    {
      id: "rev-3",
      author: {
        name: "Rohan Varma",
        avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&h=120&q=80",
        location: "New Delhi, India",
        yearsOnAirbnb: "2 years on Airbnb",
      },
      rating: 5,
      date: "August 2026",
      stayDuration: "Stayed 2 nights",
      comment:
        "Lakshit is truly a Superhost. The apartment is spotless, king bed is heavenly, and having M3M Urbana cafes and restaurants right downstairs is so convenient. 10/10 staycation experience.",
    },
    {
      id: "rev-4",
      author: {
        name: "Simran Kaur",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80",
        location: "Chandigarh, India",
        yearsOnAirbnb: "4 years on Airbnb",
      },
      rating: 5,
      date: "July 2026",
      stayDuration: "Stayed with a pet",
      comment:
        "Loved that it is pet friendly! My golden retriever and I had a peaceful stay. The security in the complex is top notch and the balcony view of the Aravalli hills in monsoon was breathtaking.",
    },
    {
      id: "rev-5",
      author: {
        name: "Kabir Mehta",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
        location: "Pune, India",
        yearsOnAirbnb: "1 year on Airbnb",
      },
      rating: 5,
      date: "June 2026",
      stayDuration: "Stayed a few nights",
      comment:
        "Every little detail has been curated with care—from the Marshall sound system to the artisan coffee mugs. Super easy check-in with the key lockbox. 100% recommended to anyone looking for a luxury stay.",
    },
    {
      id: "rev-6",
      author: {
        name: "Ananya Roy",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80",
        location: "Kolkata, India",
        yearsOnAirbnb: "3 years on Airbnb",
      },
      rating: 5,
      date: "May 2026",
      stayDuration: "Stayed for business",
      comment:
        "Ideal for business travel. Quiet, fast Wi-Fi, great work desk, and the gym on the 4th floor has everything you need. Lakshit checked in to make sure everything was comfortable.",
    },
  ],
  houseRules: [
    { title: "Check-in after 2:00 pm", icon: "Clock" },
    { title: "Checkout before 11:00 am", icon: "Clock" },
    { title: "4 guests maximum", icon: "Users" },
    { title: "Self check-in with lockbox", icon: "Key" },
    { title: "Pets allowed", icon: "PawPrint" },
    { title: "Commercial photography allowed", icon: "Camera" },
  ],
  additionalRules: [
    "Smoking is strictly prohibited inside the property. A ₹1,000 fine will be charged. You may smoke in the balcony.",
    "Any breakage of glassware, crockery, or kitchen items will incur charges between ₹500–₹1,000 depending on the damage.",
    "Damages to décor items, vases, or furnishings will be charged starting from ₹1,000.",
    "Please avoid sitting or placing heavy weight on the center table.",
    "Avoid using multiple heavy appliances together (Microwave, Induction, Kettle, etc.).",
    "Lost or stolen keys will incur a ₹2,000 replacement charge.",
    "Decoration is not allowed without prior permission from the host. Unauthorized decor may cost a fine of up to ₹2,000.",
  ],
  safetyDetails: [
    { title: "Exterior security cameras on property", description: "The property is under 24x7 CCTV Surveillance." },
    { title: "Carbon monoxide alarm installed", description: "" },
    { title: "Smoke alarm installed", description: "" },
    { title: "Noise decibel monitors on property", description: "" },
  ],
  cancellationPolicy: {
    title: "Free cancellation for 48 hours",
    description: "Cancel before check-in on 8 Oct for a partial refund. Review the Host’s full cancellation policy for details.",
  },
};
