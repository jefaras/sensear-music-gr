
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Volume2, Settings, Wrench, CheckCircle, Lightbulb, Package, CheckSquare } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function AudioUpgrades() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Audio Upgrades | SensEar Sound Optimization";

    let metaDescription = document.querySelector('meta[name="description"]');
    const description = "Professional sound checks, acoustic optimization, and audio calibration. Guaranteed fixes for any venue sound issue. Book your assessment today.";

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
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
      canonicalLink.setAttribute('href', 'https://sensear.music/audio-upgrades');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/audio-upgrades';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Audio Upgrades | SensEar Sound Optimization' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/audio-upgrades' }];

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
    { name: 'twitter:title', content: 'Audio Upgrades | SensEar Sound Optimization' },
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

    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SensEar",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b3/16dd574fc_se-profile-silver-profile-1.jpg",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Audio Upgrades",
      "description": "Professional on-site sound checks, optimization and audio calibration, with guaranteed fixes for any sound related issue.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Audio Optimization and Calibration"
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
        "name": "Audio Upgrades",
        "item": "https://sensear.music/audio-upgrades"
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
      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Audio Upgrades section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-black mb-6 leading-[1.1]">
              Audio Upgrades:<br />
              Sound in perfect alignment with your space
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                On-site acoustic checks, system tuning, and immersive AV design, tailored to your layout, energy flow, and aesthetic.
              </p>
            </div>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white px-8 py-6 text-lg font-medium rounded-md inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 hover:bg-black/80" aria-label="Book an audio experience assessment">Book an Audio Experience Assessment</Button>
            </Link>
          </div>
        </div>

        <div className="w-full px-6 mt-12 md:mt-24">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional audio equipment optimization and acoustic calibration for venues"
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

      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b2/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="what-we-do-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="what-we-do-heading" className="text-4xl font-bold text-center mb-6 animate-fade-in-up leading-[1.25]">What We Do</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Card className="bg-white p-8 shadow-lg h-full">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">On-site acoustic audits and layout assessments</h3>
                <p className="text-lg text-black/70">We analyze your space's acoustics and current setup to identify issues and opportunities for improvement.</p>
              </Card>
            </article>

            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Card className="bg-white p-8 shadow-lg h-full">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Volume2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Hardware testing and zone performance</h3>
                <p className="text-lg text-black/70">We test speakers, amplifiers, and coverage to ensure every zone delivers crystal-clear sound.</p>
              </Card>
            </article>

            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Card className="bg-white p-8 shadow-lg h-full">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Redesigns for clarity and immersive flow</h3>
                <p className="text-lg text-black/70">We create tailored solutions that enhance clarity, coverage, and create an immersive audio experience.</p>
              </Card>
            </article>

            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
              <Card className="bg-white p-8 shadow-lg h-full">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Lightbulb className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Tailored AV proposals based on your needs and aesthetics</h3>
                <p className="text-lg text-black/70">We design custom audio-visual solutions that align with your venue's unique character and functional requirements.</p>
              </Card>
            </article>

            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Card className="bg-white p-8 shadow-lg h-full">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Package className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Procurement and installation with trusted AV partners</h3>
                <p className="text-lg text-black/70">We source premium equipment and coordinate professional installation through our network of certified partners.</p>
              </Card>
            </article>

            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <Card className="bg-white p-8 shadow-lg h-full">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <CheckSquare className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Final tuning and walkthrough under real conditions</h3>
                <p className="text-lg text-black/70">We calibrate your system during actual operations, ensuring optimal performance in live environment conditions.</p>
              </Card>
            </article>
          </div>
          <p className="text-center text-black/70 mt-12 max-w-3xl mx-auto">
            Sound in perfect alignment with your space. Essential for <Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black font-semibold">restaurants & bars</Link>, <Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black font-semibold">hotels</Link>, and <Link to={createPageUrl("retail-stores")} className="underline hover:text-black font-semibold">retail spaces</Link>. Complements our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">signature playlists</Link> perfectly.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white" aria-labelledby="problems-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="problems-heading" className="text-4xl font-bold text-center mb-6 animate-fade-in-up leading-[1.25]">Problems We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8" role="list">
            <article className="p-6 bg-gray-50 rounded-lg animate-fade-in-up" role="listitem" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Sound that does not fit the room</h3>
                  <p className="text-black/70">Harsh reflections, dead zones, or overpowering volumes often stem from mismatched layouts or poor calibration. We balance sound to fit your space—clean, even, and immersive.</p>
                </div>
              </div>
            </article>

            <article className="p-6 bg-gray-50 rounded-lg animate-fade-in-up" role="listitem" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Guests struggling to hold a conversation</h3>
                  <p className="text-black/70">If the music is too loud—or too uneven—guests leave faster. We design a sound environment that supports social flow without sacrificing presence or clarity.</p>
                </div>
              </div>
            </article>

            <article className="p-6 bg-gray-50 rounded-lg animate-fade-in-up" role="listitem" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Equipment that underperforms or is overcomplicated</h3>
                  <p className="text-black/70">Too often, venues are sold the wrong gear or setups they cannot manage. We simplify, optimize, and make sure your team can run the system without stress.</p>
                </div>
              </div>
            </article>

            <article className="p-6 bg-gray-50 rounded-lg animate-fade-in-up" role="listitem" style={{ animationDelay: '0.7s' }}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">No clear support or accountability</h3>
                  <p className="text-black/70">You should not have to chase multiple suppliers for basic sound performance. We handle everything—from diagnosis to delivery—as your all-in-one partner.</p>
                </div>
              </div>
            </article>

            <article className="p-6 bg-gray-50 rounded-lg animate-fade-in-up" role="listitem" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Spaces that look premium compromised by weak sound</h3>
                  <p className="text-black/70">Great design deserves sound to match. We make sure your venue sounds as considered as it looks.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <p className="text-black/70">
              Discover how proper audio setup supports <Link to={createPageUrl("brand-music-increase-sales")} className="underline hover:text-black font-semibold">increased sales through music</Link>. Perfect for all <Link to={createPageUrl("Industries")} className="underline hover:text-black font-semibold">industries we serve</Link>. Available alongside our <Link to={createPageUrl("event-soundtracks")} className="underline hover:text-black font-semibold">event services</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold mb-6 leading-[1.25]">
            Ready to Optimize Your Sound?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's assess your space and create the perfect audio experience for your venue.
          </p>
          <Link to={createPageUrl("ContactUs")}>
            <Button size="lg" className="bg-slate-50 text-black px-8 py-6 text-lg font-medium hover:bg-[#f0dfd5]" aria-label="Optimize Your Sound System">
              Optimize Your Sound System
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
