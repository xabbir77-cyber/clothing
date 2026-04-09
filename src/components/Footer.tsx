import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Truck, Headphones, Gift } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    shop: [
      { name: 'Boys Collection', href: '/boys/' },
      { name: 'Girls Collection', href: '/girls/' },
      { name: 'Baby & Kids', href: '/baby/' },
      { name: 'Top Picks', href: '/top-picks/' },
      { name: 'Best Sellers', href: '/best-sellers/' },
    ],
    support: [
      { name: 'Contact Us', href: '/contact/' },
      { name: 'About Us', href: '/about/' },
      { name: 'Size Guide', href: '/size-guide/' },
      { name: 'Shipping Info', href: '/shipping/' },
      { name: 'Returns', href: '/returns/' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy/' },
      { name: 'Terms of Service', href: '/terms/' },
      { name: 'Cookie Policy', href: '/cookies/' },
    ],
  };

  const features = [
    {
      icon: Truck,
      title: 'Free Delivery',
      description: 'On orders over ৳1000',
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Always here to help',
    },
    {
      icon: CreditCard,
      title: 'Cash on Delivery',
      description: 'Pay when you receive',
    },
    {
      icon: Gift,
      title: 'Special Offers',
      description: 'Regular discounts',
    },
  ];

  return (
    <footer className="bg-[#414042] text-white">
      {/* Features Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f7a4af]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-[#f7a4af]" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-white/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#f7a4af] to-[#f4df77] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">#1</span>
              </div>
              <span className="font-bold text-xl text-white">CLOTHING</span>
            </Link>
            <p className="text-white/70 text-sm mb-6 max-w-sm">
              Your trusted destination for kids fashion in Bangladesh. Quality clothing for boys, girls, and babies at affordable prices.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 text-[#f7a4af]" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 text-[#f7a4af]" />
                <span>support@1clothing.bd</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-[#f7a4af]" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-[#f7a4af] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-[#f7a4af] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <p className="text-sm text-white/70 mb-4">
              Subscribe for exclusive offers and updates!
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#f7a4af] text-sm"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#f7a4af] text-white rounded-lg font-semibold hover:bg-[#e895a0] transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f7a4af] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f7a4af] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#f7a4af] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              © {currentYear} #1-CLOTHING. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-white/60 hover:text-[#f7a4af] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
