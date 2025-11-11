
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function EventsExperiences() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music for Events & Experiences Audio | SensEar Music Solutions";

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

    // Add robots meta tag - INDUSTRY PAGE: index, follow
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
    const pageUrl = 'https://sensear.music/music-for-events-experiences';
    if (canonicalLink) {
      canonicalLink.setAttribute('href', pageUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogImage = 'https://images.unsplash.com/photo-1549449339-01069c9a7217?w=1600&q=80';
    const ogTitle = 'Music for Events & Experiences Audio | SensEar Music Solutions';
    const ogTags = [
    { property: 'og:title', content: ogTitle },
    { property: 'og:description', content: description },
    { property: 'og:image', content: ogImage },
    { property: 'og:url', content: pageUrl },
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

    // Twitter Card tags
    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: ogTitle },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: ogImage }];


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
      "name": "Music for Events & Experiences",
      "description": "Your all-in-one music enabler for your event's music and AV production needs.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Music for Events & Experiences",
      "audience": {
        "@type": "Audience",
        "audienceType": "Music for Events and Experiences"
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
        "name": "Music for Events & Experiences",
        "item": "https://sensear.music/music-for-events-experiences"
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

  const problems = [
  { title: "Disjointed or Generic Event Soundtracks", description: "We craft custom, multi-chapter musical narratives tailored to your event's theme and flow." },
  { title: "Technical Sound Issues", description: "Our expert engineers ensure flawless playback with optimized arrays and precision time alignment. No dead zones, no surprises." },
  { title: "Handling Multiple Vendors", description: "We are your unique point of contact for music curation and AV production, from corporate galas to private gatherings." },
  { title: "Low Guest Engagement & Reactions", description: "We keep your audience immersed with music that evolves naturally with every phase of your event, making it memorable." },
  { title: "One-Size-Fits-All Soundtracks", description: "Our curators craft dynamic, story-driven musical journeys tailored to your event's unique vibe." },
  { title: "Complex Setup & Technical Gaps", description: "From curation to flawless AV execution, we handle it all. Seamlessly and stress-free." }];

  return (
    <div className="bg-[#faebe3]">
      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Events & Experiences section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1]">
              Your all-in-one music enabler<br />
              for your event's needs
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Bringing an event to perfection can be tough, so let our experienced team handle everything sound-related for you.
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Large-scale event production with professional AV and music curation services"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Large-scale event production with professional AV and music curation services"
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
        { label: "Music for Events & Experiences", path: createPageUrl("events-experiences") }]
        } />
      </div> */}

      {/* Who is this service for */}
      <section className="py-20 bg-black" aria-labelledby="who-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="who-heading" className="text-3xl font-bold text-center mb-6 text-white">Who is this service for</h2>
          <p className="text-center text-white/70 mb-8 max-w-3xl mx-auto">
            Our music curation & A.V. services are perfect for brands and spaces that want to transform sound into experience.
          </p>
          <ul className="space-y-4 max-w-3xl mx-auto" role="list">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Hotels, resorts, and restaurants that host live events or ambient experiences.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Event organizers and creative agencies designing immersive activations.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Private chefs, curators, and professionals offering personalized or ceremonial dining.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Cultural venues, fashion shows, galleries and concept spaces seeking a sonic identity.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span className="text-white/70">Individuals or brands who understand that the sound defines the experience.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="problems-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="problems-heading" className="text-2xl sm:text-3xl font-bold text-black text-center mb-6">Problems We Solve</h2>
          <p className="text-center text-black/70 mb-10 max-w-3xl mx-auto px-4">
            Our expert technicians ensure your event's sound is crystal clear, hand-picking the perfect equipment and carefully managing every audio detail from start to finish.
          </p>
          <div className="grid md:grid-cols-2 gap-8" role="list">
            {problems.map((p) =>
            <article key={p.title} role="listitem" className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{p.title}</h3>
                    <p className="text-sm sm:text-base text-black/70">{p.description}</p>
                  </div>
                </div>
              </article>
            )}
          </div>
          <div className="text-center mt-16">
            <p className="text-black/70 mb-6 px-4">
              See our <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">full service portfolio</Link> or explore <Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">client success stories</Link>.
            </p>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 w-full sm:w-auto px-6 sm:px-8 py-6 text-base sm:text-lg whitespace-normal" aria-label="Schedule an event sound consultation">Schedule an Event Sound Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);
}
