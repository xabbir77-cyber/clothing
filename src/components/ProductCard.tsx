import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  showBadge?: boolean;
}

export default function ProductCard({ product, showBadge = true }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Link to={`/product/${product.slug}/`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </Link>

        {/* Badges */}
        {showBadge && (
          <div className="absolute top-3 left-3 flex flex-col gap-2">
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
        )}

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#f7a4af] hover:text-white transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-3 bg-[#f7a4af] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#e895a0] transition-colors">
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </p>

        {/* Title */}
        <Link to={`/product/${product.slug}/`}>
          <h3 className="font-semibold text-[#414042] mb-2 line-clamp-2 hover:text-[#f7a4af] transition-colors">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-[#f4df77] fill-[#f4df77]'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#f7a4af]">
            ৳{product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ৳{product.originalPrice}
            </span>
          )}
        </div>

        {/* Sizes */}
        <div className="mt-3 flex flex-wrap gap-1">
          {product.sizes.slice(0, 4).map((size) => (
            <span
              key={size}
              className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
            >
              {size}
            </span>
          ))}
          {product.sizes.length > 4 && (
            <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded">
              +{product.sizes.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
