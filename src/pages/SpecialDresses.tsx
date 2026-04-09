import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function SpecialDresses() {
  // Filter party wear and ethnic products
  const specialProducts = products.filter(
    p => p.subcategory === 'party-wear' || p.subcategory === 'ethnic-wear'
  );

  const occasions = [
    { name: 'Eid Collection', image: '/images/products/boys-panjabi-1.jpg', href: '/boys/ethnic-wear/' },
    { name: 'Wedding Season', image: '/images/products/girls-ethnic-1.jpg', href: '/girls/party-wear/' },
    { name: 'Birthday Parties', image: '/images/products/girls-party-1.jpg', href: '/girls/party-wear/' },
    { name: 'Traditional Wear', image: '/images/categories/special-dresses.jpg', href: '/boys/ethnic-wear/' },
  ];

  return (
    <>
      <SEO
        title="Special Dresses - Kids Fashion Bangladesh"
        description="Shop special occasion dresses for kids in Bangladesh. Perfect for Eid, weddings, birthdays, and celebrations."
        keywords={['special dresses', 'eid dresses', 'wedding kids wear', 'party wear', 'bangladesh']}
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Special Dresses' }]} />

          {/* Hero */}
          <div className="relative rounded-3xl overflow-hidden mb-16">
            <div className="aspect-[21/9]">
              <img
                src="/images/categories/special-dresses.jpg"
                alt="Special Dresses Collection"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
              <div className="p-8 md:p-16 max-w-xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                  <Sparkles className="w-5 h-5 text-[#f4df77]" />
                  <span className="text-sm font-medium text-white">Make Every Moment Special</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Special Dresses
                </h1>
                <p className="text-white/80 mb-6">
                  Find the perfect outfit for every special occasion. From Eid celebrations to weddings, make your little ones shine.
                </p>
                <Link to="#collection" className="btn-primary inline-flex items-center gap-2">
                  Explore Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Occasions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-[#414042] mb-8 text-center">
              Shop by Occasion
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {occasions.map((occasion) => (
                <Link
                  key={occasion.name}
                  to={occasion.href}
                  className="group relative rounded-2xl overflow-hidden aspect-[3/4]"
                >
                  <img
                    src={occasion.image}
                    alt={occasion.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>Occasion</span>
                    </div>
                    <h3 className="text-lg font-bold text-white">{occasion.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div id="collection">
            <h2 className="text-2xl font-bold text-[#414042] mb-8">
              Special Collection
            </h2>
            
            {specialProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {specialProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-500">No special dresses available at the moment.</p>
              </div>
            )}
          </div>

          {/* Tips Section */}
          <div className="mt-20 bg-gradient-to-r from-[#f7a4af]/10 via-[#f4df77]/10 to-[#7ca9d6]/10 rounded-3xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-[#414042] mb-4">
                Tips for Choosing Special Occasion Wear
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#f7a4af]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-[#f7a4af]" />
                  </div>
                  <h3 className="font-bold text-[#414042] mb-2">Comfort First</h3>
                  <p className="text-sm text-gray-600">Choose outfits that allow kids to move and play freely.</p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#f4df77]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-[#f4df77]" />
                  </div>
                  <h3 className="font-bold text-[#414042] mb-2">Plan Ahead</h3>
                  <p className="text-sm text-gray-600">Order early to ensure perfect fit and timely delivery.</p>
                </div>
                <div className="bg-white rounded-2xl p-6">
                  <div className="w-12 h-12 bg-[#7ca9d6]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-6 h-6 text-[#7ca9d6]" />
                  </div>
                  <h3 className="font-bold text-[#414042] mb-2">Size Up</h3>
                  <p className="text-sm text-gray-600">Consider sizing up for growing kids and layering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
