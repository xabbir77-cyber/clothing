import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Truck, RotateCcw, Shield, Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { getCategoryBySlug } from '@/data/categories';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = getProductBySlug(slug || '');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#414042] mb-4">Product Not Found</h1>
          <Link to="/" className="btn-primary">Go Home</Link>
        </div>
      </div>
    );
  }

  const category = getCategoryBySlug(product.category);
  const relatedProducts = getRelatedProducts(product, 4);
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const breadcrumbs = [
    { name: category?.name || 'Category', href: `/${product.category}/` },
    { name: product.name },
  ];

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, Math.min(product.stock, quantity + delta)));
  };

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        keywords={product.tags}
        image={product.image}
        type="product"
        productData={{
          name: product.name,
          image: product.image,
          description: product.description,
          price: product.price,
          availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
          brand: '#1-CLOTHING',
          sku: product.id,
        }}
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <Breadcrumbs items={breadcrumbs} />

          {/* Product Detail */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-6">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden">
                <img
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <span className="px-3 py-1 bg-[#7ca9d6] text-white text-xs font-bold rounded-full">
                      NEW
                    </span>
                  )}
                  {product.isBestSeller && (
                    <span className="px-3 py-1 bg-[#f4df77] text-[#414042] text-xs font-bold rounded-full">
                      BESTSELLER
                    </span>
                  )}
                  {discount > 0 && (
                    <span className="px-3 py-1 bg-[#f7a4af] text-white text-xs font-bold rounded-full">
                      -{discount}%
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#f7a4af] hover:text-white transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-[#f7a4af] text-[#f7a4af]' : ''}`} />
                </button>
              </div>

              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                        activeImage === index ? 'border-[#f7a4af]' : 'border-transparent'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category */}
              <Link
                to={`/${product.category}/`}
                className="inline-block text-sm text-[#f7a4af] font-medium uppercase tracking-wide hover:underline"
              >
                {category?.name}
              </Link>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold text-[#414042]">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-[#f4df77] fill-[#f4df77]'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#f7a4af]">
                  ৳{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-400 line-through">
                      ৳{product.originalPrice}
                    </span>
                    <span className="px-3 py-1 bg-[#f7a4af]/10 text-[#f7a4af] text-sm font-bold rounded-full">
                      Save ৳{product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600">{product.description}</p>

              {/* Features */}
              <div className="space-y-2">
                <h3 className="font-semibold text-[#414042]">Key Features:</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-[#f7a4af] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="font-semibold text-[#414042] mb-3">
                  Select Size <span className="text-red-500">*</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                        selectedSize === size
                          ? 'border-[#f7a4af] bg-[#f7a4af] text-white'
                          : 'border-gray-200 text-gray-700 hover:border-[#f7a4af] hover:text-[#f7a4af]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="font-semibold text-[#414042] mb-3">Quantity</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border-2 border-gray-200 rounded-lg">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.stock} items available
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 btn-primary flex items-center justify-center gap-2 py-4">
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="flex-1 btn-secondary flex items-center justify-center gap-2 py-4">
                  Buy Now
                </button>
              </div>

              {/* Share */}
              <button className="flex items-center gap-2 text-gray-500 hover:text-[#f7a4af] transition-colors">
                <Share2 className="w-5 h-5" />
                Share this product
              </button>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto text-[#f7a4af] mb-2" />
                  <p className="text-xs text-gray-500">Free Delivery</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-6 h-6 mx-auto text-[#f7a4af] mb-2" />
                  <p className="text-xs text-gray-500">Easy Returns</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto text-[#f7a4af] mb-2" />
                  <p className="text-xs text-gray-500">Secure Payment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-[#414042] mb-8">You May Also Like</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
