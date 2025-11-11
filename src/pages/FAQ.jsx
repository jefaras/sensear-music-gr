
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => { // Corrected syntax from useEffect() => { to useEffect(() => {
    document.title = "FAQ | SensEar Music Curation Questions Answered";

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#faebe3]">
      {/* Hero Section - New Format */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Frequently Asked Questions">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-[1.1]">
              Frequently Asked Questions
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
                Your questions about music curation, licensing, and our services, answered. Find the information you need to make an informed decision.
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
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cc2be0306_c0d1799938e6c6836303a2d72580c5f8_earphones.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec93503a2d72580c5f8_earphones.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec93503a2d72580c5f8_earphones.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Music curation consultation and expert answers to frequently asked questions"
                className="absolute w-full h-full object-cover md:hidden"
              />
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cc2be0306_c0d1799938e6c6836303a2d72580c5f8_earphones.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cc2be0306_c0d1799938e6c6836303a2d72580c5f8_earphones.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/cc2be0306_c0d1799938e6c6836303a2d72580c5f8_earphones.jpg 2400w"
                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Music curation consultation and expert answers to frequently asked questions"
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

      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="faq-section-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="faq-section-heading" className="text-4xl font-bold text-center text-black mb-12">
            Your Questions, Answered
          </h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-0" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Is it legal to play music from Spotify, YouTube, or Apple Music in my restaurant/bar/hotel?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Typically, consumer streaming platforms (like Spotify Free/Premium, YouTube, Apple Music, etc.) are licensed only for personal use, meaning they do not cover public performance rights in a commercial setting. You'll need a business license or properly licensed service to legally play music for your patrons.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Why can't I just use my personal Spotify or Apple Music subscription?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Personal subscriptions don't include public performance or commercial use rights. Using them in a public venue can violate copyright law and may lead to fines or legal complications. Commercial music services, by contrast, include the necessary licenses for public playback.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                What is a public performance license, and why do I need it?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                A Public Performance License is an agreement that compensates artists, songwriters, and music publishers when their work is played in a public venue. You must utilize it to legally broadcast or perform music in restaurants, bars, hotels, retail stores, etc. SensEar can help you navigate or secure these licenses for peace of mind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Does SensEar provide fully licensed music?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Yes. All our tracks are properly licensed for commercial settings, so you don't have to worry about legal pitfalls. We handle licensing, compliance, and usage reporting where required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                How long does it take to create a custom playlist?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                It varies. For a single venue with a clear music profile, it may take just a few days. For larger or multi-location clients, it can take a week or more to finalize the whole process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Is your music fully licensed?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Yes. All tracks are properly licensed so you can focus on running your business without any legal concerns.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Can I update the music playlists myself?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Absolutely. Our user-friendly platform allows you to make quick changes, adjust settings, or schedule different playlists for specific times.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do I need special equipment for playing your music playlists?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Basic sound systems work just fine, but if you want specialized audio-visual solutions, we can provide design, purchase, and installation services. For more info see our AV Design & Integration section.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do you offer support after setup?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Yes. We are available for ongoing support, updates, and any adjustments you need along the way. Just send us a message and we will talk about it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                What is the difference between background music and bespoke curation?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Background Music offers pre-curated, automated playlists for a seamless ambiance, ideal for general business needs. Bespoke Curation is a fully customized music strategy, crafted to reflect a brand's identity and create a unique, immersive experience. It is ideal for luxury venues, boutique spaces, and businesses seeking a signature sound experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12 bg-white/50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Still Have Questions? Let's Talk</h3>
            <p className="text-black/80 mb-6">Let's talk about how we can elevate your brand's sound.</p>
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 group">
                Still Have Questions? Let's Talk
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
