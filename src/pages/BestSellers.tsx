import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Star } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { getBestSellers } from '@/data/products';

export default function BestSellers() {
  const products = getBestSellers();

  return (
    <>
      <SEO
        title="Best Sellers - Kids Fashion Bangladesh"
        description="Shop our best selling kids clothing items. Most popular fashion for boys, girls, and babies in Bangladesh."
        keywords={['best sellers', 'popular kids clothes', 'top selling', 'bangladesh']}
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Best Sellers' }]} />

          {/* Header */}
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7a4af]/20 rounded-full mb-6">
              <TrendingUp className="w-5 h-5 text-[#f7a4af]" />
              <span className="text-sm font-medium text-[#f7a4af]">Most Popular</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#414042] mb-4">
              Best Sellers
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most loved items by customers across Bangladesh. These bestsellers are flying off the shelves - grab yours before they're gone!
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="text-center p-4 bg-[#f7a4af]/10 rounded-2xl">
              <p className="text-3xl font-bold text-[#f7a4af]">10K+</p>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div className="text-center p-4 bg-[#f4df77]/10 rounded-2xl">
              <p className="text-3xl font-bold text-[#f4df77]">50K+</p>
              <p className="text-sm text-gray-600">Items Sold</p>
            </div>
            <div className="text-center p-4 bg-[#7ca9d6]/10 rounded-2xl">
              <div className="flex items-center justify-center gap-1">
                <p className="text-3xl font-bold text-[#7ca9d6]">4.8</p>
                <Star className="w-6 h-6 text-[#f4df77] fill-[#f4df77]" />
              </div>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">No bestsellers available at the moment.</p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Looking for something specific?</p>
            <Link to="/boys/" className="btn-primary inline-flex items-center gap-2 mr-4">
              Shop Boys
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/girls/" className="btn-secondary inline-flex items-center gap-2">
              Shop Girls
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
