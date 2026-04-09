import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { categories } from '@/data/categories';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Boys', href: '/boys/', hasDropdown: true, category: 'boys' },
    { name: 'Girls', href: '/girls/', hasDropdown: true, category: 'girls' },
    { name: 'Baby & Kids', href: '/baby/', hasDropdown: true, category: 'baby' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Contact', href: '/contact/' },
  ];

  const getSubcategories = (categorySlug: string) => {
    const category = categories.find(c => c.slug === categorySlug);
    return category?.subcategories || [];
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#f7a4af] to-[#f4df77] rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-lg">#1</span>
            </div>
            <span className={`font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-[#414042]' : 'text-[#414042]'
            }`}>
              CLOTHING
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.category!)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`flex items-center gap-1 font-semibold text-sm transition-colors duration-300 ${
                    location.pathname === link.href
                      ? 'text-[#f7a4af]'
                      : isScrolled
                      ? 'text-[#414042] hover:text-[#f7a4af]'
                      : 'text-[#414042] hover:text-[#f7a4af]'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.category && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-2">
                      {getSubcategories(link.category!).map((sub) => (
                        <Link
                          key={sub.slug}
                          to={`/${link.category}/${sub.slug}/`}
                          className="block px-4 py-2 text-sm text-[#414042] hover:bg-[#f7a4af]/10 hover:text-[#f7a4af] rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-[#414042] hover:bg-[#f7a4af]/10 hover:text-[#f7a4af]'
                  : 'text-[#414042] hover:bg-white/50'
              }`}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* User */}
            <Link
              to="/account/"
              className={`hidden sm:flex p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-[#414042] hover:bg-[#f7a4af]/10 hover:text-[#f7a4af]'
                  : 'text-[#414042] hover:bg-white/50'
              }`}
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* Cart */}
            <Link
              to="/cart/"
              className={`relative p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-[#414042] hover:bg-[#f7a4af]/10 hover:text-[#f7a4af]'
                  : 'text-[#414042] hover:bg-white/50'
              }`}
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#f7a4af] text-white text-xs rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-[#414042] hover:bg-[#f7a4af]/10'
                  : 'text-[#414042] hover:bg-white/50'
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-6 py-3 rounded-full border-2 border-[#f7a4af]/30 focus:border-[#f7a4af] focus:outline-none bg-white/90 backdrop-blur-sm"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#f7a4af]" />
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="p-4 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.href}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${
                    location.pathname === link.href
                      ? 'bg-[#f7a4af]/10 text-[#f7a4af]'
                      : 'text-[#414042] hover:bg-gray-100'
                  }`}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {getSubcategories(link.category!).map((sub) => (
                      <Link
                        key={sub.slug}
                        to={`/${link.category}/${sub.slug}/`}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-[#f7a4af] transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
