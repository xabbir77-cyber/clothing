import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Category from '@/pages/Category';
import ProductDetail from '@/pages/ProductDetail';
import TopPicks from '@/pages/TopPicks';
import BestSellers from '@/pages/BestSellers';
import SpecialDresses from '@/pages/SpecialDresses';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import About from '@/pages/About';
import Cart from '@/pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />
            
            {/* Categories */}
            <Route path="/:categorySlug/" element={<Category />} />
            <Route path="/:categorySlug/:subcategorySlug/" element={<Category />} />
            
            {/* Product Detail */}
            <Route path="/product/:slug/" element={<ProductDetail />} />
            
            {/* Special Pages */}
            <Route path="/top-picks/" element={<TopPicks />} />
            <Route path="/best-sellers/" element={<BestSellers />} />
            <Route path="/special-dresses/" element={<SpecialDresses />} />
            
            {/* Blog */}
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/:slug/" element={<BlogPost />} />
            
            {/* Info Pages */}
            <Route path="/contact/" element={<Contact />} />
            <Route path="/about/" element={<About />} />
            
            {/* Cart */}
            <Route path="/cart/" element={<Cart />} />
            
            {/* Account (placeholder) */}
            <Route path="/account/" element={
              <div className="pt-32 pb-16 text-center">
                <h1 className="text-2xl font-bold text-[#414042] mb-4">My Account</h1>
                <p className="text-gray-600">Coming soon!</p>
              </div>
            } />
            
            {/* Static pages (placeholders) */}
            <Route path="/size-guide/" element={
              <div className="pt-32 pb-16 text-center">
                <h1 className="text-2xl font-bold text-[#414042] mb-4">Size Guide</h1>
                <p className="text-gray-600">Coming soon!</p>
              </div>
            } />
            <Route path="/shipping/" element={
              <div className="pt-32 pb-16 text-center">
                <h1 className="text-2xl font-bold text-[#414042] mb-4">Shipping Information</h1>
                <p className="text-gray-600">Coming soon!</p>
              </div>
            } />
            <Route path="/returns/" element={
              <div className="pt-32 pb-16 text-center">
                <h1 className="text-2xl font-bold text-[#414042] mb-4">Returns Policy</h1>
                <p className="text-gray-600">Coming soon!</p>
              </div>
            } />
            <Route path="/privacy/" element={
              <div className="pt-32 pb-16 text-center">
                <h1 className="text-2xl font-bold text-[#414042] mb-4">Privacy Policy</h1>
                <p className="text-gray-600">Coming soon!</p>
              </div>
            } />
            <Route path="/terms/" element={
              <div className="pt-32 pb-16 text-center">
                <h1 className="text-2xl font-bold text-[#414042] mb-4">Terms of Service</h1>
                <p className="text-gray-600">Coming soon!</p>
              </div>
            } />
            <Route path="/cookies/" element={
              <div className="pt-32 pb-16 text-center">
                <h1 className="text-2xl font-bold text-[#414042] mb-4">Cookie Policy</h1>
                <p className="text-gray-600">Coming soon!</p>
              </div>
            } />
            
            {/* 404 */}
            <Route path="*" element={
              <div className="pt-32 pb-16 text-center">
                <h1 className="text-4xl font-bold text-[#414042] mb-4">404</h1>
                <p className="text-gray-600 mb-6">Page not found</p>
                <a href="/" className="btn-primary">Go Home</a>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
