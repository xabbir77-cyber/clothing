import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Filter, Grid3X3, List, ChevronDown } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { getCategoryBySlug } from '@/data/categories';
import { getProductsByCategory, getProductsBySubcategory } from '@/data/products';

export default function Category() {
  const { categorySlug, subcategorySlug } = useParams<{ categorySlug: string; subcategorySlug?: string }>();
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const category = getCategoryBySlug(categorySlug || '');
  
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#414042] mb-4">Category Not Found</h1>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  const products = subcategorySlug
    ? getProductsBySubcategory(categorySlug!, subcategorySlug)
    : getProductsByCategory(categorySlug!);

  const subcategory = subcategorySlug
    ? category.subcategories.find(s => s.slug === subcategorySlug)
    : null;

  const breadcrumbs = [
    { name: category.name, href: `/${category.slug}/` },
    ...(subcategory ? [{ name: subcategory.name }] : []),
  ];

  const title = subcategory
    ? `${subcategory.name} - ${category.name}`
    : `${category.name} Collection`;

  const description = subcategory
    ? `Shop ${subcategory.name} for ${category.name.toLowerCase()} in Bangladesh. Best quality at affordable prices. Free delivery on orders over ৳1000.`
    : `Shop the best ${category.name.toLowerCase()} clothing in Bangladesh. Quality fashion for your little ones. Free delivery on orders over ৳1000.`;

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0;
    }
  });

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={[
          `${category.name.toLowerCase()} clothing bangladesh`,
          `${category.name.toLowerCase()} dress bd`,
          `baby clothes ${category.name.toLowerCase()}`,
          'বাচ্চাদের পোশাক',
          'kids fashion',
        ]}
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Category Header */}
          <div className="relative rounded-3xl overflow-hidden mb-10">
            <div className="aspect-[21/9] md:aspect-[21/7]">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 md:p-12">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                  {subcategory ? subcategory.name : category.name}
                </h1>
                <p className="text-white/80 max-w-md">
                  {category.description}
                </p>
              </div>
            </div>
          </div>

          {/* Subcategories */}
          {!subcategory && (
            <div className="flex flex-wrap gap-3 mb-8">
              <Link
                to={`/${category.slug}/`}
                className="px-4 py-2 bg-[#f7a4af] text-white rounded-full text-sm font-semibold"
              >
                All
              </Link>
              {category.subcategories.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/${category.slug}/${sub.slug}/`}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-[#f7a4af]/10 hover:text-[#f7a4af] transition-colors"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}

          {/* Filters & Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 p-4 bg-gray-50 rounded-2xl">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow"
              >
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filters</span>
              </button>
              
              <span className="text-sm text-gray-500">
                {products.length} products
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 bg-white rounded-full shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f7a4af] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>

              {/* View Mode */}
              <div className="flex bg-white rounded-full shadow-sm p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'grid' ? 'bg-[#f7a4af] text-white' : 'text-gray-500 hover:text-[#f7a4af]'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'list' ? 'bg-[#f7a4af] text-white' : 'text-gray-500 hover:text-[#f7a4af]'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className={`grid ${
              viewMode === 'grid'
                ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
                : 'grid-cols-1'
            } gap-4 sm:gap-6`}>
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Filter className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-[#414042] mb-2">No products found</h3>
              <p className="text-gray-500">Try adjusting your filters or browse other categories.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
