
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function WellnessCenters() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Wellness Center Soundscapes | SensEar Music";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Therapeutic soundscapes for wellness centers. Curated ambient music that enhances relaxation, mindfulness, and client retention.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/wellness-centers');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/wellness-centers';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Wellness Center Soundscapes | SensEar Music' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/wellness-centers' },
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
    { name: 'twitter:title', content: 'Wellness Center Soundscapes | SensEar Music' },
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
      "name": "Wellness Center Music Curation",
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
        "audienceType": "Wellness Centers"
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
        "name": "Wellness Centers",
        "item": "https://sensear.music/wellness-centers"
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
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Wellness Centers section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1]">
              Calming &amp; motivating soundscapes,<br />
              for rejuvenation & training
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Ultra-specialized ambient and biophilic sound layers that deepen mindfulness and elevate your revitalizing sessions.
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

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
        { label: "Industries", path: createPageUrl("Industries") },
        { label: "Wellness Centers", path: createPageUrl("wellness-centers") }]
        } />
      </div> */}

      {/* What We Deliver Section */}
      <section className="py-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="what-we-deliver-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="what-we-deliver-heading" className="text-2xl sm:text-3xl font-bold text-black text-center mb-6">What we deliver</h2>
            <p className="text-center text-black/70 mb-8 max-w-3xl mx-auto px-4">
          Our playlists blend field recordings, slow-wave downtempo, and neo-classical pieces for treatment rooms; then shift to clean, lyric-light electronic, modern funk, and uplifting indie for cardio, strength, and studio classes.
          </p>
          <ul className="space-y-4 text-black/80 max-w-2xl mx-auto" role="list">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <strong className="text-black">Curation on time-of-day</strong>
                <br />
                <span>that matches treatment schedules, class blocks, and flow of clients.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <strong className="text-black">Acoustic comfort</strong>
                <br />
                <span>via genre, tempo and EQ choices that reduce harsh highs and listener fatigue.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <strong className="text-black">Zoned experiences</strong>
                <br />
                <span>for reception, treatment rooms, cardio, strength, and studio spaces.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <strong className="text-black">Brand consistency</strong>
                <br />
                <span>at scale with centrally managed sets and local flexibility where it matters.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <strong className="text-black">Smooth volume & transitions</strong>
                <br />
                <span>for an uninterrupted, professional sound from open to close.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <strong className="text-black">Licensing peace of mind</strong>
                <br />
                <span>with properly sourced and compliant music.</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-black mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <strong className="text-black">Simple rollout</strong>
                <br />
                <span>plug-and-play hardware options and remote updates.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-24 animated-gradient" aria-labelledby="problems-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="problems-heading" className="text-2xl sm:text-3xl font-bold text-black text-center mb-6">Problems we solve</h2>
          
          {/* Wellness & Spa */}
          <div className="mb-12">
            <h3 className="text-xl font-bold text-black mb-6 text-center">Wellness & Spa</h3>
            <div className="grid md:grid-cols-2 gap-8" role="list">
              <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Difficulty creating a calming atmosphere (Wellness)</h4>
                    <p className="text-sm sm:text-base text-black/70">Therapeutic soundscapes support relaxation, presence, and mindfulness.</p>
                  </div>
                </div>
              </article>
              <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Inconsistent client experience (Wellness)</h4>
                    <p className="text-sm sm:text-base text-black/70">Cohesive background music elevates every service across dayparts.</p>
                  </div>
                </div>
              </article>
              <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Low client retention (Wellness)</h4>
                    <p className="text-sm sm:text-base text-black/70">Guests associate your space with a rejuvenating, memorable visit.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Gyms */}
          <div>
            <h3 className="text-xl font-bold text-black mb-6 text-center">Gyms</h3>
            <div className="grid md:grid-cols-2 gap-8" role="list">
              <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Noise fatigue and harsh acoustics (Gyms)</h4>
                    <p className="text-sm sm:text-base text-black/70">Level smoothing and curated energy reduce ear fatigue so members stay longer.</p>
                  </div>
                </div>
              </article>
              <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Flat energy across dayparts (Gyms)</h4>
                    <p className="text-sm sm:text-base text-black/70">Diverse, discovery-friendly playlists progress from warm-up to peak effort to cool-down, aligned to class timetables keeping members curious and excited for what's next.</p>
                  </div>
                </div>
              </article>
              <article role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Brand inconsistency across locations (Gyms)</h4>
                    <p className="text-sm sm:text-base text-black/70">Central curation keeps your sound on-brand from studio to studio.</p>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-black/70 mb-6">
              Discover <Link to={createPageUrl("background-music-shapes-customer-behavior")} className="underline hover:text-black font-semibold">how music influences behavior</Link>, explore our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">signature playlists</Link>, or see all <Link to={createPageUrl("Industries")} className="underline hover:text-black font-semibold">industries we serve</Link>.
            </p>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg whitespace-normal" aria-label="Design Your Healing Soundscape">Design Your Healing Soundscape</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}
