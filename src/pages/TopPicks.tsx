import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { getTopPicks } from '@/data/products';

export default function TopPicks() {
  const products = getTopPicks();

  return (
    <>
      <SEO
        title="Top Picks - Kids Fashion Bangladesh"
        description="Discover our top picked kids clothing items. Handpicked quality fashion for boys, girls, and babies in Bangladesh."
        keywords={['top picks', 'kids fashion', 'best kids clothes', 'bangladesh']}
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Top Picks' }]} />

          {/* Header */}
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f4df77]/20 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#f4df77]" />
              <span className="text-sm font-medium text-[#f4df77]">Curated Selection</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#414042] mb-4">
              Our Top Picks
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked favorites chosen for their quality, style, and customer love. These are the items our customers can't stop raving about!
            </p>
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
              <p className="text-gray-500">No top picks available at the moment.</p>
            </div>
          )}

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Want to see more amazing products?</p>
            <Link to="/best-sellers/" className="btn-outline inline-flex items-center gap-2">
              View Best Sellers
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
