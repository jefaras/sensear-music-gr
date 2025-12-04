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

const AnimatedButtonSmall = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-7 py-3.5 text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-2 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-4 w-4 h-4 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music Curation Services | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Discover SensEar's music curation services: Sonic Strategy, Signature Playlists, Event Soundtracks and Audio Upgrades. Transform your venue's atmosphere.";
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

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-gradient {
          background: linear-gradient(
            135deg,
            #f5d4c1 0%,
            #e8c3b0 15%,
            #d4c4b0 30%,
            #c0c0c0 45%,
            #d3d3d3 60%,
            #f0d5d0 75%,
            #e8c3b0 90%,
            #f5d4c1 100%
          );
          background-size: 400% 400%;
          animation: gradient-shift 10s ease infinite;
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
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                Music is already <br />
                shaping your business
              </h2>
            
              <div className="w-full text-left">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                  Every venue <strong>has a soundtrack</strong>, whether you designed it or not. SensEar ensures it tells <span className="text-black bg-white px-1">the right story</span>.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                  We shape sound for venues & events that <strong>rely on atmosphere</strong>. Our customised music services create <strong>memorable experiences</strong> that <strong>reinforce</strong> your brand and <strong>influence</strong> how your staff and guests feel & act.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Choose your starting point - With bg from Services-v2 */}
      <section className="pt-24 pb-12" aria-labelledby="services-heading" style={{
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
          <div className="text-center max-w-4xl mx-auto">
            <h2 id="services-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Choose your starting point</h2>
            <p className="text-xl text-black/60 mb-12">Use this guide to see which music service fits you.</p>
          </div>

          {/* Signature Playlists */}
          <div className="mb-24" role="list">
            <article role="listitem">
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-2">
                    Signature Playlists
                  </h3>
                  <p className="text-xl font-medium text-black/60 mb-8">Your daily soundtrack</p>

                  <div>
                    <div className="mb-6">
                      <p className="text-xl md:text-2xl text-black/60 leading-relaxed">Curated playlists that evolve throughout the day, monthly updates and remote management.</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-lg block mb-1">Ideal for:</span>
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Venues ready to move beyond generic background music.</p>
                    </div>



                    <Link to={createPageUrl("signature-playlists")}>
                      <AnimatedButton className="w-full sm:w-auto">
                        Explore Signature Playlists
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>

                <div className="lg:order-2 block">
                  <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/013a4722f_cyprpn9zest1wg173m2j.jpg"
                      alt="Bespoke music curation"
                      className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Event Soundtracks */}
          <div className="mb-24" role="list">
            <article role="listitem">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
                <div className="lg:order-1 block order-last lg:order-none">
                  <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d4a085ed9_EventSoundtracks-upsc2-cropped.jpg"
                      alt="Event soundtracks and production"
                      className="w-full h-auto object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>

                <div className="lg:order-2">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-2">
                    Event Soundtracks
                  </h3>
                  <p className="text-xl font-medium text-black/60 mb-8">Music for moments that matter</p>

                  <div>
                    <div className="mb-6">
                      <p className="text-xl md:text-2xl text-black/60 leading-relaxed">Precisely planned music for every moment, AV direction & support.</p>
                    </div>
                    <div className="mb-6">
                      <span className="font-bold text-black text-lg block mb-1">Ideal for:</span>
                      <p className="text-lg md:text-xl text-black/60 leading-relaxed">Conferences, launches, weddings and special occasions.</p>
                    </div>



                    <Link to={createPageUrl("event-soundtracks")}>
                      <AnimatedButton className="w-full sm:w-auto">
                        Explore Event Soundtracks
                      </AnimatedButton>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Combined Section: Sonic Strategy & Audio Upgrades */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start">

            {/* Sonic Strategy */}
            <div className="flex flex-col h-full">
              <div className="flex flex-col xl:flex-row gap-6 mb-6 xl:items-center">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
                  alt="Strategic sonic branding consultation"
                  className="w-full xl:w-[301px] xl:h-[401px] object-cover rounded-2xl shadow-lg flex-shrink-0"
                />
                <div className="flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold text-black leading-tight mb-2">
                    Sonic Strategy
                  </h3>
                  <p className="text-lg font-medium text-black/60 mb-6">Your audio DNA</p>

                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <p className="text-lg text-black/60 leading-relaxed">Guidelines & roadmap for consistent sound.</p>
                    </div>
                    <div className="mb-4">
                      <span className="font-bold text-black text-base block mb-1">Ideal for:</span>
                      <p className="text-base text-black/60 leading-relaxed">Brands with multiple locations or marketing channels.</p>
                    </div>

                    
                    <div className="mt-6">
                        <Link to={createPageUrl("sonic-strategy")}>
                            <AnimatedButtonSmall className="w-full sm:w-auto">
                            Explore Sonic Strategy
                            </AnimatedButtonSmall>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Upgrades */}
            <div className="flex flex-col h-full">
              <div className="flex flex-col xl:flex-row gap-6 mb-6 xl:items-center">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
                  alt="Professional audio equipment optimization"
                  className="w-full xl:w-[301px] xl:h-[401px] object-cover rounded-2xl shadow-lg flex-shrink-0"
                />
                <div className="flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold text-black leading-tight mb-2">
                    Audio Upgrades
                  </h3>
                  <p className="text-lg font-medium text-black/60 mb-6">Acoustic excellence</p>

                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <p className="text-lg text-black/60 leading-relaxed">Acoustic and equipment guidance & installation.</p>
                    </div>
                    <div className="mb-4">
                      <span className="font-bold text-black text-base block mb-1">Ideal for:</span>
                      <p className="text-base text-black/60 leading-relaxed">Venues where sound quality needs refinement.</p>
                    </div>


                    <div className="mt-6">
                        <Link to={createPageUrl("audio-upgrades")}>
                            <AnimatedButtonSmall className="w-full sm:w-auto">
                            Explore audio upgrades
                            </AnimatedButtonSmall>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* How our services deliver */}
      <section className="py-24 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">How our services deliver:</h2>
            <p className="text-xl text-black/60 font-medium mb-12">Working alone or together to meet your specific needs</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="order-2 lg:order-1">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/706733b3c_f9c386a1d5dba0530f1176b031bff1a4-UPSC.jpg" 
                  alt="Services delivery" 
                  className="w-full h-auto rounded-2xl shadow-lg" 
                />
             </div>
             <div className="order-1 lg:order-2">
                <div className="space-y-8">
                    <div className="mb-6">
                        <p className="text-xl md:text-2xl text-black/60 leading-relaxed">
                             <Link to={createPageUrl("signature-playlists")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">Signature Playlists</Link> establish your daily atmosphere
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-xl md:text-2xl text-black/60 leading-relaxed">
                             <Link to={createPageUrl("sonic-strategy")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">Sonic Strategy</Link> unifies your brand's sound
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-xl md:text-2xl text-black/60 leading-relaxed">
                             <Link to={createPageUrl("event-soundtracks")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">Event Soundtracks</Link> choreograph special moments
                        </p>
                    </div>
                    <div className="mb-6">
                        <p className="text-xl md:text-2xl text-black/60 leading-relaxed">
                             <Link to={createPageUrl("audio-upgrades")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70 text-black">Audio Upgrades</Link> optimize acoustic quality
                        </p>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Let's explore your possibilities */}
      <section className="py-20 animated-gradient">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Let's explore your possibilities</h2>
          <p className="text-xl text-black/60 mb-12">
            Which service aligns with your vision? We will assess your current atmosphere and recommend the ideal starting point.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <AnimatedButton className="w-full sm:w-auto h-14" aria-label="Discover your sound strategy">
                Discover your sound strategy
              </AnimatedButton>
            </Link>
            <Link to={createPageUrl("Industries")}>
              <AnimatedButton className="w-full sm:w-auto h-14">
                See Industries we serve
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}