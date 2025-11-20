import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function EventSoundtracks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Event Soundtracks & Live DJ Sets | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Custom event soundtracks and live DJ programming that follow your event timeline. Immersive audio experiences for launches, ceremonies, and celebrations.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/event-soundtracks');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/event-soundtracks';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Event Soundtracks & Live DJ Sets | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg' },
    { property: 'og:url', content: 'https://sensear.music/event-soundtracks' }];

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
    { name: 'twitter:title', content: 'Event Soundtracks & Live DJ Sets | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg' }];

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
      "name": "Event Soundtracks",
      "description": "Custom event soundtracks and live DJ sets that follow your event timeline, creating immersive audio experiences.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Event Music Curation"
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
        "name": "Event Soundtracks",
        "item": "https://sensear.music/event-soundtracks"
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Event Soundtracks section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Custom event soundtracks<br />& live DJ sets that elevate every moment
            </h1>
          </div>
        </div>

        {/* Hero Image with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Custom event soundtracks and live DJ programming"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Custom event soundtracks and live DJ programming"
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
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            <div className="lg:order-2 lg:min-w-[280px]">
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
                What is it
              </h2>
            </div>
            
            <div className="lg:order-1 lg:mt-[116px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                At events, sound quietly shapes how guests arrive, connect and remember what happened.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                We design immersive curated soundtracks & DJ sets that follow your show run, so each phase feels deliberate and not improvised.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">Who this is for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-black/80 mb-6">Event Soundtracks are ideal when you want sound to feel as designed as everything else:</p>
              <ul className="space-y-6 text-lg text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Hotels, resorts & restaurants that host launches, weddings, or special dinners</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Event organisers & creative agencies creating immersive experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Private chefs & hosts offering ceremonial or intimate dining</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Cultural venues, galleries & showrooms staging talks, previews or shows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span>Brands that know music shapes how guests feel, share and remember</span>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block">
              <div className="w-[85%] mx-auto">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9f56a9904_2f602f264fc83649ea78ee45caeec916upscaled.jpg"
                  alt="Event venue with curated soundscape"
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
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e56a199c4_ac423ae7b75beed60a76ecc7a719d544croppedUPSCALED.jpg"
                alt="Event soundtrack planning and execution"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Sound design for the show's run</h3>
                <p className="text-lg text-black/70">Custom multi chapter soundtracks that follow your event timeline, from opening to closing track.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Playlists, DJ sets or a hybrid</h3>
                <p className="text-lg text-black/70">Music that fits your concept and audience, delivered as playlists, live DJ programming or both.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">AV direction & support</h3>
                <p className="text-lg text-black/70">Guidance or coordination on sound checks, levels & playback, so the system works with your soundtrack.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Optional venue sound audit</h3>
                <p className="text-lg text-black/70">A walkthrough of your space, with a clear diagnosis of coverage, clarity & practical upgrade options when needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">How it works</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Discovery session</h3>
                <p className="text-lg text-black/70">We meet with you or your creative team to understand concept, schedule, spaces and key moments.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Soundtrack and AV plan</h3>
                <p className="text-lg text-black/70">We create a music mood board, playlists or DJ set options and a simple plan for how sound will support each phase.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Rollout and live tuning</h3>
                <p className="text-lg text-black/70">We handle or supervise playback, scheduling and on the day adjustments so key moments land as planned.</p>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/33cedde2f_46b116cdd43bbf9f9088407090957439cropped.jpg"
                alt="Event music planning process"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why this helps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-right">Why this helps</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/8fc129495_pxbee_2025-11-20_15-14-00.jpg"
                alt="Professional event audio setup"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Your soundtrack stops feeling generic</h3>
                <p className="text-lg text-black/70">Instead of one playlist running all night, you get music that follows the story of the event, with clear chapters and transitions.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">You worry less about sound on the day</h3>
                <p className="text-lg text-black/70">Levels, cues and key tracks are decided in advance, so you can host, present or perform without thinking about what plays next.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Vendors and systems pull in one direction</h3>
                <p className="text-lg text-black/70">Music, DJ and AV are aligned under one simple plan, which reduces back and forth between suppliers and last minute fixes.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The in between moments stay alive</h3>
                <p className="text-lg text-black/70">Energy does not drop between talks, courses or segments. Guests keep talking, watching and sharing instead of drifting to their phones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof in practice */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">How others use it</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed mb-6">
                Hotels, restaurants, galleries, and brands use our event soundtracks & live DJ sets for their events.
              </p>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed">
                SensEar turns launches, ceremonies & dinners into experiences guests talk about afterwards, not just dates in a calendar.
              </p>
            </div>

            <div className="hidden lg:block">
              <div className="w-[85%] mx-auto">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/33cedde2f_46b116cdd43bbf9f9088407090957439cropped.jpg"
                  alt="Successful event with curated music"
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to design your event's sonic journey?</h2>
          <p className="text-xl text-black/70 mb-8">
            Let us create a soundtrack that feels as curated as everything else.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                Book your event consultation
              </Button>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> & <Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">Audio Upgrades</Link> support event experiences.
          </p>
        </div>
      </section>
    </div>
  );
}