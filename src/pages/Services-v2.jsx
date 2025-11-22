import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Sparkles, BarChart, SlidersHorizontal, Check, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ServicesV2() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Strategic Music Services | SensEar";
    
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
              How music<br />becomes strategy
            </h1>
            

          </div>
        </div>

        {/* Hero Image with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                alt="Strategic music curation"
                className="absolute w-full h-full object-cover md:hidden" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/894d9bc6d_cad97e304_cf2e236f7da151dd0dab015bf34e8252.jpg"
                alt="Strategic music curation"
                className="absolute w-full h-full object-cover hidden md:block"
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
            <div className="lg:order-2 lg:min-w-[280px]">
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
                Music is already<br />shaping<br />your business
              </h2>
            </div>
            
            <div className="lg:order-1 lg:mt-[200px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                Every venue has a soundtrack, whether you designed it or not. Random playlists, staff preferences, or silence all tell a story about your brand. We make sure it's the right story.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                We shape sound for venues across hospitality, retail, and culture. Not background music. Strategic atmosphere that influences how people feel, how long they stay, and whether they return.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24" style={{
        backgroundImage: `linear-gradient(to bottom, 
          #ffffff 0%, 
          #ffffff 25%, 
          rgba(255,255,255,0) 45%, 
          rgba(255,255,255,0) 55%,
          #FFF7F2 75%, 
          #ffffff 100%
        ), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Our services</h2>
          </div>

          <div className="space-y-20">
            {/* Signature Playlists */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/013a4722f_cyprpn9zest1wg173m2j.jpg" 
                    alt="Signature Playlists" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Signature playlists</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">The foundation of your sound</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  Forget the shuffle button. These are architected musical journeys that evolve with your day; energizing mornings, productive afternoons, intimate evenings. Fresh monthly updates keep your team happy and your guests intrigued.
                </p>
                <div className="bg-[#faebe3] p-6 rounded-xl border border-black/5">
                  <p className="font-bold text-black mb-1">Perfect when:</p>
                  <p className="text-black/80">Your current music feels disconnected from your brand</p>
                </div>
                <div className="mt-8">
                  <Link to={createPageUrl("signature-playlists")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Sonic Strategy */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Sonic strategy</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">Your brand's audio DNA</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  What does luxury sound like? What about innovation? Or warmth? We decode your brand values into musical principles, creating a playbook that works across every touchpoint; from your lobby to your Instagram stories.
                </p>
                <div className="bg-[#faebe3] p-6 rounded-xl border border-black/5">
                  <p className="font-bold text-black mb-1">Perfect when:</p>
                  <p className="text-black/80">You're scaling or need consistency across locations</p>
                </div>
                <div className="mt-8">
                  <Link to={createPageUrl("sonic-strategy")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg" 
                    alt="Sonic Strategy" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Event Soundtracks */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d4a085ed9_EventSoundtracks-upsc2-cropped.jpg" 
                    alt="Event Soundtracks" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Event soundtracks</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">Moments that demand more</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  Some occasions can't afford a musical misstep. Product launches, weddings, conferences; we choreograph sound that amplifies key moments and smooths transitions. No dead air. No jarring surprises. Just flow.
                </p>
                <div className="bg-[#faebe3] p-6 rounded-xl border border-black/5">
                  <p className="font-bold text-black mb-1">Perfect when:</p>
                  <p className="text-black/80">The stakes are high and the playlist can't fail</p>
                </div>
                <div className="mt-8">
                  <Link to={createPageUrl("event-soundtracks")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Audio Upgrades */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Audio upgrades</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">When good music hits bad speakers</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  The best playlist can't save terrible acoustics. We diagnose and fix the technical barriers (dead zones, harsh frequencies, volume wars) that prevent your music from doing its job.
                </p>
                <div className="bg-[#faebe3] p-6 rounded-xl border border-black/5">
                  <p className="font-bold text-black mb-1">Perfect when:</p>
                  <p className="text-black/80">People complain it's "too loud" and "too quiet" in the same space</p>
                </div>
                <div className="mt-8">
                  <Link to={createPageUrl("audio-upgrades")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Learn more</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg" 
                    alt="Audio Upgrades" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why venues choose strategic sound */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-16 text-center">Why venues choose strategic sound</h2>
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* The Math */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-peach">The math is simple.</h3>
              <p className="text-xl mb-8 text-white/90">When music aligns with your brand:</p>
              <ul className="space-y-4">
                {[
                  "Tables don't empty after one drink",
                  "Browsers become buyers",
                  "Mondays feel less like Mondays",
                  "Your team stops arguing about the playlist"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-peach/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-peach" />
                    </div>
                    <span className="text-lg text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Feeling */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-peach">The feeling is powerful.</h3>
              <p className="text-xl mb-8 text-white/90">When everything sounds right:</p>
              <ul className="space-y-4">
                {[
                  "Spaces feel intentional, not random",
                  "Moments become memories",
                  "Instagram happens naturally",
                  "People can't quite explain why they love being there"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-peach/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-peach" />
                    </div>
                    <span className="text-lg text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#faebe3]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12 text-center">Common questions before we start</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white border-none rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-xl font-bold text-left py-6 hover:no-underline">
                "Can't we just use Spotify?"
              </AccordionTrigger>
              <AccordionContent className="text-lg text-black/80 pb-6 leading-relaxed">
                You can. Many do. But consumer playlists aren't built for business. They're not licensed for commercial use, they repeat too quickly, and they don't consider acoustic space or customer flow. It's like wearing running shoes to a board meeting; functional, but missing the point.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white border-none rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-xl font-bold text-left py-6 hover:no-underline">
                "How is this different from background music services?"
              </AccordionTrigger>
              <AccordionContent className="text-lg text-black/80 pb-6 leading-relaxed">
                Those services provide music. We provide strategy. It's the difference between having words and having something to say. Every playlist we create serves a business goal, not just a genre preference.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white border-none rounded-xl px-6 shadow-sm">
              <AccordionTrigger className="text-xl font-bold text-left py-6 hover:no-underline">
                "What if our team doesn't like the music?"
              </AccordionTrigger>
              <AccordionContent className="text-lg text-black/80 pb-6 leading-relaxed">
                We've never had a playlist rejected. Why? Because we start by understanding your team, your customers, and your goals. It's not about our taste, but what works for your specific space and people.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Start Here / CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6">Start here</h2>
          <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto">
            Not sure which service fits? Most venues benefit from starting with Signature Playlists, then adding other services as needs emerge.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-10 py-7 text-xl rounded-full transition-transform hover:scale-105">
                Book a listening session
              </Button>
            </Link>
            
            <div className="space-y-2">
              <p className="text-black/60 text-sm font-medium uppercase tracking-wide">We will analyze your current sound and show you what's possible.</p>
              <Link to={createPageUrl("Services")} className="inline-flex items-center text-black font-bold text-lg group">
                <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Compare services in detail</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}