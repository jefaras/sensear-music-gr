import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

export default function RestaurantsBars() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music for Restaurants & Bars | SensEar Curation";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Transform dining experiences with curated restaurant music. Increase dwell time and revenue with brand-aligned soundscapes.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/restaurants-bars');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/restaurants-bars';
      document.head.appendChild(canonicalLink);
    }

    const newImageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg';

    const ogTags = [
    { property: 'og:title', content: 'Music for Restaurants & Bars | SensEar Curation' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: newImageUrl },
    { property: 'og:url', content: 'https://sensear.music/restaurants-bars' },
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
    { name: 'twitter:title', content: 'Music for Restaurants & Bars | SensEar Curation' },
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
      "name": "Restaurant & Bar Music Curation",
      "description": "Tailored sound for memorable dining & drinking experiences. Create the perfect atmosphere with expertly curated music.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Restaurant Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Restaurants and Bars"
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
        "name": "Restaurants & Bars",
        "item": "https://sensear.music/restaurants-bars"
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
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Restaurants & Bars section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for Restaurants & Bars:<br />
              Sound that matches your rhythm & delights guests
            </h1>
          </div>
        </div>

        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Stylish restaurant and bar interior with curated music atmosphere"
                className="absolute w-full h-full object-cover md:hidden" />

              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Stylish restaurant and bar interior with curated music atmosphere"
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

      {/* Intro Section - Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">
              Deliberate atmosphere<br />for every service moment
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                The right playlist could shape dining atmosphere more than decor or lighting.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                We design soundscapes that match your menu, service flow & bar energy from first drinks to last call.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                Music becomes part of the experience guests return for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">What we do</h2>
            <p className="text-xl text-black/60 font-medium">Restaurant & bar music strategy and implementation</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Was Key benefits) */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/45c5bf8ee_0518d03f51766be5a36a8fa5df900697.jpg"
                alt="Cocktail glass with ice representing bar atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Service-flow playlists</h3>
                <p className="text-lg text-black/70">Music designed for opening till close, with energy that follows your service's rhythm.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Tempo & volume adjustment</h3>
                <p className="text-lg text-black/70">Sound levels that let guests talk easily, staff move efficiently & keep a steady, inviting energy.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Brand-aligned selections</h3>
                <p className="text-lg text-black/70">Playlists specific to your concept, that support the experience you want to be known for.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Fresh rotations</h3>
                <p className="text-lg text-black/70">Regular updates keep music engaging for regulars & staff and maintain your signature sound.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant & bar music is ideal for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Restaurant & bar music is ideal for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <ul className="space-y-8 text-lg text-black/70">
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Casual & Fine dining venues</span>
                  <span>that live on repeat guests and atmosphere.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Cocktail & Wine bars</span>
                  <span>needing the right vibe from aperitivo to last order.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Hotel Restaurants</span>
                  <span>balancing hotel guests, locals and private events.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Multi-venue groups</span>
                  <span>wanting consistent audio identity across locations.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image (Was Industry specific challenges) */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/74f06e87c_dbf1c8542_c383f86fd572aa6ee623a8fd6ab443df.jpg"
                alt="Elegant dining scene with guests enjoying atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">How we help</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Was How SensEar solves this) */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bf81c0608_f73e72546f5644a803c4dd204f0d7de1.jpg"
                alt="Vibrant bar scene with guests dancing and enjoying music"
                className="w-full h-auto rounded-2xl shadow-lg" />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Build energy on slower nights</h3>
                <p className="text-lg text-black/70">We create atmospheres where energy comes from sound, not just from guest count.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Guide pace & orders naturally</h3>
                <p className="text-lg text-black/70">We calibrate sound so tables may order another round or dessert when the moment feels right.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Match your concept exactly</h3>
                <p className="text-lg text-black/70">Music, lighting and service finally tell the same story, so your Mediterranean bistro sounds as authentic as it tastes.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Remove playlist friction</h3>
                <p className="text-lg text-black/70">We supply the sound, you set the rules and staff focuses on guests, not scrambling for tracks mid-service.</p>
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Hear this industry in action</h3>
            <p className="text-lg md:text-xl text-black/70 mb-6">Listen to a curated demo playlist for restaurants & bars</p>
            <Link to={createPageUrl("PlaylistsDemos")}>
              <AnimatedButton className="px-8">
                Explore Demo Playlists
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Upgrade your restaurant's atmosphere</h2>
          <p className="text-xl text-black/80 mb-8">
            Need to tune your sound for better nights? We can review your current setup, service patterns & concept and propose a tailored approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <AnimatedButton className="w-full sm:w-auto">
                Book a music consultation
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> and <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Audio Upgrades</Link> work for restaurants & bars.
          </p>
        </div>
      </section>
    </div>
  );
}