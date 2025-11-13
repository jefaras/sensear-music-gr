import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight, MessageSquare, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumbs from "../components/Breadcrumbs";

export default function BlueBamboo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Blue Bamboo Case Study | SensEar Music Curation";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "How SensEar transformed Blue Bamboo Thai restaurant in Athens with curated playlists and optimized audio. A sonic branding success story.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

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

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robotsMeta);
    }

    let googlebotMeta = document.querySelector('meta[name="googlebot"]');
    if (googlebotMeta) {
      googlebotMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      googlebotMeta = document.createElement('meta');
      googlebotMeta.name = 'googlebot';
      googlebotMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(googlebotMeta);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/blue-bamboo');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/blue-bamboo';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Blue Bamboo Case Study | SensEar Music Curation' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png' },
    { property: 'og:url', content: 'https://sensear.music/blue-bamboo' },
    { property: 'og:type', content: 'article' }];

    ogTags.forEach((tag) => {
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

    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Blue Bamboo Case Study | SensEar Music Curation' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png' }];

    twitterTags.forEach((tag) => {
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

    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SensEar",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Blue Bamboo Case Study | SensEar Music Curation",
      "description": description,
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png",
      "author": {
        "@type": "Organization",
        "name": "SensEar"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SensEar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"
        }
      },
      "datePublished": "2025-01-15"
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
        "name": "Case Studies",
        "item": "https://sensear.music/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Blue Bamboo",
        "item": "https://sensear.music/blue-bamboo"
      }]
    }];

    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else {
      structuredDataScript = document.createElement('script');
      structuredDataScript.type = 'application/ld+json';
      structuredDataScript.textContent = JSON.stringify(structuredData);
      document.head.appendChild(structuredDataScript);
    }

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Note: These arrays are kept for context, but the JSX now uses hardcoded list items as per the outline.
  const problems = [
  "The music didn't have a narrative—it felt disjointed and generic.",
  "Inconsistent audio quality and no sound control across the venue.",
  "Limited music budget and concerns over licensing compliance."];

  const solutions = [
  "Created signature playlists tailored to Thai-fusion concept, flowing seamlessly from day to night.",
  "Optimized audio system for clarity and balance, adding zone control for different areas.",
  "Established licensing compliance and provided cost-effective music solution within the budget."];

  const results = [
  "Customer dwell time increased by 30%, leading to higher sales.",
  "The ambiance and atmosphere is now recognized as a core brand element.",
  "Staff and guests alike report a sense of place and identity through the music."];

  return (
    <div className="bg-[#faebe3]">
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .slide-up-1 {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .slide-up-2 {
          animation: slideUp 0.8s ease-out 0.2s forwards;
          opacity: 0;
        }
        
        .slide-up-3 {
          animation: slideUp 0.8s ease-out 0.4s forwards;
          opacity: 0;
        }
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Blue Bamboo Case Study section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Building Blue Bamboo's<br />
              timeless Thai fusion atmosphere
            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                How SensEar crafted an all-day soundtrack that balances Thai heritage with contemporary Athens energy
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Blue Bamboo Thai restaurant with curated music atmosphere"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bdff56d5e_blue_bamboo_collage.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Blue Bamboo Thai restaurant with curated music atmosphere"
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
        { label: "Case Studies", path: createPageUrl("CaseStudies") },
        { label: "Blue Bamboo", path: createPageUrl("blue-bamboo") }]
        } />
      </div> */}

      {/* Main Content Section */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Meet Blue Bamboo */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 justify-center">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg"
              alt="Blue Bamboo logo"
              className="w-20 h-20 rounded-lg object-cover border-2 border-black/10" />

            <h2 className="text-3xl sm:text-4xl font-bold">Meet Blue Bamboo</h2>
          </div>
          <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            Blue Bamboo blends modern Thai cuisine with an Athens edge. Its chic design and vibrant flavors draw a stylish crowd, yet the music struggled to keep pace with the brand's energy.
          </p>
		      <div className="max-w-4xl mx-auto px-6 text-center">      
                <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-6">
                  "We wanted a seamless musical journey that evolves as naturally as the meal—calm afternoons that build into electric evenings, all cohesively tied to our brand essence." – Blue Bamboo Owner
                </blockquote>
          </div>
          {/* Three Process Cards with Arrows */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Card 1: Why They Called Us */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" aria-hidden="true" />
                  Why They Called Us
                </h3>

                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">The music didn't have a narrative—it felt disjointed and generic.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Inconsistent audio quality and no sound control across the venue.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Limited music budget and concerns over licensing compliance.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-black/40" aria-hidden="true" />
            </div>

            {/* Card 2: How We Responded */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6" aria-hidden="true" />
                  How We Responded
                </h3>
                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Created signature playlists tailored to Thai-fusion concept, flowing seamlessly from day to night.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Optimized audio system for clarity and balance, adding zone control for different areas.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Established licensing compliance and provided cost-effective music solution within the budget.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-black/40" aria-hidden="true" />
            </div>

            {/* Card 3: What They Got */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" aria-hidden="true" />
                  What They Got
                </h3>

                <ul className="space-y-4" role="list">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Customer dwell time increased by 30%, leading to higher sales.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">The ambiance and atmosphere is now recognized as a core brand element.</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                    <p className="text-black/80">Staff and guests alike report a sense of place and identity through the music.</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          		<div className="max-w-4xl mx-auto px-6 text-center">
                <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-6">
                  "The music makes our space feel alive—it's become such a big part of the Blue Bamboo experience that guests actually ask us about it." – Blue Bamboo Owner
                </blockquote>
              </div>
          </div>
      </section>
        
      {/* CTA Section */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-black mb-6 leading-[1.25]">
            Build Your Restaurant's Sonic Identity
          </h2>
          <p className="text-xl text-black/70 mb-8">
            <span>Create a signature atmosphere like Blue Bamboo. Explore our </span><Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black font-semibold">restaurant solutions</Link><span> or view more </span><Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">success stories</Link><span>.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black hover:bg-black/80 text-white" aria-label="Get Similar Results">
                Get Similar Results
              </Button>
            </Link>
            <Link to={createPageUrl("CaseStudies")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white" aria-label="See More Success Stories">
                See More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <nav className="text-center py-8 bg-[#faebe3]" aria-label="Case studies navigation">
        <Link to={createPageUrl("CaseStudies")}>
          <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Return to Case Studies Overview
          </Button>
        </Link>
      </nav>
    </div>);
}