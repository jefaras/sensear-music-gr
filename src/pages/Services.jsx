import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Sparkles, BarChart, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const AnimatedButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

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
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Services section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Strategic sound,<br />
              four proven approaches
            </h1>
          </div>
        </div>

        {/* Hero Image with parallax - Dimensions from Home page */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3] pb-[75%] md:pb-[40%]">
              {/* Mobile/Tablet version */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music equipment and sound system setup"
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

      {/* Intro Section - Black Background like Home */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="lg:order-2 lg:min-w-[280px]">
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
                Music is already<br />
                shaping<br />
                your business
              </h2>
            </div>
            
            <div className="lg:order-1 lg:mt-[200px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Every venue has a soundtrack, whether you designed it or not. SensEar ensures it tells the right story.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                We shape sound for venues & events that rely on atmosphere. Our four connected, customised music services create strategic experiences that influence how your staff & guests feel and act, and strengthen your brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Choose your starting point - With bg from Services-v2 */}
      <section className="py-24" aria-labelledby="services-heading" style={{
        backgroundImage: `linear-gradient(to bottom, 
          #ffffff 0%, 
          #ffffff 25%, 
          rgba(255,255,255,0) 45%, 
          rgba(255,255,255,0) 55%,
          #FFF7F2 75%, 
          #ffffff 100%
        ), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 id="services-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Choose your starting point</h2>
            <p className="text-xl text-black/70">Use this guide to see which music service fits you.</p>
          </div>

          {/* Signature Playlists */}
          <div className="mb-8" role="list">
            <article role="listitem">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-2">
                    Signature Playlists
                  </h3>
                  <p className="text-xl font-medium text-black/60 mb-8">Your daily soundtrack</p>
                  
                  <div className="lg:mt-[100px]">
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">Ideal for:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Venues ready to move beyond generic background music</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">You receive:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Curated playlists that evolve throughout the day, monthly updates, and remote management</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">Perfect when:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Your atmosphere deserves the same attention as your interior design</p>
                    </div>
                    <div className="mb-8 bg-white/50 p-6 rounded-xl border border-black/5">
                        <p className="text-lg text-black/80 italic">"Beach House Antiparos uses this to seamlessly transition from energetic poolside mornings to relaxed lobby evenings: guests now ask for our playlists daily."</p>
                    </div>

                    <Link to={createPageUrl("signature-playlists")} className="inline-flex items-center text-black font-medium text-xl group">
                      <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Explore Signature Playlists</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="lg:order-2 block mt-8 lg:mt-[60px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/013a4722f_cyprpn9zest1wg173m2j.jpg"
                    alt="Bespoke music curation"
                    className="w-full aspect-[4/3] lg:aspect-auto lg:h-auto object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </article>
          </div>

          {/* Event Soundtracks */}
          <div className="mb-8" role="list">
            <article role="listitem">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                <div className="lg:order-1 block mt-8 lg:mt-[60px] order-last lg:order-none">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d4a085ed9_EventSoundtracks-upsc2-cropped.jpg"
                    alt="Event soundtracks and production"
                    className="w-full aspect-[4/3] lg:aspect-auto lg:h-auto object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className="lg:order-2">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-2">
                    Event Soundtracks
                  </h3>
                  <p className="text-xl font-medium text-black/60 mb-8">Choreographed experiences</p>

                  <div className="lg:mt-[100px]">
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">Ideal for:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Conferences, launches, weddings, and special occasions</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">You receive:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Time-mapped music for every moment, professional coordination, on-site support</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">Perfect when:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Every transition matters and timing is everything</p>
                    </div>
                    <div className="mb-8 bg-white/50 p-6 rounded-xl border border-black/5">
                        <p className="text-lg text-black/80 italic">"Neva Bergman commissioned us for her exhibition opening at Levantis restaurant's gallery: she praised how the soundscape matched her work's emotions and kept visitors engaged longer."</p>
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

          {/* Sonic Strategy */}
          <div className="mb-8" role="list">
            <article role="listitem">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-2">
                    Sonic Strategy
                  </h3>
                  <p className="text-xl font-medium text-black/60 mb-8">Your audio DNA</p>
                  
                  <div className="lg:mt-[100px]">
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">Ideal for:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Brands expanding across multiple locations or channels</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">You receive:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Comprehensive guidelines for consistent sound, implementation roadmap, brand audio toolkit</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">Perfect when:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Every location should feel part of the same story</p>
                    </div>
                    <div className="mb-8 bg-white/50 p-6 rounded-xl border border-black/5">
                        <p className="text-lg text-black/80 italic">"Pelicanos developed its own sonic identity to stand out from its sister restaurant "Cantina". Now it serves its unique mix of fresh discoveries, hidden gems & elegant all-time classics."</p>
                    </div>

                    <Link to={createPageUrl("sonic-strategy")} className="inline-flex items-center text-black font-medium text-xl group">
                      <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Explore Sonic Strategy</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                <div className="lg:order-2 block mt-8 lg:mt-[60px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
                    alt="Strategic sonic branding consultation"
                    className="w-full aspect-[4/3] lg:aspect-auto lg:h-auto object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </article>
          </div>

          {/* Audio Upgrades */}
          <div className="mb-8" role="list">
            <article role="listitem">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                <div className="lg:order-1 block mt-8 lg:mt-[60px] order-last lg:order-none">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
                    alt="Professional audio equipment optimization"
                    className="w-full aspect-[4/3] lg:aspect-auto lg:h-auto object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className="lg:order-2">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-2">
                    Audio Upgrades
                  </h3>
                  <p className="text-xl font-medium text-black/60 mb-8">Acoustic excellence</p>

                  <div className="lg:mt-[100px]">
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">Ideal for:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Venues where sound quality needs refinement</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">You receive:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Professional acoustic assessment, equipment recommendations, installation partnerships</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-xl block mb-1">Perfect when:</span>
                      <p className="text-xl md:text-2xl text-black leading-relaxed">Great music deserves great presentation</p>
                    </div>
                    <div className="mb-8 bg-white/50 p-6 rounded-xl border border-black/5">
                        <p className="text-lg text-black/80 italic">"Klouvi bar in Athens asked us to improve their acoustic clarity: strategic soundproofing and speaker optimization created the warm, intimate atmosphere they wanted."</p>
                    </div>

                    <Link to={createPageUrl("audio-upgrades")} className="inline-flex items-center text-black font-medium text-xl group">
                      <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Explore audio upgrades</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Creating your sound strategy */}
      <section className="py-24 bg-[#faebe3]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-16 text-center">Creating your sound strategy</h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl md:text-2xl text-black/80 leading-relaxed mb-12">
              Most venues begin their journey with <Link to={createPageUrl("signature-playlists")} className="underline font-bold hover:text-black decoration-2 underline-offset-4">Signature Playlists</Link>, establishing a foundation of intentional daily music. As businesses grow, <Link to={createPageUrl("sonic-strategy")} className="underline font-bold hover:text-black decoration-2 underline-offset-4">Sonic Strategy</Link> ensures consistency across new locations. <Link to={createPageUrl("event-soundtracks")} className="underline font-bold hover:text-black decoration-2 underline-offset-4">Event Soundtracks</Link> transform special occasions, while <Link to={createPageUrl("audio-upgrades")} className="underline font-bold hover:text-black decoration-2 underline-offset-4">Audio Upgrades</Link> optimize the listening experience.
            </p>
            
            <div className="inline-block p-8 bg-black text-white rounded-2xl shadow-xl">
              <p className="text-xl md:text-2xl leading-relaxed font-medium">
                The result: A comprehensive approach to venue atmosphere that evolves with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Let's explore your possibilities */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Let's explore your possibilities</h2>
          <p className="text-xl text-black/70 mb-12">
            Which service aligns with your vision? We will assess your current atmosphere and recommend the ideal starting point.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <AnimatedButton className="w-full sm:w-auto h-14" aria-label="Discover your sound strategy">
                Discover your sound strategy
              </AnimatedButton>
            </Link>
            <Link to={createPageUrl("Industries")}>
              <Button variant="outline" size="lg" className="border-black text-black hover:bg-black/5 px-8 py-6 text-lg bg-transparent h-14 rounded-full">
                See Industries we serve <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}