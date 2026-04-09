import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Star, Truck } from 'lucide-react';
import SEO from '@/components/SEO';
import ProductCard from '@/components/ProductCard';
import { getBestSellers, getTopPicks } from '@/data/products';
import { categories } from '@/data/categories';

export default function Home() {
  const bestSellers = getBestSellers();
  const topPicks = getTopPicks();

  return (
    <>
      <SEO
        title="#1-CLOTHING - Kids Fashion Bangladesh"
        description="Shop the best kids clothing in Bangladesh. Quality fashion for boys, girls, and babies. Free delivery on orders over ৳1000. Cash on delivery available."
        keywords={[
          'kids clothing Bangladesh',
          'boys dress BD',
          'baby clothes Dhaka',
          'বাচ্চাদের পোশাক অনলাইন',
          'kids fashion',
          'children clothing',
          'baby wear',
          'girls dresses',
        ]}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#f7a4af] rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#f4df77] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#7ca9d6] rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#f7a4af]/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-[#f7a4af]" />
                <span className="text-sm font-medium text-[#f7a4af]">New Collection 2024</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414042] mb-6 leading-tight">
                Kids Fashion &{' '}
                <span className="text-gradient">Clothing</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Quality clothing for every occasion. Discover the best kids fashion in Bangladesh for boys, girls, and babies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/boys/" className="btn-primary flex items-center justify-center gap-2">
                  Shop Boys
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/girls/" className="btn-secondary flex items-center justify-center gap-2">
                  Shop Girls
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#f4df77]/20 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#f4df77]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#414042]">10K+</p>
                    <p className="text-xs text-gray-500">Happy Customers</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#f7a4af]/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-[#f7a4af]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#414042]">4.8/5</p>
                    <p className="text-xs text-gray-500">Customer Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative z-10">
              <div className="relative">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#f4df77] rounded-2xl -z-10 animate-float" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#7ca9d6] rounded-full -z-10 animate-float" style={{ animationDelay: '1s' }} />
                
                {/* Main Image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/hero-main.jpg"
                    alt="Kids Fashion Collection"
                    className="w-full aspect-square object-cover"
                  />
                  
                  {/* Floating Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-2xl font-bold text-[#f7a4af]">৳390</p>
                      </div>
                      <Link to="/top-picks/" className="px-4 py-2 bg-[#f7a4af] text-white rounded-full text-sm font-semibold hover:bg-[#e895a0] transition-colors">
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#414042] mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our wide range of kids clothing categories. From casual wear to traditional outfits, we have everything for your little ones.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={`/${category.slug}/`}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">{category.description}</p>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <span>Explore</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>

                {/* Decorative Corner */}
                <div 
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: category.color }}
                >
                  {index + 1}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4df77]/20 rounded-full mb-3">
                <Star className="w-4 h-4 text-[#f4df77]" />
                <span className="text-xs font-medium text-[#f4df77]">Top Picks</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#414042]">
                Our Top Picks
              </h2>
            </div>
            <Link to="/top-picks/" className="btn-outline flex items-center gap-2">
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {topPicks.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Baby & Kids Section */}
      <section className="py-20 bg-[#f4df77]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#f4df77] rounded-3xl" />
              <img
                src="/images/categories/baby-category.jpg"
                alt="Baby Collection"
                className="relative rounded-3xl shadow-xl w-full aspect-square object-cover"
              />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4df77]/30 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-[#f4df77]" />
                <span className="text-xs font-medium text-[#414042]">Soft & Safe</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-[#414042] mb-4">
                Baby & Kids Collection
              </h2>
              
              <p className="text-gray-600 mb-6">
                Discover our adorable collection for your little ones. From newborn essentials to toddler fashion, we have soft, safe, and comfortable clothing for every stage.
              </p>
              
              <ul className="space-y-3 mb-8">
                {['100% Organic Cotton', 'Hypoallergenic Materials', 'Easy to Wash', 'Soft on Sensitive Skin'].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#f4df77] rounded-full flex items-center justify-center">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/baby/" className="btn-primary inline-flex items-center gap-2">
                Shop Baby Collection
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f7a4af]/20 rounded-full mb-3">
                <TrendingUp className="w-4 h-4 text-[#f7a4af]" />
                <span className="text-xs font-medium text-[#f7a4af]">Most Popular</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#414042]">
                Best Sellers
              </h2>
            </div>
            <Link to="/best-sellers/" className="btn-outline flex items-center gap-2">
              View All
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Special Dresses Section */}
      <section className="py-20 bg-gradient-to-r from-[#f7a4af]/10 via-[#f4df77]/10 to-[#7ca9d6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#414042] mb-4">
              Special Dresses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make every occasion memorable with our special collection. Perfect for weddings, Eid, birthdays, and celebrations.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden">
            <img
              src="/images/categories/special-dresses.jpg"
              alt="Special Dresses Collection"
              className="w-full aspect-[21/9] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 sm:p-12 max-w-lg">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Make Every Moment Special
                </h3>
                <p className="text-white/80 mb-6">
                  From traditional panjabis to elegant gowns, find the perfect outfit for your little one.
                </p>
                <Link to="/special-dresses/" className="btn-primary inline-flex items-center gap-2">
                  Explore Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, title: 'Free Delivery', desc: 'On orders over ৳1000' },
              { icon: 'support', title: '24/7 Support', desc: 'Always here to help' },
              { icon: 'payment', title: 'Cash on Delivery', desc: 'Pay when you receive' },
              { icon: 'offers', title: 'Special Offers', desc: 'Regular discounts' },
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#f7a4af] to-[#f4df77] rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon === 'support' && (
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                  {feature.icon === 'payment' && (
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {feature.icon === 'offers' && (
                    <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  )}
                  {feature.icon === Truck && <Truck className="w-7 h-7 text-white" />}
                </div>
                <h4 className="font-bold text-[#414042] mb-1">{feature.title}</h4>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
