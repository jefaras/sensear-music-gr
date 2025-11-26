import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Music, Sparkles, SlidersHorizontal, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      canonicalLink.setAttribute('href', 'https://sensear.music/');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/';
      document.head.appendChild(canonicalLink);
    }

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
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hero section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">Soundtracking <br />Unique Experiences


            </h1>
            
            <div className="mb-8 max-w-5xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">Every venue has a story. Let music tell yours.
<br />We craft sophisticated music curation for places and events that refuse to sound generic.

              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 slide-up-3">
              {/* Discover Your Sound button - COMMENTED OUT */}
              {/* <Link to={createPageUrl("ContactUs")}>
                    <Button className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto h-14" aria-label="Discover Your Sound">
                      Discover Your Sound
                    </Button>
                   </Link> */}
              <Link to={createPageUrl("Services")}>
                <Button variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto h-14" aria-label="Explore our services">
                  Explore our services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a8ab619d_home_page_header_img1.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a8ab619d_home_page_header_img1.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a8ab619d_home_page_header_img1.png 2400w"




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

      {/* Intro Section */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="lg:order-2 lg:min-w-[280px]">
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
                Who we are
              </h2>
            </div>
            
            <div className="lg:order-1 lg:mt-[150px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                We are a creative team of music lovers who elevate spaces through music that is intentional, immersive and unforgettable.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                At the core of SensEar is a shared belief: music is not background; it is atmosphere, memory and emotion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" aria-labelledby="services-heading">
        <div className="mx-auto px-6" style={{ maxWidth: '1800px' }}>
          <h2 id="services-heading" className="sr-only">Our Services</h2>

          {/* First Row: Signature Playlists - FULL WIDTH */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                {/* Left: Text Content */}
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
                    Signature Playlists
                  </h3>
                  
                  <div className="lg:mt-[280px]">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-6">
                      Bespoke, brand-exclusive playlists sourced from rare archives for venues that refuse to sound generic.
                    </p>
                    <Link to={createPageUrl("signature-playlists")} className="inline-flex items-center text-black font-medium text-xl group">
                      <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Create Your Sound Identity</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="lg:order-2 hidden lg:block lg:mt-[140px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ee4f6e2db_SIGNATUREcropped.jpg"
                    alt="Bespoke music curation and playlist creation"
                    className="w-full h-auto rounded-2xl shadow-lg" />

                </div>
              </div>
            </article>
          </div>

          {/* Second Row: Event Soundtracks - FULL WIDTH */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                {/* Left: Image */}
                <div className="lg:order-1 hidden lg:block lg:mt-[140px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d4a085ed9_EventSoundtracks-upsc2-cropped.jpg"
                    alt="Professional event production with music curation"
                    className="w-full h-auto rounded-2xl shadow-lg" />

                </div>

                {/* Right: Text Content */}
                <div className="lg:order-2">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
                    Event Soundtracks
                  </h3>

                  <div className="lg:mt-[280px]">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-6">
                      Artfully selected and curated soundtracks & live DJ sets that elevate events into engaging, unforgettable moments.
                    </p>
                    <Link to={createPageUrl("event-soundtracks")} className="inline-flex items-center text-black font-medium text-xl group">
                      <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Design Your Event Atmosphere</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Third Row: Sonic Strategy & Audio Upgrades - Split Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8" role="list">
            {/* Sonic Strategy */}
            <article role="listitem" className="bg-[#faebe3] p-8 rounded-lg h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
                Sonic Strategy
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="flex flex-col justify-between">
                  <p className="text-xl md:text-2xl text-black leading-relaxed mb-6">
                    Ultra-specialized music consultancy & sound branding guidelines that forge an inimitable sonic identity.
                  </p>
                  <Link to={createPageUrl("sonic-strategy")} className="inline-flex items-center text-black font-medium text-lg group">
                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Build Your Sound Strategy</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>

                <div className="w-full">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
                    alt="Strategic sonic branding consultation"
                    className="w-full h-auto rounded-xl shadow-md" />

                </div>
              </div>
            </article>

            {/* Audio Upgrades */}
            <article role="listitem" className="bg-[#faebe3] p-8 rounded-lg h-full">
              <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
                Audio Upgrades
              </h3>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="flex flex-col justify-between">
                  <p className="text-xl md:text-2xl text-black leading-relaxed mb-6">
                    Professional on-site sound checks, optimization and audio calibration, that fix any sound related issue.
                  </p>
                  <Link to={createPageUrl("audio-upgrades")} className="inline-flex items-center text-black font-medium text-lg group">
                    <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Optimize Your Sound System</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>

                <div className="w-full">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
                    alt="Professional audio equipment optimization"
                    className="w-full h-auto rounded-xl shadow-md" />

                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* How We Help You Succeed Section - WITH IMAGE ON RIGHT */}
      <section className="py-24" style={{ backgroundImage: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="benefits-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-left mb-12 leading-tight text-black">
            How We Help You Succeed
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits List */}
            <div className="space-y-8" role="list">
              <article role="listitem">
                <h3 className="text-2xl font-bold text-black mb-3">Delight Your Guests</h3>
                <p className="text-lg text-black/70">
                  Increase satisfaction and encourage longer & repeat visits.
                </p>
              </article>

              <article role="listitem">
                <h3 className="text-2xl font-bold text-black mb-3">Elevate Your Brand</h3>
                <p className="text-lg text-black/70">
                  Strengthen perception and loyalty with a memorable atmosphere.
                </p>
              </article>

              <article role="listitem">
                <h3 className="text-2xl font-bold text-black mb-3">Empower Your Team</h3>
                <p className="text-lg text-black/70">
                  Boost staff morale & productivity with energizing music.
                </p>
              </article>

              <article role="listitem">
                <h3 className="text-2xl font-bold text-black mb-3">Total Control</h3>
                <p className="text-lg text-black/70">
                  Take full control over your venue's music style & flow.
                </p>
              </article>

              <article role="listitem">
                <h3 className="text-2xl font-bold text-black mb-3">Seamless Experience</h3>
                <p className="text-lg text-black/70">
                  Ensure a smooth music experience across every area of your venue.
                </p>
              </article>
            </div>

            {/* Right: Car Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/03aebeb4e_car-1.png"
                alt="SensEar branded car with logo stickers"
                className="w-full h-auto rounded-2xl shadow-lg" />

            </div>
          </div>

          <div className="text-center mt-16">
            <Link to={createPageUrl("CaseStudies")}>
              <Button size="lg" className="bg-black text-white px-8 py-6 text-lg font-medium hover:bg-black/80" aria-label="See how we helped others">
                See How We Helped Others
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-black overflow-hidden" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="clients-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-6 text-white leading-tight">Now playing in venues across Greece</h2>
          <p className="text-xl text-white/70 text-center max-w-4xl mx-auto mb-12">
            Trusted by venues like Pelicanos, Yam and The Rooster in Athens and the Aegean.
          </p>
          
          <div className="relative">
            <div className="flex gap-12 animate-scroll">
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
                <p className="text-sm text-white/60 mt-1">Athens</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
                <p className="text-sm text-white/60 mt-1">Athens-Serifos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/84145d1c2_The-Rooster_final.jpg" alt="The Rooster logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">The Rooster</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
                <p className="text-sm text-white/60 mt-1">Sifnos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
                <p className="text-sm text-white/60 mt-1">Athens</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
                <p className="text-sm text-white/60 mt-1">Athens-Serifos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/84145d1c2_The-Rooster_final.jpg" alt="The Rooster logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">The Rooster</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
                <p className="text-sm text-white/60 mt-1">Sifnos</p>
              </div>
              
              <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
                <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
                  <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo" className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
                <p className="text-sm text-white/60 mt-1">Antiparos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="blog-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 leading-tight">The Curation Journal</h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              <span>Read how music shapes perception, emotion, and brand identity through sound. Discover more insights on our </span><Link to={createPageUrl("Blog")} className="underline hover:text-black font-semibold">blog</Link><span>.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" role="list">
            <article role="listitem">
              <Link to={createPageUrl("three-reasons-make-music-hospitality")} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg"
                      alt="Luxury hotel interior"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10">Insights</Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      Three Reasons Music Matters in Hospitality
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Curated music is a practical way to shape how guests feel, what they remember, and how they spend.
                    </p>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            <article role="listitem">
              <Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg"
                      alt="Restaurant ambiance"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10">Research</Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      How Brand-Fit Music Converts Browsers into Buyers
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Evidence-based research shows how brand-aligned music boosts revenues in hospitality venues.
                    </p>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>

            <article role="listitem">
              <Link to={createPageUrl("what-exactly-does-music-curator-do")} className="block">
                <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png"
                      alt="Professional music curator"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-black/5 text-black border-black/10">Education</Badge>
                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      What Exactly Does a Music Curator Do?
                    </h3>
                    <p className="text-black/70 mb-4 leading-relaxed">
                      Learn how professional music curators architect brand soundtracks through strategic curation and data-driven sonic branding.
                    </p>
                    <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>Read More</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
          </div>

          <div className="text-center mt-12">
            <Link to={createPageUrl("Blog")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white group">
                Read All Articles
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}