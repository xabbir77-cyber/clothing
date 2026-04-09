import { Heart, Target, Eye, Award, Users, Truck } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Quality First',
      description: 'We never compromise on quality. Every product is carefully selected and tested.',
    },
    {
      icon: Target,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We believe in honest pricing and clear communication with our customers.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our business.',
    },
  ];

  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50K+', label: 'Products Sold' },
    { number: '500+', label: 'Products Available' },
    { number: '4.8/5', label: 'Average Rating' },
  ];

  return (
    <>
      <SEO
        title="About Us - Kids Fashion Bangladesh"
        description="Learn about #1-CLOTHING, your trusted destination for kids fashion in Bangladesh. Our story, mission, and values."
        keywords={['about us', 'kids fashion bangladesh', 'our story', 'children clothing']}
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About Us' }]} />

          {/* Hero */}
          <div className="text-center py-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#414042] mb-6">
              About <span className="text-gradient">#1-CLOTHING</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your trusted destination for kids fashion in Bangladesh. We're on a mission to make quality children's clothing accessible to every family.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-[#f7a4af] rounded-3xl" />
              <img
                src="/images/hero-main.jpg"
                alt="Our Story"
                className="relative rounded-3xl shadow-xl w-full aspect-square object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#414042] mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  #1-CLOTHING was founded with a simple belief: every child deserves to look and feel their best. What started as a small family business in Dhaka has grown into one of Bangladesh's most trusted kids fashion destinations.
                </p>
                <p>
                  We understand the challenges parents face when shopping for children's clothing. Kids grow fast, they need comfortable clothes for play, and they want to look stylish too. That's why we've curated a collection that balances quality, comfort, and style at prices that make sense.
                </p>
                <p>
                  Today, we're proud to serve thousands of families across Bangladesh, from Dhaka to Chittagong, Sylhet to Rajshahi. Our commitment to quality and customer satisfaction remains as strong as ever.
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-[#f7a4af]/10 rounded-3xl p-8">
              <div className="w-14 h-14 bg-[#f7a4af] rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#414042] mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide high-quality, comfortable, and stylish children's clothing at affordable prices, making fashion accessible to every family in Bangladesh while ensuring an exceptional shopping experience.
              </p>
            </div>
            <div className="bg-[#f4df77]/10 rounded-3xl p-8">
              <div className="w-14 h-14 bg-[#f4df77] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#414042] mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become the most loved kids fashion brand in Bangladesh, known for quality, trust, and innovation. We envision a future where every child can express themselves through clothing that makes them feel confident and happy.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-[#414042] rounded-3xl p-8 md:p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#f7a4af] mb-2">{stat.number}</p>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-[#414042] text-center mb-12">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#f7a4af] to-[#f4df77] rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-[#414042] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-[#f7a4af]/10 via-[#f4df77]/10 to-[#7ca9d6]/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#414042] text-center mb-12">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Award className="w-8 h-8 text-[#f7a4af]" />
                </div>
                <h3 className="font-bold text-[#414042] mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">We source only the best materials and work with trusted manufacturers.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Users className="w-8 h-8 text-[#f4df77]" />
                </div>
                <h3 className="font-bold text-[#414042] mb-2">Customer First</h3>
                <p className="text-gray-600 text-sm">Our support team is always ready to help you with any questions.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                  <Truck className="w-8 h-8 text-[#7ca9d6]" />
                </div>
                <h3 className="font-bold text-[#414042] mb-2">Fast Delivery</h3>
                <p className="text-gray-600 text-sm">We deliver across Bangladesh with care and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
