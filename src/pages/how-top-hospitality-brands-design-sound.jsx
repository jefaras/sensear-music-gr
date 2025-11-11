
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Breadcrumbs from "../components/Breadcrumbs";

export default function HowTopHospitalityBrandsDesignSound() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const pageTitle = "How Top Hospitality Brands Design Their Sound On Purpose | SensEar Strategy";
    const description = "Learn how luxury hospitality brands use strategic music curation and sonic branding to create distinctive customer experiences and brand identity.";
    const pageUrl = 'https://sensear.music/how-top-hospitality-brands-design-sound';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0109106f5_HowTopHospitalityBrandsDesignTheirSoundOnPurpose.png';
    const publishedDate = '2025-01-12';

    document.title = pageTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
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
      canonicalLink.setAttribute('href', pageUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    const ogTags = [
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: pageUrl },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: `${publishedDate}T09:00:00Z` },
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Strategy' }
    ];

    ogTags.forEach(tag => {
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
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl }
    ];

    twitterTags.forEach(tag => {
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
          "https://www.instagram.com/sensear.music"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "How Top Hospitality Brands Design Their Sound On Purpose",
        "description": description,
        "image": imageUrl,
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
        "datePublished": publishedDate,
        "dateModified": publishedDate,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": pageUrl
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
            "name": "Blog",
            "item": "https://sensear.music/blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "How Top Hospitality Brands Design Their Sound On Purpose",
            "item": pageUrl
          }
        ]
      }
    ];

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
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-label="How Top Hospitality Brands Design Their Sound On Purpose">

        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1]">
              How Top Hospitality Brands<br />
              Design Their Sound On Purpose
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <div className="flex items-center gap-6 text-sm text-black/60 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-01-12">January 12, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>SensEar Team</span>
                </div>
                <div className="text-black/50">
                  <span>7 min read</span>
                </div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Learn how luxury hospitality brands use strategic music curation and sonic branding to create distinctive customer experiences.
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0109106f5_HowTopHospitalityBrandsDesignTheirSoundOnPurpose.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0109106f5_HowTopHospitalityBrandsDesignTheirSoundOnPurpose.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0109106f5_HowTopHospitalityBrandsDesignTheirSoundOnPurpose.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Luxury hotel lobby showcasing strategic music curation and sonic branding design"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0109106f5_HowTopHospitalityBrandsDesignTheirSoundOnPurpose.png"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0109106f5_HowTopHospitalityBrandsDesignTheirSoundOnPurpose.png 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0109106f5_HowTopHospitalityBrandsDesignTheirSoundOnPurpose.png 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Luxury hotel lobby showcasing strategic music curation and sonic branding design"
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

      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
          { label: "Blog", path: createPageUrl("Blog") },
          { label: "How Top Hospitality Brands Design Their Sound On Purpose", path: createPageUrl("how-top-hospitality-brands-design-sound") }
        ]} />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Card className="bg-white p-8 md:p-12 shadow-lg mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-black/80 leading-relaxed mb-8">
              Luxury and lifestyle hotels are not leaving music to chance. They treat sound as part of the brand system: researched, tested, and iterated to steer mood, memory, and spend.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Eight examples to learn from</h2>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">W Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Music is baked into the brand, from artist partnerships to purpose-built recording spaces like the W Sound Suite that hosts <a href="https://w-hotels.marriott.com/article/behind-the-dj-booth-with-uner/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">sessions and programming</a> in select properties.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Soho House</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              In-house music leads curate evolving playlists that mirror the look and feel of each House and its dayparts, and <a href="https://www.sohohouse.com/house-notes/issue-4/dom-chung-soho-house-playlist" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">distribute them across major platforms</a> so members can take the sound anywhere.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">The Standard Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              For 25 years the group has treated music as part of the stay, recently archiving that approach with <a href="https://www.standardhotels.com/culture/the-standard-soundtrack" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">"The Standard Soundtrack"</a>, a series that captures the brand's sonic point of view year by year.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Ace Hotel</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              A long-running music culture shows up in label collabs, live sessions, and branded streams that <a href="https://www.cntraveler.com/stories/2015-09-10/ace-hotel-cranks-the-cool-up-to-11-with-vinyl" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">extend the property vibe</a> beyond the lobby.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Rosewood Hotels (Scarfes Bar, London)</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Partnered with specialist agency Music Concierge to craft venue-specific soundtracks; Scarfes Bar is widely cited for atmosphere and live jazz programming that <a href="https://www.musicconcierge.co.uk/case-study/rosewood/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">anchors the bar's identity</a>.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">25hours Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Publishes <a href="https://open.spotify.com/playlist/2GYyzEKnynSVi5eO2f6eGL" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">"25hours Music DNA,"</a> a living playlist identity that aligns the brand's playful personality across properties.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">EDITION Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Maintains branded mixes and sets on official channels, reflecting a curated, contemporary point of view that tracks with the brand's cultural positioning. Check their <a href="https://soundcloud.com/editionhotels" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">public mixtapes</a> on SoundCloud.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Mama Shelter</h3>
            <p className="text-black/80 leading-relaxed mb-8">
              Regular DJ programming and <a href="https://www.mixcloud.com/mamashelter/playlists/mama-loves-music/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">public mixtapes</a> keep energy calibrated to each location's vibe while showcasing resident talent.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Two more to watch</h2>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Virgin Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-6">
              Runs ongoing music initiatives and publishes <a href="https://virginhotels.com/hearthis/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">official playlists</a>, often tailoring selections to each city and venue, with third-party curation support at the portfolio level.
            </p>

            <h3 className="text-2xl font-bold text-black mt-8 mb-4">Moxy Hotels</h3>
            <p className="text-black/80 leading-relaxed mb-8">
              Uses public, <a href="https://open.spotify.com/playlist/18e07cRHXIDILrMizuN3Ye" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">branded playlists</a> to express a youthful, high-energy identity that syncs with the social lobby concept.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">What leaders do differently</h2>

            <ul className="space-y-4 text-black/80 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span><strong>They treat sound like design.</strong> Music has guidelines, ownership, and a roadmap, just like interiors and scent.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span><strong>They program by context.</strong> Dayparts, zones, and guest profiles drive tempo, energy, and genre choices.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span><strong>They combine human taste with data.</strong> Curators "read the room," then validate with dwell, sales, and feedback.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold mt-1">•</span>
                <span><strong>They publish and extend.</strong> Playlists and recordings travel beyond the property, reinforcing memory and brand stickiness.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">How to apply this to your property</h2>

            <ol className="space-y-4 text-black/80 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold">1.</span>
                <span><strong>Define the brief.</strong> Space types, dayparts, guest profiles, and brand attributes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold">2.</span>
                <span><strong>Build the library.</strong> Curated crates that cover your experience map, including seasonal and event-based sets.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold">3.</span>
                <span><strong>Pilot and measure.</strong> Test in-venue, track dwell and spend where appropriate, and gather staff feedback.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold">4.</span>
                <span><strong>Maintain freshness.</strong> Monthly trims and adds keep relevance high and repeat visits rewarding.</span>
              </li>
            </ol>

            <p className="text-black/80 leading-relaxed mb-6">
              Music changes how people move, connect, and remember. We make that power part of your venue's identity. Then we keep improving it, cycle after cycle.
            </p>

            <p className="text-black/80 leading-relaxed">
              Ready to shape your property's sound strategy? <Link to={createPageUrl("ContactUs")} className="text-black underline hover:text-black/70 font-semibold">Contact us</Link> to get started.
            </p>
          </div>
        </Card>

        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          <Link to={createPageUrl("Blog")}>
            <Button variant="outline" className="bg-transparent border-black text-black hover:bg-black hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <Link to={createPageUrl("ContactUs")}>
            <Button className="bg-black hover:bg-black/80 text-white group">
              Shape Your Property's Sound Strategy
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
