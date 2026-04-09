export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  subcategory: string;
  description: string;
  features: string[];
  sizes: string[];
  stock: number;
  rating: number;
  reviews: number;
  isBestSeller?: boolean;
  isTopPick?: boolean;
  isNew?: boolean;
  tags: string[];
}

export const products: Product[] = [
  // Boys Products
  {
    id: "1",
    name: "Dinosaur Adventure T-Shirt",
    slug: "dinosaur-adventure-tshirt",
    price: 450,
    originalPrice: 599,
    image: "/images/products/boys-tshirt-1.jpg",
    images: ["/images/products/boys-tshirt-1.jpg"],
    category: "boys",
    subcategory: "t-shirts-tops",
    description: "Make your little one's day with this adorable dinosaur t-shirt. Made from 100% soft cotton, perfect for everyday wear.",
    features: ["100% Cotton", "Machine Washable", "Soft Fabric", "Durable Print"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y"],
    stock: 25,
    rating: 4.8,
    reviews: 42,
    isBestSeller: true,
    isTopPick: true,
    tags: ["t-shirt", "boys", "dinosaur", "casual"]
  },
  {
    id: "2",
    name: "Classic Blue Denim Jeans",
    slug: "classic-blue-denim-jeans",
    price: 890,
    image: "/images/products/boys-jeans-1.jpg",
    images: ["/images/products/boys-jeans-1.jpg"],
    category: "boys",
    subcategory: "pants-jeans",
    description: "Classic denim jeans for boys. Durable, comfortable, and stylish for any occasion.",
    features: ["Premium Denim", "Adjustable Waist", "Classic Fit", "Easy to Clean"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y"],
    stock: 18,
    rating: 4.6,
    reviews: 28,
    isTopPick: true,
    tags: ["jeans", "boys", "denim", "casual"]
  },
  {
    id: "3",
    name: "Traditional White Panjabi",
    slug: "traditional-white-panjabi",
    price: 1290,
    originalPrice: 1599,
    image: "/images/products/boys-panjabi-1.jpg",
    images: ["/images/products/boys-panjabi-1.jpg"],
    category: "boys",
    subcategory: "ethnic-wear",
    description: "Elegant white panjabi with intricate gold embroidery. Perfect for Eid, weddings, and special occasions.",
    features: ["Cotton Blend", "Gold Embroidery", "Traditional Design", "Comfortable Fit"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y", "8-9Y"],
    stock: 15,
    rating: 4.9,
    reviews: 56,
    isBestSeller: true,
    tags: ["panjabi", "boys", "ethnic", "eid", "wedding"]
  },
  {
    id: "4",
    name: "Cozy Gray Hoodie",
    slug: "cozy-gray-hoodie",
    price: 750,
    image: "/images/products/boys-hoodie-1.jpg",
    images: ["/images/products/boys-hoodie-1.jpg"],
    category: "boys",
    subcategory: "t-shirts-tops",
    description: "Warm and cozy hoodie perfect for winter days. Soft fleece lining keeps your child comfortable.",
    features: ["Fleece Lined", "Kangaroo Pocket", "Soft Fabric", "Winter Essential"],
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y"],
    stock: 20,
    rating: 4.7,
    reviews: 35,
    isNew: true,
    tags: ["hoodie", "boys", "winter", "casual"]
  },
  {
    id: "5",
    name: "Brown Formal Shoes",
    slug: "brown-formal-shoes",
    price: 990,
    image: "/images/products/boys-shoes-1.jpg",
    images: ["/images/products/boys-shoes-1.jpg"],
    category: "boys",
    subcategory: "shoes-accessories",
    description: "Classic brown formal shoes for special occasions. Comfortable and stylish.",
    features: ["Genuine Leather", "Comfortable Sole", "Easy to Wear", "Durable"],
    sizes: ["25", "26", "27", "28", "29", "30"],
    stock: 12,
    rating: 4.5,
    reviews: 22,
    tags: ["shoes", "boys", "formal", "leather"]
  },
  // Girls Products
  {
    id: "6",
    name: "Pink Floral Summer Dress",
    slug: "pink-floral-summer-dress",
    price: 690,
    originalPrice: 899,
    image: "/images/products/girls-dress-1.jpg",
    images: ["/images/products/girls-dress-1.jpg"],
    category: "girls",
    subcategory: "dresses-gowns",
    description: "Beautiful pink floral dress with ruffled sleeves. Perfect for summer parties and everyday wear.",
    features: ["100% Cotton", "Breathable Fabric", "Ruffled Details", "Easy to Wash"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y", "6-7Y"],
    stock: 22,
    rating: 4.8,
    reviews: 48,
    isBestSeller: true,
    isTopPick: true,
    tags: ["dress", "girls", "floral", "summer"]
  },
  {
    id: "7",
    name: "Yellow Bow Top",
    slug: "yellow-bow-top",
    price: 390,
    image: "/images/products/girls-top-1.jpg",
    images: ["/images/products/girls-top-1.jpg"],
    category: "girls",
    subcategory: "tops-tshirts",
    description: "Adorable yellow top with a cute bow detail. Soft and comfortable for all-day wear.",
    features: ["Soft Cotton", "Cute Bow Detail", "Comfortable Fit", "Vibrant Color"],
    sizes: ["2-3Y", "3-4Y", "4-5Y", "5-6Y"],
    stock: 30,
    rating: 4.6,
    reviews: 19,
    isNew: true,
    tags: ["top", "girls", "casual", "yellow"]
  },
  {
    id: "8",
    name: "Blue Princess Party Gown",
    slug: "blue-princess-party-gown",
    price: 1890,
    originalPrice: 2299,
    image: "/images/products/girls-party-1.jpg",
    images: ["/images/products/girls-party-1.jpg"],
    category: "girls",
    subcategory: "party-wear",
    description: "Stunning blue satin gown with crystal embellishments. Make your little princess feel special.",
    features: ["Premium Satin", "Crystal Details", "Layered Skirt", "Perfect for Parties"],
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y"],
    stock: 10,
    rating: 4.9,
    reviews: 34,
    isBestSeller: true,
    tags: ["gown", "girls", "party", "princess"]
  },
  {
    id: "9",
    name: "Red & Gold Lehenga Choli",
    slug: "red-gold-lehenga-choli",
    price: 2490,
    image: "/images/products/girls-ethnic-1.jpg",
    images: ["/images/products/girls-ethnic-1.jpg"],
    category: "girls",
    subcategory: "party-wear",
    description: "Exquisite red and gold lehenga choli set. Perfect for weddings, Eid, and traditional celebrations.",
    features: ["Intricate Embroidery", "Premium Fabric", "Complete Set", "Traditional Design"],
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y", "8-9Y"],
    stock: 8,
    rating: 5.0,
    reviews: 27,
    isBestSeller: true,
    tags: ["lehenga", "girls", "ethnic", "wedding", "eid"]
  },
  {
    id: "10",
    name: "Navy Blue Pleated Skirt",
    slug: "navy-blue-pleated-skirt",
    price: 550,
    image: "/images/products/girls-skirt-1.jpg",
    images: ["/images/products/girls-skirt-1.jpg"],
    category: "girls",
    subcategory: "skirts-pants",
    description: "Classic navy blue pleated skirt. Perfect for school or casual outings.",
    features: ["Durable Fabric", "Classic Pleats", "Comfortable Waistband", "Easy Care"],
    sizes: ["3-4Y", "4-5Y", "5-6Y", "6-7Y", "7-8Y"],
    stock: 25,
    rating: 4.5,
    reviews: 16,
    tags: ["skirt", "girls", "school", "casual"]
  },
  {
    id: "11",
    name: "Pink Glitter Sandals",
    slug: "pink-glitter-sandals",
    price: 690,
    image: "/images/products/girls-shoes-1.jpg",
    images: ["/images/products/girls-shoes-1.jpg"],
    category: "girls",
    subcategory: "shoes-accessories",
    description: "Sparkly pink sandals with cute bow. Perfect for parties and special occasions.",
    features: ["Glitter Finish", "Comfortable Sole", "Easy Strap", "Stylish Design"],
    sizes: ["25", "26", "27", "28", "29", "30"],
    stock: 18,
    rating: 4.7,
    reviews: 31,
    isTopPick: true,
    tags: ["sandals", "girls", "party", "glitter"]
  },
  // Baby Products
  {
    id: "12",
    name: "Mint Animal Onesie",
    slug: "mint-animal-onesie",
    price: 490,
    originalPrice: 650,
    image: "/images/products/baby-onesie-1.jpg",
    images: ["/images/products/baby-onesie-1.jpg"],
    category: "baby",
    subcategory: "baby-clothes",
    description: "Adorable mint green onesie with cute animal prints. Soft and gentle on baby's skin.",
    features: ["100% Organic Cotton", "Snap Buttons", "Soft Fabric", "Cute Prints"],
    sizes: ["0-3M", "3-6M", "6-9M", "9-12M"],
    stock: 35,
    rating: 4.9,
    reviews: 62,
    isBestSeller: true,
    isTopPick: true,
    tags: ["onesie", "baby", "organic", "cute"]
  },
  {
    id: "13",
    name: "Soft Pink Baby Blanket",
    slug: "soft-pink-baby-blanket",
    price: 590,
    image: "/images/products/baby-blanket-1.jpg",
    images: ["/images/products/baby-blanket-1.jpg"],
    category: "baby",
    subcategory: "essentials",
    description: "Ultra-soft fleece blanket with cute bunny embroidery. Perfect for keeping baby cozy.",
    features: ["Ultra Soft Fleece", "Bunny Embroidery", "Perfect Size", "Machine Washable"],
    sizes: ["One Size"],
    stock: 28,
    rating: 4.8,
    reviews: 45,
    tags: ["blanket", "baby", "soft", "essential"]
  },
  {
    id: "14",
    name: "Yellow Striped Romper Set",
    slug: "yellow-striped-romper-set",
    price: 690,
    image: "/images/products/baby-romper-1.jpg",
    images: ["/images/products/baby-romper-1.jpg"],
    category: "baby",
    subcategory: "newborn",
    description: "Cute yellow and white striped romper with matching hat. Perfect for newborns.",
    features: ["Soft Cotton", "Matching Hat", "Easy Diaper Change", "Adorable Design"],
    sizes: ["0-3M", "3-6M", "6-9M"],
    stock: 20,
    rating: 4.7,
    reviews: 28,
    isNew: true,
    tags: ["romper", "baby", "newborn", "set"]
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsBySubcategory = (category: string, subcategory: string): Product[] => {
  return products.filter(p => p.category === category && p.subcategory === subcategory);
};

export const getBestSellers = (): Product[] => {
  return products.filter(p => p.isBestSeller);
};

export const getTopPicks = (): Product[] => {
  return products.filter(p => p.isTopPick);
};

export const getRelatedProducts = (product: Product, limit: number = 4): Product[] => {
  return products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, limit);
};
