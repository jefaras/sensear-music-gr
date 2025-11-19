import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

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

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Wellness & Gyms section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for wellness & gyms that calms, focuses & motivates
            </h1>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
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
      <section className="bg-black py-16">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
            In wellness spaces & gyms, music isn't just ambiance but part of the session. <strong>SensEar</strong> designs spa music & wellness center playlists that support relaxation, focus & effort, so every visit feels naturally restorative or energizing.
          </p>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">Who this is for</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <p className="text-xl text-black/80 mb-6">Wellness spaces & gyms that want sound to work like part of the treatment:</p>
              <ul className="space-y-6 text-lg text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Spas, wellness centers & day retreats</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Yoga, Pilates & meditation studios</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Boutique gyms & studios</strong> focused on member experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Larger gyms</strong> that want consistent sound across zones & locations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Hybrid spaces</strong> with both treatment rooms & training areas</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1918a9569_73e713e59820cc7915a71ef35c9d5835.jpg"
                alt="Luxury wellness spa interior"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry-specific challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black text-right">Industry-specific challenges</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9f14b26a1_f30a161922bea03d96e30ad4f356dd81.jpg"
                alt="Spa treatment room ambiance"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The anxious mind</h3>
                <p className="text-lg text-black/70">Generic spa playlists loop endlessly or sound fake. Instead of calming the nervous system, they distract clients right when they should relax.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The broken treatment flow</h3>
                <p className="text-lg text-black/70">Sudden transitions or off mood tracks break the flow of a massage, facial or ritual. Moments that should feel deep & immersive become shallow or forgettable.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The flat class energy</h3>
                <p className="text-lg text-black/70">Gym classes run on autopilot with the same workout playlist all day. Energy doesn't rise when it should, cool downs feel rushed & members don't feel a clear journey.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The noise fatigue & brand split</h3>
                <p className="text-lg text-black/70">Harsh speakers & crowd noise create constant stress on the ears. Spa, treatment rooms & gym floor sound like different brands instead of one unified getaway.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How SensEar solves this */}
      <section className="py-20 animated-gradient">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-black">How SensEar solves this</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Therapeutic soundscapes for treatments</h3>
                <p className="text-lg text-black/70">We blend field recordings, ambient & new-age for treatment rooms, creating relaxing and healing sound layers.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Motivating flows for training & classes</h3>
                <p className="text-lg text-black/70">For cardio & strength work, playlists shift to clean, lyric-light electronic, modern funk & uplifting indie that match warm-up, peak & cool-down.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Time of day & schedule curation</h3>
                <p className="text-lg text-black/70">Music follows treatment schedules, classes & member flow, so all times and days get the right energy, not one-size-fits-all sets.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Acoustic comfort & zoned consistency</h3>
                <p className="text-lg text-black/70">We tune genre, tempo & levels to remove disruption & fatigue and give all spaces their own sound. Central curation & legal licensing keep everything easy to run.</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1cc711917_Physical_Photo_020101_cropped.jpg"
                alt="Wellness treatment atmosphere"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key benefits */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-12 text-white text-right">Key benefits</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16b4501cf_80735099_10156462996866216_6190029784664244224_n_cropped.jpg"
                alt="Relaxing wellness center pool"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Deeper relaxation & better sessions</h3>
                <p className="text-lg text-white/80">Therapeutic sound design helps clients drop into treatments faster, stay present & leave feeling truly restored.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Stronger motivation & member loyalty</h3>
                <p className="text-lg text-white/80">Classes & workouts feel supported by the right energy curve, helping members push when needed & unwind when it's time to recover.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">A cohesive wellness brand experience</h3>
                <p className="text-lg text-white/80">From reception to last stretch, every space sounds intentional & on brand, whether you have one location or many.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Less sound stress for teams</h3>
                <p className="text-lg text-white/80">Staff don't need to think about playlists mid shift. They get reliable, session ready sound that just works.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof with Image */}
      <section className="py-16 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed">
                Wellness centers, studios & gyms work with <strong>SensEar</strong> to turn music into part of the healing & training ritual. Their spaces now feel more intentional, clients relax faster, members stay engaged & the overall experience feels designed, not improvised.
              </p>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8677ee00_7a44bbf63d1976a0dc90393822b39a06cropped.jpg"
                alt="Luxury wellness pool interior"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Hear this industry in action - Centered below */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Hear this industry in action</h3>
            <p className="text-lg md:text-xl text-black/70 mb-6">Listen to a curated demo playlist for wellness & gyms</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to design your healing & training soundscape?</h2>
          <p className="text-xl text-black/80 mb-8">
            We review your current sound, map your sessions & member journey, then propose a tailored music approach for your wellness space or gym network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                Book a music consultation
              </Button>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> & <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">Sonic Strategy</Link> work for wellness & gyms.
          </p>
        </div>
      </section>
    </div>);

}