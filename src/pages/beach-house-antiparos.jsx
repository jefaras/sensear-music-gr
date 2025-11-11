
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, ArrowRight, MessageSquare, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumbs from "../components/Breadcrumbs";

export default function BeachHouseAntiparos() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Beach House Antiparos Case Study | SensEar Music Curation";

    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "How SensEar created an all-day Mediterranean soundscape at Beach House Antiparos blending relaxation with upbeat evening energy.";
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

    // Add robots meta tag - CASE STUDY: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/beach-house-antiparos');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/beach-house-antiparos';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Beach House Antiparos Case Study | SensEar Music' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png' },
    { property: 'og:url', content: 'https://sensear.music/beach-house-antiparos' },
    { property: 'og:type', content: 'article' }];


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
    { name: 'twitter:title', content: 'Beach House Antiparos Case Study | SensEar Music' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png' }];


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

    // Update structured data to include BreadcrumbList and updated Article details
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
      "@type": "Article",
      "headline": "Beach House Antiparos Case Study | SensEar Music Curation",
      "description": "How SensEar created an immersive coastal ambiance for Beach House Antiparos with tailored music curation.",
      "author": {
        "@type": "Organization",
        "name": "SensEar"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SensEar",
        "logo": {
          "@type": "ImageObject",
          "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"
        }
      },
      "datePublished": "2025-01-15",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png"
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
        "name": "Case Studies",
        "item": "https://sensear.music/case-studies"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Beach House Antiparos",
        "item": "https://sensear.music/beach-house-antiparos"
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
  "They needed a unified sound that resonated equally well across all spaces, from the beach lounge to the boutique.",
  "The brand was seeking a refined sonic identity that embodied its values of exclusivity, warmth, and laid-back luxury."];


  const solutions = [
  "We delivered a set of unified time-based playlists, finely tuned to complement the different energies within the venue.",
  "We distilled the brand's personality into a carefully balanced musical narrative that elevates the guest experience."];


  const results = [
  "A noticeable lift in both guest and staff satisfaction, thanks to a more inviting atmosphere.",
  "Enhanced shopping experience that converted into higher retail sales.",
  "A refined, consistent sonic identity that brought the brand to life across every space."];


  return (
    <div className="bg-[#faebe3] min-h-screen">
      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Beach House Antiparos Case Study section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-black mb-6 leading-[1.1]">
              Designing a cohesive sonic experience<br />
              for every zone of the beach house
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Matching the music to each area's identity to ensure a seamless and consistent experience throughout the day.
              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax */}
        <div className="w-full px-6">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5c25bc1cf_photo-collagepng.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Beach House Antiparos beachfront venue with zoned music curation"
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
        { label: "Case Studies", path: createPageUrl("CaseStudies") },
        { label: "Beach House Antiparos", path: createPageUrl("beach-house-antiparos") }]
        } />
      </div> */}

      {/* Main Content Section */}
      <section className="py-24" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          {/* Meet Beach House Antiparos */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg"
              alt="Beach House Antiparos logo"
              className="w-20 h-20 rounded-lg object-cover border-2 border-black/10" />
            <h2 className="text-4xl font-bold">Meet Beach House Antiparos</h2>
          </div>
          <p className="text-center text-black/70 mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            Beach House Antiparos is a premium beachfront destination combining dining, relaxation, and a boutique shopping experience. The venue needed a continuous audio experience across all spaces.
          </p>
          <div className="max-w-4xl mx-auto px-6 text-center">
              <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-6">
                  "We wanted our guests to feel like they'd discovered something special—a soundtrack that felt hand-selected, layered, and harmonious with the sea breeze and sunset views." – Beach House Antiparos Team
                </blockquote>
          </div>
          {/* Three Process Cards with Arrows */}
          <div className="flex flex-col md:flex-row gap-6 items-stretch">
            {/* Card 1: Why They Called Us */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 id="challenge-heading" className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" aria-hidden="true" />
                  Why They Called Us
                </h3>
                
                <ul className="space-y-4" role="list">
                  {problems.map((item, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                      <p className="text-black/80">{item}</p>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-black/40" aria-hidden="true" />
            </div>

            {/* Card 2: How We Responded */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 id="solution-heading" className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-6 h-6" aria-hidden="true" />
                  How We Responded
                </h3>
                <ul className="space-y-4" role="list">
                  {solutions.map((item, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                      <p className="text-black/80">{item}</p>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>

            {/* Arrow */}
            <div className="hidden md:flex items-center justify-center flex-shrink-0">
              <ArrowRight className="w-8 h-8 text-black/40" aria-hidden="true" />
            </div>

            {/* Card 3: What They Got */}
            <Card className="flex-1 bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 id="results-heading" className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6" aria-hidden="true" />
                  What They Got
                </h3>
                
                <ul className="space-y-4" role="list">
                  {results.map((item, index) =>
                  <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-black mt-1 flex-shrink-0" aria-hidden="true" />
                      <p className="text-black/80">{item}</p>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center">
              <blockquote className="border-l-4 border-black pl-6 italic text-black/80 my-6">
                  "The sound now flows as naturally as the waves—adding warmth, depth, and an unforgettable feeling that lingers long after the visit." – Beach House Antiparos Team
                </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-4xl font-bold text-black mb-6 leading-[1.25]">
            Ready to Elevate Your Guest Experience?
          </h2>
          <p className="text-xl text-black/70 mb-8">
            Let us create a tailored sonic experience for your property. Explore our <Link to={createPageUrl("hotels-resorts")} className="underline hover:text-black font-semibold">hotel & resort solutions</Link> or view more <Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">success stories</Link>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black hover:bg-black/80 text-white" aria-label="Get Similar Results">
                Get Similar Results
              </Button>
            </Link>
            <Link to={createPageUrl("CaseStudies")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white" aria-label="See More Success Stories">
                See More Success Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <nav className="text-center py-8 bg-[#faebe3]" aria-label="Case studies navigation">
        <Link to={createPageUrl("CaseStudies")}>
          <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            Return to Case Studies Overview
          </Button>
        </Link>
      </nav>
    </div>);

}
