
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function ArtMuseumsFashion() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Art, Museum & Fashion Music Curation | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Curated soundscapes for galleries, museums, fashion shows, and concept retail. Narrative playlists, runway direction, and AV tuning that elevate attention and emotion.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/art-museums-fashion');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/art-museums-fashion';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Art, Museum & Fashion Music Curation | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg' },
    { property: 'og:url', content: 'https://sensear.music/art-museums-fashion' },
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
    { name: 'twitter:title', content: 'Art, Museum & Fashion Music Curation | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg' }];

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
      "name": "Art, Museum & Fashion Music Curation",
      "description": "Curated soundscapes for galleries, museums, fashion shows, and concept retail. Narrative playlists, runway direction, and AV tuning that elevate attention and emotion.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Music Curation for Art & Fashion",
      "audience": {
        "@type": "Audience",
        "audienceType": "Art Galleries, Museums, Fashion Houses"
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
        "name": "Art, Museums & Fashion",
        "item": "https://sensear.music/art-museums-fashion"
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
      `}</style>

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Art, Museums & Fashion section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-black mb-6 leading-[1.1]">
              Curated sound for culture,<br />
              curation, and couture
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                From gallery & museum collection openings to fashion show finales, SensEar builds a living soundtrack that feels intentional, human, and precisely on-brand.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Art museum and fashion exhibition with curated music atmosphere"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Art museum and fashion exhibition with curated music atmosphere"
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

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Industries", path: createPageUrl("Industries") },
        { label: "Art, Museums & Fashion", path: createPageUrl("art-museums-fashion") }]
        } />
      </div> */}

      {/* Who This Is For Section */}
      <section className="py-20 bg-black" aria-labelledby="who-this-is-for-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="who-this-is-for-heading" className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">Who this is for</h2>
          <ul className="space-y-4 text-white/80 max-w-2xl mx-auto" role="list">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <span>Art galleries, museums, cultural foundations, and exhibition spaces</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <span>Fashion houses, designers, showrooms, pop-ups, and runways</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <span>Concept stores and editorial retail spaces with rotating installations</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <span>Promotional events, limited product releases, and previews for media or buyers</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-24 animated-gradient" aria-labelledby="problems-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="problems-heading" className="text-2xl sm:text-3xl font-bold text-black text-center mb-6">Problems we solve</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12" role="list">
            <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Sound that fights the space</h3>
                  <p className="text-sm sm:text-base text-black/70">Harsh highs, dead zones, or bleed between rooms. We balance levels, EQ, and speaker focus so music feels present yet unobtrusive.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Generic playlists that flatten intent</h3>
                  <p className="text-sm sm:text-base text-black/70">Templates blur curatorial voice. We build brand-exact sets that respect theme, medium, and audience.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Runway timing stress</h3>
                  <p className="text-sm sm:text-base text-black/70">Loose edits and uneven levels strain pacing. We deliver time-locked sequences and on-site show control.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Listener fatigue</h3>
                  <p className="text-sm sm:text-base text-black/70">Algorithm loops repeat. Our monthly refreshes and tasteful discovery keep teams and visitors engaged.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-white rounded-lg shadow-md md:col-span-2">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2">Licensing risk</h3>
                  <p className="text-sm sm:text-base text-black/70">Consumer platforms are not legal for public playback. We handle rights, compliance, and reporting.</p>
                </div>
              </div>
            </article>
          </div>

          <div className="text-center mt-16">
            <p className="text-black/70 mb-6">
              Explore other <Link to={createPageUrl("Industries")} className="underline hover:text-black font-semibold">industries we serve</Link>, discover our <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">full services</Link>, or <Link to={createPageUrl("ContactUs")} className="underline hover:text-black font-semibold">get in touch</Link> to discuss your next exhibition or show.
            </p>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80" aria-label="Curate Your Gallery Sound">Curate Your Gallery Sound</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);
}
