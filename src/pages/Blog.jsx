
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Blog() {
  const [scrollY, setScrollY] = useState(0);

  // Define posts array here so it's available for useEffect and rendering
  const posts = [
    {
      title: "How Top Hospitality Brands Design Their Sound On Purpose",
      excerpt: "Learn how luxury hotels like W Hotels, Soho House, and The Standard use strategic music curation as part of their brand identity.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/067aa2432_AI_Generated_Image_2025-10-21.png",
      alt: "Luxury hospitality interior showcasing strategic sound design and music curation",
      category: "Insights",
      date: "2025-01-20",
      displayDate: "January 20, 2025",
      author: "SensEar Team",
      link: createPageUrl("how-top-hospitality-brands-design-sound")
    },
    {
      title: "Three Reasons to Make Music Part of Your Luxury Hospitality Marketing Strategy",
      excerpt: "Curated music is a practical way to shape how guests feel, what they remember, and how they spend.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg",
      alt: "Luxury hotel interior showcasing music's role in hospitality marketing strategy",
      category: "Insights",
      date: "2025-01-15", // ISO format for datetime
      displayDate: "January 15, 2025",
      author: "SensEar Team",
      link: createPageUrl("three-reasons-make-music-hospitality")
    },
    {
      title: "How Brand-Fit Music Converts Browsers into Buyers",
      excerpt: "Evidence-based research showing how brand-aligned music increases sales by 9.1% in hospitality venues.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg",
      alt: "Restaurant ambiance demonstrating music's impact on customer sales and behavior",
      category: "Research",
      date: "2021-01-20", // ISO format for datetime
      displayDate: "January 20, 2021",
      author: "Zoe Burnard",
      link: createPageUrl("brand-music-converts-browsers-buyers")
    },
    {
      title: "What Exactly Does a Music Curator Do?",
      excerpt: "Learn how professional music curators architect brand soundtracks through strategic curation and data-driven sonic branding.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png",
      alt: "Professional music curator selecting tracks for bespoke venue playlists",
      category: "Education",
      date: "2025-01-10", // ISO format for datetime
      displayDate: "January 10, 2025",
      author: "SensEar Team",
      link: createPageUrl("what-exactly-does-music-curator-do")
    },
    {
      title: "The Music Curation Cycle for Venues: Analyze, Optimize & Evolve Your Sonic Identity",
      excerpt: "Learn how continuous music curation optimization enhances venue atmosphere through data-driven refinement and expert human curation.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0fc2b036_43b114fc2a27cb08c8b377305973c588_X-Design.png",
      alt: "Music analytics and optimization process for venue soundscapes",
      category: "Strategy",
      date: "2025-01-15", // ISO format for datetime
      displayDate: "January 15, 2025",
      author: "SensEar Team",
      link: createPageUrl("music-curation-cycle-venues")
    },
    {
      title: "Building a Brand People Can Hear",
      excerpt: "Strategic guide to sonic branding and audio identity development. Create memorable brand experiences through music and sound design.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/c9661c684_AI_Generated_Image_2025-10-17.png",
      alt: "Sonic branding strategy building brand identity through music",
      category: "Branding",
      date: "2025-02-12",
      displayDate: "February 12, 2025",
      author: "SensEar Team",
      link: createPageUrl("building-brand-people-can-hear")
    },
    {
      title: "Sound strategy that sells: how background music shapes customer behavior",
      excerpt: "Field research reveals how strategic background music increases sales and dwell time in retail and hospitality environments.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e9f53224a_ladies.png",
      alt: "Retail environment showing background music influence on shopping behavior",
      category: "Research",
      date: "2025-03-08",
      displayDate: "March 8, 2025",
      author: "Research Team",
      link: createPageUrl("background-music-shapes-customer-behavior")
    },
    {
      title: "How your service environment shapes perceived wait time",
      excerpt: "How music and environmental design can transform the waiting experience and improve customer satisfaction.",
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1472df5cb_aiease_1760708154014.jpg",
      alt: "Service environment design using music to improve customer waiting experience",
      category: "Research",
      date: "2025-03-15", // ISO format for datetime
      displayDate: "March 15, 2025",
      author: "Research Team",
      link: createPageUrl("service-environment-shapes-wait-time")
    }
  ];

  useEffect(() => {
    document.title = "Music Curation Blog | SensEar Insights & Research";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Expert insights on music curation, sonic branding, and hospitality atmosphere. Research-backed articles from SensEar's music experts.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
    const localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    const languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'en';
      document.head.appendChild(meta);
    }

    document.documentElement.lang = 'en';

    // Add robots meta tag - PRIMARY BLOG PAGE: index, follow
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    // Add googlebot specific tag
    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    if (googlebotMeta) {
      googlebotMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.name = 'googlebot';
      googlebotMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(googlebotMeta);
    }

    // Add canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/blog');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/blog';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Music Curation Blog | SensEar Insights & Research' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=1600&q=80' },
      { property: 'og:url', content: 'https://sensear.music/blog' },
      { property: 'og:type', content: 'website' }
    ];

    ogTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Music Curation Blog | SensEar Insights & Research' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1455734729978-db1ae4f687fc?w=1600&q=80' }
    ];

    twitterTags.forEach(tag => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
        document.head.appendChild(metaTag);
      }
    });

    // Add structured data
    const structuredData = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music",
        "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
        "sameAs": [
          "https://www.facebook.com/61575909304249/",
          "https://www.instagram.com/sensear.music"
          // Removed LinkedIn: "https://www.linkedin.com/company/sensear"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "SensEar",
        "url": "https://sensear.music",
        "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg", // A general representative image
        "description": "SensEar provides expert music curation, sonic branding, and atmosphere design services for luxury hospitality and retail, elevating guest experiences globally.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Global",
          "addressRegion": "Worldwide",
          "addressCountry": "US" // Assuming a base country for registration or primary operation
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-800-SEN-SEAR", // Placeholder telephone for demonstration
          "contactType": "Customer Service",
          "areaServed": "Worldwide",
          "availableLanguage": ["en"]
        },
        "priceRange": "$$$", // Indicative price range
        "sameAs": [
          "https://www.facebook.com/61575909304249/",
          "https://www.instagram.com/sensear.music",
          "https://www.linkedin.com/company/sensear" // Re-adding LinkedIn for comprehensive LocalBusiness profile
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://sensear.music/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://sensear.music/blog"
          }
        ]
      }
    ];

    // Add BlogPosting schema for each blog post on the index page
    posts.forEach(post => {
      structuredData.push({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": {
          "@type": "ImageObject",
          "url": post.image
        },
        "url": `https://sensear.music${post.link}`, // Construct absolute URL
        "datePublished": post.date,
        "dateModified": post.date, // Use published date if modification date is not available
        "author": {
          "@type": "Person",
          "name": post.author
        },
        "publisher": {
          "@type": "Organization",
          "name": "SensEar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://sensear.music${post.link}`
        },
        "description": post.excerpt
      });
    });

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    // Add scroll tracking for parallax effect
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // posts is not a dependency as it's defined once and static

  return (
    <div className="bg-[#faebe3]">
      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Blog section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-black mb-6 leading-[1.1]">
              Our Music Curation Blog
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Insights, trends, and expertise from the world of luxury music curation.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8270df064_pxbee_2025-10-14_21-33-37.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8270df064_pxbee_2025-10-14_21-33-37.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8270df064_pxbee_2025-10-14_21-33-37.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Music curation blog insights and industry research articles"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8270df064_pxbee_2025-10-14_21-33-37.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8270df064_pxbee_2025-10-14_21-33-37.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8270df064_pxbee_2025-10-14_21-33-37.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Music curation blog insights and industry research articles"
                className="absolute w-full h-full object-cover hidden md:block"
                style={{ 
                  top: '-15%',
                  height: '130%',
                  transform: `translateY(${scrollY * 0.15}px)`,
                  transformOrigin: 'center top'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
          { label: "Blog", path: createPageUrl("Blog") }
        ]} />
      </div> */}

      {/* Featured Post */}
      <section className="py-12 bg-[#faebe3]" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-6">
          <Badge className="mb-4 bg-peach text-black border border-black/20">Featured</Badge>
          <article>
            <Link to={posts[0].link} className="block" aria-label={`Read full article: ${posts[0].title}`}>
              <Card className="overflow-hidden hover:shadow-2xl transition-shadow bg-white group cursor-pointer">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                    <img
                      src={posts[0].image}
                      srcSet={`${posts[0].image} 800w,
                              ${posts[0].image.replace('w=800', 'w=1200')} 1200w`}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt={posts[0].alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-black/5 text-black border-black/10">
                      {posts[0].category}
                    </Badge>
                    <h2 id="featured-heading" className="text-3xl lg:text-4xl font-bold text-black mb-4 leading-[1.25]">
                      {posts[0].title}
                    </h2>
                    <p className="text-black/70 text-lg mb-6 leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-black/60 mb-6" aria-label="Article metadata">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        <time dateTime={posts[0].date}>{posts[0].displayDate}</time>
                      </div>
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" aria-hidden="true" />
                        <span>{posts[0].author}</span>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-2 text-black font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Read Full Article</span>
                      <ArrowRight className="w-5 h-5" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </article>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="recent-articles-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="recent-articles-heading" className="text-3xl font-bold text-black mb-8 leading-[1.25]">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {posts.slice(1).map((post, index) => (
              <article role="listitem" key={post.link}>
                <Link to={post.link} className="block" aria-label={`Read more about: ${post.title}`}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={post.image}
                        srcSet={`${post.image} 800w, ${post.image.replace('w=800', 'w=1200')} 1200w`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        alt={post.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0" />
                    </div>
                    <div className="p-6">
                      <Badge className="mb-3 bg-black/5 text-black border-black/10">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-black/70 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-black/60 mb-4" aria-label="Article metadata">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" aria-hidden="true" />
                          <time dateTime={post.date}>{post.displayDate}</time>
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3" aria-hidden="true" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                        <span>Read More</span>
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-[#faebe3] text-black" aria-labelledby="newsletter-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="newsletter-heading" className="text-4xl font-bold mb-4 leading-[1.25]">
            Stay Updated
          </h2>
          <p className="text-xl text-black/70 mb-8">
            <span>Subscribe to receive our latest insights and industry news. Learn more </span><Link to={createPageUrl("AboutUs")} className="underline hover:text-black font-semibold">about our team</Link><span> or </span><Link to={createPageUrl("ContactUs")} className="underline hover:text-black font-semibold">get in touch</Link><span> to discuss your project.</span>
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" aria-label="Newsletter subscription form">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-black bg-white border-black/20"
              aria-label="Email address"
              required
            />
            <Button className="bg-black hover:bg-black/80 text-white px-8 py-4 rounded-lg font-semibold transition-colors" aria-label="Subscribe to newsletter">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
