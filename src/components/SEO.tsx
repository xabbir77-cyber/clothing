import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: string;
  price?: number;
  currency?: string;
  availability?: string;
  brand?: string;
  productData?: {
    name: string;
    image: string;
    description: string;
    price: number;
    availability: string;
    brand: string;
    sku: string;
  };
}

export default function SEO({
  title,
  description,
  keywords = [],
  image = '/images/hero-main.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  productData,
}: SEOProps) {
  const siteName = '#1-CLOTHING - Kids Fashion Bangladesh';
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update meta tags
    const metaTags = {
      'description': description,
      'keywords': keywords.join(', '),
      'og:title': fullTitle,
      'og:description': description,
      'og:image': image.startsWith('http') ? image : `${window.location.origin}${image}`,
      'og:url': url,
      'og:type': type,
      'og:site_name': siteName,
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': image.startsWith('http') ? image : `${window.location.origin}${image}`,
    };

    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;
      
      const isOg = name.startsWith('og:');
      const isTwitter = name.startsWith('twitter:');
      
      let meta = document.querySelector(
        isOg 
          ? `meta[property="${name}"]` 
          : isTwitter 
          ? `meta[name="${name}"]` 
          : `meta[name="${name}"]`
      ) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isOg) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.content = content;
    });

    // Add or update JSON-LD structured data
    if (productData) {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productData.name,
        image: productData.image,
        description: productData.description,
        brand: {
          '@type': 'Brand',
          name: productData.brand,
        },
        offers: {
          '@type': 'Offer',
          price: productData.price,
          priceCurrency: 'BDT',
          availability: productData.availability,
        },
        sku: productData.sku,
      };

      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      // Cleanup JSON-LD on unmount
      if (!productData) {
        const script = document.querySelector('script[type="application/ld+json"]');
        if (script) script.remove();
      }
    };
  }, [fullTitle, description, keywords, image, url, type, productData]);

  return null;
}
