import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Target, Gem, RefreshCw, CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function SignaturePlaylists() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Signature Playlists | Custom Playlists by SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Bespoke, brand-exclusive playlists from rare archives. Hand-curated music that transforms your venue's atmosphere. Monthly updates included.";
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

    // Add robots meta tag - SERVICE PAGE: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/signature-playlists');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/signature-playlists';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Signature Playlists | Custom Playlists by SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/signature-playlists' }];


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
    { name: 'twitter:title', content: 'Signature Playlists | Custom Playlists by SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80' }];


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
      "https://www.instagram.com/sensear.music"]

    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Signature Playlists",
      "description": "Bespoke, brand-exclusive playlists sourced from rare archives for venues that refuse to sound generic.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Music Playlist Curation"
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Signature Playlists",
        "item": "https://sensear.music/signature-playlists"
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
      `}</style>

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Signature Playlists section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Signature playlists that define your venue's atmosphere
            </h1>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Bespoke music curation and playlist creation for unique venue atmosphere"
                className="absolute w-full h-full object-cover md:hidden" />

              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Bespoke music curation and playlist creation for unique venue atmosphere"
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            {/* Left: Content */}
            <div>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                We design fresh, engaging playlists that reflect your brand, guide the energy in your spaces & keep guests and teams tuned in. Music stops being background and becomes part of the experience.
              </p>
            </div>
            
            {/* Right: Titles */}
            <div className="lg:min-w-[280px]">
              <h2 className="text-[0.75rem] tracking-widest text-white/60 mb-2 uppercase">
                Signature playlists / Background music
              </h2>
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight">
                What is it
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">Who this is for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-xl text-black/80 mb-6">Signature Playlists are ideal for venues that want music to work like part of the service:</p>
              <ul className="space-y-6 text-lg text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Hotels & resorts</strong> that need a smooth journey from morning to late night</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Restaurants & bars</strong> that live on repeat guests & bar spend</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Retail stores</strong> that want a soundtrack that fits their visual story</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Wellness spaces & gyms</strong> where sound supports treatment or training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Galleries, museums & fashion spaces</strong> that need intentional, curated sound</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <div className="w-[76.5%] mx-auto">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9b1baab05_00-Vondom-Milos-Lovia-Mykonos-1cropped.jpg"
                  alt="Luxury hotel room with curated music atmosphere"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-right">What you get</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16c07c365_cc313a1e26a1dd887202657b5dabf32c.jpg"
                alt="Vinyl records collection for curated playlists"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Curated playlists that amplify your brand</h3>
                <p className="text-lg text-black/70">We design venue specific playlists that encourage longer & repeat stays, higher spend and more memorable visits.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Rare finds selected for your venue</h3>
                <p className="text-lg text-black/70">Hand picked tracks from deeper catalogues, arranged to follow your venue's flow, concept & guest profile.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Evolving rotations that keep your vibe alive</h3>
                <p className="text-lg text-black/70">Monthly rotations keep the sound fresh for regulars and staff, while staying recognisably "you".</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Central control with curator support</h3>
                <p className="text-lg text-black/70">You get a simple way to manage what plays where, plus a curator hotline when you want tweaks or support.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems we solve */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">Problems we solve</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Inconsistent, generic playlists</h3>
                <p className="text-lg text-black/70">Template playlists from streaming services feel flat or off brand. We tailor music to your identity, layout & rhythm so every track belongs.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Music that ignores guest flow</h3>
                <p className="text-lg text-black/70">What works at 10:00 in the morning rarely works at 22:00. We sequence playlists to shift naturally with traffic, energy & time of day.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Repetition that wears on guests and teams</h3>
                <p className="text-lg text-black/70">Hearing the same songs on loop creates fatigue. We refresh sets regularly, drawing from our private archive and your team's feedback.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">No control or licensing peace of mind</h3>
                <p className="text-lg text-black/70">Ad hoc choices from YouTube or consumer apps risk both your brand and compliance. We provide properly cleared music for business use and a clear structure for who controls it.</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc49da4e8_ed448e1a555b86a5905eaa678fccc8d8.jpg"
                alt="Music mixing equipment and sound control"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-right">How it works</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/df3b41498_Experimental-Cocktail-Club-Negroni-1024x1024.jpg"
                alt="Cocktail representing curated hospitality experience"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Discovery & venue mapping</h3>
                <p className="text-lg text-black/70">We learn your brand, spaces, guest journeys & service flow.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Playlist suite & setup</h3>
                <p className="text-lg text-black/70">We deliver your first set of signature playlists and help you implement them across zones and times of day.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Ongoing refinement</h3>
                <p className="text-lg text-black/70">We monitor feedback, rotate tracks & fine tune so the sound grows with your venue and seasons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof in practice */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">Proof in practice</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-xl text-black/80 leading-relaxed">
                Venues like <Link to={createPageUrl("blue-bamboo")} className="underline hover:text-black font-semibold">Blue Bamboo</Link>, <Link to={createPageUrl("beach-house-antiparos")} className="underline hover:text-black font-semibold">Beach House Antiparos</Link> & <Link to={createPageUrl("klouvi-bar")} className="underline hover:text-black font-semibold">Klouvi Bar</Link> use our signature playlists to keep atmosphere aligned with every moment, helping guests stay longer, spend more comfortably and remember the experience for its vibe as much as its food or design.
              </p>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <div className="w-[76.5%] mx-auto">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/afb08a148_fe959a9eda0e3059a0b19f803958ba85.jpg"
                  alt="Mindful music curation experience"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to transform your venue's atmosphere?</h2>
          <p className="text-xl text-black/70 mb-8">
            Let us craft a signature sound that feels as considered as your interiors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                Create your signature sound
              </Button>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">Sonic Strategy</Link> & <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Audio Upgrades</Link> build on your playlists.
          </p>
        </div>
      </section>
    </div>);

}