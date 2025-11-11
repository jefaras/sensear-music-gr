
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Breadcrumbs from "../components/Breadcrumbs";

export default function WhatExactlyDoesMusicCuratorDo() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "What Exactly Does a Music Curator Do? | SensEar Professional Guide";
    
    const description = "Learn how professional music curators architect brand soundtracks through strategic curation, playlist design, and data-driven sonic branding.";
    const metaDescription = document.querySelector('meta[name="description"]');
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

    // Add robots meta tag - BLOG ARTICLE: index, follow
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
      canonicalLink.setAttribute('href', 'https://sensear.music/what-exactly-does-music-curator-do');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/what-exactly-does-music-curator-do';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'What Exactly Does a Music Curator Do? | SensEar Professional Guide' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png' },
      { property: 'og:url', content: 'https://sensear.music/what-exactly-does-music-curator-do' },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: '2025-01-10T09:00:00Z' },
      { property: 'article:author', content: 'SensEar Team' },
      { property: 'article:section', content: 'Education' }
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

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'What Exactly Does a Music Curator Do? | SensEar Professional Guide' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png' }
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
          "https://www.instagram.com/sensear.music"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "What Exactly Does a Music Curator Do?",
        "description": "Learn how professional music curators architect brand soundtracks through strategic curation, playlist design, and data-driven sonic branding.",
        "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png",
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
        "datePublished": "2025-01-10",
        "dateModified": "2025-01-10"
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
            "name": "What Exactly Does a Music Curator Do?",
            "item": "https://sensear.music/what-exactly-does-music-curator-do"
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

    // Add scroll event listener for parallax
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#faebe3] min-h-screen">
      <section 
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        aria-label="What Exactly Does a Music Curator Do?">

        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1]">
              What Exactly Does<br />
              a Music Curator Do?
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <div className="flex items-center gap-6 text-sm text-black/60 mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2025-01-10">January 10, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>SensEar Team</span>
                </div>
                <div className="text-black/50">
                  <span>6 min read</span>
                </div>
              </div>
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                The SensEar approach to turning brand voice into living sound
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9fc56aeca_aiease_1760529744739.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9fc56aeca_aiease_1760529744739.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9fc56aeca_aiease_1760529744739.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music curator at work designing brand soundtracks and strategic playlists"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9fc56aeca_aiease_1760529744739.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9fc56aeca_aiease_1760529744739.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9fc56aeca_aiease_1760529744739.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Professional music curator at work designing brand soundtracks and strategic playlists"
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

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
          { label: "Blog", path: createPageUrl("Blog") },
          { label: "What Exactly Does a Music Curator Do?", path: createPageUrl("what-exactly-does-music-curator-do") }
        ]} />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Card className="bg-white p-8 md:p-12 shadow-lg mb-12">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-black/80 leading-relaxed mb-8">
              Music curators architect the soundtrack of a brand, designing purpose-built playlists and ambient soundscapes that shape emotion, guide behavior, and make spaces memorable. Unlike DJs who perform live and read a crowd in the moment, <a href="https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Councils/ARF_Creative_SonicBranding_2024_10.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">curators work upstream</a>: they translate strategy, context, and data into on-brand audio systems for retail, hospitality, offices, events, and installations.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">How SensEar Curates: Four Pillars of Strategic Sound</h2>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">1) Constant Listening With Intent</h3>

            <p className="text-black/80 leading-relaxed mb-6">
              Curators live at the edge of culture, mapping new releases and catalog gems across genres, regions, and moods. The goal isn't just "good music" but is a musical fit. Tracks whose tempo, timbre, energy, and familiarity align with the <a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1236006/full" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">experience you want to produce</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Beneath the art sits neuroscience: <a href="https://www.brainmusic.org/MBB91%20Webpage/Blood_Zatorre_2001.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">peak emotional responses</a> to music recruit the brain's reward circuitry (ventral striatum, amygdala, OFC), which is why the right song at the right moment can feel transformative.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">2) Brand & Space Diagnostics</h3>

            <p className="text-black/80 leading-relaxed mb-8">
              Before a single track is placed, we interrogate context: vision, clientele, day-parts, acoustic constraints, and the behaviors you need (linger longer, browse deeper, buy, relax, socialize). The brief might include <a href="https://www.ioa.org.uk/system/files/proceedings/kp_roy_sound_masking_system_design_and_speech_privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">speech-privacy</a> or confidentiality needs. Cases where curators partner with <a href="https://www.sciencedirect.com/science/article/pii/S2405844024130733" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">acoustic design</a> and <a href="https://cambridgesound.com/sound-masking-references/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">sound masking</a> to ensure conversations remain private while keeping the room comfortable.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">3) Bespoke Playlist Systems, Not Templates</h3>

            <p className="text-black/80 leading-relaxed mb-6">
              From a blank canvas, curators design adaptive playlists that express your audio identity across moments: opening calm, midday energy, golden-hour warmth, late-night minimalism. The mix calibrates:
            </p>

            <ul className="space-y-3 text-black/80 mb-8 list-disc pl-6">
              <li><a href="https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1236006/full" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Familiar vs. discovery</a> to balance comfort with novelty.</li>
              <li><a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Tempo</a> to nudge pace & dwell time; a <a href="https://www.sciencedirect.com/science/article/pii/S0969698912000732" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">lever</a> repeatedly shown to shift <a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">shopping</a> and <a href="https://www.sciencedirect.com/science/article/pii/S0950329324000971" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">dining behavior</a>.</li>
              <li>Vocal vs. instrumental to manage cognitive load and conversation.</li>
              <li>Representation & fairness in <a href="https://dl.acm.org/doi/fullHtml/10.1145/3640457.3688163" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">artist selection</a>, addressing known biases in music ecosystems and recommender systems.</li>
            </ul>

            <p className="text-black/80 leading-relaxed mb-8">
              We also consider brand personality cues. For example, sonic logos and short audio signatures can amplify perceived sincerity or ruggedness when <a href="https://www.sciencedirect.com/science/article/pii/S0148296323005283" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">musical features</a> are congruent with brand traits.
            </p>

            <h3 className="text-2xl font-bold text-black mt-10 mb-4">4) Governance: Keep It Fresh, Measured, and On-Brand</h3>

            <p className="text-black/80 leading-relaxed mb-8">
              Curation isn't "set and forget." SensEar runs data-driven playlisting with scheduled rotation, seasonality, event spikes, and test-and-learn loops. We tag features (tempo/energy/mode), monitor skips and staff feedback, and align with brand KPIs (dwell time, NPS, conversion). Modern sonic branding programs <a href="https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Councils/ARF_Creative_SonicBranding_2024_10.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">measure memory</a>, recognition, and emotional lift, then iterate to improve asset recall and engagement.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why It Works: The Evidence Behind Strategic Sound</h2>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Tempo steers pace & spend.</strong> <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Slow-tempo music</a> can lengthen in-store time and increase sales; similar effects appear in <a href="https://academic.oup.com/jcr/article-abstract/13/2/286/1846377" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">restaurants</a> where slower music extends <a href="https://www.sciencedirect.com/science/article/pii/S0950329324000971" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">dining duration</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>Emotion is the engine.</strong> Peak musical pleasure lights up the <a href="https://www.brainmusic.org/MBB91%20Webpage/Blood_Zatorre_2001.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">brain's reward network</a>, explaining why calibrated soundscapes can reliably shift mood and memory.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              <strong>From jingles to systems.</strong> Sonic branding is now measured like visual identity; <a href="https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Councils/ARF_Creative_SonicBranding_2024_10.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">assets are tested</a>, optimized, and governed for <a href="https://www.sciencedirect.com/science/article/pii/S0148296323005283" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">recall and fit</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              <strong>Privacy matters in real spaces.</strong> <a href="https://www.ioa.org.uk/system/files/proceedings/kp_roy_sound_masking_system_design_and_speech_privacy.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Sound masking</a> and <a href="https://www.sciencedirect.com/science/article/pii/S2405844024130733" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">spatial design</a> improve speech privacy without killing ambience, which is crucial for healthcare, offices, and <a href="https://cambridgesound.com/sound-masking-references/" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">premium retail</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Curators vs. DJs</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              DJs perform; curators pre-engineer the experience. Curators build scalable, context-aware retail soundscapes and experiential audio systems that teams can run daily; grounded in brand strategy, psychoacoustics, and <a href="https://thearf-org-unified-admin.s3.amazonaws.com/ARF%20Councils/ARF_Creative_SonicBranding_2024_10.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">measurement</a>.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Ready to Hear Your Brand?</h2>

            <p className="text-black/80 leading-relaxed">
              If you're designing a new space, refreshing an audio identity, or want measurable uplift from in-store music, SensEar can help; <Link to={createPageUrl("sonic-strategy")} className="text-black underline hover:text-black/70 font-semibold">strategy</Link>, <Link to={createPageUrl("signature-soundscapes")} className="text-black underline hover:text-black/70 font-semibold">curation</Link>, and governance included. Let's build a sound your customers remember and your team can run every day. Get your <Link to={createPageUrl("ContactUs")} className="text-black underline hover:text-black/70 font-semibold">free sonic audit</Link> today.
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
            <Button className="bg-black hover:bg-black/80 text-white">
              Get Your Free Sonic Audit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
