import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Music, Disc, Headphones, Settings, CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function EventSoundtracks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Event Music & AV Production | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Custom event soundtracks and AV production. DJ programming, sound checks, and immersive audio experiences. Book your event consultation.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/event-soundtracks');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/event-soundtracks';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Event Music & AV Production | SensEar' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80' },
      { property: 'og:url', content: 'https://sensear.music/event-soundtracks' },
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
      { name: 'twitter:title', content: 'Event Music & AV Production | SensEar' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&q=80' }
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
        "name": "Event Soundtracks",
        "description": "Artfully selected, custom-curated soundtracks and seamless AV production that elevate events into immersive, unforgettable moments.",
        "provider": {
          "@type": "Organization",
          "name": "SensEar",
          "url": "https://sensear.music"
        },
        "areaServed": "GR",
        "serviceType": "Event Music and AV Production"
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

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Event Soundtracks section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for Events:<br />
              Custom soundtracks that elevate every moment
            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                We design soundtracks that move with the energy of your event. Immersive Sound for Unforgettable Moments.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional event production with immersive music curation and AV setup"
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
          { label: "Services", path: createPageUrl("Services") },
          { label: "Event Soundtracks", path: createPageUrl("event-soundtracks") }
        ]} />
      </div> */}
      
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="what-we-do-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="what-we-do-heading" className="text-4xl font-bold text-center mb-6 leading-[1.25]">What We Do</h2>
          <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg">
From custom playlists, live DJ sets to sound audits and setup, we ensure your event sounds as good as it looks.
          </p>
          <div className="grid md:grid-cols-2 gap-8" role="list">
            <article role="listitem">
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Music className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Curated soundtracks that adapt to your timeline</h3>
                <p className="text-lg text-black/70">Custom music that flows with your event's mood, audience, and timeline.</p>
              </Card>
            </article>

            <article role="listitem">
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Disc className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">DJ programming or seamless transitions</h3>
                <p className="text-lg text-black/70">Professional DJ services or programmed transitions across zones and phases.</p>
              </Card>
            </article>

            <article role="listitem">
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Headphones className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Full AV support from sound checks to delivery</h3>
                <p className="text-lg text-black/70">Complete audio-visual support from initial setup to on-the-night execution.</p>
              </Card>
            </article>

            <article role="listitem">
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Audio system diagnosis and upgrade proposals</h3>
                <p className="text-lg text-black/70">Professional assessment and recommendations for better audio performance.</p>
              </Card>
            </article>
          </div>
          <p className="text-center text-black/70 mt-12 max-w-3xl mx-auto">
            <span>Our event music services build on our </span><Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">strategic sonic approach</Link><span>. Learn about </span><Link to={createPageUrl("service-environment-shapes-wait-time")} className="underline hover:text-black font-semibold">how environment affects guest perception</Link><span>.</span>
          </p>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-24 bg-white" aria-labelledby="process-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="process-heading" className="text-4xl font-bold text-center mb-12 leading-[1.25]">The Process</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6" role="list">
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Workshop with event manager and creative team.</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Delivery of music mood board, playlist or DJ set options, and AV plan.</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Playlist/DJ set rollout, scheduling, and live tuning.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Venue Sound Audits & AV Support Section */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="audits-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="audits-heading" className="text-4xl font-bold text-center mb-12 leading-[1.25]">Venue Sound Audits & AV Support</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-6" role="list">
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Walkthrough and acoustic diagnosis of your space.</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Equipment performance check (speakers, amps, zones, clarity).</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Detailed report with practical upgrade suggestions.</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Tailored gear proposals that match your use case and style.</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Procurement and installation support with trusted partners.</p>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-lg text-black/70">Final tuning and soundcheck under real event conditions.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white" aria-labelledby="problems-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="problems-heading" className="text-4xl font-bold text-center mb-6 leading-[1.25]">Problems We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8" role="list">
            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Music that feels like it was not part of the plan</h3>
                  <p className="text-black/70">Even well-designed events often miss the mark with music. We treat sound as part of the experience design; shaping atmosphere, pacing, and emotional tone.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Mismatch between music and the event's purpose</h3>
                  <p className="text-black/70">Whether it is a product launch, press event, or private celebration, ready-made playlists cannot express your concept. We build music narratives that capture the event's essence.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Poor audio performance in the space</h3>
                  <p className="text-black/70">Echoes, uneven coverage, or underpowered speakers kill immersion. We audit and upgrade your system so that the sound delivers and not distracts.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Too many vendors, unclear accountability</h3>
                  <p className="text-black/70">Music and AV are often split across providers, creating confusion. We handle both, from curation to equipment setup, with one clear point of contact, saving  you time, effort and money.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Last-minute tweaks are a struggle</h3>
                  <p className="text-black/70">Events are fluid, but most providers are not. Our curator hotline and on-call support make it easy to adapt, even hours before doors open.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <p className="text-black/70">
              <span>Understand </span><Link to={createPageUrl("what-exactly-does-music-curator-do")} className="underline hover:text-black font-semibold">what a professional music curator brings</Link><span> to your event. Discover solutions for all </span><Link to={createPageUrl("Industries")} className="underline hover:text-black font-semibold">industries we serve</Link><span>. Read </span><Link to={createPageUrl("three-reasons-make-music-hospitality")} className="underline hover:text-black font-semibold">why music matters in hospitality</Link><span> and learn </span><Link to={createPageUrl("service-environment-shapes-wait-time")} className="underline hover:text-black font-semibold">how environment affects guest perception</Link><span>.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#faebe3]" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-black mb-6 leading-[1.25]">
            Ready to Create an Unforgettable Event Experience?
          </h2>
          <p className="text-xl text-black/70 mb-8">
            Let our experienced team handle everything sound-related for your next event.
          </p>
          <Link to={createPageUrl("ContactUs")}>
            <Button size="lg" className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold" aria-label="Design Your Event Atmosphere">
              Design Your Event Atmosphere
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}