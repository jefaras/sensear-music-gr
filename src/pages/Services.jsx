import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Music, Sparkles, SlidersHorizontal, ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function Services() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Music Curation Services | SensEar";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Discover SensEar's music curation services: Sonic Strategy, Signature Playlists, Event Soundtracks, and Audio Upgrades. Transform your venue's atmosphere.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/services');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/services';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'Music Curation Services | SensEar' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/services' }];

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
    { name: 'twitter:title', content: 'Music Curation Services | SensEar' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80' }];

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
      "logo": "https://qtrypzzcjebvfciynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Music Curation and Sonic Branding",
      "provider": {
        "@type": "Organization",
        "name": "SensEar",
        "url": "https://sensear.music"
      },
      "areaServed": "GR",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Music Curation Services",
        "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sonic Strategy",
            "description": "Ultra-specialized music consultancy and audio branding guidelines"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Signature Playlists",
            "description": "Bespoke, brand-exclusive playlists sourced from rare archives"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Soundtracks",
            "description": "Artfully selected, custom-curated soundtracks and seamless AV production that elevate events into immersive, unforgettable moments."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Audio Upgrades",
            "description": "Professional on-site sound checks and audio calibration"
          }
        }]
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
        "name": "Services",
        "item": "https://sensear.music/services"
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
          animation: gradient-shift 7s ease infinite;
        }
      `}</style>

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Services section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1]">
              Four Signature Services:<br />
              One cohesive sound strategy
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Advisory, on-site playlists & immersive experiences, designed to make your brand sound unique.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to={createPageUrl("ContactUs")}>
                <Button 
                  className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto group"
                  aria-label="Get a free listening session consultation">
                  Book a Listening Session
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/adc5c3e54_dcff3c9fa7fade1ad1dfe051c913ca7f.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/adc5c3e54_dcff3c9fa7fade1ad1dfe051c913ca7f.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/adc5c3e54_dcff3c9fa7fade1ad1dfe051c913ca7f.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music equipment and sound system setup for venue curation"
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
        { label: "Services", path: createPageUrl("Services") }]
        } />
      </div> */}

      {/* Services Grid - with animated gradient */}
      <section className="py-20 animated-gradient" aria-labelledby="services-list-heading">
        <div className="max-w-7xl mx-auto px-6">
            <h2 id="services-list-heading" className="text-4xl font-bold text-black mb-6 text-center">Our Music Curation Services</h2>
            <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg">
              From strategic <Link to={createPageUrl("sonic-strategy")} className="underline hover:text-black font-semibold">sonic branding consultancy</Link> to <Link to={createPageUrl("event-soundtracks")} className="underline hover:text-black font-semibold">immersive music event experiences</Link>, we offer comprehensive solutions. Read our <Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">case studies</Link> to see how we've transformed venues across Greece.
            </p>
          <div className="grid md:grid-cols-2 gap-8 items-stretch" role="list">
            {[
            {
              icon: Music,
              title: "Signature Playlists",
              description: "Bespoke, brand-exclusive playlists sourced from rare archives for venues that refuse to sound generic.",
              link: createPageUrl("signature-playlists"),
              cta: "Discover Signature Playlists",
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg",
              alt: "Bespoke music curation and playlist creation for unique venue atmosphere"
            },
            {
              icon: Sparkles,
              title: "Event Soundtracks",
              description: "Artfully selected, custom-curated soundtracks and seamless AV production that elevate events into immersive, unforgettable moments.",
              link: createPageUrl("event-soundtracks"),
              cta: "Schedule Your Event Consultation",
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg",
              alt: "Professional event production with immersive music curation and AV setup"
            },
            {
              icon: BarChart,
              title: "Sonic Strategy",
              description: "Ultra-specialized music consultancy & sound branding guidelines that forge an inimitable sonic identity.",
              link: createPageUrl("sonic-strategy"),
              cta: "Explore Sonic Strategy",
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg",
              alt: "Strategic sonic branding consultation and music curation planning session"
            },
            {
              icon: SlidersHorizontal,
              title: "Audio Upgrades",
              description: "Professional on-site sound checks, optimization and audio calibration, with guaranteed fixes for any sound related issue.",
              link: createPageUrl("audio-upgrades"),
              cta: "Book Your Sound Check",
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg",
              alt: "Professional audio equipment optimization and acoustic calibration for venues"
            }].
            map((service, index) =>
            <article key={index} role="listitem">
              <Link to={service.link} aria-label={service.cta}>
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 h-full bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      srcSet={`${service.image.replace('w=800', 'w=800')} 800w,
                              ${service.image.replace('w=800', 'w=1200')} 1200w`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                    
                    <div className="absolute top-4 left-4">
                      <div className="bg-red-50 text-black opacity-75 rounded-full w-16 h-16 flex items-center justify-center" aria-hidden="true">
                        <service.icon className="w-8 h-8" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-black/70 mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
                      <span>{service.cta}</span>
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </Card>
              </Link>
            </article>
            )}
          </div>
          <div className="text-center mt-12">
            <p className="text-black/70 mb-4 max-w-3xl mx-auto">
              Whether you're a <Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black font-semibold">hotel</Link>, <Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black font-semibold">restaurant</Link>, or <Link to={createPageUrl("retail-stores")} className="underline hover:text-black font-semibold">retail space</Link>, we have the expertise to elevate your atmosphere.
            </p>
            <Link to={createPageUrl("Industries")} className="inline-flex items-center text-black font-semibold hover:gap-3 transition-all gap-2">
              <span>See which venues we elevate</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>);
}