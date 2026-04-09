export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  color: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "boys",
    name: "Boys",
    slug: "boys",
    description: "Stylish and comfortable clothing for boys. From casual wear to traditional outfits.",
    image: "/images/categories/boys-category.jpg",
    color: "#7ca9d6",
    subcategories: [
      { id: "t-shirts-tops", name: "T-Shirts & Tops", slug: "t-shirts-tops" },
      { id: "pants-jeans", name: "Pants & Jeans", slug: "pants-jeans" },
      { id: "ethnic-wear", name: "Ethnic Wear (Panjabi/Sherwani)", slug: "ethnic-wear" },
      { id: "party-wear", name: "Party Wear", slug: "party-wear" },
      { id: "shoes-accessories", name: "Shoes & Accessories", slug: "shoes-accessories" }
    ]
  },
  {
    id: "girls",
    name: "Girls",
    slug: "girls",
    description: "Beautiful dresses, tops, and more for girls. Perfect for every occasion.",
    image: "/images/categories/girls-category.jpg",
    color: "#f7a4af",
    subcategories: [
      { id: "dresses-gowns", name: "Dresses & Gowns", slug: "dresses-gowns" },
      { id: "tops-tshirts", name: "Tops & T-Shirts", slug: "tops-tshirts" },
      { id: "skirts-pants", name: "Skirts & Pants", slug: "skirts-pants" },
      { id: "party-wear", name: "Party Wear", slug: "party-wear" },
      { id: "shoes-accessories", name: "Shoes & Accessories", slug: "shoes-accessories" }
    ]
  },
  {
    id: "baby",
    name: "Baby & Kids",
    slug: "baby",
    description: "Soft, safe, and comfortable clothing for your little ones. Newborn to toddler.",
    image: "/images/categories/baby-category.jpg",
    color: "#f4df77",
    subcategories: [
      { id: "newborn", name: "Newborn (0-12M)", slug: "newborn" },
      { id: "baby-clothes", name: "Baby Clothes (1-3Y)", slug: "baby-clothes" },
      { id: "toddler", name: "Toddler (3-5Y)", slug: "toddler" },
      { id: "essentials", name: "Essentials", slug: "essentials" }
    ]
  }
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find(c => c.slug === slug);
};

export const getSubcategoryBySlug = (categorySlug: string, subcategorySlug: string): Subcategory | undefined => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find(s => s.slug === subcategorySlug);
};
