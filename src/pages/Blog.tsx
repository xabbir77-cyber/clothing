import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { blogPosts } from '@/data/blog';

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog - Kids Fashion Tips & Guides"
        description="Read our latest articles on kids fashion, parenting tips, and style guides for Bangladeshi parents."
        keywords={['kids fashion blog', 'parenting tips', 'bangladesh', 'children clothing guide']}
      />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Blog' }]} />

          {/* Header */}
          <div className="text-center py-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#414042] mb-4">
              Our Blog
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tips, guides, and inspiration for dressing your little ones. Stay updated with the latest kids fashion trends in Bangladesh.
            </p>
          </div>

          {/* Featured Post */}
          {blogPosts.length > 0 && (
            <div className="mb-16">
              <Link to={`/blog/${blogPosts[0].slug}/`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-3xl overflow-hidden">
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img
                      src={blogPosts[0].image}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-[#f7a4af]/10 text-[#f7a4af] text-sm font-medium rounded-full">
                        {blogPosts[0].category}
                      </span>
                      <span className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#414042] mb-4 group-hover:text-[#f7a4af] transition-colors">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#f7a4af] rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-[#414042]">{blogPosts[0].author}</p>
                          <p className="text-sm text-gray-500">{blogPosts[0].date}</p>
                        </div>
                      </div>
                      <span className="flex items-center gap-2 text-[#f7a4af] font-medium">
                        Read More
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="group">
                <Link to={`/blog/${post.slug}/`}>
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-[#f7a4af]/10 text-[#f7a4af] text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <Link to={`/blog/${post.slug}/`}>
                  <h3 className="text-xl font-bold text-[#414042] mb-2 group-hover:text-[#f7a4af] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <User className="w-4 h-4" />
                  <span>{post.author}</span>
                  <span>•</span>
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
