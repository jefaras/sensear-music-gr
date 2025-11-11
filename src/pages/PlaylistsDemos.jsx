
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Music, ArrowRight } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";

export default function PlaylistsDemos() {
  useEffect(() => {
    document.title = "Playlist Demos | SensEar Music Curation Samples";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const description = "Listen to SensEar's curated playlist demos for hotels, restaurants, bars, spas, and wellness centers. Experience our signature music curation style.";
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

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'index, follow');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      robotsMeta.content = 'index, follow';
      document.head.appendChild(robotsMeta);
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://sensear.music/playlists-demos');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = 'https://sensear.music/playlists-demos';
      document.head.appendChild(canonicalLink);
    }
  }, []);

  const demos = [
    {
      title: "Hotel sound design Demo",
      description: "A seamless audio solution that adapts from morning breakfasts to evening cocktails in hotel setting.",
      link: "#",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80"
    },
    {
      title: "Bar-Restaurant playlist Demo",
      description: "A tailored mix of tracks that complements restaurant service flow and enhances guest engagement.",
      link: "#",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
    },
    {
      title: "Beach bar playlist Demo",
      description: "Curated tunes that move smoothly from relaxed beach vibes to high-energy evening sessions.",
      link: "#",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80"
    },
    {
      title: "Spa & wellness demo",
      description: "Balanced, restorative playlists designed to nurture calm and support spa treatments, yoga sessions, and relaxation in wellness environments.",
      link: "#",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80"
    }
  ];

  return (
    <div className="bg-[#faebe3]">
      {/* Hero */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white pt-24 md:pt-0" 
        style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/600e50781_f62cd7127a69c8a8a667cf33da146404.jpg')" }}
        role="img"
        aria-label="Music curation playlist demos showcase">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up leading-tight">
            Hear our signature style
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
            Discover how our curated playlist demos transform hospitality spaces. No algorithms, no fillers; just music made to fit.
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
        <Breadcrumbs items={[
          { label: "Playlists Demos", path: createPageUrl("PlaylistsDemos") }
        ]} />
      </div>

      {/* New Header Section */}
      <section className="py-12 bg-[#faebe3]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Demos of our playlists
          </h2>
          <p className="text-xl text-black/70">
            Thoughtful pacing, consistent flow & brand-targeted musical storytelling.
          </p>
        </div>
      </section>

      {/* Demos Grid */}
      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="demos-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8" role="list">
            {demos.map((demo, index) => (
              <article key={index} role="listitem">
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white h-full flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={demo.image}
                      alt={demo.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Music className="w-7 h-7 text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-black mb-3">
                      {demo.title}
                    </h3>
                    <p className="text-black/70 mb-6 flex-grow">
                      {demo.description}
                    </p>
                    <a 
                      href={demo.link}
                      className="flex items-center text-black font-semibold group-hover:translate-x-2 transition-transform"
                      aria-label={`Listen to ${demo.title}`}
                    >
                      <span>Listen to the demo</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#faebe3] text-black" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to create your signature sound?
          </h2>
          <p className="text-lg sm:text-xl text-black/80 mb-8">
            View the <Link to={createPageUrl("Industries")} className="underline hover:text-black font-semibold">Industries's experiences</Link> we upgrade.
          </p>
          <p className="text-lg sm:text-xl text-black/80 mb-8">
            Read our <Link to={createPageUrl("CaseStudies")} className="underline hover:text-black font-semibold">Case Studies</Link> and find out how we can help.
          </p>
          <Link to={createPageUrl("ContactUs")}>
            <Button size="lg" className="bg-black hover:bg-black/80 text-white px-8 py-4 text-lg">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
