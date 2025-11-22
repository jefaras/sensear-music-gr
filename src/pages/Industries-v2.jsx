import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function IndustriesV2() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Industries | SensEar";
    
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
              Music designed<br />for your world
            </h1>
          </div>
        </div>

        {/* Hero Image with parallax */}
        <div className="w-full px-6 slide-up-4">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/adc5c3e54_dcff3c9fa7fade1ad1dfe051c913ca7f.jpg"
                alt="Industries"
                className="absolute w-full h-full object-cover md:hidden" />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/adc5c3e54_dcff3c9fa7fade1ad1dfe051c913ca7f.jpg"
                alt="Industries"
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
                The right energy<br />for every moment
              </h2>
            </div>
            
            <div className="lg:order-1 lg:mt-[200px]">
              <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                A hotel lobby at sunrise needs different energy than a cocktail bar at midnight. A boutique wants shoppers to discover. A spa needs minds to quiet. A gallery requires respect for the art.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                We design music across hospitality, retail, wellness & culture. Different worlds, shared truth: the right sound transforms spaces from functional to unforgettable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your World, Our Expertise Section */}
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
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Your world, our expertise</h2>
          </div>

          <div className="space-y-20">
            {/* Hotels & Resorts */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7f101b74a_46aadcb58bc4729ca5f1d47abf84a70a-_X-Design1.png" 
                    alt="Hotels & Resorts" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Hotels & Resorts</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">Every hour has its soundtrack</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  Morning coffee needs optimism. Afternoon arrivals need energy. Evening bars need sophistication. Late-night lobbies need discretion. We orchestrate the full day, so your music works as hard as your staff.
                </p>
                <div className="mt-8">
                  <Link to={createPageUrl("hotels-resorts")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Explore Hotels & Resorts</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Restaurants & Bars */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Restaurants & Bars</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">The invisible maître d'</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  Music that reads the room. Gentle lunch service. Building dinner energy. Late-night intimacy. We help you nail the timing—because the difference between two drinks and four often comes down to tempo.
                </p>
                <div className="mt-8">
                  <Link to={createPageUrl("restaurants-bars")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Explore Restaurants & Bars</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/5eefecd97_Rebis-Restaurant-Desenzano-del-Garda-Italia-3-1--.jpg" 
                    alt="Restaurants & Bars" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Retail Stores */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/1e2c7c1d3_ignan-travel-thesquare-5-2048x1328-1-.jpg" 
                    alt="Retail Stores" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Retail Stores</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">Shopping as experience, not task</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  Transform quick errands into exploration. We create playlists that guide movement, inspire discovery, and make checkout feel too soon. Because browsers who enjoy the journey become buyers who return.
                </p>
                <div className="mt-8">
                  <Link to={createPageUrl("retail-stores")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Explore Retail Stores</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Wellness & Gyms */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Wellness & Gyms</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">Sound that supports the practice</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  Yoga needs space between notes. Spin needs relentless drive. Spas need to lower heart rates. Gyms need to raise them. We match music to intention, helping bodies and minds do what they came to do.
                </p>
                <div className="mt-8">
                  <Link to={createPageUrl("wellness-gyms")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Explore Wellness & Gyms</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg" 
                    alt="Wellness & Gyms" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Events & Experiences */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab396617_3e1b0b33902175e823a09d4a2f172133-.jpg" 
                    alt="Events & Experiences" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Events & Experiences</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">No room for playlist roulette</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  When 200 people are watching, you can't hit shuffle and hope. We design time-aware soundtracks and live DJ sets that nail arrivals, build through dinner, peak at the right moment and land the finale.
                </p>
                <div className="mt-8">
                  <Link to={createPageUrl("events-experiences")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Explore Events & Experiences</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Art, Museums & Fashion */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Art, Museums & Fashion</h3>
                <h4 className="text-xl font-semibold text-black/60 mb-6 uppercase tracking-wide">Presence without intrusion</h4>
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  The art is the star. Music just helps people see it better. We create subtle soundscapes that extend viewing time, deepen contemplation, and respect both the work and the silence around it.
                </p>
                <div className="mt-8">
                  <Link to={createPageUrl("art-museums-fashion")} className="inline-flex items-center text-black font-bold group">
                    <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Explore Art, Museums & Fashion</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d3177c205_802543-exposition-annees-80-au-mad.jpg" 
                    alt="Art, Museums & Fashion" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What connects these spaces */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold mb-16 text-center">What connects these spaces</h2>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white/90">
              Different industries. Same human behaviors.
            </h3>
            <p className="text-xl text-white/80 text-center mb-12">
              Whether someone's checking into a hotel or checking out art, certain patterns hold:
            </p>
            
            <div className="grid md:grid-cols-1 gap-6 bg-white/5 p-8 rounded-2xl border border-white/10">
              {[
                "Morning energy differs from evening energy - We adjust accordingly",
                "Crowds change the acoustic reality - We plan for empty and full",
                "Brands have signatures beyond visuals - We make them audible",
                "Staff shouldn't DJ while working - We remove that burden",
                "Every business has a rhythm - We help you find and keep it"
              ].map((item, i) => {
                const [bold, normal] = item.split(" - ");
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-peach/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-peach" />
                    </div>
                    <p className="text-lg md:text-xl text-white/90">
                      <span className="font-bold text-peach">{bold}</span>
                      <span className="text-white/60"> - {normal}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How our services map to your world */}
      <section className="py-24 bg-[#faebe3]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">How our services map to your world</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl leading-relaxed">
                Most venues start with <Link to={createPageUrl("signature-playlists")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70">Signature Playlists</Link> — your everyday foundation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl leading-relaxed">
                Growing brands add <Link to={createPageUrl("sonic-strategy")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70">Sonic Strategy</Link> — when consistency matters.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl leading-relaxed">
                Special moments need <Link to={createPageUrl("event-soundtracks")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70">Event Soundtracks</Link> — when failure isn't an option.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl leading-relaxed">
                Technical problems require <Link to={createPageUrl("audio-upgrades")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70">Audio Upgrades</Link> — when the speakers fight the strategy.
              </p>
            </div>
          </div>
          
          <p className="text-2xl font-medium text-black/80 max-w-3xl mx-auto">
            Some venues need one service. Some need all four. We'll help you decide.
          </p>
        </div>
      </section>

      {/* The SensEar difference */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-8">The SensEar difference</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-1 h-full bg-black/10 rounded-full min-h-[100px]"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We're not a playlist factory.</h3>
                    <p className="text-lg text-black/70 leading-relaxed">Every venue gets human curation, monthly evolution, and direct access to your curator.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-full bg-black/10 rounded-full min-h-[100px]"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We are not just technical.</h3>
                    <p className="text-lg text-black/70 leading-relaxed">We understand service, flow, and the Tuesday 3pm slowdown.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 h-full bg-black/10 rounded-full min-h-[100px]"></div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">We are not generic.</h3>
                    <p className="text-lg text-black/70 leading-relaxed">Based in Athens, we understand Mediterranean hospitality; the long lunch, the late dinner, the importance of atmosphere in everyday life.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#faebe3] p-10 rounded-3xl relative">
              <h3 className="text-3xl font-bold mb-6">Where does your venue fit?</h3>
              <p className="text-xl text-black/80 leading-relaxed mb-6">
                Every space has its category, but some venues blur the lines. Boutique hotels with serious restaurants. Galleries with event spaces. Wellness centers with retail.
              </p>
              <p className="text-xl text-black font-bold leading-relaxed">
                We work with hybrids all the time. The strategy adapts to your reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#faebe3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6">Let's discuss your specific space and goals</h2>
          
          <div className="flex flex-col items-center gap-6">
            <Link to={createPageUrl("ContactUs")}>
              <Button size="lg" className="bg-black text-white hover:bg-black/80 px-10 py-7 text-xl rounded-full transition-transform hover:scale-105">
                Book a listening session
              </Button>
            </Link>
            
            <div className="space-y-2">
              <p className="text-black/60 text-sm font-medium uppercase tracking-wide">See exactly what we provide</p>
              <Link to={createPageUrl("Services")} className="inline-flex items-center text-black font-bold text-lg group">
                <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">Explore our services</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}