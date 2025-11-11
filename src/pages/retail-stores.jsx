
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function RetailStores() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Retail Store Music Solutions | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Strategic retail music curation that increases customer engagement and sales. Create memorable shopping experiences with sonic branding.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/retail-stores');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/retail-stores';
      document.head.appendChild(canonicalLink);
    }

    const newImageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg';

    const ogTags = [
    { property: 'og:title', content: 'Retail Store Music Solutions | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: newImageUrl },
    { property: 'og:url', content: 'https://sensear.music/retail-stores' },
    { property: 'og:type', content: 'website' }];

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
    { name: 'twitter:title', content: 'Retail Store Music Solutions | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: newImageUrl }];

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
      "@type": "Service",
      "name": "Retail Store Music Curation",
      "description": "Attract, engage and elevate the atmosphere of your retail store with the right sound atmospherics that influence shopping decision-making.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Retail Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Retail Stores"
      }
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
        "name": "Industries",
        "item": "https://sensear.music/industries"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Retail Stores",
        "item": "https://sensear.music/retail-stores"
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

  return (
    <div className="bg-[#faebe3]">
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Retail Stores section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1]">
              Attract, engage &amp; elevate<br />
              the atmosphere of your retail store
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Transform shopping experiences with the right sound atmospherics that influences shopping decision-making.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-6">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Modern retail store with strategic music curation influencing shopping behavior"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Modern retail store with strategic music curation influencing shopping behavior"
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
        { label: "Industries", path: createPageUrl("Industries") },
        { label: "Retail Stores", path: createPageUrl("retail-stores") }]
        } />
      </div> */}

      <section className="py-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="problems-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="problems-heading" className="text-2xl sm:text-3xl font-bold text-black text-center mb-6">Problems We Solve</h2>
          <p className="text-center text-black/70 mb-10 max-w-3xl mx-auto px-4">
            Studies show that the right background music increases customer dwell time and boosts sales. SensEar designs music solutions that enhance the shopping experience and create emotional connections between customers and brands.
          </p>
          <div className="grid md:grid-cols-2 gap-8" role="list">
            <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Low Customer Engagement</h3>
                  <p className="text-sm sm:text-base text-black/70">We create welcoming auditory experiences that draw people in.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Lack of Purchase Motivation</h3>
                  <p className="text-sm sm:text-base text-black/70">Our curated tracks inspire the right mood to drive buying decisions.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Weak Brand Recall</h3>
                  <p className="text-sm sm:text-base text-black/70">We craft signature sounds that make your brand memorable.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-16">
            <p className="text-black/70 mb-6">
              Discover <Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="underline hover:text-black font-semibold">how brand-fit music converts browsers into buyers</Link> and learn about <Link to={createPageUrl("background-music-shapes-customer-behavior")} className="underline hover:text-black font-semibold">music's influence on customer behavior</Link>. Explore our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">signature playlists service</Link>.
            </p>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg whitespace-normal" aria-label="Enhance Your Shopping Experience">Enhance Your Shopping Experience</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
