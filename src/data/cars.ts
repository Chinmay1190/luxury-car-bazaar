
export interface Car {
  id: string;
  name: string;
  brand: string;
  category: 'sports' | 'luxury' | 'supercar' | 'hypercar' | 'classic';
  price: number; // Price in INR
  image: string;
  description: string;
  specs: {
    engine: string;
    power: string;
    acceleration: string;
    topSpeed: string;
    transmission: string;
  };
  featured?: boolean;
  stock: number;
}

export const cars: Car[] = [
  {
    id: "1",
    name: "Aventador SVJ",
    brand: "Lamborghini",
    category: "supercar",
    price: 85000000, // 8.5 crore INR
    image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=2070&auto=format&fit=crop",
    description: "The pinnacle of Lamborghini V12 technology, the Aventador SVJ is the most powerful naturally aspirated production car from Sant'Agata Bolognese.",
    specs: {
      engine: "6.5L V12",
      power: "770 HP",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "350 km/h",
      transmission: "7-speed ISR"
    },
    featured: true,
    stock: 2
  },
  {
    id: "2",
    name: "Phantom VIII",
    brand: "Rolls-Royce",
    category: "luxury",
    price: 95000000, // 9.5 crore INR
    image: "https://images.unsplash.com/photo-1604705528621-83f1f9540be2?q=80&w=2071&auto=format&fit=crop",
    description: "The Phantom is the pinnacle of luxury, handcrafted to perfection and designed to make a commanding presence wherever it goes.",
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      acceleration: "0-100 km/h in 5.3s",
      topSpeed: "250 km/h (limited)",
      transmission: "8-speed automatic"
    },
    featured: true,
    stock: 1
  },
  {
    id: "3",
    name: "SF90 Stradale",
    brand: "Ferrari",
    category: "hypercar",
    price: 75000000, // 7.5 crore INR
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=2070&auto=format&fit=crop",
    description: "The SF90 Stradale is the most powerful Ferrari ever produced, combining a V8 engine with three electric motors for unprecedented performance.",
    specs: {
      engine: "4.0L V8 + 3 Electric Motors",
      power: "986 HP Combined",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "340 km/h",
      transmission: "8-speed dual-clutch"
    },
    featured: true,
    stock: 3
  },
  {
    id: "4",
    name: "Chiron Super Sport",
    brand: "Bugatti",
    category: "hypercar",
    price: 250000000, // 25 crore INR
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=2070&auto=format&fit=crop",
    description: "The culmination of engineering excellence, the Chiron Super Sport is designed to break boundaries of speed and performance.",
    specs: {
      engine: "8.0L W16 Quad-Turbo",
      power: "1600 HP",
      acceleration: "0-100 km/h in 2.4s",
      topSpeed: "440+ km/h",
      transmission: "7-speed dual-clutch"
    },
    featured: true,
    stock: 1
  },
  {
    id: "5",
    name: "911 GT3 RS",
    brand: "Porsche",
    category: "sports",
    price: 38000000, // 3.8 crore INR
    image: "https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=2071&auto=format&fit=crop",
    description: "The 911 GT3 RS is the most track-focused 911, delivering exceptional performance and precision handling on road and circuit.",
    specs: {
      engine: "4.0L Flat-6",
      power: "525 HP",
      acceleration: "0-100 km/h in 3.2s",
      topSpeed: "296 km/h",
      transmission: "7-speed PDK"
    },
    stock: 4
  },
  {
    id: "6",
    name: "Huracan STO",
    brand: "Lamborghini",
    category: "supercar",
    price: 55000000, // 5.5 crore INR
    image: "https://images.unsplash.com/photo-1632441730372-d8607ef679f2?q=80&w=2071&auto=format&fit=crop",
    description: "The Super Trofeo Omologata is a race car for the road, featuring advanced aerodynamics and lightweight construction.",
    specs: {
      engine: "5.2L V10",
      power: "640 HP",
      acceleration: "0-100 km/h in 3.0s",
      topSpeed: "310 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 2
  },
  {
    id: "7",
    name: "Continental GT Speed",
    brand: "Bentley",
    category: "luxury",
    price: 40000000, // 4 crore INR
    image: "https://images.unsplash.com/photo-1619551734325-81aaf323686c?q=80&w=2112&auto=format&fit=crop",
    description: "The Continental GT Speed represents the pinnacle of Bentley's grand touring excellence, combining luxury with exhilarating performance.",
    specs: {
      engine: "6.0L W12 Twin-Turbo",
      power: "650 HP",
      acceleration: "0-100 km/h in 3.6s",
      topSpeed: "335 km/h",
      transmission: "8-speed dual-clutch"
    },
    stock: 3
  },
  {
    id: "8",
    name: "DBS Superleggera",
    brand: "Aston Martin",
    category: "supercar",
    price: 48000000, // 4.8 crore INR
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop",
    description: "The flagship Aston Martin combines the elegance of a grand tourer with the raw power and agility of a supercar.",
    specs: {
      engine: "5.2L V12 Twin-Turbo",
      power: "715 HP",
      acceleration: "0-100 km/h in 3.4s",
      topSpeed: "340 km/h",
      transmission: "8-speed automatic"
    },
    stock: 2
  },
  {
    id: "9",
    name: "Ghost",
    brand: "Rolls-Royce",
    category: "luxury",
    price: 73000000, // 7.3 crore INR
    image: "https://images.unsplash.com/photo-1621155805140-77b8ff4f8468?q=80&w=2072&auto=format&fit=crop",
    description: "Engineered for serenity, the Ghost offers a perfect balance of comfort and dynamic ability in a sophisticated package.",
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      acceleration: "0-100 km/h in 4.8s",
      topSpeed: "250 km/h (limited)",
      transmission: "8-speed automatic"
    },
    stock: 2
  },
  {
    id: "10",
    name: "Roma",
    brand: "Ferrari",
    category: "sports",
    price: 38000000, // 3.8 crore INR
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?q=80&w=2035&auto=format&fit=crop",
    description: "The Roma combines timeless design with modern technology to create a grand touring Ferrari of exceptional capability.",
    specs: {
      engine: "3.9L V8 Twin-Turbo",
      power: "612 HP",
      acceleration: "0-100 km/h in 3.4s",
      topSpeed: "320 km/h",
      transmission: "8-speed dual-clutch"
    },
    stock: 4
  },
  {
    id: "11",
    name: "AMG GT Black Series",
    brand: "Mercedes-Benz",
    category: "supercar",
    price: 53000000, // 5.3 crore INR
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=2070&auto=format&fit=crop",
    description: "The most hardcore version of the AMG GT, with racing technology and aerodynamics derived from Mercedes' motorsport experience.",
    specs: {
      engine: "4.0L V8 Bi-Turbo",
      power: "730 HP",
      acceleration: "0-100 km/h in 3.2s",
      topSpeed: "325 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 2
  },
  {
    id: "12",
    name: "R8 V10 Performance",
    brand: "Audi",
    category: "supercar",
    price: 24800000, // 2.48 crore INR
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
    description: "The R8 combines everyday usability with supercar performance, featuring a naturally-aspirated V10 engine shared with Lamborghini.",
    specs: {
      engine: "5.2L V10",
      power: "611 HP",
      acceleration: "0-100 km/h in 3.1s",
      topSpeed: "331 km/h",
      transmission: "7-speed S-tronic"
    },
    stock: 3
  },
  {
    id: "13",
    name: "DB11 AMR",
    brand: "Aston Martin",
    category: "luxury",
    price: 38000000, // 3.8 crore INR
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    description: "The DB11 AMR is the flagship of the DB11 range, combining the elegance of a GT with the performance of a sports car.",
    specs: {
      engine: "5.2L V12 Twin-Turbo",
      power: "630 HP",
      acceleration: "0-100 km/h in 3.7s",
      topSpeed: "334 km/h",
      transmission: "8-speed automatic"
    },
    stock: 3
  },
  {
    id: "14",
    name: "Urus",
    brand: "Lamborghini",
    category: "luxury",
    price: 38000000, // 3.8 crore INR
    image: "https://images.unsplash.com/photo-1660901529408-9cf1c9e11a     64?q=80&w=2069&auto=format&fit=crop",
    description: "The world's first Super SUV combining the soul of a supercar with the functionality of an SUV.",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "650 HP",
      acceleration: "0-100 km/h in 3.6s",
      topSpeed: "305 km/h",
      transmission: "8-speed automatic"
    },
    stock: 5
  },
  {
    id: "15",
    name: "McLaren 720S",
    brand: "McLaren",
    category: "supercar",
    price: 49000000, // 4.9 crore INR
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2064&auto=format&fit=crop",
    description: "The 720S offers extreme performance with innovative aerodynamics and a lightweight carbon fiber structure.",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "710 HP",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "341 km/h",
      transmission: "7-speed SSG"
    },
    stock: 2
  },
  {
    id: "16",
    name: "Veyron",
    brand: "Bugatti",
    category: "hypercar",
    price: 140000000, // 14 crore INR
    image: "https://images.unsplash.com/photo-1566473965997-3de9c817e938?q=80&w=2070&auto=format&fit=crop",
    description: "The legendary Bugatti that redefined what's possible in a production car, offering unmatched speed and engineering excellence.",
    specs: {
      engine: "8.0L W16 Quad-Turbo",
      power: "1001 HP",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "407 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 1
  },
  {
    id: "17",
    name: "Valkyrie",
    brand: "Aston Martin",
    category: "hypercar",
    price: 320000000, // 32 crore INR
    image: "https://images.unsplash.com/photo-1647339660969-24d40768d9f3?q=80&w=2071&auto=format&fit=crop",
    description: "A revolutionary hypercar created in collaboration with Red Bull Racing, featuring Formula 1 technology for the road.",
    specs: {
      engine: "6.5L V12 + Electric Motor",
      power: "1160 HP Combined",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "350+ km/h",
      transmission: "7-speed automated manual"
    },
    featured: true,
    stock: 1
  },
  {
    id: "18",
    name: "Gemera",
    brand: "Koenigsegg",
    category: "hypercar",
    price: 350000000, // 35 crore INR
    image: "https://images.unsplash.com/photo-1633931494958-f00fe2a1ce55?q=80&w=2071&auto=format&fit=crop",
    description: "The world's first Mega-GT and Koenigsegg's first four-seater, combining extreme performance with family practicality.",
    specs: {
      engine: "2.0L 3-Cylinder + 3 Electric Motors",
      power: "1700 HP Combined",
      acceleration: "0-100 km/h in 1.9s",
      topSpeed: "400 km/h",
      transmission: "Single-speed direct drive"
    },
    stock: 1
  },
  // More products to reach 48+ total
  {
    id: "19",
    name: "Sian FKP 37",
    brand: "Lamborghini",
    category: "hypercar",
    price: 280000000, // 28 crore INR
    image: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?q=80&w=2062&auto=format&fit=crop",
    description: "Lamborghini's first hybrid production car, combining a V12 engine with supercapacitor technology.",
    specs: {
      engine: "6.5L V12 + Electric Motor",
      power: "819 HP Combined",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "350 km/h",
      transmission: "7-speed ISR"
    },
    stock: 1
  },
  {
    id: "20",
    name: "911 Turbo S",
    brand: "Porsche",
    category: "sports",
    price: 32000000, // 3.2 crore INR
    image: "https://images.unsplash.com/photo-1584060622420-0673aad46076?q=80&w=2067&auto=format&fit=crop",
    description: "The ultimate everyday supercar, combining breathtaking performance with daily usability.",
    specs: {
      engine: "3.8L Flat-6 Twin-Turbo",
      power: "650 HP",
      acceleration: "0-100 km/h in 2.7s",
      topSpeed: "330 km/h",
      transmission: "8-speed PDK"
    },
    stock: 4
  },
  {
    id: "21",
    name: "Huayra",
    brand: "Pagani",
    category: "hypercar",
    price: 280000000, // 28 crore INR
    image: "https://images.unsplash.com/photo-1615537571353-1fe11d396eb9?q=80&w=2069&auto=format&fit=crop",
    description: "A masterpiece of art and science, the Huayra combines Italian craftsmanship with cutting-edge aerodynamic technology.",
    specs: {
      engine: "6.0L V12 Twin-Turbo",
      power: "730 HP",
      acceleration: "0-100 km/h in 3.0s",
      topSpeed: "383 km/h",
      transmission: "7-speed sequential"
    },
    stock: 1
  },
  {
    id: "22",
    name: "Cullinan",
    brand: "Rolls-Royce",
    category: "luxury",
    price: 69500000, // 6.95 crore INR
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop",
    description: "The first all-terrain SUV from Rolls-Royce, offering luxury without compromise in any environment.",
    specs: {
      engine: "6.75L V12 Twin-Turbo",
      power: "563 HP",
      acceleration: "0-100 km/h in 5.2s",
      topSpeed: "250 km/h (limited)",
      transmission: "8-speed automatic"
    },
    stock: 3
  },
  {
    id: "23",
    name: "488 Pista",
    brand: "Ferrari",
    category: "supercar",
    price: 57000000, // 5.7 crore INR
    image: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?q=80&w=2074&auto=format&fit=crop",
    description: "The track-focused version of the 488, featuring technologies developed from Ferrari's racing experience.",
    specs: {
      engine: "3.9L V8 Twin-Turbo",
      power: "711 HP",
      acceleration: "0-100 km/h in 2.85s",
      topSpeed: "340 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 2
  },
  {
    id: "24",
    name: "NSX",
    brand: "Honda",
    category: "supercar",
    price: 23000000, // 2.3 crore INR
    image: "https://images.unsplash.com/photo-1600712242805-5f78671b24da?q=80&w=1470&auto=format&fit=crop",
    description: "Japan's hybrid supercar combines three electric motors with a twin-turbo V6 for precision performance.",
    specs: {
      engine: "3.5L V6 Twin-Turbo + 3 Electric Motors",
      power: "573 HP Combined",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "307 km/h",
      transmission: "9-speed dual-clutch"
    },
    stock: 3
  },
  // Add 24 more cars to reach 48+ total
  {
    id: "25",
    name: "LC 500",
    brand: "Lexus",
    category: "luxury",
    price: 22000000, // 2.2 crore INR
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?q=80&w=2124&auto=format&fit=crop",
    description: "A grand touring coupe that combines stunning design with an exhilarating naturally-aspirated V8 engine.",
    specs: {
      engine: "5.0L V8",
      power: "471 HP",
      acceleration: "0-100 km/h in 4.4s",
      topSpeed: "270 km/h",
      transmission: "10-speed automatic"
    },
    stock: 3
  },
  {
    id: "26",
    name: "M8 Competition",
    brand: "BMW",
    category: "sports",
    price: 25000000, // 2.5 crore INR
    image: "https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=2078&auto=format&fit=crop",
    description: "BMW's flagship performance coupe, offering exceptional power and luxury in a sophisticated package.",
    specs: {
      engine: "4.4L V8 Twin-Turbo",
      power: "625 HP",
      acceleration: "0-100 km/h in 3.2s",
      topSpeed: "305 km/h",
      transmission: "8-speed automatic"
    },
    stock: 3
  },
  {
    id: "27",
    name: "GT",
    brand: "Ford",
    category: "supercar",
    price: 38000000, // 3.8 crore INR
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    description: "A modern interpretation of the legendary GT40, combining heritage with cutting-edge engineering.",
    specs: {
      engine: "3.5L V6 Twin-Turbo",
      power: "660 HP",
      acceleration: "0-100 km/h in 3.0s",
      topSpeed: "348 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 1
  },
  {
    id: "28",
    name: "Regera",
    brand: "Koenigsegg",
    category: "hypercar",
    price: 330000000, // 33 crore INR
    image: "https://images.unsplash.com/flagged/photo-1565151443830-5614f3e4863f?q=80&w=2070&auto=format&fit=crop",
    description: "A hybrid hypercar that uses Koenigsegg Direct Drive technology to eliminate the need for a traditional transmission.",
    specs: {
      engine: "5.0L V8 Twin-Turbo + 3 Electric Motors",
      power: "1500 HP Combined",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "410 km/h",
      transmission: "Koenigsegg Direct Drive"
    },
    stock: 1
  },
  {
    id: "29",
    name: "Taycan Turbo S",
    brand: "Porsche",
    category: "sports",
    price: 23000000, // 2.3 crore INR
    image: "https://images.unsplash.com/photo-1626861540559-0007d4aa9b9a?q=80&w=2070&auto=format&fit=crop",
    description: "Porsche's first all-electric sports car, combining zero emissions with the performance expected from the brand.",
    specs: {
      engine: "Dual Electric Motors",
      power: "750 HP",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "260 km/h",
      transmission: "2-speed automatic"
    },
    stock: 4
  },
  {
    id: "30",
    name: "Speedtail",
    brand: "McLaren",
    category: "hypercar",
    price: 245000000, // 24.5 crore INR
    image: "https://images.unsplash.com/photo-1646743927775-1f38134210e5?q=80&w=2070&auto=format&fit=crop",
    description: "McLaren's first Hyper-GT, featuring a three-seat layout inspired by the legendary F1 and a hybrid powertrain.",
    specs: {
      engine: "4.0L V8 Twin-Turbo + Electric Motor",
      power: "1055 HP Combined",
      acceleration: "0-300 km/h in 12.8s",
      topSpeed: "403 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 1
  },
  {
    id: "31",
    name: "Vantage",
    brand: "Aston Martin",
    category: "sports",
    price: 30000000, // 3 crore INR
    image: "https://images.unsplash.com/photo-1592827095305-68f21edefb82?q=80&w=2070&auto=format&fit=crop",
    description: "The entry-level Aston Martin combines everyday usability with the excitement and emotion of a sports car.",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "510 HP",
      acceleration: "0-100 km/h in 3.6s",
      topSpeed: "314 km/h",
      transmission: "8-speed automatic"
    },
    stock: 3
  },
  {
    id: "32",
    name: "Maybach S-Class",
    brand: "Mercedes-Benz",
    category: "luxury",
    price: 35000000, // 3.5 crore INR
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    description: "The ultimate expression of luxury from Mercedes-Benz, offering unparalleled comfort and refinement.",
    specs: {
      engine: "6.0L V12 Twin-Turbo",
      power: "621 HP",
      acceleration: "0-100 km/h in 4.5s",
      topSpeed: "250 km/h (limited)",
      transmission: "9-speed automatic"
    },
    stock: 2
  },
  {
    id: "33",
    name: "LaFerrari",
    brand: "Ferrari",
    category: "hypercar",
    price: 370000000, // 37 crore INR
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2071&auto=format&fit=crop",
    description: "Ferrari's first hybrid hypercar combines a naturally-aspirated V12 with an electric motor for extraordinary performance.",
    specs: {
      engine: "6.3L V12 + Electric Motor",
      power: "950 HP Combined",
      acceleration: "0-100 km/h in 2.4s",
      topSpeed: "350+ km/h",
      transmission: "7-speed dual-clutch"
    },
    featured: true,
    stock: 1
  },
  {
    id: "34",
    name: "G 63 AMG",
    brand: "Mercedes-Benz",
    category: "luxury",
    price: 27500000, // 2.75 crore INR
    image: "https://images.unsplash.com/photo-1520031441872-265e4ff70366?q=80&w=2070&auto=format&fit=crop",
    description: "The iconic G-Wagen in its most powerful form, combining legendary off-road capability with AMG performance.",
    specs: {
      engine: "4.0L V8 Bi-Turbo",
      power: "577 HP",
      acceleration: "0-100 km/h in 4.5s",
      topSpeed: "220 km/h (limited)",
      transmission: "9-speed automatic"
    },
    stock: 3
  },
  {
    id: "35",
    name: "Vanquish",
    brand: "Aston Martin",
    category: "luxury",
    price: 47000000, // 4.7 crore INR
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2072&auto=format&fit=crop",
    description: "The grand tourer that combines traditional Aston Martin values with cutting-edge design and technology.",
    specs: {
      engine: "5.9L V12",
      power: "580 HP",
      acceleration: "0-100 km/h in 3.5s",
      topSpeed: "324 km/h",
      transmission: "8-speed automatic"
    },
    stock: 2
  },
  {
    id: "36",
    name: "Dawn",
    brand: "Rolls-Royce",
    category: "luxury",
    price: 70000000, // 7 crore INR
    image: "https://images.unsplash.com/photo-1622959284785-b62e4a6ecc36?q=80&w=2070&auto=format&fit=crop",
    description: "The most social of Rolls-Royce motor cars, offering an open-top driving experience with uncompromised luxury.",
    specs: {
      engine: "6.6L V12 Twin-Turbo",
      power: "563 HP",
      acceleration: "0-100 km/h in 4.9s",
      topSpeed: "250 km/h (limited)",
      transmission: "8-speed automatic"
    },
    stock: 2
  },
  {
    id: "37",
    name: "812 Superfast",
    brand: "Ferrari",
    category: "supercar",
    price: 52000000, // 5.2 crore INR
    image: "https://images.unsplash.com/photo-1577495508048-b105a0de1f05?q=80&w=2063&auto=format&fit=crop",
    description: "Ferrari's most powerful naturally aspirated production car ever, offering extreme performance with grand touring comfort.",
    specs: {
      engine: "6.5L V12",
      power: "789 HP",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "340 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 2
  },
  {
    id: "38",
    name: "GTC4Lusso",
    brand: "Ferrari",
    category: "luxury",
    price: 47000000, // 4.7 crore INR
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=2070&auto=format&fit=crop",
    description: "A four-seater Ferrari with all-wheel drive, combining practicality with the performance expected of the prancing horse.",
    specs: {
      engine: "6.3L V12",
      power: "680 HP",
      acceleration: "0-100 km/h in 3.4s",
      topSpeed: "335 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 2
  },
  {
    id: "39",
    name: "Centenario",
    brand: "Lamborghini",
    category: "hypercar",
    price: 400000000, // 40 crore INR
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2071&auto=format&fit=crop",
    description: "Created to celebrate Ferruccio Lamborghini's 100th birthday, featuring the most powerful V12 engine ever produced by the brand.",
    specs: {
      engine: "6.5L V12",
      power: "770 HP",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "350 km/h",
      transmission: "7-speed ISR"
    },
    stock: 1
  },
  {
    id: "40",
    name: "F8 Tributo",
    brand: "Ferrari",
    category: "supercar",
    price: 49000000, // 4.9 crore INR
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop",
    description: "A tribute to Ferrari's most powerful V8 ever, combining track-derived performance with everyday usability.",
    specs: {
      engine: "3.9L V8 Twin-Turbo",
      power: "710 HP",
      acceleration: "0-100 km/h in 2.9s",
      topSpeed: "340 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 2
  },
  {
    id: "41",
    name: "Wraith",
    brand: "Rolls-Royce",
    category: "luxury",
    price: 68000000, // 6.8 crore INR
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    description: "The most powerful Rolls-Royce ever made, combining luxury with dynamic performance.",
    specs: {
      engine: "6.6L V12 Twin-Turbo",
      power: "624 HP",
      acceleration: "0-100 km/h in 4.4s",
      topSpeed: "250 km/h (limited)",
      transmission: "8-speed automatic"
    },
    stock: 2
  },
  {
    id: "42",
    name: "570S",
    brand: "McLaren",
    category: "supercar",
    price: 32000000, // 3.2 crore INR
    image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=2071&auto=format&fit=crop",
    description: "McLaren's entry-level supercar that brings the brand's racing technology to a wider audience.",
    specs: {
      engine: "3.8L V8 Twin-Turbo",
      power: "562 HP",
      acceleration: "0-100 km/h in 3.2s",
      topSpeed: "328 km/h",
      transmission: "7-speed SSG"
    },
    stock: 3
  },
  {
    id: "43",
    name: "Agera RS",
    brand: "Koenigsegg",
    category: "hypercar",
    price: 350000000, // 35 crore INR
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
    description: "A record-breaking hypercar that once held the title of the world's fastest production car.",
    specs: {
      engine: "5.0L V8 Twin-Turbo",
      power: "1160 HP",
      acceleration: "0-100 km/h in 2.8s",
      topSpeed: "447 km/h",
      transmission: "7-speed dual-clutch"
    },
    stock: 1
  },
  {
    id: "44",
    name: "Flying Spur",
    brand: "Bentley",
    category: "luxury",
    price: 34000000, // 3.4 crore INR
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2064&auto=format&fit=crop",
    description: "A luxurious four-door grand tourer combining traditional Bentley craftsmanship with modern technology.",
    specs: {
      engine: "6.0L W12 Twin-Turbo",
      power: "626 HP",
      acceleration: "0-100 km/h in 3.8s",
      topSpeed: "333 km/h",
      transmission: "8-speed dual-clutch"
    },
    stock: 3
  },
  {
    id: "45",
    name: "918 Spyder",
    brand: "Porsche",
    category: "hypercar",
    price: 230000000, // 23 crore INR
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2074&auto=format&fit=crop",
    description: "Porsche's hybrid hypercar that combines cutting-edge technology with emotional design and driving dynamics.",
    specs: {
      engine: "4.6L V8 + 2 Electric Motors",
      power: "887 HP Combined",
      acceleration: "0-100 km/h in 2.6s",
      topSpeed: "345 km/h",
      transmission: "7-speed PDK"
    },
    stock: 1
  },
  {
    id: "46",
    name: "Jesko",
    brand: "Koenigsegg",
    category: "hypercar",
    price: 450000000, // 45 crore INR
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop",
    description: "Named after the founder's father, the Jesko aims to break the 300 mph barrier with revolutionary aerodynamics.",
    specs: {
      engine: "5.0L V8 Twin-Turbo",
      power: "1600 HP (E85 fuel)",
      acceleration: "0-100 km/h in 2.5s",
      topSpeed: "483+ km/h (projected)",
      transmission: "9-speed multi-clutch"
    },
    stock: 1
  },
  {
    id: "47",
    name: "Portofino M",
    brand: "Ferrari",
    category: "sports",
    price: 38000000, // 3.8 crore INR
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=2137&auto=format&fit=crop",
    description: "Ferrari's versatile GT that can transform from a berlinetta to a convertible with a retractable hardtop.",
    specs: {
      engine: "3.9L V8 Twin-Turbo",
      power: "620 HP",
      acceleration: "0-100 km/h in 3.45s",
      topSpeed: "320 km/h",
      transmission: "8-speed dual-clutch"
    },
    stock: 3
  },
  {
    id: "48",
    name: "Bentayga",
    brand: "Bentley",
    category: "luxury",
    price: 42000000, // 4.2 crore INR
    image: "https://images.unsplash.com/photo-1580274455191-1c62238fa333?q=80&w=2064&auto=format&fit=crop",
    description: "Bentley's first SUV, combining the brand's luxury with exceptional performance and practicality.",
    specs: {
      engine: "4.0L V8 Twin-Turbo",
      power: "542 HP",
      acceleration: "0-100 km/h in 4.5s",
      topSpeed: "290 km/h",
      transmission: "8-speed automatic"
    },
    stock: 3
  }
];

export const categories = [
  { id: 'all', name: 'All Cars' },
  { id: 'sports', name: 'Sports Cars' },
  { id: 'luxury', name: 'Luxury Cars' },
  { id: 'supercar', name: 'Supercars' },
  { id: 'hypercar', name: 'Hypercars' },
  { id: 'classic', name: 'Classic Cars' }
];

export const brands = [
  'All Brands',
  'Lamborghini',
  'Ferrari',
  'Bugatti',
  'Rolls-Royce',
  'Bentley',
  'Aston Martin',
  'Porsche',
  'McLaren',
  'Koenigsegg',
  'Mercedes-Benz',
  'Audi',
  'BMW',
  'Lexus',
  'Honda',
  'Ford',
  'Pagani'
];
