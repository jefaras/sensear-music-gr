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

  const whatWeDo = [
  {
    icon: Target,
    title: 'Curated playlists to amplify your brand',
    description: 'We design branded playlists that transform your atmosphere & encourage longer stays, higher spend and memorable visits.'
  },
  {
    icon: Gem,
    title: 'Rare finds, perfectly set up for your venue',
    description: "Every track is hand-picked from rare vinyl collections & sequenced to follow your venue's flow and branding."
  },
  {
    icon: RefreshCw,
    title: 'Evolving playlists to keep your vibe alive',
    description: 'Monthly rotations ensure the sound is always fresh, exciting and evolving with your space.'
  }];


  const features = [
  'No algorithm repetition, hand-selected library only',
  'Fresh rotations and updates each month',
  'Adaptive scheduling by zone and time of day',
  'Global rights clearance',
  'Cloud dashboard for multi-site control',
  'Curator hotline for fast feedback and playlist tweaks'];


  const problemsWeSolve = [
  {
    title: 'Generic playlists that miss the mark',
    description: 'Streaming services and in-store providers often rely on templates. The result feels flat or unrelated to your space. We tailor music to your brand identity and venue rhythm—no filler, no guesswork.'
  },
  {
    title: 'Music that fails to evolve with the guest flow',
    description: 'What works at 10 AM may not work at 10 PM. We sequence playlists to shift naturally with your customer traffic, energy levels, and time of day.'
  },
  {
    title: 'Repetitive tracks that tire both guests and staff',
    description: 'Our selections refresh monthly, pulling from private archives, white-label promos, and feedback from your team.'
  },
  {
    title: 'No central control over what is playing',
    description: 'We offer a centralized platform and curator hotline to keep your brand voice consistent—without micromanaging.'
  },
  {
    title: 'Audio rights and compliance concerns',
    description: 'Many venues play unlicensed music unknowingly. We provide globally cleared tracks, keeping you compliant and future-proof.'
  }];


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
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">Signature Playlists:
<br/>Curated playlists that shape your venue's mood & energy

            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                We transform your venue with fresh, engaging playlists that reflect your brand and captivate both staff and customers with their storytelling.
              </p>
            </div>
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

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
         <Breadcrumbs items={[
         { label: "Services", path: createPageUrl("Services") },
         { label: "Signature Playlists", path: createPageUrl("signature-playlists") }]
         } />
        </div> */}

      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="what-we-do-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="what-we-do-heading" className="text-4xl font-bold text-center mb-6 leading-[1.25]">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <article>
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Curated playlists to amplify your brand</h3>
                <p className="text-black/70">We design branded playlists that transform your atmosphere & encourage longer stays, higher spend and memorable visits.</p>
              </Card>
            </article>

            <article>
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Gem className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Rare finds, perfectly set up for your venue</h3>
                <p className="text-black/70">Every track is hand-picked from rare vinyl collections & sequenced to follow your venue's flow and branding.</p>
              </Card>
            </article>

            <article>
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <RefreshCw className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Evolving playlists to keep your vibe alive</h3>
                <p className="text-black/70">Monthly rotations ensure the sound is always fresh, exciting and evolving with your space.</p>
              </Card>
            </article>
          </div>
          <p className="text-center text-black/70 mt-12 max-w-3xl mx-auto">
            <span>Our playlists work best when paired with our </span><Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">sonic strategy service</Link><span>. See real results in our </span><Link to={createPageUrl("pelicanos-sifnos-restaurant")} className="underline hover:text-black font-semibold">Pelicanos case study</Link><span> and understand </span><Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="underline hover:text-black font-semibold">how brand-fit music converts browsers into buyers</Link><span>. Perfect for </span><Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black font-semibold">hotels</Link><span>, </span><Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black font-semibold">restaurants</Link><span>, and </span><Link to={createPageUrl("retail-stores")} className="underline hover:text-black font-semibold">retail spaces</Link><span>.</span>
          </p>
        </div>
      </section>

       <section className="py-24 bg-white" aria-labelledby="features-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="features-heading" className="text-4xl font-bold text-center mb-6 leading-[1.25]">Key Features & Benefits</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                <Check className="w-4 h-4 text-peach" />
              </div>
              <p className="text-lg text-black/80">No algorithm repetition, hand-selected library only</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                <Check className="w-4 h-4 text-peach" />
              </div>
              <p className="text-lg text-black/80">Fresh rotations and updates each month</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                <Check className="w-4 h-4 text-peach" />
              </div>
              <p className="text-lg text-black/80">Adaptive scheduling by zone and time of day</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                <Check className="w-4 h-4 text-peach" />
              </div>
              <p className="text-lg text-black/80">Global rights clearance</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                <Check className="w-4 h-4 text-peach" />
              </div>
              <p className="text-lg text-black/80">Cloud dashboard for multi-site control</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                <Check className="w-4 h-4 text-peach" />
              </div>
              <p className="text-lg text-black/80">Curator hotline for fast feedback and playlist tweaks</p>
            </li>
          </ul>
          <p className="text-center text-black/70 mt-12 max-w-3xl mx-auto">
            <span>Learn how our continuous </span><Link to={createPageUrl("music-curation-cycle-venues")} className="underline hover:text-black font-semibold">analyze and optimize approach</Link><span> ensures your soundscapes evolve with your venue. Complement with our </span><Link to={createPageUrl("music-for-events")} className="underline hover:text-black font-semibold">music for events</Link><span>. Perfect for all </span><Link to={createPageUrl("Industries")} className="underline hover:text-black font-semibold">industries we serve</Link><span>.</span>
          </p>
        </div>
      </section>

      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="problems-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="problems-heading" className="text-4xl font-bold text-center mb-6 leading-[1.25]">Problems We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <article className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Generic playlists that miss the mark</h3>
                  <p className="text-black/70">Streaming services and in-store providers often rely on templates. The result feels flat or unrelated to your space. We tailor music to your brand identity and venue rhythm—no filler, no guesswork.</p>
                </div>
              </div>
            </article>

            <article className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Music that fails to evolve with the guest flow</h3>
                  <p className="text-black/70">What works at 10 AM may not work at 10 PM. We sequence playlists to shift naturally with your customer traffic, energy levels, and time of day.</p>
                </div>
              </div>
            </article>

            <article className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Repetitive tracks that tire both guests and staff</h3>
                  <p className="text-black/70">Our selections refresh monthly, pulling from private archives, white-label promos, and feedback from your team.</p>
                </div>
              </div>
            </article>

            <article className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">No central control over what is playing</h3>
                  <p className="text-black/70">We offer a centralized platform and curator hotline to keep your brand voice consistent—without micromanaging.</p>
                </div>
              </div>
            </article>

            <article className="p-6 bg-white rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Audio rights and compliance concerns</h3>
                  <p className="text-black/70">Many venues play unlicensed music unknowingly. We provide globally cleared tracks, keeping you compliant and future-proof.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <p className="text-black/70">
              <span>Discover </span><Link to={createPageUrl("music-influence-consumer-behavior")} className="underline hover:text-black font-semibold">how music influences consumer behavior</Link><span> and why our approach delivers results. See success stories like </span><Link to={createPageUrl("blue-bamboo")} className="underline hover:text-black font-semibold">Blue Bamboo</Link><span> and </span><Link to={createPageUrl("beach-house-antiparos")} className="underline hover:text-black font-semibold">Beach House Antiparos</Link><span>.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#faebe3]" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-black mb-6 leading-[1.25]">
            Ready to Transform Your Venue's Atmosphere?
          </h2>
          <p className="text-xl text-black/70 mb-8">
            Let us craft the perfect soundscape that reflects your brand and captivates your guests.
          </p>
          <Link to={createPageUrl("ContactUs")}>
            <Button size="lg" className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold" aria-label="Create Your Signature Sound">
              Create Your Signature Sound
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}