import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getBlogPostBySlug, getRecentPosts } from '@/data/blog';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = getBlogPostBySlug(slug || '');
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#414042] mb-4">Article Not Found</h1>
          <Link to="/blog/" className="btn-primary">Go to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        image={post.image}
        type="article"
      />

      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[
            { name: 'Blog', href: '/blog/' },
            { name: post.title }
          ]} />

          {/* Back Link */}
          <Link to="/blog/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#f7a4af] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-[#f7a4af]/10 text-[#f7a4af] text-sm font-medium rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#414042] mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#f7a4af] rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-[#414042]">{post.author}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </p>
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 mr-2">Share:</span>
                <button className="w-10 h-10 bg-[#1877F2]/10 text-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-[#1DA1F2]/10 text-[#1DA1F2] rounded-full flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-10">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <article 
            className="prose prose-lg max-w-none prose-headings:text-[#414042] prose-a:text-[#f7a4af] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#414042]"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t">
            <h3 className="font-semibold text-[#414042] mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {recentPosts.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
            <h2 className="text-2xl font-bold text-[#414042] mb-8">More Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {recentPosts.map((relatedPost) => (
                <article key={relatedPost.id} className="group">
                  <Link to={`/blog/${relatedPost.slug}/`}>
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-[#f7a4af]/10 text-[#f7a4af] text-xs font-medium rounded-full">
                      {relatedPost.category}
                    </span>
                    <span className="text-xs text-gray-500">{relatedPost.readTime}</span>
                  </div>
                  <Link to={`/blog/${relatedPost.slug}/`}>
                    <h3 className="font-bold text-[#414042] group-hover:text-[#f7a4af] transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
