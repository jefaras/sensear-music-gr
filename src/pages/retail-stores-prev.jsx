import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function RetailStores() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Retail Store Music Solutions | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Strategic retail music curation that increases customer engagement and sales. Create memorable shopping experiences with sonic branding.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/retail-stores');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/retail-stores';
      document.head.appendChild(canonicalLink);
    }

    const newImageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg';

    const ogTags = [
    { property: 'og:title', content: 'Retail Store Music Solutions | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: newImageUrl },
    { property: 'og:url', content: 'https://sensear.music/retail-stores' },
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
    { name: 'twitter:title', content: 'Retail Store Music Solutions | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: newImageUrl }];

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
      "name": "Retail Store Music Curation",
      "description": "Attract, engage and elevate the atmosphere of your retail store with the right sound atmospherics that influence shopping decision-making.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Retail Music Curation",
      "audience": {
        "@type": "Audience",
        "audienceType": "Retail Stores"
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
        "name": "Retail Stores",
        "item": "https://sensear.music/retail-stores"
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

      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Retail Stores section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Music for retail stores that drives discovery & conversion
            </h1>
          </div>
        </div>

        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Modern retail store with strategic music curation influencing shopping behavior"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Modern retail store with strategic music curation influencing shopping behavior"
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
                Every track in your store shapes how long people browse, what they notice & whether they buy.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                <strong>SensEar</strong> designs store music that supports your retail atmosphere & turns it into part of the shopping experience, not background noise.
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
              <p className="text-xl text-black/80 mb-6">Retail brands that want music to work like a silent salesperson:</p>
              <ul className="space-y-6 text-lg text-black/70">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Fashion & lifestyle boutiques</strong> that live on discovery & curation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Flagship stores</strong> that need a signature retail atmosphere across floors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Multi store brands</strong> that want consistent sound with local flavor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Concept & editorial spaces</strong> that change themes, art & installations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">•</span>
                  <span><strong>Pop ups</strong> that must make an impression from day one</span>
                </li>
              </ul>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <div className="w-[85%] mx-auto">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1eae8a545_9ce5db84dcf12ffe5ccf1513e7eabca6.jpg"
                  alt="Fashion model in stylish retail setting"
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
        { label: "Retail Stores", path: createPageUrl("retail-stores") }]
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fea79f153_e416ab4395ea12d490e85d406ce8fcc3.jpg"
                alt="Stylish man in retail fashion setting"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The quick exit syndrome</h3>
                <p className="text-lg text-black/70">People walk in, glance around & leave within minutes. The wrong store music makes the space feel like a task, not a place to explore.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The brand mismatch</h3>
                <p className="text-lg text-black/70">Visual merchandising is perfect, but the soundtrack says "generic radio". Your audio identity does not match your displays, price point or service.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The seasonal stagnation</h3>
                <p className="text-lg text-black/70">New collections arrive, but the music stays the same. Regulars feel repetition instead of a fresh shopping experience.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">The conversion challenge</h3>
                <p className="text-lg text-black/70">Browsers linger without trying or buying. The atmosphere is not creating the calm, confident state where "yes" feels natural.</p>
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
                <h3 className="text-2xl font-bold text-black mb-3">Store journeys scored from entrance to checkout</h3>
                <p className="text-lg text-black/70">We design playlists that guide shoppers from doorway to fitting room to checkout, supporting natural browsing, trying & deciding.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Soundscapes tuned for dwell time & flow</h3>
                <p className="text-lg text-black/70">Tempo, genre & volume are calibrated so people feel relaxed enough to explore, yet energized enough to keep moving, reducing quick exits.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Brand exact audio identity</h3>
                <p className="text-lg text-black/70">We pair store music with your visuals, pricing & shoppers. For multi store brands, we keep locations consistent while adding local touches.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Seasonal & campaign ready rotations</h3>
                <p className="text-lg text-black/70">Playlists evolve with new collections, sales & campaigns, keeping the experience fresh while still recognisably "you".</p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bacc2ba6c_photo-1529480993802-d8e747bb1ecb.jpg"
                alt="Modern retail interior with neon lighting"
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9d34ffa69_tumblr_odj9e5JRuo1uotgxio3_1280.jpg"
                alt="Colorful retail architecture interior"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Longer, deeper browsing</h3>
                <p className="text-lg text-white/80">A comfortable, well paced atmosphere makes people stay a little longer, pick up more items & explore zones they might otherwise skip.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Stronger brand perception & recall</h3>
                <p className="text-lg text-white/80">Sound, visuals & service finally tell the same story, helping customers remember your store & recognise it across locations.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Smoother in store flow</h3>
                <p className="text-lg text-white/80">The right energy supports natural movement through sections, changing rooms & checkout, reducing bottlenecks & stress.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">Licensing & control & peace of mind</h3>
                <p className="text-lg text-white/80">You get curated, centrally managed playlists that are properly licensed for commercial use, not consumer apps.</p>
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
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed mb-6">
                Fashion & lifestyle retailers work with <strong>SensEar</strong> to make music part of the shopping ritual.
              </p>
              <p className="text-xl md:text-2xl text-black/70 italic leading-relaxed">
                Their stores now feel more intentional, guests stay to explore collections & the brand story is heard as clearly as it is seen.
              </p>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/4ee147bf6_6fd38d8f206dc0b7749c169007cee524.jpg"
                alt="Stylish retail fashion display"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>

          {/* Hear this industry in action - Centered below */}
          <div className="max-w-2xl mx-auto mt-16 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">Hear this industry in action</h3>
            <p className="text-lg md:text-xl text-black/70 mb-6">Listen to a curated demo playlist for retail stores</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Ready to turn your store music into a real retail experience?</h2>
          <p className="text-xl text-black/80 mb-8">
            We review your current sound, map your shopper journey & propose a tailored music approach for your store or brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-8 py-6 text-lg">
                Book a music consultation
              </Button>
            </Link>
          </div>
          <p className="text-black/70 mt-8">
            Explore how our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">Signature Playlists</Link> and <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">Sonic Strategy</Link> work for retail stores.
          </p>
        </div>
      </section>
    </div>
  );
}