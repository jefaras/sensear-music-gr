import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, ArrowLeft, ArrowLeftRight, ArrowUpDown, Music, Sparkles, BarChart, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music Curation Services | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Discover SensEar's music curation services: Sonic Strategy, Signature Playlists, Event Soundtracks, and Audio Upgrades. Transform your venue's atmosphere.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/services');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/services';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Music Curation Services | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/services' }];

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
    { name: 'twitter:title', content: 'Music Curation Services | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80' }];

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
      "logo": "https://qtrypzzcjebvfciynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Music Curation and Sonic Branding",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Music Curation Services",
        "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sonic Strategy",
            "description": "Ultra-specialized music consultancy and audio branding guidelines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Signature Playlists",
            "description": "Bespoke, brand-exclusive playlists sourced from rare archives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Soundtracks",
            "description": "Artfully selected, custom-curated soundtracks and seamless AV production that elevate events into immersive, unforgettable moments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audio Upgrades",
            "description": "Professional on-site sound checks and audio calibration"
          }
        }]
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
        "name": "Services",
        "item": "https://sensear.music/services"
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

      {/* Hero Section - Matches Home Page Visuals */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Services section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Which music service<br />
              do you need?
            </h1>
          </div>
        </div>

        {/* Hero Image with parallax - Same container style as Home */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music equipment and sound system setup"
                className="absolute w-full h-full object-cover md:hidden" />

              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music equipment and sound system setup"
                className="absolute w-full h-full object-cover hidden md:block"
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

      {/* Intro Section - Black Background like Home */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="lg:order-2 lg:min-w-[280px]">
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
                How our music<br />services work
              </h2>
            </div>
            
            <div className="lg:order-1 lg:mt-[200px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                SensEar offers four connected, customised music services for venues and brands that rely on atmosphere.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed mb-6">
                We do more than fill silence with music. We use sound to transform your atmosphere and support your goals.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                Start with the one that matches where you are today, then add the others as your spaces & needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Guide Section ("Is this for you?") - Matches Home Page Layout */}
      <section className="py-24 bg-white" aria-labelledby="services-heading">
        <div className="mx-auto px-6" style={{ maxWidth: '1800px' }}>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 id="services-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Is this for you?</h2>
            <p className="text-xl text-black/70">Use this guide to see which service fits you.</p>
          </div>

          {/* Signature Playlists - Full Width Style (like Home) */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
                    Signature Playlists
                  </h3>
                  
                  <div className="lg:mt-[100px]">
                    <div className="mb-8">
                      <span className="font-bold text-black text-xl block mb-2">Best for:</span>
                      <p className="text-2xl md:text-3xl text-black leading-relaxed">Venues that want daily, branded background music.</p>
                    </div>
                    <div className="mb-8">
                      <span className="font-bold text-black text-xl block mb-2">You get:</span>
                      <p className="text-xl md:text-2xl text-black/80 leading-relaxed">Curated playlists per space and time of day, central control & regular updates.</p>
                    </div>
                    <Link to={createPageUrl("signature-playlists")} className="inline-flex items-center text-black font-medium text-xl group">
                      <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Explore Signature Playlists</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="lg:order-2 hidden lg:block lg:mt-[60px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/013a4722f_cyprpn9zest1wg173m2j.jpg"
                    alt="Bespoke music curation"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </article>
          </div>

          {/* Event Soundtracks - Full Width Style (like Home) */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                <div className="lg:order-1 hidden lg:block lg:mt-[60px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d4a085ed9_EventSoundtracks-upsc2-cropped.jpg"
                    alt="Event soundtracks and production"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>

                <div className="lg:order-2">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
                    Event Soundtracks
                  </h3>

                  <div className="lg:mt-[100px]">
                    <div className="mb-8">
                      <span className="font-bold text-black text-xl block mb-2">Best for:</span>
                      <p className="text-2xl md:text-3xl text-black leading-relaxed">One off events such as launches, conferences, weddings and shows.</p>
                    </div>
                    <div className="mb-8">
                      <span className="font-bold text-black text-xl block mb-2">You get:</span>
                      <p className="text-xl md:text-2xl text-black/80 leading-relaxed">Complete soundtrack or live DJ set synced to all key moments (optional AV support).</p>
                    </div>
                    <Link to={createPageUrl("event-soundtracks")} className="inline-flex items-center text-black font-medium text-xl group">
                      <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Explore Event Soundtracks</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sonic Strategy & Audio Upgrades - Split Row (Matches Home Page) */}
          <div className="grid md:grid-cols-2 gap-8 mb-8" role="list">
            {/* Sonic Strategy */}
            <article role="listitem" className="bg-[#faebe3] p-8 rounded-lg h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
                Sonic Strategy
              </h3>
              
              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div>
                      <span className="font-bold text-black text-lg block mb-1">Best for:</span>
                      <p className="text-black leading-relaxed">Brands that want a clear sonic identity across their locations & channels.</p>
                    </div>
                    <div>
                      <span className="font-bold text-black text-lg block mb-1">You get:</span>
                      <p className="text-black/80 leading-relaxed">Practical sonic guidelines for venues, content and rolling out a consistent sound.</p>
                    </div>
                  </div>
                  
                  <Link to={createPageUrl("sonic-strategy")} className="inline-flex items-center text-black font-medium text-lg group mt-6">
                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Explore Sonic Strategy</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>

                <div className="hidden lg:block w-full">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
                    alt="Strategic sonic branding consultation"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </article>

            {/* Audio Upgrades */}
            <article role="listitem" className="bg-[#faebe3] p-8 rounded-lg h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
                Audio Upgrades
              </h3>

              <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div>
                      <span className="font-bold text-black text-lg block mb-1">Best for:</span>
                      <p className="text-black leading-relaxed">Venues with harsh or weak sound, even if playlists are right.</p>
                    </div>
                    <div>
                      <span className="font-bold text-black text-lg block mb-1">You get:</span>
                      <p className="text-black/80 leading-relaxed">On-site sound audit and an upgrade plan with trusted partners for a balanced mix.</p>
                    </div>
                  </div>

                  <Link to={createPageUrl("audio-upgrades")} className="inline-flex items-center text-black font-medium text-lg group mt-6">
                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Explore Audio Upgrades</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>

                <div className="hidden lg:block w-full">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
                    alt="Professional audio equipment optimization"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* If this is you, start here - Black Section (High Contrast) */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-center text-white">If this is you, start here</h2>
          
          <div className="space-y-6">
            <Link to={createPageUrl("signature-playlists")} className="block group">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                <span className="text-lg md:text-xl text-center md:text-left">Your venue's music feels generic or off brand</span>
                <div className="flex items-center gap-2 text-peach font-bold group-hover:translate-x-1 transition-transform whitespace-nowrap">
                  Signature Playlists <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl("event-soundtracks")} className="block group">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                <span className="text-lg md:text-xl text-center md:text-left">Planning a launch, show, conference or special dinner</span>
                <div className="flex items-center gap-2 text-peach font-bold group-hover:translate-x-1 transition-transform whitespace-nowrap">
                  Event Soundtracks <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl("sonic-strategy")} className="block group">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                <span className="text-lg md:text-xl text-center md:text-left">Rebranding, expanding or want one clear sound across locations and channels</span>
                <div className="flex items-center gap-2 text-peach font-bold group-hover:translate-x-1 transition-transform whitespace-nowrap">
                  Sonic Strategy <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>

            <Link to={createPageUrl("audio-upgrades")} className="block group">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 border border-white/20 rounded-xl hover:bg-white/10 transition-colors">
                <span className="text-lg md:text-xl text-center md:text-left">Guests or staff complain about loudness, echo or "cannot hear each other"</span>
                <div className="flex items-center gap-2 text-peach font-bold group-hover:translate-x-1 transition-transform whitespace-nowrap">
                  Audio Upgrades <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How services work together - Peach Background */}
      <section className="py-24 bg-[#faebe3]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-16 text-center">How services work together</h2>
          
          <div className="relative max-w-4xl mx-auto py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-20 lg:gap-y-16 justify-items-center items-center">
                
                {/* 1. Signature Playlists (Top Left) */}
                <div className="relative flex flex-col items-center lg:col-start-1 lg:row-start-1">
                    <div className="text-center max-w-sm">
                        <p className="text-lg lg:text-2xl font-medium text-black leading-relaxed">
                            Many clients define their everyday sound first with <Link to={createPageUrl("signature-playlists")} className="underline font-bold hover:text-black decoration-2 underline-offset-4">Signature Playlists</Link>.
                        </p>
                    </div>
                    {/* Mobile Arrow Down */}
                    <div className="lg:hidden text-black mt-6">
                        <ArrowDown className="w-6 h-6" />
                    </div>
                    {/* Desktop Arrow Right (to SS) */}
                    <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-black">
                         <ArrowRight className="w-6 h-6" />
                    </div>
                </div>

                {/* 2. Sonic Strategy (Top Right) */}
                <div className="relative flex flex-col items-center lg:col-start-2 lg:row-start-1">
                     <div className="text-center max-w-sm">
                        <p className="text-lg text-black/80 leading-relaxed">
                            Then add <Link to={createPageUrl("sonic-strategy")} className="underline font-bold hover:text-black decoration-2 underline-offset-4">Sonic Strategy</Link> to establish their brand sound.
                        </p>
                    </div>
                    {/* Mobile Arrow Down */}
                    <div className="lg:hidden text-black mt-6">
                        <ArrowDown className="w-6 h-6" />
                    </div>
                    {/* Desktop Arrow Down (to ES) */}
                    <div className="hidden lg:block absolute -bottom-10 left-1/2 -translate-x-1/2 text-black">
                         <ArrowDown className="w-6 h-6" />
                    </div>
                </div>

                {/* 3. Event Soundtracks (Bottom Right) */}
                <div className="relative flex flex-col items-center lg:col-start-2 lg:row-start-2">
                     <div className="text-center max-w-sm">
                        <p className="text-lg text-black/80 leading-relaxed">
                            <Link to={createPageUrl("event-soundtracks")} className="underline font-bold hover:text-black decoration-2 underline-offset-4">Event Soundtracks</Link> covers their key moments.
                        </p>
                    </div>
                     {/* Mobile Arrow Down */}
                    <div className="lg:hidden text-black mt-6">
                        <ArrowDown className="w-6 h-6" />
                    </div>
                     {/* Desktop Arrow Left (to AU) */}
                    <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2 text-black">
                         <ArrowLeft className="w-6 h-6" />
                    </div>
                </div>

                {/* 4. Audio Upgrades (Bottom Left) */}
                <div className="relative flex flex-col items-center lg:col-start-1 lg:row-start-2">
                     <div className="text-center max-w-sm">
                        <p className="text-base text-black/80 leading-relaxed">
                            <Link to={createPageUrl("audio-upgrades")} className="underline font-bold hover:text-black decoration-2 underline-offset-4">Audio Upgrades</Link> ensures that music is delivered with clarity & comfort.
                        </p>
                    </div>
                </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-8 bg-black text-white rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <p className="text-xl md:text-2xl leading-relaxed font-medium">
                Over time this gives you a consistent, long term approach to music for business instead of a series of one-off tweaks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Further reading - White Background with Cards like Home/Blog */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-8">Further reading</h2>
            <p className="text-xl text-black/70 mb-12">If you want to explore the thinking behind this approach, you can read:</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <article>
              <Link to={createPageUrl("how-top-hospitality-brands-design-sound")} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg"
                      alt="Hospitality sound design"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <Badge className="mb-4 bg-black/5 text-black border-black/10">Insights</Badge>
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-black/80 transition-colors">
                      How Top Hospitality Brands Design Their Sound On Purpose
                    </h3>
                    <p className="text-black/70 mb-6 leading-relaxed text-lg">
                      On designing music as part of the guest journey.
                    </p>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            <article>
              <Link to={createPageUrl("music-curation-cycle-venues")} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg"
                      alt="Music curation cycle"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <Badge className="mb-4 bg-black/5 text-black border-black/10">Strategy</Badge>
                    <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-black/80 transition-colors">
                      The Music Curation Cycle for Venues: Analyze, Optimize & Evolve Your Sonic Identity
                    </h3>
                    <p className="text-black/70 mb-6 leading-relaxed text-lg">
                      On keeping your sonic identity aligned with changing needs.
                    </p>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read Article</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
          </div>
          </div>
          </section>

          {/* Final CTA */}
          <section className="py-20" style={{ backgroundImage: "linear-gradient(to bottom, #faebe3 0%, rgba(250, 235, 227, 0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Still not sure where to start?</h2>
          <p className="text-xl text-black/70 mb-8">
            We can help you choose the right service for your venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                Book a music consultation
              </Button>
            </Link>
            <Link to={createPageUrl("Industries")}>
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black/5 px-8 py-6 text-lg bg-transparent">
                Explore the industries we design music for
              </Button>
            </Link>
          </div>
          </div>
          </section>
          </div>
          );
}