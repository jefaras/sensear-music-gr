import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Users, FileText, TrendingUp, CheckCircle } from 'lucide-react';
import Breadcrumbs from "../components/Breadcrumbs";

export default function SonicStrategy() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Sonic Strategy & Audio Branding | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Ultra-specialized music consultancy and audio branding guidelines. Create an ownable sound identity for your brand. Book your sonic strategy session.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/sonic-strategy');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/sonic-strategy';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Sonic Strategy & Audio Branding | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/sonic-strategy' },
    { property: 'og:type', content: 'website' }];


    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.content = tag.content;
        document.head.appendChild(metaTag);
      }
    });

    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Sonic Strategy & Audio Branding | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80' }];


    twitterTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.content = tag.content;
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
      "name": "Sonic Strategy",
      "description": "Ultra-specialized music consultancy and audio branding guidelines that translate brand vision into an ownable sound.",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "serviceType": "Music Consultancy and Audio Branding"
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
        "name": "Sonic Strategy",
        "item": "https://sensear.music/sonic-strategy"
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
    icon: Users,
    title: 'Sonic DNA workshop',
    description: "We schedule a workshop with your team where we explore your brand values, customer personas, and emotional targets. We guide you through curated mood boards and reference tracks to co-create your brand's sonic personality."
  },
  {
    icon: FileText,
    title: 'Sonic strategy plan',
    description: 'We cover how each space will be scored throughout the day, how your signature sounds will support marketing and guest touchpoints, and provide audio demos so you can hear exactly what your guests will feel.'
  },
  {
    icon: TrendingUp,
    title: 'Sonic rebranding roadmap',
    description: 'We give you a clear roadmap to manage that shift—aligned with your brand calendar and marketing goals. Whether you are launching a new venue or reinventing your brand, we ensure the transition feels effortless.'
  }];

  const problemsWeSolve = [
  {
    title: 'Atmosphere that feels flat or forgettable',
    description: "Even well-designed spaces can fall short without the right audio cues. We build immersive soundscapes that add depth, emotion, and create lasting impressions."
  },
  {
    title: 'Inconsistent sound across locations',
    description: 'When the mood changes from one site to the next, the brand experience gets lost. We create sonic consistency across venues, hours, and guest touchpoints.'
  },
  {
    title: 'Music that does not reflect who you are',
    description: 'Generic playlists, ad-based radio, or mismatched tracks can dilute your atmosphere. We design a sonic language that speaks your brand fluently.'
  },
  {
    title: 'No in-house sound expertise',
    description: 'You have a clear vision but lack the time or team to shape it in sound. We lead the process—from sonic profiling to curated guidelines and rollout.'
  },
  {
    title: 'Too many hands on the playlist',
    description: 'When everyone controls the music, consistency breaks down. We give you structure and flexibility—clear guidelines, curated content, and optional tech for seamless control.'
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
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Sonic Strategy section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              Sonic Strategy:<br />
              Exclusive consultancy & music branding guidelines
            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Ultra-specialized advisory that translates brand vision into an ownable sound.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg 2400w"

                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Strategic sonic branding consultation and music curation planning session"
                className="absolute w-full h-full object-cover"
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
           { label: "Sonic Strategy", path: createPageUrl("sonic-strategy") }
         ]} />
        </div> */}

      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="what-we-do-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="what-we-do-heading" className="text-4xl font-bold text-center mb-6 leading-[1.25]">What We Do</h2>
          <div className="grid md:grid-cols-3 gap-8" role="list">
            <article role="listitem">
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sonic DNA workshop</h3>
                <p className="text-black/70">We schedule a workshop with your team where we explore your brand values, customer personas, and emotional targets. We guide you through curated mood boards and reference tracks to co-create your brand's sonic personality.</p>
              </Card>
            </article>

            <article role="listitem">
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <FileText className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sonic strategy plan</h3>
                <p className="text-black/70">We cover how each space will be scored throughout the day, how your signature sounds will support marketing and guest touchpoints, and provide audio demos so you can hear exactly what your guests will feel.</p>
              </Card>
            </article>

            <article role="listitem">
              <Card className="bg-white p-8 shadow-lg">
                <div className="bg-black/5 text-black mb-6 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Sonic rebranding roadmap</h3>
                <p className="text-black/70">We give you a clear roadmap to manage that shift—aligned with your brand calendar and marketing goals. Whether you are launching a new venue or reinventing your brand, we ensure the transition feels effortless.</p>
              </Card>
            </article>
          </div>
          <p className="text-center text-black/70 mt-12 max-w-3xl mx-auto">
            <span>Our sonic strategy process complements our </span><Link to={createPageUrl("signature-playlists")} className="underline hover:text-black font-semibold">playlists service</Link><span> perfectly. Once we define your sonic identity, we can implement it through </span><Link to={createPageUrl("audio-upgrades")} className="underline hover:text-black font-semibold">audio system optimization</Link><span> and ongoing curation. Ideal for </span><Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black font-semibold">hotels & resorts</Link><span>, </span><Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black font-semibold">restaurants & bars</Link><span>, and </span><Link to={createPageUrl("retail-stores")} className="underline hover:text-black font-semibold">retail spaces</Link><span> seeking a distinctive sonic identity.</span>
          </p>
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
                  <h3 className="text-xl font-bold mb-2">Atmosphere that feels flat or forgettable</h3>
                  <p className="text-black/70">Even well-designed spaces can fall short without the right audio cues. We build immersive soundscapes that add depth, emotion, and create lasting impressions.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Inconsistent sound across locations</h3>
                  <p className="text-black/70">When the mood changes from one site to the next, the brand experience gets lost. We create sonic consistency across venues, hours, and guest touchpoints.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Music that does not reflect who you are</h3>
                  <p className="text-black/70">Generic playlists, ad-based radio, or mismatched tracks can dilute your atmosphere. We design a sonic language that speaks your brand fluently.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">No in-house sound expertise</h3>
                  <p className="text-black/70">You have a clear vision but lack the time or team to shape it in sound. We lead the process—from sonic profiling to curated guidelines and rollout.</p>
                </div>
              </div>
            </article>

            <article role="listitem" className="p-6 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Too many hands on the playlist</h3>
                  <p className="text-black/70">When everyone controls the music, consistency breaks down. We give you structure and flexibility—clear guidelines, curated content, and optional tech for seamless control.</p>
                </div>
              </div>
            </article>
          </div>
          <div className="text-center mt-12">
            <p className="text-black/70 mb-6">
              <span>See how we've solved similar challenges in our </span><Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">case studies</Link><span>, including success stories from </span><Link to={createPageUrl("blue-bamboo")} className="underline hover:text-black font-semibold">Blue Bamboo</Link><span> and </span><Link to={createPageUrl("klouvi-bar")} className="underline hover:text-black font-semibold">Klouvi Bar</Link><span>. Learn more about </span><Link to={createPageUrl("building-brand-people-can-hear")} className="underline hover:text-black font-semibold">building your brand through sound</Link><span>.</span>
            </p>
            <p className="text-black/70 mb-6">
              <span>Explore our </span><Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">full range of services</Link><span> or learn </span><Link to={createPageUrl("AboutUs")} className="underline hover:text-black font-semibold">more about our team</Link><span>.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#faebe3]" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-black mb-6 leading-[1.25]">Define Your Sonic Identity

          </h2>
          <p className="text-xl text-black/70 mb-8">
            Let's create an ownable sound that sets your brand apart.
          </p>
          <Link to={createPageUrl("ContactUs")}>
            <Button size="lg" className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold" aria-label="Contact Us">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}