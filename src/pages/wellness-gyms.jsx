import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

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

export default function WellnessGyms() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Wellness & Gyms Soundscapes | SensEar Music";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Therapeutic soundscapes for wellness centers and gyms. Curated ambient music that enhances relaxation, mindfulness, and client retention.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/wellness-gyms');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/wellness-gyms';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Wellness & Gyms Soundscapes | SensEar Music' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/wellness-gyms' },
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
    { name: 'twitter:title', content: 'Wellness & Gyms Soundscapes | SensEar Music' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80' }];

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
      "name": "Wellness & Gyms Music Curation",
      "description": "Soothing soundscapes for unique relaxation and rejuvenation experiences. Ultra-specialized ambient and biophilic sound layers.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Wellness Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Wellness Centers and Gyms"
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
        "name": "Wellness & Gyms",
        "item": "https://sensear.music/wellness-gyms"
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Wellness & Gyms section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for Wellness & Gyms:<br />
              Sound that calms, focuses & motivates
            </h1>
          </div>
        </div>

        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Tranquil wellness center spa with therapeutic ambient music and relaxation soundscapes"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Tranquil wellness center spa with therapeutic ambient music and relaxation soundscapes"
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

      {/* Intro Section - Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">
              Soundscapes fine-tuned<br />
              for mind & body
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Music in wellness and gym spaces <strong><em>guides focus & tempo</em></strong> during each session.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                We design wellness & gym music that <strong><em>adapts to each space & intensity</em></strong> level, turning sound into a <strong><em>functional part</em></strong> of the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we do - White Background */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">What we do</h2>
            <p className="text-xl text-black/60 font-medium">Wellness & gym music strategy and implementation</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Reusing Industry-specific challenges image) */}
            <div className="hidden lg:block">
              <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ae7d85c74_9f14b26a1_f30a161922bea03d96e30ad4f356dd81.jpg"
                  alt="Spa treatment room ambiance"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Treatment room soundscapes</h3>
                <p className="text-lg text-black/70">Ambient & therapeutic sound design help clients relax and stay present.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Class & training playlists</h3>
                <p className="text-lg text-black/70">Energy-matched music for yoga, Pilates, strength & cardio, helps following the sessions naturally.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Schedule-aware programming</h3>
                <p className="text-lg text-black/70">Music that follows your daily rhythm: from gentle mornings to energizing evenings, across all spaces.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Zone-specific calibration</h3>
                <p className="text-lg text-black/70">Reception, treatment rooms & gym floor each get their own sound while sharing one recognizable identity.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal For - Bg Image (Who this is for) */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Wellness & gym music is ideal for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <ul className="space-y-8 text-lg text-black/70">
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Spas & Wellness Centers</span>
                  <span>where sound supports healing and restoration.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Yoga, Pilates & Meditation Studios</span>
                  <span>needing an atmosphere that deepens practice.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Boutique Gyms & Training Studios</span>
                  <span>focused on member experience and retention.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Multi-Location Wellness Brands</span>
                  <span>wanting consistent sound across sites.</span>
                </li>
                <li className="block">
                  <span className="font-semibold text-2xl block mb-1 text-black">Hybrid Spaces</span>
                  <span>balancing both treatment rooms and active training areas.</span>
                </li>
              </ul>
            </div>

            {/* Right: Image (Reusing Who this is for image) */}
            <div className="hidden lg:block">
              <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1918a9569_73e713e59820cc7915a71ef35c9d5835.jpg"
                  alt="Luxury wellness spa interior"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How we help - Animated Gradient */}
      <section className="py-20 animated-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">How we help</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Support deeper sessions</h3>
                <p className="text-lg text-black/70">Audio design helps clients relax and focus during treatments and practice, creating memorable sessions.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Match energy to activity</h3>
                <p className="text-lg text-black/70">Music that rises and falls with effort supports members throughout classes and workouts.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Create cohesive brand atmosphere</h3>
                <p className="text-lg text-black/70">All your rooms & locations sound intentional, from reception to last stretch.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Remove playlist management</h3>
                <p className="text-lg text-black/70">Staff focus on clients & members while we handle music selection, updates and commercial licensing.</p>
              </div>
            </div>

            {/* Right: Image (Reusing How SensEar solves this image) */}
            <div className="hidden lg:block">
              <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/677b8f7ca_d3ccc7081_24ff3eb97d703e018840f54d6030eb58.jpg"
                  alt="Luxury wellness pool interior"
                  className="w-full h-auto object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Upgrade your wellness atmosphere</h2>
          <p className="text-xl text-black/80 mb-8">
            Ready to design sound for healing & training? We review your current setup, your sessions & member journey and propose a tailored approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <AnimatedButton className="w-full sm:w-auto">
                Book a music consultation
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> and <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">Sonic Strategy</Link> work for wellness & gyms.
          </p>
        </div>
      </section>
    </div>
  );
}