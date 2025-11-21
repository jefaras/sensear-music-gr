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
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e1f5b1d73_361e48e4b_85051705_172264584193922_2910039908695408640_n.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e1f5b1d73_361e48e4b_85051705_172264584193922_2910039908695408640_n.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e1f5b1d73_361e48e4b_85051705_172264584193922_2910039908695408640_n.jpg 2400w"

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

      {/* Intro Section - Black Background */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
            {/* Right: Titles - appears first on mobile, second on desktop */}
            <div className="lg:order-2 lg:min-w-[280px]">
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
                Who we are
              </h2>
            </div>
            
            {/* Left: Content - appears second on mobile, first on desktop */}
            <div className="lg:order-1 lg:mt-[116px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                <strong>SensEar</strong> treats music as a core part of the experience:
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
                <em>Music is not background</em>, but <strong>atmosphere</strong>, <strong>memory</strong> and <strong>emotion</strong> that can influence how guests feel, stay and spend.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white" aria-labelledby="timeline-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="timeline-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-right text-black mb-16">Our Journey</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Timeline content */}
            <div>
          {/* Timeline container with flex centering - using inline style to ensure it applies */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="w-full max-w-4xl relative" role="list">
              {/* Vertical connecting line - left side */}
              <div className="absolute left-[39px] md:left-[47px] top-0 bottom-0 w-0.5 bg-black/20" aria-hidden="true" />
              
              <div className="space-y-12" style={{ width: '100%' }}>
                {/* 2010 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2010
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">George + Katerina meet while curating the soundtrack for an upscale wedding party. Their common passion for unearthing hidden-gem grooves ignites a lasting creative partnership.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2010
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">George + Katerina meet while curating the soundtrack for an upscale wedding party. Their common passion for unearthing hidden-gem grooves ignites a lasting creative partnership.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 2011 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2011
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">Under the title Midnight City, they begin hosting and DJing exclusive parties. Specializing in cross-gebre dance-floor discoveries from the '70s, '80s to present day, they cultivate a loyal crowd of groove lovers.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2011
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">Under the title Midnight City, they begin hosting and DJing exclusive parties. Specializing in cross-gebre dance-floor discoveries from the '70s, '80s to present day, they cultivate a loyal crowd of groove lovers.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 2018 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2018
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">Yannis attends one of M.C.'s signature events. Captivated by the vibe and deep-track selections, he becomes an instant and devoted fan.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2018
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">Yannis attends one of M.C.'s signature events. Captivated by the vibe and deep-track selections, he becomes an instant and devoted fan.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 2023 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2023
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">As Yannis begins a MA in Hospitality Management, he and George discuss their shared vision of providing transformative music curation + DJ sets for upscale venues & events.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2023
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">As Yannis begins a MA in Hospitality Management, he and George discuss their shared vision of providing transformative music curation + DJ sets for upscale venues & events.</p>
                      </div>
                    </div>
                  </div>
                </article>

                {/* 2025 Timeline Item */}
                <article className="relative" role="listitem">
                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex-shrink-0 w-20">
                      <div className="w-20 h-20 bg-black text-white font-bold rounded-full flex items-center justify-center text-base shadow-lg relative z-10">
                        2025
                      </div>
                    </div>
                    <div className="flex-grow min-w-0 bg-peach/30 rounded-xl p-6 backdrop-blur-sm">
                      <p className="text-base text-black/80 leading-relaxed">After nearly 2 years of planning & brand development, Sensear launches. SenEar's first clients rave about their smooth, elevated approach to soundtrack design, establishing their reputation from day 1.</p>
                    </div>
                  </div>

                  {/* Desktop layout - left aligned badge with content */}
                  <div className="hidden md:flex md:gap-8">
                    {/* Left side - Year badge */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-black text-white font-bold rounded-full flex items-center justify-center text-xl shadow-lg relative z-10">
                        2025
                      </div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="flex-grow">
                      <div className="bg-peach/30 rounded-xl p-8 backdrop-blur-sm hover:bg-peach/50 transition-colors">
                        <p className="text-lg text-black/80 leading-relaxed">After nearly 2 years of planning & brand development, Sensear launches. SenEar's first clients rave about their smooth, elevated approach to soundtrack design, establishing their reputation from day 1.</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16685b806_pexels-monstera-1408089.jpg"
                alt="SensEar music curation journey"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
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
          <h2 id="vision-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-left mb-4 animate-fade-in-up text-peach">Our Vision</h2>
          <p className="text-2xl text-center max-w-4xl mx-auto text-white/90 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            <span className="">To become the leading music partner for eclectic hospitality brands & events seeking to express identity, elevate atmosphere & create lasting guest connections. Learn more about our </span><Link to={createPageUrl("sonic-strategy")} className="underline hover:text-peach font-semibold">sonic strategy service</Link><span>.</span>
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="team-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="team-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-16 animate-fade-in-up">Meet the Team</h2>

          {/* John E. Farazoumis */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                {/* Left: Text Content */}
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
                    John E. Farazoumis
                  </h3>
                  <p className="text-xl font-semibold text-black/70 mb-8">Co-Founder, Brand Strategy, Client Service</p>
                  
                  <div className="lg:mt-[140px]">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-6">
                      From his early DJ sets to his studies in Hospitality Management, JEF has always been guided by music's magnetic pull.
                    </p>
                    <p className="text-xl md:text-2xl text-black/70 leading-relaxed mb-4">
                      He is a co-founder of a successful digital agency, gaining 25 years of experience in web services & understanding client needs.
                    </p>
                    <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                      At SensEar, he shapes the brand's strategic direction and bridges the gap between creative vision and client experience across the hospitality sector.
                    </p>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="lg:order-2 hidden lg:block lg:mt-[140px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b24ebd26f_JEF_square_bw.png"
                    alt="John E. Farazoumis - SensEar Co-Founder and Brand Strategy Director"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </article>
          </div>

          {/* George Fameliaris */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                {/* Left: Image */}
                <div className="lg:order-1 hidden lg:block lg:mt-[140px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/398e0cca3_84887785_172252324195148_2160204890159185920_n.jpg"
                    alt="George Fameliaris - SensEar Co-Founder and Chief Music Curator"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>

                {/* Right: Text Content */}
                <div className="lg:order-2">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
                    George Fameliaris
                  </h3>
                  <p className="text-xl font-semibold text-black/70 mb-8">Co-Founder, Chief Music Curator</p>
                  
                  <div className="lg:mt-[140px]">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-6">
                      G's lifelong passion for music deepened through a popular music in films Master at Media & communications of Goldsmiths University of London.
                    </p>
                    <p className="text-xl md:text-2xl text-black/70 leading-relaxed mb-4">
                      Back in Athens, he made his mark as a curator and DJ on radio, parties & venues, including as co-founder of the acclaimed M.C.
                    </p>
                    <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                      At SensEar, he crafts each venue's musical identity with precision, rhythm, and a sense of atmosphere that defines the brand's signature sound.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Katerina Karali */}
          <div className="mb-8" role="list">
            <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
                {/* Left: Text Content */}
                <div className="lg:order-1">
                  <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
                    Katerina Karali
                  </h3>
                  <p className="text-xl font-semibold text-black/70 mb-8">Contributing Associate, DJ, Music Curator</p>
                  
                  <div className="lg:mt-[140px]">
                    <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-6">
                      Katerina combines visual design & sound narrative with a refined artistic sensibility.
                    </p>
                    <p className="text-xl md:text-2xl text-black/70 leading-relaxed mb-4">
                      A veteran multimedia art director, she helps curate soundscapes for films, exhibitions & private events.
                    </p>
                    <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                      Known for her instinctive selections and taste for rare grooves, she brings depth, texture, and a touch of the unexpected to SensEar's playlists.
                    </p>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="lg:order-2 hidden lg:block lg:mt-[140px]">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/73ba1e2e2_86455570_172252364195144_3083930653335486464_n.jpg"
                    alt="Katerina Karali - SensEar Art Director and Music Curator"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </article>
          </div>

          <p className="text-center mt-12 text-lg max-w-3xl mx-auto text-black/80 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            Together, John, George, and Katerina form SensEar's creative core, a team committed to elevating spaces through music that is always intentional, immersive, and unforgettable.
          </p>
          <p className="text-center mt-4 text-lg max-w-3xl mx-auto text-black/80 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <span>See how we work with clients in our </span><Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">case studies</Link><span>, or </span><Link to={createPageUrl("ContactUs")} className="underline hover:text-black font-semibold">get in touch</Link><span> to discuss your project.</span>
          </p>
        </div>
      </section>

      <section className="bg-[#faebe3] text-black py-24" aria-labelledby="differentiators-heading">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="differentiators-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-right mb-12 animate-fade-in-up">What Sets Us Apart</h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image */}
            <div className="hidden lg:block">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f12d13b47_IMG_20250722_165530.jpg"
                alt="SensEar unique approach"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div>
          <div className="grid md:grid-cols-1 gap-10" role="list">
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
            </div>
          </div>
          
          <p className="text-center mt-12 text-lg text-black/80 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <span>Experience our unique approach through our </span><Link to={createPageUrl("signature-soundscapes")} className="underline hover:text-black">signature soundscapes</Link><span> or explore solutions for your </span><Link to={createPageUrl("Industries")} className="underline hover:text-black">specific industry</Link><span>.</span>
          </p>
        </div>
      </section>
    </div>);

}