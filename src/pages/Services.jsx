
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Music, Sparkles, SlidersHorizontal, ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

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
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
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
          animation: gradient-shift 7s ease infinite;
        }
        
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
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Services section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Four Signature Services:<br />
              One cohesive sound strategy
            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Advisory, on-site playlists & immersive experiences, designed to make your brand sound unique.
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 2400w"




                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music equipment and sound system setup for venue curation"
                className="absolute w-full h-full object-cover md:hidden" />

              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg 2400w"




                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music equipment and sound system setup for venue curation"
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

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
            <Breadcrumbs items={[
            { label: "Services", path: createPageUrl("Services") }]
            } />
           </div> */}

      {/* Services Grid - with animated gradient */}
      <section className="py-20 animated-gradient" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-6">
            <h2 id="services-list-heading" className="text-4xl font-bold text-black mb-6 text-center">Our Music Curation Services</h2>
            <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg">
              <span>From strategic </span><Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">sonic branding consultancy</Link><span> to </span><Link to={createPageUrl("event-soundtracks")} className="underline hover:text-black font-semibold">immersive music event experiences</Link><span>, we offer comprehensive solutions. Read our </span><Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">case studies</Link><span> to see how we've transformed venues across Greece.</span>
            </p>
          
          {/* First row: Signature Playlists and Event Soundtracks - LARGER */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8" role="list">
            {/* Service 1: Signature Playlists */}
            <article role="listitem">
              <Link to={createPageUrl("signature-playlists")} aria-label="Create Your Signature Sound">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg"
                      srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg 800w,
                              https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg 1200w"




                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Bespoke music curation and playlist creation for unique venue atmosphere"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                    <div className="absolute inset-0" aria-hidden="true" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-75 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                        <Music className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Signature Playlists
                    </h3>
                    <p className="text-black/70 mb-4">
                      Bespoke, brand-exclusive playlists sourced from rare archives for venues that refuse to sound generic.
                    </p>
                    <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Create Your Signature Sound</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Service 2: Event Soundtracks */}
            <article role="listitem">
              <Link to={createPageUrl("event-soundtracks")} aria-label="Design Your Event Atmosphere">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg"
                      srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 800w,
                              https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 1200w"




                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Professional event production with immersive music curation and AV setup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                    <div className="absolute inset-0" aria-hidden="true" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-75 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                        <Sparkles className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Event Soundtracks
                    </h3>
                    <p className="text-black/70 mb-4">
                      Artfully selected, custom-curated soundtracks and seamless AV production that elevate events into immersive, unforgettable moments.
                    </p>
                    <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Design Your Event Atmosphere</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
          </div>

          {/* Second row: Sonic Strategy and Audio Upgrades - SMALLER & CENTERED */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch" role="list">
            {/* Empty spacer - only visible on desktop */}
            <div className="hidden lg:block"></div>
            
            {/* Service 3: Sonic Strategy */}
            <article role="listitem">
              <Link to={createPageUrl("sonic-strategy")} aria-label="Build Your Sound Strategy">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg"
                      srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg 800w,
                              https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg 1200w"




                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Strategic sonic branding consultation and music curation planning session"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                    <div className="absolute inset-0" aria-hidden="true" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-75 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                        <BarChart className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Sonic Strategy
                    </h3>
                    <p className="text-black/70 mb-4">
                      Ultra-specialized music consultancy & sound branding guidelines that forge an inimitable sonic identity.
                    </p>
                    <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Build Your Sound Strategy</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            {/* Service 4: Audio Upgrades */}
            <article role="listitem">
              <Link to={createPageUrl("audio-upgrades")} aria-label="Optimize Your Sound System">
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg"
                      srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg 800w,
                              https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg 1200w"




                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt="Professional audio equipment optimization and acoustic calibration for venues"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                    <div className="absolute inset-0" aria-hidden="true" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-75 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                        <SlidersHorizontal className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Audio Upgrades
                    </h3>
                    <p className="text-black/70 mb-4">
                      Professional on-site sound checks, optimization and audio calibration, that fix any sound related issue.
                    </p>
                    <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Optimize Your Sound System</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
            
            {/* Empty spacer - only visible on desktop */}
            <div className="hidden lg:block"></div>
          </div>

          <div className="text-center mt-12">
            <p className="text-black/70 mb-4 max-w-3xl mx-auto">
              <span>Whether you're a </span><Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black font-semibold">hotel</Link><span>, </span><Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black font-semibold">restaurant</Link><span>, or </span><Link to={createPageUrl("retail-stores")} className="underline hover:text-black font-semibold">retail space</Link><span>, we have the expertise to elevate your atmosphere.</span>
            </p>
            <Link to={createPageUrl("Industries")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white group">
                See Success Stories
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);
}
