
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Music, Sparkles, SlidersHorizontal, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "SensEar - Bespoke Music Curation & Sonic Branding";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Bespoke music curation and sonic branding for hotels, restaurants, and events. Elevate your atmosphere with custom playlists. Book your free consultation.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
    let localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'en';
      document.head.appendChild(meta);
    }

    // Set HTML lang attribute
    document.documentElement.lang = 'en';

    // Add robots meta tag - PRIMARY PAGE: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'SensEar - Bespoke Music Curation & Sonic Branding' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg' },
    { property: 'og:url', content: 'https://sensear.music/' },
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

    // Twitter Card tags
    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'SensEar - Bespoke Music Curation & Sonic Branding' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg' }];


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

    // Add structured data
    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SensEar",
      "alternateName": "SensEar Music Curation",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "description": "Bespoke music curation and sonic branding for hotels, restaurants, and events.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+30-6976994212",
        "email": "hello@sensear.music",
        "contactType": "Customer Service"
      },
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]

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

  const clients = [
  {
    name: "Klouvi Bar",
    location: "Athens",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg"
  },
  {
    name: "Blue Bamboo",
    location: "Athens-Serifos",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg"
  },
  {
    name: "The Rooster",
    location: "Antiparos",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/84145d1c2_The-Rooster_final.jpg"
  },
  {
    name: "Beach House",
    location: "Antiparos",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg"
  },
  {
    name: "Pelicanos",
    location: "Sifnos",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg"
  },
  {
    name: "Yam",
    location: "Antiparos",
    logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png"
  }];

  const blogPosts = [
  {
    title: "Three Reasons to Make Music Part of Your Luxury Hospitality Marketing Strategy",
    description: <>Curated music is a practical way to shape how guests feel, what they remember, and how they spend. Learn how <Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black">hotels and resorts</Link> benefit from strategic music curation.</>,
    link: createPageUrl("three-reasons-make-music-hospitality"),
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg",
    alt: "Luxury hotel interior lobby showcasing ambient music design for hospitality",
    linkText: "Read more"
  },
  {
    title: "How Brand-Fit Music Converts Browsers into Buyers",
    description: <>Evidence-based research showing how brand-aligned music increases sales by 9.1%. Perfect for <Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black">restaurants and bars</Link> looking to enhance their atmosphere.</>,
    link: createPageUrl("brand-music-converts-browsers-buyers"),
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg",
    alt: "Restaurant with ambient lighting demonstrating how music influences customer behavior and sales",
    linkText: "Explore insights"
  },
  {
    title: "What Exactly Does a Music Curator Do?",
    description: <>Learn how the right music translates your visual language into an emotional experience. Explore our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black">signature playlists service</Link>.</>,
    link: createPageUrl("what-exactly-does-music-curator-do"),
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png",
    alt: "Music curator at work selecting tracks for bespoke playlist curation service",
    linkText: "Read article"
  }];


  return (
    <div className="bg-[#faebe3]">
      <style>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll-left 30s linear infinite;
          white-space: nowrap;
          width: fit-content;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero Section - with silver foil background */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hero section">
        {/* Text content - constrained by max-w-7xl */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-bold text-black mb-6 leading-[1.1]">Music Curation that turns Spaces into Experiences

            </h1>
            
            <div className="mb-8 max-w-5xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">Every venue has a story. Let music tell yours. <br/>
We craft bespoke Playlists for Hotels, Restaurants, Bars & Events that create atmosphere, emotional connections & loyal guests.<br/> 
Not just background music.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to={createPageUrl("ContactUs")}>
                <Button
                  className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto h-14"
                  aria-label="Discover Your Sound">
                  Discover Your Sound
                </Button>
              </Link>
              <Link to={createPageUrl("Services")}>
                <Button
                  variant="outline"
                  className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto h-14"
                  aria-label="Explore our services">
                  Explore our services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image - FULL WIDTH 1800px with WORKING parallax */}
        <div className="w-full px-6">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            {/* Container: Shorter (40% height) to create parallax window */}
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Image: Larger (130% scale) so it has room to move */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2be61da07_upscalemedia-transformed_ADOBE.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2be61da07_upscalemedia-transformed_ADOBE.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/2be61da07_upscalemedia-transformed_ADOBE.png 2400w"


                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Luxury rooftop bar with stunning sunset views and ambient music atmosphere"
                className="absolute w-full h-full object-cover"
                style={{
                  top: '-15%',
                  height: '130%',
                  transform: `translateY(${scrollY * 0.15}px)`,
                  transformOrigin: 'center top'
                }} />

            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Black background with infinite scroll */}
      <section className="py-20 bg-black overflow-hidden" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="clients-heading" className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">Now playing in venues across Greece</h2>
          
          {/* Infinite scrolling logo container */}
          <div className="relative">
            <div className="flex gap-12 animate-scroll">
              {/* First set of logos */}
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
                <p className="text-sm text-white/60 mt-1">Athens</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
                <p className="text-sm text-white/60 mt-1">Athens-Serifos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/84145d1c2_The-Rooster_final.jpg" alt="The Rooster logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">The Rooster</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
                <p className="text-sm text-white/60 mt-1">Sifnos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
                <p className="text-sm text-white/60 mt-1">Athens</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
                <p className="text-sm text-white/60 mt-1">Athens-Serifos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/84145d1c2_The-Rooster_final.jpg" alt="The Rooster logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">The Rooster</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
                <p className="text-sm text-white/60 mt-1">Sifnos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo - SensEar music curation client" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview - with #faebe3 background color */}
      <section className="py-24 bg-[#faebe3]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              Your one-stop partner for Music Curation
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              We provide all the music solutions that will elevate your space or event and leave a lasting impression. Explore our <Link to={createPageUrl("Services")} className="underline hover:text-black">full range of music curation services</Link>.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {/* Service 1: Signature Playlists */}
            <article role="listitem">
              <Link to={createPageUrl("signature-playlists")} aria-label="Learn more about Signature Playlists">
                <div className="group rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg"
                      srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg 800w, https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg 1200w"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      alt="Bespoke music curation and playlist creation for unique venue atmosphere"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" aria-hidden="true" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-80 rounded-full w-12 h-12 flex items-center justify-center" aria-hidden="true">
                        <Music className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-black mb-3">Signature Playlists</h3>
                    <p className="text-black/70 mb-4 flex-grow text-sm">Bespoke, brand-exclusive playlists sourced from rare archives for venues that refuse to sound generic.</p>
                    <div className="flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>

            {/* Service 2: Music for Events */}
            <article role="listitem">
              <Link to={createPageUrl("event-soundtracks")} aria-label="Learn more about Music for Events">
                <div className="group rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg"
                      srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 800w, https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 1200w"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      alt="Professional event production with immersive music curation and AV setup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" aria-hidden="true" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-80 rounded-full w-12 h-12 flex items-center justify-center" aria-hidden="true">
                        <Sparkles className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-black mb-3">Music for Events</h3>
                    <p className="text-black/70 mb-4 flex-grow text-sm">Artfully selected and curated soundtracks & live DJ sets that elevate events into engaging, unforgettable moments.</p>
                    <div className="flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>

            {/* Service 3: Sonic Strategy */}
            <article role="listitem">
              <Link to={createPageUrl("sonic-strategy")} aria-label="Learn more about Sonic Strategy">
                <div className="group rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg"
                      srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg 800w, https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg 1200w"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      alt="Strategic sonic branding consultation and music curation planning session"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" aria-hidden="true" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-80 rounded-full w-12 h-12 flex items-center justify-center" aria-hidden="true">
                        <BarChart className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-black mb-3">Sonic Strategy</h3>
                    <p className="text-black/70 mb-4 flex-grow text-sm">Ultra-specialized music consultancy & sound branding guidelines that forge an inimitable sonic identity.</p>
                    <div className="flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>

            {/* Service 4: Audio Upgrades */}
            <article role="listitem">
              <Link to={createPageUrl("audio-upgrades")} aria-label="Learn more about Audio Upgrades">
                <div className="group rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg"
                      srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg 800w, https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg 1200w"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      alt="Professional audio equipment optimization and acoustic calibration for venues"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" aria-hidden="true" />
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-80 rounded-full w-12 h-12 flex items-center justify-center" aria-hidden="true">
                        <SlidersHorizontal className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold text-black mb-3">Audio Upgrades</h3>
                    <p className="text-black/70 mb-4 flex-grow text-sm">Professional on-site sound checks, optimization and audio calibration, that fix any sound related issue.</p>
                    <div className="flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* How We Help You Succeed */}
      <section className="py-16 md:py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 w-full">
                    <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 text-center lg:text-left">
                        How We Help You Succeed
                    </h2>
                    <ul className="space-y-4 md:space-y-6 mt-6 md:mt-8 w-full" role="list">
                        <li className="flex items-start gap-3 w-full">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black mt-0.5 md:mt-1 flex-shrink-0" aria-hidden="true" />
                          <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-sm sm:text-base md:text-lg text-black break-words">Delight Your Guests</h3>
                              <p className="text-xs sm:text-sm md:text-base text-black/70 break-words">Increase satisfaction and encourage longer visits.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 w-full">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black mt-0.5 md:mt-1 flex-shrink-0" aria-hidden="true" />
                          <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-sm sm:text-base md:text-lg text-black break-words">Elevate Your Brand</h3>
                              <p className="text-xs sm:text-sm md:text-base text-black/70 break-words">Strengthen perception and loyalty with a memorable atmosphere.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 w-full">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black mt-0.5 md:mt-1 flex-shrink-0" aria-hidden="true" />
                          <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-sm sm:text-base md:text-lg text-black break-words">Empower Your Team</h3>
                              <p className="text-xs sm:text-sm md:text-base text-black/70 break-words">Boost staff morale & productivity with energizing music.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 w-full">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black mt-0.5 md:mt-1 flex-shrink-0" aria-hidden="true" />
                          <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-sm sm:text-base md:text-lg text-black break-words">Total Control</h3>
                              <p className="text-xs sm:text-sm md:text-base text-black/70 break-words">Take full control over your venue's music style & flow.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3 w-full">
                          <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black mt-0.5 md:mt-1 flex-shrink-0" aria-hidden="true" />
                          <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-sm sm:text-base md:text-lg text-black break-words">Seamless Experience</h3>
                              <p className="text-xs sm:text-sm md:text-base text-black/70 break-words">Ensure a smooth music experience across every area of your venue.</p>
                          </div>
                        </li>
                    </ul>
                    <div className="mt-8 md:mt-12 text-center lg:text-left w-full">
                      <Link to={createPageUrl("Industries")} className="inline-block w-full sm:w-auto">
                          <Button className="bg-black hover:bg-black/80 text-white px-6 md:px-8 h-14 text-sm sm:text-base md:text-lg group w-full sm:w-auto rounded-full" aria-label="Explore Solutions for Your Venue">
                              Explore Solutions for Your Venue
                              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </Button>
                      </Link>
                    </div>
                </div>
                <div className="order-1 lg:order-2 w-full">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e7baf90ef_car-1.png"
                  srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e7baf90ef_car-1.png 800w,
                                  https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e7baf90ef_car-1.png 1200w,
                                  https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e7baf90ef_car-1.png 1600w"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Vintage car with SensEar branding stickers representing mobile audio experiences"
                  className="w-full h-full object-cover" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* The Art of Atmosphere - Featured Blog Posts */}
      <section className="py-24 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <h2 id="blog-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">The Curation Journal

            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Read how music shapes perception, emotion, and brand identity through sound. Discover more <Link to={createPageUrl("Blog")} className="underline hover:text-black">insights on our blog</Link>.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-12" role="list">
            {/* Blog Post 1 */}
            <article role="listitem">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg"
                    srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg 800w, https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg 1200w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Luxury hotel interior lobby showcasing ambient music design for hospitality"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                    Three Reasons to Make Music Part of Your Luxury Hospitality Marketing Strategy
                  </h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Curated music is a practical way to shape how guests feel, what they remember, and how they spend. Learn how <Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black">hotels and resorts</Link> benefit from strategic music curation.
                  </p>
                  <Link to={createPageUrl("three-reasons-make-music-hospitality")} className="inline-flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform" aria-label="Read more about Three Reasons to Make Music Part of Your Luxury Hospitality Marketing Strategy">
                    <span>Read more</span>
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </article>

            {/* Blog Post 2 */}
            <article role="listitem">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg"
                    srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg 800w, https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg 1200w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Restaurant with ambient lighting demonstrating how music influences customer behavior and sales"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                    How Brand-Fit Music Converts Browsers into Buyers
                  </h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Evidence-based research showing how brand-aligned music increases sales by 9.1%. Perfect for <Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black">restaurants and bars</Link> looking to enhance their atmosphere.
                  </p>
                  <Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="inline-flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform" aria-label="Read more about How Brand-Fit Music Converts Browsers into Buyers">
                    <span>Explore insights</span>
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </article>

            {/* Blog Post 3 */}
            <article role="listitem">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png"
                    srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png 800w, https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png 1200w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Music curator at work selecting tracks for bespoke playlist curation service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                    What Exactly Does a Music Curator Do?
                  </h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Learn how the right music translates your visual language into an emotional experience. Explore our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black">signature playlists service</Link>.
                  </p>
                  <Link to={createPageUrl("what-exactly-does-music-curator-do")} className="inline-flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform" aria-label="Read more about What Exactly Does a Music Curator Do?">
                    <span>Read article</span>
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </article>
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Blog")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white group rounded-full" aria-label="View all blog articles">
                View all articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}
