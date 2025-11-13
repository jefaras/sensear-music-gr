import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import Breadcrumbs from "../components/Breadcrumbs";
import { createPageUrl } from "@/utils";
import { Lightbulb, Building2, SlidersHorizontal, Heart } from 'lucide-react';

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "About SensEar | Music Curation Experts Athens";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Meet the SensEar team. Music curators, DJs, and sonic branding experts crafting unforgettable soundscapes for hospitality since 2010.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/about');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/about';
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
    { property: 'og:title', content: 'About SensEar | Music Curation Experts Athens' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80' },
    { property: 'og:url', content: 'https://sensear.music/about' }];

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
    { name: 'twitter:title', content: 'About SensEar | Music Curation Experts Athens' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80' }];

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
      "alternateName": "SensEar Music Curation",
      "url": "https://sensear.music",
      "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
      "foundingDate": "2025",
      "founders": [
      {
        "@type": "Person",
        "name": "John E. Farazoumis"
      },
      {
        "@type": "Person",
        "name": "George Fameliaris"
      }],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "description": "Music curators, DJs, and sonic branding experts crafting unforgettable soundscapes for hospitality.",
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
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://sensear.music/about"
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

      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="About section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              About SensEar
            </h1>
            
            <div className="mb-8 max-w-4xl slide-up-2">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                At the core of SensEar is a shared belief: that music is not background—it is atmosphere, memory, and emotion.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/361e48e4b_85051705_172264584193922_2910039908695408640_n.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/361e48e4b_85051705_172264584193922_2910039908695408640_n.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/361e48e4b_85051705_172264584193922_2910039908695408640_n.jpg 2400w"

                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="SensEar music curation team collaborating on sonic branding project"
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
         { label: "About", path: createPageUrl("AboutUs") }]
         } />
        </div> */}
      
      {/* Timeline */}
      <section className="py-20 bg-white" aria-labelledby="timeline-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="timeline-heading" className="text-4xl font-bold text-center text-black mb-16">Our Journey</h2>
          
          {/* Timeline container with flex centering - using inline style to ensure it applies */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="w-full max-w-4xl relative" role="list">
              {/* Vertical connecting line - centered on desktop */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-black/20" aria-hidden="true" />
              {/* Vertical connecting line - left side on mobile */}
              <div className="md:hidden absolute left-[39px] top-0 bottom-0 w-0.5 bg-black/20" aria-hidden="true" />
              
              <div className="space-y-12" style={{ width: '100%' }}>
                {/* 2010 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20 flex justify-center">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2010
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">George and Katerina meet while curating the soundtrack for an upscale wedding party. Their shared passion for unearthing hidden-gem grooves sparks a lasting creative partnership.</p>
                    </div>
                  </div>

                  {/* Desktop layout - centered line with badge and content on sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-start">
                    {/* Left side - Year badge */}
                    <div className="flex justify-end pr-8">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2010
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="pl-8">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">George and Katerina meet while curating the soundtrack for an upscale wedding party. Their shared passion for unearthing hidden-gem grooves sparks a lasting creative partnership.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 2011 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20 flex justify-center">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2011
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">Under the moniker Midnight City, George & Katerina begin organizing and DJing exclusive parties. Specializing in dance-floor discoveries from the '70s, '80s and '90s, they cultivate a fiercely loyal crowd of groove aficionados.</p>
                    </div>
                  </div>

                  {/* Desktop layout - centered line with badge and content on sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-start">
                    {/* Left side - Year badge */}
                    <div className="flex justify-end pr-8">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2011
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="pl-8">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">Under the moniker Midnight City, George & Katerina begin organizing and DJing exclusive parties. Specializing in dance-floor discoveries from the '70s, '80s and '90s, they cultivate a fiercely loyal crowd of groove aficionados.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 2018 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20 flex justify-center">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2018
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">Yannis attends one of Midnight City's signature events. Captivated by the vibe and deep-track selections, he becomes an instant—and devoted—fan.</p>
                    </div>
                  </div>

                  {/* Desktop layout - centered line with badge and content on sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-start">
                    {/* Left side - Year badge */}
                    <div className="flex justify-end pr-8">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2018
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="pl-8">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">Yannis attends one of Midnight City's signature events. Captivated by the vibe and deep-track selections, he becomes an instant—and devoted—fan.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 2023 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20 flex justify-center">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2023
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">As Yannis begins a BA in Hospitality Management, he and George explore their shared vision of founding a company to provide premium music-curation services for upscale venues and events.</p>
                    </div>
                  </div>

                  {/* Desktop layout - centered line with badge and content on sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-start">
                    {/* Left side - Year badge */}
                    <div className="flex justify-end pr-8">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2023
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="pl-8">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">As Yannis begins a BA in Hospitality Management, he and George explore their shared vision of founding a company to provide premium music-curation services for upscale venues and events.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 2025 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20 flex justify-center">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2025
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">After nearly two years of planning and brand development, Sensear officially launches. With Katerina crafting the visual identity and George & Yannis leading the curation, the company's first clients rave about their seamless, elevated approach to soundtrack design—solidifying Sensear's reputation from day one.</p>
                    </div>
                  </div>

                  {/* Desktop layout - centered line with badge and content on sides */}
                  <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:items-start">
                    {/* Left side - Year badge */}
                    <div className="flex justify-end pr-8">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2025
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="pl-8">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">After nearly two years of planning and brand development, Sensear officially launches. With Katerina crafting the visual identity and George & Yannis leading the curation, the company's first clients rave about their seamless, elevated approach to soundtrack design—solidifying Sensear's reputation from day one.</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <p className="text-center mt-12 text-lg text-black/80 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            Want to hear our vision? Explore our <Link to={createPageUrl("signature-soundscapes")} className="underline hover:text-black font-semibold">signature soundscapes demos</Link>.
          </p>
        </div>
      </section>
      
      {/* Vision Section */}
      <section className="py-24 bg-black text-white" aria-labelledby="vision-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="vision-heading" className="text-4xl font-bold text-center mb-4 animate-fade-in-up text-peach">Our Vision</h2>
          <p className="text-2xl text-center max-w-4xl mx-auto text-white/90 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            <span className="">To become the leading music partner for eclectic hospitality brands & events seeking to express identity, elevate atmosphere & create lasting guest connections. Learn more about our </span><Link to={createPageUrl("sonic-strategy")} className="underline hover:text-peach font-semibold">sonic strategy service</Link><span>.</span>
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="team-heading" className="text-4xl font-bold text-center mb-16 animate-fade-in-up">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8" role="list">
            {/* John E. Farazoumis */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Card className="bg-white text-center p-8 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3ab0ef28b_404e9e2e-13f6-48c5-b898-4b1cf7a6ef19.png"
                    alt="John E. Farazoumis - SensEar Co-Founder and Brand Strategy Director"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-1">John E. Farazoumis</h3>
                <p className="text-peach-layer font-semibold mb-4 text-sm uppercase tracking-wider">Co-Founder, Brand Strategy – Client Service</p>
                <p className="text-black/70 text-left whitespace-pre-line">From his early DJ sets in Larissa to his studies in sound engineering in Athens, J.E.F. has always been guided by music's magnetic pull. He later co-founded a successful digital agency, gaining two decades of experience in web services and understanding client needs.

At SensEar, he shapes the brand's strategic direction and bridges the gap between creative vision and client experience across the hospitality sector.</p>
              </Card>
            </article>

            {/* George Fameliaris */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <Card className="bg-white text-center p-8 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/398e0cca3_84887785_172252324195148_2160204890159185920_n.jpg"
                    alt="George Fameliaris - SensEar Co-Founder and Chief Music Curator"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-1">George Fameliaris</h3>
                <p className="text-peach-layer font-semibold mb-4 text-sm uppercase tracking-wider">Co-Founder, Music Curator – DJ – Sonic Identity Expert</p>
                <p className="text-black/70 text-left whitespace-pre-line">George's lifelong passion for music deepened through a Master's degree at Goldsmiths, University of London, where he explored music in media. Back in Athens, he made his mark as a curator and DJ on radio and at venues, including as co-founder of the acclaimed Midnight City.

At SensEar, he crafts each venue's musical identity with precision, rhythm, and a sense of atmosphere that defines the brand's signature sound.</p>
              </Card>
            </article>

            {/* Katerina Karali */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Card className="bg-white text-center p-8 shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/73ba1e2e2_86455570_172252364195144_3083930653335486464_n.jpg"
                    alt="Katerina Karali - SensEar Art Director and Music Curator"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-1">Katerina Karali</h3>
                <p className="text-peach-layer font-semibold mb-4 text-sm uppercase tracking-wider">Contributing Associate, Art Director – DJ – Music Curator</p>
                <p className="text-black/70 text-left whitespace-pre-line">Katerina combines visual design and sound storytelling with a refined artistic sensibility. A veteran multimedia art director, she curates soundscapes for films, exhibitions, and private events.

Known for her instinctive selections and taste for rare grooves, she brings depth, texture, and a touch of the unexpected to SensEar's playlists.</p>
              </Card>
            </article>
          </div>
          <p className="text-center mt-12 text-lg max-w-3xl mx-auto text-black/80 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <span>Together, John, George, and Katerina form SensEar's creative core, a team committed to elevating spaces through music that is always intentional, immersive, and unforgettable. See how we work with clients in our </span><Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">case studies</Link><span> or </span><Link to={createPageUrl("ContactUs")} className="underline hover:text-black font-semibold">get in touch</Link><span> to discuss your project.</span>
          </p>
        </div>
      </section>

      <section className="bg-[#faebe3] text-black py-24" aria-labelledby="differentiators-heading">
        <div className="max-w-5xl mx-auto px-6">
          <h2 id="differentiators-heading" className="text-4xl font-bold text-center mb-12 animate-fade-in-up">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 gap-10" role="list">
            {/* From Brand Vision to Sonic Expression */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                  <Lightbulb className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">From Brand Vision to Sonic Expression</h3>
                  <p className="text-black/70">We translate business and emotional intent into music that feels natural, human, and completely on-brand.</p>
                </div>
              </div>
            </article>

            {/* Built for Hospitality */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.45s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                  <Building2 className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Built for Hospitality</h3>
                  <p className="text-black/70">We design audio for the full guest journey; fine-tuned for restaurants, bars, spas, upscale hotels and retail that care about detail.</p>
                </div>
              </div>
            </article>

            {/* Modular, Scalable, Personalized */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                  <SlidersHorizontal className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">Modular, Scalable, Personalized</h3>
                  <p className="text-black/70">Our strategy is never one-size-for-all. We adapt to your existing operating style, team, and rollout needs across several locations, matching our approach to your pace.</p>
                </div>
              </div>
            </article>

            {/* We deeply Love Music */}
            <article role="listitem" className="animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
              <div className="flex items-start gap-4">
                <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                  <Heart className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-black">We deeply Love Music</h3>
                  <p className="text-black/70">We are curators, DJs and listeners who craft our services with taste, purpose, and passion, harnessing music's power to shift moods, shape spaces, and connect people.</p>
                </div>
              </div>
            </article>
          </div>
          <p className="text-center mt-12 text-lg text-black/80 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <span>Experience our unique approach through our </span><Link to={createPageUrl("signature-soundscapes")} className="underline hover:text-black">signature soundscapes</Link><span> or explore solutions for your </span><Link to={createPageUrl("Industries")} className="underline hover:text-black">specific industry</Link><span>.</span>
          </p>
        </div>
      </section>
    </div>);

}