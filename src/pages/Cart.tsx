import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, Trash2, Plus, Minus } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function Cart() {
  // Demo cart items
  const cartItems: any[] = [];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 1000 ? 0 : 80;
  const total = subtotal + shipping;

  return (
    <>
      <SEO
        title="Shopping Cart - Kids Fashion Bangladesh"
        description="View your shopping cart. Quality kids clothing for boys, girls, and babies in Bangladesh."
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Shopping Cart' }]} />

          <h1 className="text-3xl sm:text-4xl font-bold text-[#414042] mb-8">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-2xl shadow-sm p-4 flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-[#414042]">{item.name}</h3>
                          <p className="text-sm text-gray-500">Size: {item.size}</p>
                        </div>
                        <button className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center border rounded-lg">
                          <button className="px-3 py-1 hover:bg-gray-100">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-3 py-1 font-medium">{item.quantity}</span>
                          <button className="px-3 py-1 hover:bg-gray-100">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="font-bold text-[#f7a4af]">৳{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-gray-50 rounded-2xl p-6 h-fit">
                <h2 className="text-xl font-bold text-[#414042] mb-6">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">{shipping === 0 ? 'Free' : `৳${shipping}`}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-bold text-[#414042]">Total</span>
                    <span className="font-bold text-[#f7a4af] text-xl">৳{total}</span>
                  </div>
                </div>
                <button className="w-full btn-primary py-4 flex items-center justify-center gap-2">
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Shipping & taxes calculated at checkout
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-[#f7a4af]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="w-12 h-12 text-[#f7a4af]" />
              </div>
              <h2 className="text-2xl font-bold text-[#414042] mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/boys/" className="btn-primary inline-flex items-center justify-center gap-2">
                  Shop Boys
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/girls/" className="btn-secondary inline-flex items-center justify-center gap-2">
                  Shop Girls
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
