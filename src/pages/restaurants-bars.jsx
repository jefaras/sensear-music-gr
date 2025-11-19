import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

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
          animation: gradient-shift 10s ease infinite;
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

      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Restaurants & Bars section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for restaurants & bars that keeps guests ordering & returning
            </h1>
          </div>
        </div>

        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg 2400w"




                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Stylish restaurant and bar interior with curated music atmosphere for dining experiences"
                className="absolute w-full h-full object-cover md:hidden" />

              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg 2400w"




                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Stylish restaurant and bar interior with curated music atmosphere for dining experiences"
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
      <section className="bg-black py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
            The right restaurant playlist shapes dining atmosphere more than decor or lighting. <strong>SensEar</strong> designs soundscapes that match your menu, service flow & bar energy so every visit feels like the place to stay, not just stop by.
          </p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">Who this is for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-xl text-black/80 mb-6">Restaurants & bars that want music to work like part of the service:</p>
              <ul className="space-y-6 text-lg text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Casual & fine dining venues</strong> that live on repeat guests</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Cocktail & wine bars</strong> that need the right vibe from aperitivo to last order</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Hotel restaurants</strong> that must balance hotel guests, locals & events</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Multi venue groups</strong> that want a consistent audio identity across locations</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/faa6772fc_c6c8247c6975e5b8b28964566c4e798d.jpg"
                alt="Vibrant restaurant bar interior with atmospheric lighting"
                className="w-full h-auto rounded-2xl shadow-lg" />

            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
            <Breadcrumbs items={[
            { label: "Industries", path: createPageUrl("Industries") },
            { label: "Restaurants & Bars", path: createPageUrl("restaurants-bars") }]
            } />
           </div> */}

      {/* Industry Specific Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-right">Industry specific challenges</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/dbf1c8542_c383f86fd572aa6ee623a8fd6ab443df.jpg"
                alt="Elegant dining scene with guests enjoying atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg" />

            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The empty Tuesday problem</h3>
                <p className="text-lg text-black/70">Some nights feel flat no matter how good the food is. Without the right music, quieter services never build energy or spend.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The rush hour chaos</h3>
                <p className="text-lg text-black/70">When you are packed, the wrong bar music adds stress. Too loud or too fast, conversations strain & your carefully planned experience falls apart.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The identity crisis</h3>
                <p className="text-lg text-black/70">Design, service & concept are on point, but the music says something else. Your Mediterranean bistro sounds like a gym playlist, not your story.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The revenue plateau</h3>
                <p className="text-lg text-black/70">Tables turn too quickly at peak times, or sit without ordering during quiet periods. Music is not guiding pace, ordering or the bar check.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How SensEar Solves This */}
      <section className="py-20 animated-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">How SensEar solves this</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Playlists built around service flow</h3>
                <p className="text-lg text-black/70">We design music journeys for prep, doors, peak service & close, with energy that follows covers instead of fighting them.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Tempo & volume tuned to your space</h3>
                <p className="text-lg text-black/70">We calibrate tempo, genre & volume so guests can talk easily, staff can move fast & the room keeps a steady, inviting pulse.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Brand exact restaurant & bar playlists</h3>
                <p className="text-lg text-black/70">We translate your concept into sound, supporting the experience you want to be known for.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Fresh rotations & better sound</h3>
                <p className="text-lg text-black/70">Regular updates keep music fresh for regulars & staff, while audio upgrades offer a well balanced mix.</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bf81c0608_f73e72546f5644a803c4dd204f0d7de1.jpg"
                alt="Vibrant bar scene with guests dancing and enjoying music"
                className="w-full h-auto rounded-2xl shadow-lg" />

            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-white text-right">Key benefits</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/45c5bf8ee_0518d03f51766be5a36a8fa5df900697.jpg"
                alt="Cocktail glass with ice representing bar atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg" />

            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Fuller atmosphere on slow nights</h3>
                <p className="text-lg text-white/80">Curated bar music creates a sense of buzz even at half capacity, so Tuesdays feel more like a night out than a stopover.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">More time, more spend per table</h3>
                <p className="text-lg text-white/80">Guests stay for another drink or dessert, increasing bar revenue. Research shows brand-fit music boosts F&B sales.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">A dining atmosphere that fit your concept</h3>
                <p className="text-lg text-white/80">Music, lighting & service finally tell the same story, which makes it easier to justify pricing & build regulars.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Less staff friction around music</h3>
                <p className="text-lg text-white/80">Teams are not scrambling for tracks mid service. You set clear rules, we supply the sound, everyone focuses on guests.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof with Image */}
      <section className="py-16 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed">
                Venues like <strong>Blue Bamboo</strong> & <strong>Klouvi Bar</strong> use <strong>SensEar</strong> to turn their music into part of the dining ritual. Playlists now follow service flow & guest mood, helping them turn first time visitors into regulars.
              </p>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/61ccf4422_8bedfebb1d2032b34b8d32d3b59c21ad.jpg"
                alt="Elegant dinner party with atmospheric lighting and decor"
                className="w-full h-auto rounded-2xl shadow-lg" />

            </div>
          </div>

          {/* Hear this industry in action - Centered below */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Hear this industry in action</h3>
            <p className="text-lg md:text-xl text-black/70 mb-6">Listen to a curated demo playlist for restaurants & bars</p>
            <Link to={createPageUrl("PlaylistsDemos")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8">
                Explore Demo Playlists
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to tune your restaurant or bar for better nights?</h2>
          <p className="text-xl text-black/80 mb-8">
            We review your current music setup, service patterns & concept, then propose a tailored sound approach for your venue or group.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                Book a music consultation
              </Button>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> and <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Audio Upgrades</Link> work for restaurants & bars.
          </p>
        </div>
      </section>
    </div>);

}