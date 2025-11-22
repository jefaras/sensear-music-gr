1: import React, { useEffect, useState } from "react";
   2: import { Link } from "react-router-dom";
   3: import { createPageUrl } from "@/utils";
   4: import { Button } from "@/components/ui/button";
   5: import { ArrowRight, CheckCircle, Music, Sparkles, SlidersHorizontal, BarChart } from "lucide-react";
   6: import { Card } from "@/components/ui/card";
   7: import { Badge } from "@/components/ui/badge";
   8: 
   9: export default function HomeTest() {
  10:   const [scrollY, setScrollY] = useState(0);
  11: 
  12:   useEffect(() => {
  13:     document.title = "SensEar - Bespoke Music Curation & Sonic Branding";
  14: 
  15:     const metaDescription = document.querySelector('meta[name="description"]');
  16:     const description = "Bespoke music curation and sonic branding for hotels, restaurants, and events. Elevate your atmosphere with custom playlists. Book your free consultation.";
  17:     if (metaDescription) {
  18:       metaDescription.setAttribute('content', description);
  19:     } else {
  20:       const meta = document.createElement('meta');
  21:       meta.name = 'description';
  22:       meta.content = description;
  23:       document.head.appendChild(meta);
  24:     }
  25: 
  26:     let localeTag = document.querySelector('meta[property="og:locale"]');
  27:     if (localeTag) {
  28:       localeTag.setAttribute('content', 'en_US');
  29:     } else {
  30:       const meta = document.createElement('meta');
  31:       meta.setAttribute('property', 'og:locale');
  32:       meta.content = 'en_US';
  33:       document.head.appendChild(meta);
  34:     }
  35: 
  36:     let languageTag = document.querySelector('meta[http-equiv="content-language"]');
  37:     if (languageTag) {
  38:       languageTag.setAttribute('content', 'en');
  39:     } else {
  40:       const meta = document.createElement('meta');
  41:       meta.setAttribute('http-equiv', 'content-language');
  42:       meta.content = 'en';
  43:       document.head.appendChild(meta);
  44:     }
  45: 
  46:     document.documentElement.lang = 'en';
  47: 
  48:     let robotsMeta = document.querySelector('meta[name="robots"]');
  49:     if (robotsMeta) {
  50:       robotsMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  51:     } else {
  52:       robotsMeta = document.createElement('meta');
  53:       robotsMeta.name = 'robots';
  54:       robotsMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  55:       document.head.appendChild(robotsMeta);
  56:     }
  57: 
  58:     let googlebotMeta = document.querySelector('meta[name="googlebot"]');
  59:     if (googlebotMeta) {
  60:       googlebotMeta.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  61:     } else {
  62:       googlebotMeta = document.createElement('meta');
  63:       googlebotMeta.name = 'googlebot';
  64:       googlebotMeta.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
  65:       document.head.appendChild(googlebotMeta);
  66:     }
  67: 
  68:     let canonicalLink = document.querySelector('link[rel="canonical"]');
  69:     if (canonicalLink) {
  70:       canonicalLink.setAttribute('href', 'https://sensear.music/');
  71:     } else {
  72:       canonicalLink = document.createElement('link');
  73:       canonicalLink.rel = 'canonical';
  74:       canonicalLink.href = 'https://sensear.music/';
  75:       document.head.appendChild(canonicalLink);
  76:     }
  77: 
  78:     const ogTags = [
  79:     { property: 'og:title', content: 'SensEar - Bespoke Music Curation & Sonic Branding' },
  80:     { property: 'og:description', content: description },
  81:     { property: 'og:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg' },
  82:     { property: 'og:url', content: 'https://sensear.music/' },
  83:     { property: 'og:type', content: 'website' }];
  84: 
  85: 
  86:     ogTags.forEach((tag) => {
  87:       let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
  88:       if (metaTag) {
  89:         metaTag.setAttribute('content', tag.content);
  90:       } else {
  91:         metaTag = document.createElement('meta');
  92:         metaTag.setAttribute('property', tag.property);
  93:         metaTag.setAttribute('content', tag.content);
  94:         document.head.appendChild(metaTag);
  95:       }
  96:     });
  97: 
  98:     const twitterTags = [
  99:     { name: 'twitter:card', content: 'summary_large_image' },
 100:     { name: 'twitter:title', content: 'SensEar - Bespoke Music Curation & Sonic Branding' },
 101:     { name: 'twitter:description', content: description },
 102:     { name: 'twitter:image', content: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg' }];
 103: 
 104: 
 105:     twitterTags.forEach((tag) => {
 106:       let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
 107:       if (metaTag) {
 108:         metaTag.setAttribute('content', tag.content);
 109:       } else {
 110:         metaTag = document.createElement('meta');
 111:         metaTag.setAttribute('name', tag.name);
 112:         metaTag.setAttribute('content', tag.content);
 113:         document.head.appendChild(metaTag);
 114:       }
 115:     });
 116: 
 117:     const structuredData = [
 118:     {
 119:       "@context": "https://schema.org",
 120:       "@type": "Organization",
 121:       "name": "SensEar",
 122:       "alternateName": "SensEar Music Curation",
 123:       "url": "https://sensear.music",
 124:       "logo": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg",
 125:       "description": "Bespoke music curation and sonic branding for hotels, restaurants, and events.",
 126:       "address": {
 127:         "@type": "PostalAddress",
 128:         "addressLocality": "Athens",
 129:         "addressCountry": "GR"
 130:       },
 131:       "contactPoint": {
 132:         "@type": "ContactPoint",
 133:         "telephone": "+30-6976994212",
 134:         "email": "hello@sensear.music",
 135:         "contactType": "Customer Service"
 136:       },
 137:       "sameAs": [
 138:       "https://www.facebook.com/61575909304249/",
 139:       "https://www.instagram.com/sensear.music",
 140:       "https://www.linkedin.com/company/sensear"]
 141: 
 142:     },
 143:     {
 144:       "@context": "https://schema.org",
 145:       "@type": "BreadcrumbList",
 146:       "itemListElement": [
 147:       {
 148:         "@type": "ListItem",
 149:         "position": 1,
 150:         "name": "Home",
 151:         "item": "https://sensear.music/"
 152:       }]
 153: 
 154:     }];
 155: 
 156: 
 157:     let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
 158:     if (structuredDataScript) {
 159:       structuredDataScript.textContent = JSON.stringify(structuredData);
 160:     } else {
 161:       structuredDataScript = document.createElement('script');
 162:       structuredDataScript.type = 'application/ld+json';
 163:       structuredDataScript.textContent = JSON.stringify(structuredData);
 164:       document.head.appendChild(structuredDataScript);
 165:     }
 166: 
 167:     const handleScroll = () => setScrollY(window.scrollY);
 168:     window.addEventListener("scroll", handleScroll);
 169:     return () => window.removeEventListener("scroll", handleScroll);
 170:   }, []);
 171: 
 172:   return (
 173:     <div className="bg-[#faebe3]">
 174:       <style>{`
 175:         @keyframes scroll-left {
 176:           0% {
 177:             transform: translateX(0);
 178:           }
 179:           100% {
 180:             transform: translateX(-50%);
 181:           }
 182:         }
 183:         
 184:         .animate-scroll {
 185:           animation: scroll-left 30s linear infinite;
 186:           white-space: nowrap;
 187:           width: fit-content;
 188:         }
 189:         
 190:         .animate-scroll:hover {
 191:           animation-play-state: paused;
 192:         }
 193:         
 194:         @keyframes slideUp {
 195:           from {
 196:             opacity: 0;
 197:             transform: translateY(40px);
 198:           }
 199:           to {
 200:             opacity: 1;
 201:             transform: translateY(0);
 202:           }
 203:         }
 204:         
 205:         .slide-up-1 {
 206:           animation: slideUp 0.8s ease-out forwards;
 207:           opacity: 0;
 208:         }
 209:         
 210:         .slide-up-2 {
 211:           animation: slideUp 0.8s ease-out 0.2s forwards;
 212:           opacity: 0;
 213:         }
 214:         
 215:         .slide-up-3 {
 216:           animation: slideUp 0.8s ease-out 0.4s forwards;
 217:           opacity: 0;
 218:         }
 219:         
 220:         .slide-up-4 {
 221:           animation: slideUp 0.8s ease-out 0.6s forwards;
 222:           opacity: 0;
 223:         }
 224:       `}</style>
 225: 
 226:       {/* Hero Section */}
 227:       <section className="relative pt-32 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Hero section">
 228:         <div className="max-w-7xl mx-auto px-6">
 229:           <div className="w-full">
 230:             <h1 className="text-[2.7rem] sm:text-[3.6rem] md:text-[4.5rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] slide-up-1">
 231:               Music Curation<br />
 232:               for Unique Experiences
 233:             </h1>
 234:             
 235:             <div className="mb-8 max-w-5xl slide-up-2">
 236:               <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">
 237:                 Every venue has a story. Let music tell yours. <br />
 238:                 We craft bespoke Playlists for Hotels, Restaurants, Bars & Events that create atmosphere, emotional connections & loyal guests.
 239:               </p>
 240:             </div>
 241:             
 242:             <div className="flex flex-col sm:flex-row gap-4 mb-12 slide-up-3">
 243:               {/* Discover Your Sound button - COMMENTED OUT */}
 244:               {/* <Link to={createPageUrl("ContactUs")}>
 245:                 <Button className="bg-black hover:bg-black/80 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto h-14" aria-label="Discover Your Sound">
 246:                   Discover Your Sound
 247:                 </Button>
 248:               </Link> */}
 249:               <Link to={createPageUrl("Services")}>
 250:                 <Button variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 w-full sm:w-auto h-14" aria-label="Explore our services">
 251:                   Explore our services
 252:                 </Button>
 253:               </Link>
 254:             </div>
 255:           </div>
 256:         </div>
 257: 
 258:         <div className="w-full px-6 slide-up-4">
 259:           <div className="mx-auto" style={{ maxWidth: '1800px' }}>
 260:             <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
 261:               <img
 262:                 src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a8ab619d_home_page_header_img1.png"
 263:                 srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a8ab619d_home_page_header_img1.png 1800w,
 264:                         https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a8ab619d_home_page_header_img1.png 2400w"
 265:                 sizes="(max-width: 1800px) 100vw, 1800px"
 266:                 alt="Luxury rooftop bar with stunning sunset views and ambient music atmosphere"
 267:                 className="absolute w-full h-full object-cover"
 268:                 style={{
 269:                   top: '-15%',
 270:                   height: '130%',
 271:                   transform: `translateY(${scrollY * 0.15}px)`,
 272:                   transformOrigin: 'center top'
 273:                 }} />
 274: 
 275:             </div>
 276:           </div>
 277:         </div>
 278:       </section>
 279: 
 280:       {/* Intro Section */}
 281:       <section className="bg-black py-20">
 282:         <div className="max-w-7xl mx-auto px-6">
 283:           <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
 284:             <div className="lg:order-2 lg:min-w-[280px]">
 285:               <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-white leading-tight mb-8 lg:mb-0">
 286:                 How we create<br />your sonic ID
 287:               </h2>
 288:             </div>
 289:             
 290:             <div className="lg:order-1 lg:mt-[200px]">
 291:               <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
 292:                 We provide all the music solutions that will elevate your space or event & leave a lasting impression.
 293:               </p>
 294:               <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed">
 295:                 <span>Explore our </span><Link to={createPageUrl("Services")} className="underline hover:text-white font-semibold">full range of music curation services</Link><span>.</span>
 296:               </p>
 297:             </div>
 298:           </div>
 299:         </div>
 300:       </section>
 301: 
 302:       {/* Services Section */}
 303:       <section className="py-24 bg-white" aria-labelledby="services-heading">
 304:         <div className="mx-auto px-6" style={{ maxWidth: '1800px' }}>
 305:           <h2 id="services-heading" className="sr-only">Our Services</h2>
 306: 
 307:           {/* First Row: Signature Playlists - FULL WIDTH */}
 308:           <div className="mb-8" role="list">
 309:             <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
 310:               <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
 311:                 {/* Left: Text Content */}
 312:                 <div className="lg:order-1">
 313:                   <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
 314:                     Signature Playlists
 315:                   </h3>
 316:                   
 317:                   <div className="lg:mt-[280px]">
 318:                     <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-6">
 319:                       Bespoke, brand-exclusive playlists sourced from rare archives for venues that refuse to sound generic.
 320:                     </p>
 321:                     <Link to={createPageUrl("signature-playlists")} className="inline-flex items-center text-black font-medium text-xl group">
 322:                       <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Create Your Sound Identity</span>
 323:                       <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
 324:                     </Link>
 325:                   </div>
 326:                 </div>
 327: 
 328:                 {/* Right: Image */}
 329:                 <div className="lg:order-2 hidden lg:block lg:mt-[140px]">
 330:                   <img
 331:                     src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ee4f6e2db_SIGNATUREcropped.jpg"
 332:                     alt="Bespoke music curation and playlist creation"
 333:                     className="w-full h-auto rounded-2xl shadow-lg"
 334:                   />
 335:                 </div>
 336:               </div>
 337:             </article>
 338:           </div>
 339: 
 340:           {/* Second Row: Event Soundtracks - FULL WIDTH */}
 341:           <div className="mb-8" role="list">
 342:             <article role="listitem" className="p-8 rounded-lg" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
 343:               <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
 344:                 {/* Left: Image */}
 345:                 <div className="lg:order-1 hidden lg:block lg:mt-[140px]">
 346:                   <img
 347:                     src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d4a085ed9_EventSoundtracks-upsc2-cropped.jpg"
 348:                     alt="Professional event production with music curation"
 349:                     className="w-full h-auto rounded-2xl shadow-lg"
 350:                   />
 351:                 </div>
 352: 
 353:                 {/* Right: Text Content */}
 354:                 <div className="lg:order-2">
 355:                   <h3 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black leading-tight mb-8">
 356:                     Event Soundtracks
 357:                   </h3>
 358: 
 359:                   <div className="lg:mt-[280px]">
 360:                     <p className="text-2xl md:text-3xl lg:text-4xl text-black leading-relaxed mb-6">
 361:                       Artfully selected and curated soundtracks & live DJ sets that elevate events into engaging, unforgettable moments.
 362:                     </p>
 363:                     <Link to={createPageUrl("event-soundtracks")} className="inline-flex items-center text-black font-medium text-xl group">
 364:                       <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Design Your Event Atmosphere</span>
 365:                       <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
 366:                     </Link>
 367:                   </div>
 368:                 </div>
 369:               </div>
 370:             </article>
 371:           </div>
 372: 
 373:           {/* Third Row: Sonic Strategy & Audio Upgrades - Split Row */}
 374:           <div className="grid lg:grid-cols-2 gap-8 mb-8" role="list">
 375:             {/* Sonic Strategy */}
 376:             <article role="listitem" className="bg-[#faebe3] p-8 rounded-lg h-full">
 377:               <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
 378:                 Sonic Strategy
 379:               </h3>
 380:               
 381:               <div className="grid md:grid-cols-2 gap-6 items-center">
 382:                 <div className="flex flex-col justify-between">
 383:                   <p className="text-xl md:text-2xl text-black leading-relaxed mb-6">
 384:                     Ultra-specialized music consultancy & sound branding guidelines that forge an inimitable sonic identity.
 385:                   </p>
 386:                   <Link to={createPageUrl("sonic-strategy")} className="inline-flex items-center text-black font-medium text-lg group">
 387:                     <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Build Your Sound Strategy</span>
 388:                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
 389:                   </Link>
 390:                 </div>
 391: 
 392:                 <div className="w-full">
 393:                   <img
 394:                     src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/d2c616905_fd3f4ff86f1dfed345baa64ee2908eda.jpg"
 395:                     alt="Strategic sonic branding consultation"
 396:                     className="w-full h-auto rounded-xl shadow-md"
 397:                   />
 398:                 </div>
 399:               </div>
 400:             </article>
 401: 
 402:             {/* Audio Upgrades */}
 403:             <article role="listitem" className="bg-[#faebe3] p-8 rounded-lg h-full">
 404:               <h3 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-6">
 405:                 Audio Upgrades
 406:               </h3>
 407: 
 408:               <div className="grid md:grid-cols-2 gap-6 items-center">
 409:                 <div className="flex flex-col justify-between">
 410:                   <p className="text-xl md:text-2xl text-black leading-relaxed mb-6">
 411:                     Professional on-site sound checks, optimization and audio calibration, that fix any sound related issue.
 412:                   </p>
 413:                   <Link to={createPageUrl("audio-upgrades")} className="inline-flex items-center text-black font-medium text-lg group">
 414:                     <span className="group-hover:translate-x-1 group-hover:underline transition-transform inline-block decoration-1 underline-offset-4">Optimize Your Sound System</span>
 415:                     <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
 416:                   </Link>
 417:                 </div>
 418: 
 419:                 <div className="w-full">
 420:                   <img
 421:                     src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/bbe747c8e_57b86e08a_b6e0a3f63_tech_hifi_1979_07-pxbee-cropped2.jpg"
 422:                     alt="Professional audio equipment optimization"
 423:                     className="w-full h-auto rounded-xl shadow-md"
 424:                   />
 425:                 </div>
 426:               </div>
 427:             </article>
 428:           </div>
 429:         </div>
 430:       </section>
 431: 
 432:       {/* How We Help You Succeed Section - WITH IMAGE ON RIGHT */}
 433:       <section className="py-24" style={{ backgroundImage: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 15%), url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="benefits-heading">
 434:         <div className="max-w-7xl mx-auto px-6">
 435:           <h2 id="benefits-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-left mb-12 leading-tight text-black">
 436:             How We Help You Succeed
 437:           </h2>
 438:           
 439:           <div className="grid lg:grid-cols-2 gap-12 items-center">
 440:             {/* Left: Benefits List */}
 441:             <div className="space-y-8" role="list">
 442:               <article role="listitem">
 443:                 <h3 className="text-2xl font-bold text-black mb-3">Delight Your Guests</h3>
 444:                 <p className="text-lg text-black/70">
 445:                   Increase satisfaction and encourage longer & repeat visits.
 446:                 </p>
 447:               </article>
 448: 
 449:               <article role="listitem">
 450:                 <h3 className="text-2xl font-bold text-black mb-3">Elevate Your Brand</h3>
 451:                 <p className="text-lg text-black/70">
 452:                   Strengthen perception and loyalty with a memorable atmosphere.
 453:                 </p>
 454:               </article>
 455: 
 456:               <article role="listitem">
 457:                 <h3 className="text-2xl font-bold text-black mb-3">Empower Your Team</h3>
 458:                 <p className="text-lg text-black/70">
 459:                   Boost staff morale & productivity with energizing music.
 460:                 </p>
 461:               </article>
 462: 
 463:               <article role="listitem">
 464:                 <h3 className="text-2xl font-bold text-black mb-3">Total Control</h3>
 465:                 <p className="text-lg text-black/70">
 466:                   Take full control over your venue's music style & flow.
 467:                 </p>
 468:               </article>
 469: 
 470:               <article role="listitem">
 471:                 <h3 className="text-2xl font-bold text-black mb-3">Seamless Experience</h3>
 472:                 <p className="text-lg text-black/70">
 473:                   Ensure a smooth music experience across every area of your venue.
 474:                 </p>
 475:               </article>
 476:             </div>
 477: 
 478:             {/* Right: Car Image */}
 479:             <div className="hidden lg:block">
 480:               <img
 481:                 src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/03aebeb4e_car-1.png"
 482:                 alt="SensEar branded car with logo stickers"
 483:                 className="w-full h-auto rounded-2xl shadow-lg" />
 484: 
 485:             </div>
 486:           </div>
 487: 
 488:           <div className="text-center mt-16">
 489:             <Link to={createPageUrl("CaseStudies")}>
 490:               <Button size="lg" className="bg-black text-white px-8 py-6 text-lg font-medium hover:bg-black/80" aria-label="See how we helped others">
 491:                 See How We Helped Others
 492:               </Button>
 493:             </Link>
 494:           </div>
 495:         </div>
 496:       </section>
 497: 
 498:       {/* Trusted By Section */}
 499:       <section className="py-20 bg-black overflow-hidden" aria-labelledby="clients-heading">
 500:         <div className="max-w-7xl mx-auto px-6">
 501:           <h2 id="clients-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-6 text-white leading-tight">Now playing in venues across Greece</h2>
 502:           <p className="text-xl text-white/70 text-center max-w-4xl mx-auto mb-12">
 503:             Trusted by venues like Pelicanos, Yam and The Rooster in Athens and the Aegean.
 504:           </p>
 505:           
 506:           <div className="relative">
 507:             <div className="flex gap-12 animate-scroll">
 508:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 509:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 510:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo" className="max-w-full max-h-full object-contain" />
 511:                 </div>
 512:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
 513:                 <p className="text-sm text-white/60 mt-1">Athens</p>
 514:               </div>
 515:               
 516:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 517:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 518:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo" className="max-w-full max-h-full object-contain" />
 519:                 </div>
 520:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
 521:                 <p className="text-sm text-white/60 mt-1">Athens-Serifos</p>
 522:               </div>
 523:               
 524:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 525:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 526:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/84145d1c2_The-Rooster_final.jpg" alt="The Rooster logo" className="max-w-full max-h-full object-contain" />
 527:                 </div>
 528:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">The Rooster</p>
 529:                 <p className="text-sm text-white/60 mt-1">Antiparos</p>
 530:               </div>
 531:               
 532:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 533:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 534:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo" className="max-w-full max-h-full object-contain" />
 535:                 </div>
 536:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
 537:                 <p className="text-sm text-white/60 mt-1">Antiparos</p>
 538:               </div>
 539:               
 540:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 541:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 542:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo" className="max-w-full max-h-full object-contain" />
 543:                 </div>
 544:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
 545:                 <p className="text-sm text-white/60 mt-1">Sifnos</p>
 546:               </div>
 547:               
 548:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 549:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 550:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo" className="max-w-full max-h-full object-contain" />
 551:                 </div>
 552:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
 553:                 <p className="text-sm text-white/60 mt-1">Antiparos</p>
 554:               </div>
 555:               
 556:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 557:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 558:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/b8c4f5bc6_Klouvi-Bar_final.jpg" alt="Klouvi Bar logo" className="max-w-full max-h-full object-contain" />
 559:                 </div>
 560:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Klouvi Bar</p>
 561:                 <p className="text-sm text-white/60 mt-1">Athens</p>
 562:               </div>
 563:               
 564:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 565:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 566:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17f736607_Blue-Bamboo_final.jpg" alt="Blue Bamboo logo" className="max-w-full max-h-full object-contain" />
 567:                 </div>
 568:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Blue Bamboo</p>
 569:                 <p className="text-sm text-white/60 mt-1">Athens-Serifos</p>
 570:               </div>
 571:               
 572:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 573:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 574:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/84145d1c2_The-Rooster_final.jpg" alt="The Rooster logo" className="max-w-full max-h-full object-contain" />
 575:                 </div>
 576:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">The Rooster</p>
 577:                 <p className="text-sm text-white/60 mt-1">Antiparos</p>
 578:               </div>
 579:               
 580:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 581:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 582:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/730cfd91d_Beach-House_final.jpg" alt="Beach House logo" className="max-w-full max-h-full object-contain" />
 583:                 </div>
 584:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Beach House</p>
 585:                 <p className="text-sm text-white/60 mt-1">Antiparos</p>
 586:               </div>
 587:               
 588:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 589:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 590:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/fc48e3d65_Pelicanos_final.jpg" alt="Pelicanos logo" className="max-w-full max-h-full object-contain" />
 591:                 </div>
 592:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Pelicanos</p>
 593:                 <p className="text-sm text-white/60 mt-1">Sifnos</p>
 594:               </div>
 595:               
 596:               <div className="flex-shrink-0 text-center" style={{ width: '180px' }}>
 597:                 <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center bg-white rounded-lg p-3 border-4 border-white shadow-md">
 598:                   <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/65422bc1d_fav.png" alt="Yam logo" className="max-w-full max-h-full object-contain" />
 599:                 </div>
 600:                 <p className="text-lg font-semibold text-white/90 tracking-widest uppercase">Yam</p>
 601:                 <p className="text-sm text-white/60 mt-1">Antiparos</p>
 602:               </div>
 603:             </div>
 604:           </div>
 605:         </div>
 606:       </section>
 607: 
 608:       {/* Blog Highlights Section - WHITE BACKGROUND */}
 609:       <section className="py-24 bg-white" aria-labelledby="blog-heading">
 610:         <div className="max-w-7xl mx-auto px-6">
 611:           <div className="text-center mb-12">
 612:             <h2 id="blog-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 leading-tight">The Curation Journal</h2>
 613:             <p className="text-xl text-black/70 max-w-3xl mx-auto">
 614:               <span>Read how music shapes perception, emotion, and brand identity through sound. Discover more insights on our </span><Link to={createPageUrl("Blog")} className="underline hover:text-black font-semibold">blog</Link><span>.</span>
 615:             </p>
 616:           </div>
 617: 
 618:           <div className="grid md:grid-cols-3 gap-8" role="list">
 619:             <article role="listitem">
 620:               <Link to={createPageUrl("three-reasons-make-music-hospitality")} className="block">
 621:                 <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
 622:                   <div className="relative aspect-[4/3] overflow-hidden">
 623:                     <img
 624:                       src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/9619c7d50_e56c8a322bf8043723ba7e215cf5e636.jpg"
 625:                       alt="Luxury hotel interior"
 626:                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
 627: 
 628:                   </div>
 629:                   <div className="p-6">
 630:                     <Badge className="mb-3 bg-black/5 text-black border-black/10">Insights</Badge>
 631:                     <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
 632:                       Three Reasons to Make Music Part of Your Luxury Hospitality Marketing Strategy
 633:                     </h3>
 634:                     <p className="text-black/70 mb-4 leading-relaxed">
 635:                       Curated music is a practical way to shape how guests feel, what they remember, and how they spend.
 636:                     </p>
 637:                     <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
 638:                       <span>Read More</span>
 639:                       <ArrowRight className="ml-2 w-4 h-4" />
 640:                     </div>
 641:                   </div>
 642:                 </Card>
 643:               </Link>
 644:             </article>
 645: 
 646:             <article role="listitem">
 647:               <Link to={createPageUrl("brand-music-converts-browsers-buyers")} className="block">
 648:                 <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
 649:                   <div className="relative aspect-[4/3] overflow-hidden">
 650:                     <img
 651:                       src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/ef99620ec_3dcbb42176ccd5762fc415dc0d74dd2d.jpg"
 652:                       alt="Restaurant ambiance"
 653:                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
 654: 
 655:                   </div>
 656:                   <div className="p-6">
 657:                     <Badge className="mb-3 bg-black/5 text-black border-black/10">Research</Badge>
 658:                     <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
 659:                       How Brand-Fit Music Converts Browsers into Buyers
 660:                     </h3>
 661:                     <p className="text-black/70 mb-4 leading-relaxed">
 662:                       Evidence-based research showing how brand-aligned music increases sales by 9.1% in hospitality venues.
 663:                     </p>
 664:                     <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
 665:                       <span>Read More</span>
 666:                       <ArrowRight className="ml-2 w-4 h-4" />
 667:                     </div>
 668:                   </div>
 669:                 </Card>
 670:               </Link>
 671:             </article>
 672: 
 673:             <article role="listitem">
 674:               <Link to={createPageUrl("what-exactly-does-music-curator-do")} className="block">
 675:                 <Card className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer bg-white">
 676:                   <div className="relative aspect-[4/3] overflow-hidden">
 677:                     <img
 678:                       src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/254c849b4_Screenshot2025-05-06at52431PM.png"
 679:                       alt="Professional music curator"
 680:                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
 681: 
 682:                   </div>
 683:                   <div className="p-6">
 684:                     <Badge className="mb-3 bg-black/5 text-black border-black/10">Education</Badge>
 685:                     <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors">
 686:                       What Exactly Does a Music Curator Do?
 687:                     </h3>
 688:                     <p className="text-black/70 mb-4 leading-relaxed">
 689:                       Learn how professional music curators architect brand soundtracks through strategic curation and data-driven sonic branding.
 690:                     </p>
 691:                     <div className="inline-flex items-center text-black font-medium group-hover:translate-x-2 transition-transform">
 692:                       <span>Read More</span>
 693:                       <ArrowRight className="ml-2 w-4 h-4" />
 694:                     </div>
 695:                   </div>
 696:                 </Card>
 697:               </Link>
 698:             </article>
 699:           </div>
 700: 
 701:           <div className="text-center mt-12">
 702:             <Link to={createPageUrl("Blog")}>
 703:               <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white group">
 704:                 Read All Articles
 705:                 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
 706:               </Button>
 707:             </Link>
 708:           </div>
 709:         </div>
 710:       </section>
 711:     </div>
 712:   );
 713: }