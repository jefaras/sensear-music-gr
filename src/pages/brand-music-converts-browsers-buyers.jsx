import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function BrandMusicConvertsBrowsersBuyers() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "How Brand-Fit Music Converts Browsers into Buyers | SensEar Research";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Evidence-based research on how brand-aligned music increases sales by 9.1%. Learn the science behind sonic branding and customer behavior.";
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
      canonicalLink.setAttribute('href', 'https://sensear.music/brand-music-converts-browsers-buyers');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/brand-music-converts-browsers-buyers';
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'How Brand-Fit Music Converts Browsers into Buyers | SensEar Research' },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg' },
      { property: 'og:url', content: 'https://sensear.music/brand-music-converts-browsers-buyers' },
      { property: 'og:type', content: 'article' },
      { property: 'article:published_time', content: '2021-01-20T09:00:00Z' },
      { property: 'article:author', content: 'Zoe Burnard' },
      { property: 'article:section', content: 'Research' }
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
      { name: 'twitter:title', content: 'How Brand-Fit Music Converts Browsers into Buyers | SensEar Research' },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg' }
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

    // Update structured data to include BreadcrumbList
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
        "headline": "How Brand-Fit Music Converts Browsers into Buyers",
        "description": "Research-backed insights on how music curation impacts consumer behavior and drives revenue growth in hospitality venues.",
        "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg",
        "author": {
          "@type": "Person",
          "name": "Zoe Burnard"
        },
        "publisher": {
          "@type": "Organization",
          "name": "SensEar",
          "logo": {
            "@type": "ImageObject",
            "url": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"
          }
        },
        "datePublished": "2021-01-20",
        "dateModified": "2021-01-20"
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
            "name": "How Brand-Fit Music Converts Browsers into Buyers",
            "item": "https://sensear.music/brand-music-converts-browsers-buyers"
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
        
        .slide-up-4 {
          animation: slideUp 0.8s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>

      {/* Hero Section - Two Column Layout */}
      <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Brand Music Converts Browsers Buyers section">
        <div className="w-full px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: H1 */}
            <div className="flex flex-col justify-center text-left">
              <h1 className="font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
                <span className="block text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem]">How Brand-Fit Music</span>
                <span className="block text-[1.6rem] sm:text-[2.4rem] md:text-[3rem] lg:text-[3.6rem] text-black/70 italic">Converts Browsers into Buyers</span>
              </h1>
              <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2 mb-6">
                Evidence-based research showing how brand-aligned music increases sales by 9.1% in hospitality venues.
              </p>
              <div className="flex items-center gap-6 text-sm text-black/60 slide-up-2">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <time dateTime="2021-01-20">January 20, 2021</time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span>Zoe Burnard</span>
                </div>
                <div className="text-black/50">
                  <span>6 min read</span>
                </div>
              </div>
            </div>

            {/* Right Column: Square Image */}
            <div className="w-full slide-up-4 flex justify-center lg:justify-end">
              <div className="w-full lg:w-[93.5%]">
                <div className="overflow-hidden rounded-2xl shadow-2xl">
                  <div className="relative aspect-square">
                    <img 
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/f0b3de4b5_gemini-25-flash-image_professional_photo_of_Upscale_this_image_carefully_keeping_the_natural_photo_sty-0.jpg" 
                      alt="Restaurant ambiance demonstrating music's impact on customer sales and behavior" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <Card className="bg-white p-8 md:p-12 shadow-lg mb-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-black mt-0 mb-6">Sound Is the Fastest Path to the Brain, and the Most Underused Lever in Retail</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Walk into any bar, hotel, or restaurant and you'll feel the space before you read a single menu line: lighting, textures, layout. Yet the signal that hits your brain first is sound - an organizer for the rest of your senses - quietly steering attention, pace, and preference (<a href="https://www.jstor.org/stable/1252042" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">Bitner's servicescape framework</a> situates music as a core ambient cue).
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Beyond Background Noise: The Evidence for Brand-Fit Music</h2>

            <p className="text-black/80 leading-relaxed mb-6">
              Large-scale <a href="https://ideas.repec.org/p/hhs/huiwps/0121.html" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">field research</a> finally moved this question from hunch to hard numbers. In a multi-month experiment spanning 16 high-traffic <Link to={createPageUrl("music-for-restaurants-and-bars")} className="text-black underline hover:text-black/70 font-semibold">restaurants</Link>, playlists that matched the brand's personality outperformed random chart hits, lifting <a href="https://ideas.repec.org/p/hhs/huiwps/0121.html" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">revenues by ~9.1%</a>.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Earlier work already hinted that music changes shopper behavior: <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">slow-tempo soundtracks</a> reduced <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">walking speed</a> and increased <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">supermarket sales</a>. And context-congruent music can even tilt category choice; French vs. German <a href="https://archive.org/download/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip/10.1037%252F0021-9010.84.2.271.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">wine sales</a> swung with the nationality of the music.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">What "Brand-Fit" Actually Means</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70 font-semibold">Brand fit music</Link> behaves like your interior palette, only for the ears: it reflects values, tone-of-voice, and desired pace, so the sound "feels" unmistakably like you. Customer fit - playing only what you think guests prefer - often dissolves into a beige mix that blurs distinctiveness, especially with diverse audiences.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Why This Works: Multisensory Science, Not Marketing Magic</h2>

            <p className="text-black/80 leading-relaxed mb-8">
              Sound doesn't operate in a silo; it cross-talks with taste, time perception, and arousal. Reviews in multisensory perception show that sonic cues can reshape <a href="https://ora.ox.ac.uk/objects/uuid%3Af7af7995-1ba5-4557-bdb1-782dd9185583/download_file?safe_filename=Spence-et-al-2021-Commercializing-sonic-seasoning.pdf&type_of_work=Journal+article" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">flavour experience</a> ("sonic seasoning") and the overall hospitality moment. This sits squarely inside <a href="https://eclass-demo.aueb.gr/modules/document/file.php/MISC418/Lecture5_Reading_Servicescapes.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">servicescape theory</a>, where <a href="https://eclass-demo.aueb.gr/modules/document/file.php/MISC418/Lecture5_Reading_Servicescapes.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">ambient conditions</a> (music, scent, temperature) shape both customer and staff outcomes.
            </p>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">What the Data Says In Plain Numbers</h2>

            <p className="text-black/80 leading-relaxed mb-4">
              Brand-fit playlists beat random popular tracks, driving a <a href="https://ideas.repec.org/p/hhs/huiwps/0121.html" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">~9.1% sales lift</a> in a real-world restaurant chain.
            </p>

            <p className="text-black/80 leading-relaxed mb-4">
              Blending recognizable and lesser-known tracks - so long as both fit the brand - further improves results by avoiding listener fatigue while preserving identity.
            </p>

            <p className="text-black/80 leading-relaxed mb-8">
              Tempo and congruency matter: <a href="https://music2biz.com/wp-content/uploads/2017/04/Using-Background-Music-to-Affect-the-Behavior-of-Supermarket-Shoppers.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">slower music</a> can increase dwell and basket size; culturally congruent music can nudge <a href="https://archive.org/download/wikipedia-scholarly-sources-corpus/10.1037%252F0002-9432.71.2.245.zip/10.1037%252F0021-9010.84.2.271.pdf" target="_blank" rel="noopener noreferrer" className="text-black underline hover:text-black/70">category selection</a>.
            </p>

            <div className="bg-black/5 p-8 rounded-lg my-10">
              <h2 className="text-3xl font-bold text-black mb-6 text-center">The SensEar Playbook: From Soundcheck to Sales Impact</h2>
              <ol className="space-y-4 text-black/80">
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">1.</span>
                  <span><strong>Brand Audio DNA</strong> - We translate your values and visual identity into audio attributes (tempo, timbre, energy, cultural cues).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">2.</span>
                  <span><strong>Adaptive, Brand-Fit Playlists</strong> - Dynamic programming that blends popular and emerging tracks while staying on-voice, hour-by-hour.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">3.</span>
                  <span><strong>Zonal Soundscapes</strong> - Different spaces, different intents: entrance, bar, dining, restrooms - each with a role in the journey.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">4.</span>
                  <span><strong>Licensing & Compliance</strong> - We handle rights so you stay protected while sounding premium.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-black font-bold">5.</span>
                  <span><strong>A/B & Attribution</strong> - We correlate playlist variants with traffic, dwell, attachment, and category mix, not just "vibes."</span>
                </li>
              </ol>
              <p className="text-black/70 text-sm mt-6 text-center">
                (This approach aligns with the field-experimental evidence on brand-music congruence and servicescape outcomes)
              </p>
            </div>

            <h2 className="text-3xl font-bold text-black mt-12 mb-6">Ready to Hear the Difference?</h2>

            <p className="text-black/80 leading-relaxed">
              If you're running a <Link to={createPageUrl("music-for-restaurants-and-bars")} className="text-black underline hover:text-black/70 font-semibold">bar</Link>, <Link to={createPageUrl("music-for-hotels-and-resorts")} className="text-black underline hover:text-black/70 font-semibold">hotel</Link>, or <Link to={createPageUrl("music-for-restaurants-and-bars")} className="text-black underline hover:text-black/70 font-semibold">restaurant</Link> and want measurable uplift, not just ambience, SensEar can design and operate your <Link to={createPageUrl("signature-playlists")} className="text-black underline hover:text-black/70 font-semibold">brand-fit music system</Link> end-to-end. Book a 20-minute <Link to={createPageUrl("contact")} className="text-black underline hover:text-black/70 font-semibold">sound audit</Link> and get a custom audio DNA with quick-win recommendations for your venue today.
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
          <Link to={createPageUrl("contact")}>
            <Button className="bg-black hover:bg-black/80 text-white">
              Discover Our Music Curation Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}