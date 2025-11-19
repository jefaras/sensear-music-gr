import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function EventsExperiences() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music for Events & Experiences | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Custom event soundtracks and AV production. Professional DJ programming and immersive audio experiences for unforgettable events.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/events-experiences');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/events-experiences';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Music for Events & Experiences | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg' },
    { property: 'og:url', content: 'https://sensear.music/events-experiences' },
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
    { name: 'twitter:title', content: 'Music for Events & Experiences | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg' }];

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
      "name": "Music for Events & Experiences",
      "description": "Custom event soundtracks and AV production for immersive experiences.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Event Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Events and Experiences"
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
        "name": "Events & Experiences",
        "item": "https://sensear.music/events-experiences"
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

      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Events & Experiences section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for events & experiences that guests feel & remember
            </h1>
          </div>
        </div>

        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Event production with professional AV and music curation services"
                className="absolute w-full h-full object-cover md:hidden"
              />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Event production with professional AV and music curation services"
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
            {/* Right: Titles - appears first on mobile, second on desktop */}
            <div className="lg:order-2 lg:min-w-[280px]">
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
                What is it
              </h2>
            </div>
            
            {/* Left: Content - appears second on mobile, first on desktop */}
            <div className="lg:order-1 lg:mt-[116px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                At events, sound is the glue between moments.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                <strong>SensEar</strong> designs custom event soundtracks, conference music & wedding playlists so every phase feels intentional, from doors open to last track.
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
            {/* Left: Content */}
            <div>
              <p className="text-xl text-black/80 mb-6">Events & experiences where sound should feel as designed as everything else:</p>
              <ul className="space-y-6 text-lg text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Hotels, resorts & restaurants</strong> that host live events or ambient experiences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Event organisers & creative agencies</strong> designing immersive activations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Private chefs, curators & professionals</strong> offering personalised or ceremonial dining</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Cultural venues, fashion shows, galleries & concept spaces</strong> seeking a sonic identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Brands or individuals</strong> who know sound defines the experience</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <div className="w-[76.5%] mx-auto">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/604e3a452_2eb02f6aa00cbdc92f835b115166f9fb.jpg"
                  alt="Event sound technical challenge"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
         <Breadcrumbs items={[
         { label: "Industries", path: createPageUrl("Industries") },
         { label: "Events & Experiences", path: createPageUrl("events-experiences") }]
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/72affbd7e_a4f32fd29f6b2f75dae0c99d5942d2c8.jpg"
                alt="Event atmosphere with guests"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The one-size-fits-all soundtrack</h3>
                <p className="text-lg text-black/70">Pre-made playlists don't respect planning, timing or key moments. The same mood runs throughout the event, so nothing really lands.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The soundcheck anxiety</h3>
                <p className="text-lg text-black/70">Instead of being present, you worry about volume jumps, dead zones or tracks cutting out right when things get emotional.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The vendor tangle</h3>
                <p className="text-lg text-black/70">DJ, playlists, AV, venue, all are pieces of the puzzle. You spend time chasing updates & solving conflicts instead of shaping the experience.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The flat in-between moments</h3>
                <p className="text-lg text-black/70">Energy dips between talks, courses or segments. Guests scroll their phones instead of feeling carried through the story you planned.</p>
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
                <h3 className="text-2xl font-bold text-black mb-3">Run-of-show sound design</h3>
                <p className="text-lg text-black/70">We design custom, multi-chapter soundtracks that go along with your conference, launch, or wedding dinner, from arrival to the final track.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Story-driven event soundtracks</h3>
                <p className="text-lg text-black/70">Our curators craft dynamic, story-driven musical journeys that fit your theme, brand & guests. Music evolves as the night goes so people feel guided, not just entertained.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Technical reliability & AV supervision</h3>
                <p className="text-lg text-black/70">Our partners hand-pick equipment, tune levels & manage playback, so there are no bad surprises. What guests hear stays clear, even & present.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">One point of contact for sound & AV</h3>
                <p className="text-lg text-black/70">We manage music curation & AV production, working directly with your venue. You talk to one team that understands both creative & technical details.</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f202eaf0e_410494315_375848528274698_8398961206007741661_ncropped.jpg"
                alt="Event experience with guests dancing"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/312254f07_7d82256351ac82435f9645aa580c2f01cropped.jpg"
                alt="Event atmosphere with guests enjoying"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Events that feel like experiences, not schedules</h3>
                <p className="text-lg text-white/80">Guests feel guided from welcome to finale, with music that frames each moment instead of just filling silence.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Stronger engagement & reactions</h3>
                <p className="text-lg text-white/80">Carefully timed shifts in energy help people listen, connect, share & remember, making your event more photogenic, "postable" & talk-worthy.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Less stress for organisers & hosts</h3>
                <p className="text-lg text-white/80">You have one partner for music & AV, clear decisions & fewer moving parts to manage on the day.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">A repeatable sonic blueprint</h3>
                <p className="text-lg text-white/80">Once we design what works, you can adapt the same sonic framework for future editions, cities or client events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof with Image */}
      <section className="py-16 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">Social proof</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed">
                Brands, venues & creators trust <strong>SensEar</strong> to make sound a core part of their experiences. From intimate island dinners to city launches, our event soundtracks have turned carefully planned gatherings into nights guests still talk about long after they end.
              </p>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/efeae9e53_56bb71da7fa44cbf6f001204format-webpwidth-1440_wWzsf3qJ3dJMkxWN-.jpg"
                alt="Event guests enjoying atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Hear this industry in action - Centered below */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Hear this industry in action</h3>
            <p className="text-lg md:text-xl text-black/70 mb-6">Listen to a curated demo playlist for events & experiences</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to plan the sound for your next event or experience?</h2>
          <p className="text-xl text-black/80 mb-8">
            We review your concept, venue & run-of-show, then propose a tailored event soundtrack & AV approach that keeps guests immersed from first arrival to final goodbye.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                Book a music consultation
              </Button>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("event-soundtracks")} className="underline hover:text-black font-semibold">Event Soundtracks</Link> and <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> support events & experiences.
          </p>
        </div>
      </section>
    </div>
  );
}