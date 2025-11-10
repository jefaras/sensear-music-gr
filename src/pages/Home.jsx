
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Music, Sparkles, SlidersHorizontal, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "SensEar - Bespoke Music Curation & Sonic Branding";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Bespoke music curation and sonic branding for hotels, restaurants, and events. Elevate your atmosphere with custom playlists. Book your free consultation.";
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
    let localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'en';
      document.head.appendChild(meta);
    }

    // Set HTML lang attribute
    document.documentElement.lang = 'en';

    // Add robots meta tag - PRIMARY PAGE: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'SensEar - Bespoke Music Curation & Sonic Branding' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg' },
    { property: 'og:url', content: 'https://sensear.music/' },
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
    { name: 'twitter:title', content: 'SensEar - Bespoke Music Curation & Sonic Branding' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg' }];


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
      "alternateName": "SensEar Music Curation",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "description": "Bespoke music curation and sonic branding for hotels, restaurants, and events.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+30-6976994212",
        "email": "hello@sensear.music",
        "contactType": "Customer Service"
      },
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"]

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
      {/* Hero Section - with silver foil background */}
      <section className="relative pt-32 pb-20 px-6" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hero section">
        <div className="max-w-7xl mx-auto">
          <div className="w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-[1.1]">
              Music Curation that Transforms Spaces into Experiences
            </h1>
            
            <div className="mb-8 max-w-5xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Every venue has a story. Let music tell yours.<br />
                We craft bespoke playlists for Hotels, Restaurants, Bars & Events that create atmosphere, emotional connections and loyal guests.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to={createPageUrl("ContactUs")}>
                <Button 
                  className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                  aria-label="Contact us for music curation consultation">
                  Contact us
                </Button>
              </Link>
              <Link to={createPageUrl("AboutUs")}>
                <Button 
                  variant="outline"
                  className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto"
                  aria-label="Discover our music curation approach">
                  Discover our approach
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image - Moderately sized with rounded edges like Soundtrack.io */}
          <div className="relative w-full max-w-6xl mx-auto">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/82df3d965_Dogwood-Southern-Table-and-Bar-by-Square-Feet-Studio-Issue-18-Feature-The-Local-Project-Image-3-.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/82df3d965_Dogwood-Southern-Table-and-Bar-by-Square-Feet-Studio-Issue-18-Feature-The-Local-Project-Image-3-.jpg 800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/82df3d965_Dogwood-Southern-Table-and-Bar-by-Square-Feet-Studio-Issue-18-Feature-The-Local-Project-Image-3-.jpg 1600w"
                sizes="(max-width: 768px) 100vw, 1200px"
                alt="Vibrant group of people enjoying music and atmosphere at an energetic restaurant event"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section - Black background with more breathing room */}
      <section className="py-20 bg-black" aria-labelledby="clients-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="clients-heading" className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">Now playing in venues across Greece</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center" role="list">
            {[
            {
              name: "Klouvi Bar",
              location: "Athens",
              logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg"
            },
            {
              name: "Blue Bamboo",
              location: "Athens-Serifos",
              logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg"
            },
            {
              name: "The Rooster",
              location: "Antiparos",
              logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/84145d1c2_The-Rooster_final.jpg"
            },
            {
              name: "Beach House",
              location: "Antiparos",
              logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg"
            },
            {
              name: "Pelicanos",
              location: "Sifnos",
              logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg"
            },
            {
              name: "Yam",
              location: "Antiparos",
              logo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png"
            }].
            map((client) =>
            <div key={client.name} className="text-center" role="listitem">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-2 sm:p-3 border-4 border-white shadow-md">
                  <img
                  src={client.logo}
                  alt={`${client.name} logo - SensEar music curation client`}
                  className="max-w-full max-h-full object-contain" />
                </div>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90 tracking-widest uppercase">{client.name}</p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">{client.location}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Preview - with #faebe3 background color */}
      <section className="py-24 bg-[#faebe3]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">
              Your one-stop partner for Music Curation
            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              We provide all the music solutions that will elevate your space or event and leave a lasting impression. Explore our <Link to={createPageUrl("Services")} className="underline hover:text-black">full range of music curation services</Link>.
            </p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {[
            {
              title: "Signature Playlists",
              description: "Bespoke, brand-exclusive playlists sourced from rare archives for venues that refuse to sound generic.",
              link: createPageUrl("signature-playlists"),
              icon: Music,
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b78efe258_f62cd7127a69c8a8a667cf33da146404.jpg",
              alt: "Bespoke music curation and playlist creation for unique venue atmosphere"
            },
            {
              title: "Music for Events",
              description: "Artfully selected and curated soundtracks & live DJ sets that elevate events into engaging, unforgettable moments.",
              link: createPageUrl("event-soundtracks"),
              icon: Sparkles,
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/da88aa63f_a2d13703910b4b40ce6d714893df9b18ccbb75b2-962x647.jpg",
              alt: "Professional event production with immersive music curation and AV setup"
            },
            {
              title: "Sonic Strategy",
              description: "Ultra-specialized music consultancy & sound branding guidelines that forge an inimitable sonic identity.",
              link: createPageUrl("sonic-strategy"),
              icon: BarChart,
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0c12332d_b2e33cdc-8475-49fe-9456-918e11a1de34.jpg",
              alt: "Strategic sonic branding consultation and music curation planning session"
            },
            {
              title: "Audio Upgrades",
              description: "Professional on-site sound checks, optimization and audio calibration, that fix any sound related issue.",
              link: createPageUrl("audio-upgrades"),
              icon: SlidersHorizontal,
              image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b6e0a3f63_tech_hifi_1979_07.jpg",
              alt: "Professional audio equipment optimization and acoustic calibration for venues"
            }].
            map((service, index) =>
            <article key={index} role="listitem">
              <Link to={service.link} aria-label={`Learn more about ${service.title}`}>
                <div
                  className="group rounded-2xl bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}>

                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                      src={service.image}
                      srcSet={`${service.image} 800w, ${service.image} 1200w`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                      
                      <div className="absolute top-4 left-4">
                        <div className="bg-red-50 text-black opacity-80 rounded-full w-12 h-12 flex items-center justify-center" aria-hidden="true">
                          <service.icon className="w-6 h-6" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                      <p className="text-black/70 mb-4 flex-grow text-sm">{service.description}</p>
                      <div className="flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform">
                        <span>Learn More</span>
                        <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                </div>
              </Link>
            </article>
            )}
          </div>
        </div>
      </section>

      {/* How We Help You Succeed */}
      <section className="py-16 md:py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="benefits-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="order-2 lg:order-1 w-full">
                    <h2 id="benefits-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 md:mb-6 text-center lg:text-left">
                        How We Help You Succeed
                    </h2>
                    <ul className="space-y-4 md:space-y-6 mt-6 md:mt-8 w-full" role="list">
                        {[
                { title: "Delight Your Guests", description: "Increase satisfaction and encourage longer visits." },
                { title: "Elevate Your Brand", description: "Strengthen perception and loyalty with a memorable atmosphere." },
                { title: "Empower Your Team", description: "Boost staff morale & productivity with energizing music." },
                { title: "Total Control", description: "Take full control over your venue's music style & flow." },
                { title: "Seamless Experience", description: "Ensure a smooth music experience across every area of your venue." }].
                map((item) =>
                <li key={item.title} className="flex items-start gap-3 w-full">
                                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-black mt-0.5 md:mt-1 flex-shrink-0" aria-hidden="true" />
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-bold text-sm sm:text-base md:text-lg text-black break-words">{item.title}</h3>
                                    <p className="text-xs sm:text-sm md:text-base text-black/70 break-words">{item.description}</p>
                                </div>
                            </li>
                )}
                    </ul>
                    <div className="mt-8 md:mt-12 text-center lg:text-left w-full">
                      <Link to={createPageUrl("Industries")} className="inline-block w-full sm:w-auto">
                          <Button className="bg-black hover:bg-black/80 text-white px-6 md:px-8 h-14 text-sm sm:text-base md:text-lg group w-full sm:w-auto rounded-full" aria-label="See how we can transform your venue">
                              See how we can transform your own venue
                              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                          </Button>
                      </Link>
                    </div>
                </div>
                <div className="order-1 lg:order-2 w-full">
                    <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e7baf90ef_car-1.png"
                  srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e7baf90ef_car-1.png 800w,
                                  https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e7baf90ef_car-1.png 1200w,
                                  https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e7baf90ef_car-1.png 1600w"


                  sizes="(max-width: 768px) 100vw, 50vw"
                  alt="Vintage car with SensEar branding stickers representing mobile audio experiences"
                  className="w-full h-full object-cover" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* The Art of Atmosphere - Featured Blog Posts */}
      <section className="py-24 bg-white" aria-labelledby="blog-heading">
        <div className="max-w-7xl mx-auto px-6">
          <header className="text-center mb-16">
            <h2 id="blog-heading" className="text-4xl md:text-5xl font-bold text-black mb-4">The Curation Journal

            </h2>
            <p className="text-xl text-black/70 max-w-3xl mx-auto">
              Read how music shapes perception, emotion, and brand identity through sound. Discover more <Link to={createPageUrl("Blog")} className="underline hover:text-black">insights on our blog</Link>.
            </p>
          </header>

          <div className="grid md:grid-cols-3 gap-8 mb-12" role="list">
            <article role="listitem">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg"
                    srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg 800w,
                            https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg 1200w"



                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Luxury hotel interior lobby showcasing ambient music design for hospitality"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                    Three Reasons to Make Music Part of Your Luxury Hospitality Marketing Strategy
                  </h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Curated music is a practical way to shape how guests feel, what they remember, and how they spend. Learn how <Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black">hotels and resorts</Link> benefit from strategic music curation.
                  </p>
                  <Link to={createPageUrl("three-reasons-make-music-hospitality")} className="inline-flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform" aria-label="Read more about Three Reasons to Make Music Part of Your Luxury Hospitality Marketing Strategy">
                    <span>Read more</span>
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </article>

            <article role="listitem">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg"
                    srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg 800w,
                            https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg 1200w"



                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Restaurant with ambient lighting demonstrating how music influences customer behavior and sales"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                    How Brand-Fit Music Converts Browsers into Buyers
                  </h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Evidence-based research showing how brand-aligned music increases sales by 9.1%. Perfect for <Link to={createPageUrl("restaurants-bars")} className="underline hover:text-black">restaurants and bars</Link> looking to enhance their atmosphere.
                  </p>
                  <Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="inline-flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform" aria-label="Explore insights on How Brand-Fit Music Converts Browsers into Buyers">
                    <span>Explore insights</span>
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </article>

            <article role="listitem">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png"
                    srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png 800w,
                            https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png 1200w"



                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    alt="Music curator at work selecting tracks for bespoke playlist curation service"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
                    What Exactly Does a Music Curator Do?
                  </h3>
                  <p className="text-black/70 mb-4 leading-relaxed">
                    Learn how the right music translates your visual language into an emotional experience. Explore our <Link to={createPageUrl("signature-playlists")} className="underline hover:text-black">signature playlists service</Link>.
                  </p>
                  <Link to={createPageUrl("what-exactly-does-music-curator-do")} className="inline-flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform" aria-label="Read article on What Exactly Does a Music Curator Do?">
                    <span>Read article</span>
                    <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </Card>
            </article>
          </div>

          <div className="text-center">
            <Link to={createPageUrl("Blog")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white group rounded-full" aria-label="View all blog articles">
                View all articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}
