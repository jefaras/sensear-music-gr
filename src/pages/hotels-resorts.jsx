
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function HotelsResorts() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music Curation for Hotels & Resorts | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Elevate guest experiences with bespoke hotel music curation. Custom playlists that enhance ambiance and boost satisfaction scores.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
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

    // Add robots meta tag - INDUSTRY PAGE: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/hotels-resorts');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/hotels-resorts';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Music Curation for Hotels & Resorts | SensEar' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80' },
      { property: 'og:url', content: 'https://sensear.music/hotels-resorts' },
      { property: 'og:type', content: 'website' }
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

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Music Curation for Hotels & Resorts | SensEar' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80' }
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

    // Add structured data
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
        "name": "Hotel & Resort Music Curation",
        "description": "Hand-picked playlists that flow effortlessly from sunrise to sunset, crafted exclusively to elevate each hour of the day for hotels and resorts.",
        "provider": {
          "@type": "Organization",
          "name": "SensEar",
          "url": "https://sensear.music"
        },
        "areaServed": "GR",
        "serviceType": "Hospitality Music Curation",
        "audience": {
          "@type": "Audience",
          "audienceType": "Hotels and Resorts"
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
            "name": "Hotels & Resorts",
            "item": "https://sensear.music/hotels-resorts"
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

  const problems = [
    { title: "Inconsistent music quality across spaces and times of day", description: "No more akward transitions or mismatched moods. Our playlists evolve naturally with guest flow and energy levels." },
    { title: "Generic or off-brand background music", description: "We craft soundscapes that reflect your identity, not someone else's. Subtle, but deeply felt." },
    { title: "Low ambience or atmosphere ratings", description: "Music is the emotional layer guests remember. We help boost perception without visual overhauls." },
    { title: "Staff manually changing music or using unlicensed tools", description: "We centralize control with legal, fully licensed music and automated scheduling. No stress, no guesswork." },
    { title: "Acoustically \"dead\" or noisy areas", description: "Our sound curation accounts for layout, materials, and crowd dynamics, filling your space with clarity and warmth." },
    { title: "Disconnect between brand tone and audio experience", description: "We align your sound with your story helping guests feel what you want them to feel." }
  ];

  return (
    <div className="bg-[#faebe3]">
      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hotels & Resorts section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1]">
              Curated music for enhanced<br />
              guest satisfaction
            </h1>

            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Hand-picked playlists that flow effortlessly from sunrise to sunset,  crafted exclusively to elevate each hour of the day.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Luxury hotel resort lobby with curated music ambiance and elegant hospitality design"
                className="absolute w-full h-full object-cover"
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

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Industries", path: createPageUrl("Industries") },
        { label: "Hotels & Resorts", path: createPageUrl("hotels-resorts") }]
        } />
      </div> */}

      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="problems-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="problems-heading" className="text-3xl font-bold text-center mb-6 text-black">Problems We Solve</h2>
          <p className="text-center text-black/70 mb-10 max-w-3xl mx-auto">
            Our musicologists build a private catalogue that adapts to guest journeys and spatial acoustics, raising ambience ratings, while reinforcing your brand positioning.
          </p>
          <div className="grid md:grid-cols-2 gap-8" role="list">
            {problems.map((p) =>
              <article key={p.title} role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-black/70">{p.description}</p>
                  </div>
                </div>
              </article>
            )}
          </div>
          <div className="text-center mt-16">
            <p className="text-black/70 mb-6">
              Learn why <Link to={createPageUrl("three-reasons-make-music-hospitality")} className="underline hover:text-black font-semibold">music should be part of your hospitality strategy</Link> and discover <Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="underline hover:text-black font-semibold">how brand-fit music converts browsers into buyers</Link>. See success stories like <Link to={createPageUrl("beach-house-antiparos")} className="underline hover:text-black font-semibold">Beach House Antiparos</Link>
            </p>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80" aria-label="Schedule a hotel sound consultation">Schedule a Hotel Sound Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
