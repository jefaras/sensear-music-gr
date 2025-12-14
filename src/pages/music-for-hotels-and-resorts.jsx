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

export default function HotelsResorts() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Hotels & Resorts Music Curation | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Curated playlists that elevate hotel and resort guest experiences. From lobby to spa, create the perfect ambiance with our signature sound design.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/music-for-hotels-and-resorts');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/music-for-hotels-and-resorts';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
      { property: 'og:title', content: 'Hotels & Resorts Music Curation | SensEar' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1c4e39a6a_pxbee_2024-10-05_04-48-42-cropped1-cropped-hd-upscaled.jpg' },
      { property: 'og:url', content: 'https://sensear.music/music-for-hotels-and-resorts' }
    ];

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
      { name: 'twitter:title', content: 'Hotels & Resorts Music Curation | SensEar' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1c4e39a6a_pxbee_2024-10-05_04-48-42-cropped1-cropped-hd-upscaled.jpg' }
    ];

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
          "https://www.instagram.com/sensear.music"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Hotels & Resorts Music Curation",
        "description": "Curated playlists that elevate hotel and resort guest experiences from lobby to spa.",
        "provider": {
          "@type": "Organization",
          "name": "SensEar",
          "url": "https://sensear.music"
        },
        "areaServed": "GR",
        "serviceType": "Music Curation for Hotels"
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
            "name": "Hotels & Resorts",
            "item": "https://sensear.music/music-for-hotels-and-resorts"
          }
        ]
      }
    ];

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

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hotels and Resorts section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                Music for Hotels & Resorts:<br />
                Guest journey soundtracks
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                Curated sound for every space, from arrival to departure.
              </p>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0fd3fb2e9_pexels-photo-258154-hd-upscaled1.jpg" 
                      alt="Luxury hotel lobby with curated ambient music" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-12">
              Curated sound<br />
              for the entire guest journey
            </h2>
            
            <div className="w-full">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                From arrival through check-out, music <strong><em>shapes every interaction</em></strong>.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                We design soundtracks that <strong><em>support your service rhythm</em></strong>, reflect your <strong><em>brand identity</em></strong> & keep guests <strong><em>comfortable</em></strong>.
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
            <p className="text-xl text-black/60 font-medium">Comprehensive hotel & resort music strategy</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">24-hour sound design</h3>
                <p className="text-lg text-black/70">Each hour gets its own music mood, aligned with natural energy shifts and service patterns.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Space-specific curation</h3>
                <p className="text-lg text-black/70">Custom playlists for lobby, restaurant, spa, pool, rooms & any other area guests pass through.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Brand-aligned playlists</h3>
                <p className="text-lg text-black/70">Music that reflects your positioning & respects guest expectations for your segment.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Rotating catalogues</h3>
                <p className="text-lg text-black/70">Monthly refreshes keep repeat guests & staff engaged while staying fully licensed.</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/c25e9e0d4_the-stone-hotel-bali-autograph-collection-kuta-exterior-detail.jpg"
                alt="Hotel exterior with ambiance design"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hotels & Resorts music is ideal for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-center">Hotels & Resorts music is ideal for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Boutique Hotels</h3>
                <p className="text-lg text-black/70">with distinct character & design-forward spaces.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Island & Beach Resorts</h3>
                <p className="text-lg text-black/70">blending local influences with international polish.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Luxury Hospitality Groups</h3>
                <p className="text-lg text-black/70">standardizing sound identity across properties.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Wellness Retreats & Spa Hotels</h3>
                <p className="text-lg text-black/70">prioritizing calm & restorative environments.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">City Center Properties</h3>
                <p className="text-lg text-black/70">managing lobby traffic & restaurant transitions.</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bff3b5dc5_pexels-photo-164595-cropped1.jpg"
                alt="Hotel spa wellness area"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-white text-center">How we help</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a0833d29a_white-wooden-kitchen-cabinet-beside-kitchen-island-1599791croppedoriginal.jpg"
                alt="Hotel dining area ambiance"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Guide energy & pacing</h3>
                <p className="text-lg text-white/80">Music supports natural guest flow & staff operations without intruding on interactions.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Strengthen brand identity</h3>
                <p className="text-lg text-white/80">Consistent sonic identity builds recognition & guest loyalty across visits.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Simplify operations</h3>
                <p className="text-lg text-white/80">Remove music decisions from staff, avoid licensing issues & eliminate random choices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">Upgrade your guest experience</h2>
          <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Ready to design a signature sound for your property? We review your spaces, guest profile & brand positioning, then propose a tailored music strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <AnimatedButton className="w-full sm:w-auto">
                Book a music consultation
              </AnimatedButton>
            </Link>
            <Link to={createPageUrl("PlaylistsDemos")}>
              <AnimatedButton className="w-full sm:w-auto">
                Hear demo playlists
              </AnimatedButton>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> & <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Audio Upgrades</Link> transform hotel atmospheres.
          </p>
        </div>
      </section>
    </div>
  );
}