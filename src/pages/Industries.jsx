import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const AnimatedButton = ({ children, className = "", ...props }) => (
  <Button
    variant="outline"
    className={`group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden ${className}`}
    {...props}
  >
    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
      {children}
    </span>
    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
  </Button>
);

export default function Industries() {
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
              Curated music<br />tailored to your sector
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
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                The right energy<br />for every moment
              </h2>
            
              <div className="w-full text-left">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                  A <strong>hotel lobby</strong> at sunrise needs <em>different energy</em> than a <span className="text-black bg-white px-1">cocktail bar</span> at midnight. A <strong>boutique</strong> wants shoppers to <em>discover</em>. A <strong>spa</strong> needs <em>minds to quiet</em>. A <strong>gallery</strong> requires <em>respect</em> for the art.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                  We design music across <strong>hospitality</strong>, <strong>retail</strong>, <strong>wellness</strong> & <strong>culture</strong>. <em>Different worlds, shared truth:</em> the <strong>right sound transforms spaces</strong> from functional to <strong>unforgettable</strong>.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Your Industry, Our Expertise Section */}
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
            <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4">Your industry, our expertise</h2>
            <p className="text-xl text-black/80 font-medium">Strategic sound designed for the specific needs of your world.</p>
          </div>

          <div className="space-y-20">
            {/* Hotels & Resorts */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/e0dd5f695_13e97d3def8d47a1efe25c37e0f29eb2.jpg" 
                    alt="Hotels & Resorts" 
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Hotels & Resorts</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Soundtracks for every hour & space</p>
                
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed">Music that shapes the complete guest journey: from morning coffee to midnight cocktails, across lobby, pool, spa and rooms.</p>
                </div>
                <div className="mb-6">
                  <span className="font-bold text-black text-lg block mb-1">The result:</span>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Guests mention your atmosphere in reviews and ask about your playlists at reception.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("hotels-resorts")}>
                    <AnimatedButton className="w-full sm:w-auto">
                      Create your signature atmosphere
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Restaurants & Bars */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Restaurants & Bars</h3>
                <p className="text-xl font-medium text-black/60 mb-8">The invisible maître d'</p>
                
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed">Sound that flows with your rhythms, encouraging conversation and longer visits.</p>
                </div>
                <div className="mb-6">
                  <span className="font-bold text-black text-lg block mb-1">The result:</span>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Service flows more smoothly and guests settle in for the complete experience</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("restaurants-bars")}>
                    <AnimatedButton className="w-full sm:w-auto">
                      Upgrade your dining atmosphere
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/faa6772fc_c6c8247c6975e5b8b28964566c4e798d.jpg" 
                    alt="Restaurants & Bars" 
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Events & Experiences - Moved up */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/efeae9e53_56bb71da7fa44cbf6f001204format-webpwidth-1440_wWzsf3qJ3dJMkxWN-.jpg" 
                    alt="Events & Experiences" 
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Events & Experiences</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Choreographed precision for unforgettable moments</p>
                
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed">Precisely timed music that frames every phase, so your event sounds as good as it looks.</p>
                </div>
                <div className="mb-6">
                  <span className="font-bold text-black text-lg block mb-1">The result:</span>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Smooth transitions that guests don't notice but organizers appreciate</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("events-experiences")}>
                    <AnimatedButton className="w-full sm:w-auto">
                      Perfect your next event
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Retail Stores */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Retail Stores</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Soundscapes that inspire discovery</p>
                
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed">Music that guides customer journeys and helps your space tell its story through sound.</p>
                </div>
                <div className="mb-6">
                  <span className="font-bold text-black text-lg block mb-1">The result:</span>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Customers explore the entire store instead of just what they came for.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("retail-stores")}>
                    <AnimatedButton className="w-full sm:w-auto">
                      Transform your retail experience
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/4ee147bf6_6fd38d8f206dc0b7749c169007cee524.jpg" 
                    alt="Retail Stores" 
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Wellness Centers - previously Wellness & Gyms */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/3b2d2e497_Shade-by-Starpool-Design-Cristiano-Mino-.jpg" 
                    alt="Wellness Centers" 
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Wellness Centers</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Every practice deserves its perfect soundtrack</p>
                
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed">We calibrate music to support each activity, so each space has its optimal atmosphere.</p>
                </div>
                <div className="mb-6">
                  <span className="font-bold text-black text-lg block mb-1">The result:</span>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Members choose your studio specifically for the atmosphere you create.</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("wellness-gyms")}>
                    <AnimatedButton className="w-full sm:w-auto">
                      Optimize your wellness space
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
            </div>

            {/* Art, Museums & Fashion */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">Art, Museums & Fashion</h3>
                <p className="text-xl font-medium text-black/60 mb-8">Subtle atmospheres that deepen appreciation</p>
                
                <div className="mb-6">
                  <p className="text-xl md:text-2xl text-black/60 leading-relaxed">We create soundscapes that support without overwhelming and enrich the cultural experience.</p>
                </div>
                <div className="mb-6">
                  <span className="font-bold text-black text-lg block mb-1">The result:</span>
                  <p className="text-lg md:text-xl text-black/60 leading-relaxed">Visitors slow down, absorb more and share their experience afterwards</p>
                </div>

                <div className="mt-8">
                  <Link to={createPageUrl("art-museums-fashion")}>
                    <AnimatedButton className="w-full sm:w-auto">
                      Frame your exhibitions
                    </AnimatedButton>
                  </Link>
                </div>
              </div>
              <div className="order-2">
                <div className="bg-[#faebe3] rounded-2xl p-1 overflow-hidden w-full">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ec55631fd_204f0aeb3f27e1d66d7e764876f0fa4a.jpg" 
                    alt="Art, Museums & Fashion" 
                    className="w-full aspect-[3/4] object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* How our services deliver */}
      <section className="py-24 bg-[#faebe3]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-12">How our services deliver:</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl leading-relaxed">
                <Link to={createPageUrl("signature-playlists")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70">Signature Playlists</Link> establish your daily atmosphere
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl leading-relaxed">
                <Link to={createPageUrl("sonic-strategy")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70">Sonic Strategy</Link> unifies your brand's sound
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl leading-relaxed">
                <Link to={createPageUrl("event-soundtracks")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70">Event Soundtracks</Link> choreograph special moments
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <p className="text-xl leading-relaxed">
                <Link to={createPageUrl("audio-upgrades")} className="font-bold underline decoration-2 underline-offset-4 hover:text-black/70">Audio Upgrades</Link> optimize acoustic quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Your Sound Potential */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-6">Discover Your Sound Potential</h2>
          <p className="text-xl text-black/70 mb-8 max-w-3xl mx-auto">
            Every venue has untapped atmospheric potential. Let's explore how strategic sound can transform your specific space and objectives.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to={createPageUrl("ContactUs")}>
              <AnimatedButton className="w-full sm:w-auto h-14">
                Discover Your Sound Strategy
              </AnimatedButton>
            </Link>
            
            <div className="flex items-center">
              <span className="text-black/60 mr-2">Or</span>
              <Link to={createPageUrl("Services")} className="inline-flex items-center text-black font-bold text-lg group">
                <span className="transition-transform group-hover:translate-x-1 inline-block hover:underline decoration-2 underline-offset-4">explore our services</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}