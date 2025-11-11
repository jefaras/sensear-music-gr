
import React, { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Breadcrumbs from "../components/Breadcrumbs";


export default function ContactUs() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    document.title = "Contact SensEar | Music Curation Consultation";

    const description = "Get in touch with SensEar for bespoke music curation services. Schedule your free consultation to transform your venue's atmosphere.";
    const pageUrl = 'https://sensear.music/contact';
    const imageUrl = 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg'; // Updated hero image

    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add locale and language meta tags
    let localeTag = document.querySelector('meta[property="og:locale"]');
    if (localeTag) {
      localeTag.setAttribute('content', 'en_US');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:locale');
      meta.content = 'en_US';
      document.head.appendChild(meta);
    }

    let languageTag = document.querySelector('meta[http-equiv="content-language"]');
    if (languageTag) {
      languageTag.setAttribute('content', 'en');
    } else {
      const meta = document.createElement('meta');
      meta.setAttribute('http-equiv', 'content-language');
      meta.content = 'en';
      document.head.appendChild(meta);
    }

    document.documentElement.lang = 'en';

    // Add robots meta tag - CONTACT PAGE: index, follow
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
      canonicalLink.setAttribute('href', pageUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = pageUrl;
      document.head.appendChild(canonicalLink);
    }

    // Open Graph tags
    const ogTags = [
    { property: 'og:title', content: 'Contact SensEar | Music Curation Consultation' },
    { property: 'og:description', content: description },
    { property: 'og:image', content: imageUrl },
    { property: 'og:url', content: pageUrl },
    { property: 'og:type', content: 'website' }];


    ogTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', tag.property);
        metaTag.setAttribute('content', tag.content);
      }
      document.head.appendChild(metaTag);
    });

    // Twitter Card tags
    const twitterTags = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact SensEar | Music Curation Consultation' },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: imageUrl }];


    twitterTags.forEach((tag) => {
      let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
      if (metaTag) {
        metaTag.setAttribute('content', tag.content);
      } else {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('name', tag.name);
        metaTag.setAttribute('content', tag.content);
      }
      document.head.appendChild(metaTag);
    });

    // Add structured data
    const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SensEar",
      "image": "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg", // Updated hero image URL
      "url": "https://sensear.music",
      "telephone": "+30-6976994212",
      "email": "hello@sensear.music",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Athens",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 37.9838,
        "longitude": 23.7275
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [
      "https://www.facebook.com/61575909304249/",
      "https://www.instagram.com/sensear.music",
      "https://www.linkedin.com/company/sensear"],

      "priceRange": "$$$",
      "description": "Contact SensEar for bespoke music curation, sonic branding, and audio solutions for luxury hospitality venues."
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
        "name": "Contact",
        "item": "https://sensear.music/contact"
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

    // Add scroll event listener for parallax
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    venue_type: "",
    service_interest: "",
    budget_range: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await base44.entities.Inquiry.create(formData);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        venue_type: "",
        service_interest: "",
        budget_range: "",
        message: ""
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }

    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-[#faebe3]" role="alert" aria-live="polite">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6" aria-hidden="true">
            <CheckCircle className="w-10 h-10 text-black" />
          </div>
          <h2 className="text-3xl font-bold text-black mb-4">
            Thank You!
          </h2>
          <p className="text-lg text-black/70 mb-8">
            We've received your inquiry and will get back to you within 24 hours. While you wait, explore our <Link to={createPageUrl("Blog")} className="underline hover:text-black font-semibold">latest insights</Link> or learn about our <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">music curation services</Link>.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-black hover:bg-black/80 text-white">
            
            Ask Another Question
          </Button>
        </div>
      </div>);

  }

  return (
    <div className="bg-[#faebe3]">
      {/* Hero Section - Similar to Home but smaller heading */}
      <section className="relative pt-24 pb-20 overflow-hidden" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-label="Contact section">
        {/* Text content */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="w-full">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-black mb-6 leading-[1.1]">
              Get in Touch
            </h1>
            
            <div className="mb-8 max-w-4xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black/80 leading-relaxed">We are here to help you create the perfect soundscape for your business or event. Give us a call or send us an email, and we will respond within 24 hours!


              </p>
            </div>
          </div>
        </div>

        {/* Hero Image - Larger with parallax - FIXED FOR MOBILE/TABLET */}
        <div className="w-full px-6">
          <div className="mx-auto" style={{ maxWidth: '1800px' }}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl relative bg-[#faebe3]" style={{ paddingBottom: '40%' }}>
              {/* Mobile/Tablet version - NO parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg 2400w"


                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Contact SensEar for music curation consultation"
                className="absolute w-full h-full object-cover md:hidden" />
              
              {/* Desktop version - WITH parallax */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg"
                srcSet="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg 1800w,
                        https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/23e1cb39d_2021ef69ab7c3df8f2f35f2532f4ec65.jpg 2400w"


                sizes="(max-width: 1800px) 100vw, 1800px"
                alt="Contact SensEar for music curation consultation"
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

      {/* Breadcrumbs - COMMENTED OUT */}
      {/* <div className="max-w-7xl mx-auto px-6 py-4 bg-[#faebe3]">
          <Breadcrumbs items={[
            { label: "Contact", path: createPageUrl("ContactUs") }
          ]} />
         </div> */}

      <section className="py-20 bg-[#faebe3]" aria-labelledby="contact-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="contact-heading" className="sr-only">Contact Information and Inquiry Form</h2>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <aside className="lg:col-span-1 space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-black mb-6">
                  Contact Information
                </h3>
              </div>

              <address className="space-y-6 not-italic">
                <Card className="p-6 border-none" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Phone className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Phone</h4>
                      <p className="text-black/80"><a href="tel:+306976994212">+30 6976994212</a></p>
                      <p className="text-sm text-black/60 mt-1">Mon-Fri, 9am-6pm EET</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Mail className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Email</h4>
                      <p className="text-black/80"><a href="mailto:hello@sensear.music">hello@sensear.music</a></p>
                      <p className="text-sm text-black/60 mt-1">24-hour response time</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-none" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <MapPin className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Location</h4>
                      <p className="text-black/80">Athens, Greece</p>
                      <p className="text-sm text-black/60 mt-1">Serving all Greek islands</p>
                    </div>
                  </div>
                </Card>
              </address>
            </aside>

            {/* Contact Form */}
            <div className="lg:col-span-2 relative">
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 rounded-lg z-10 flex items-center justify-center p-6">
                <div className="text-center">
                  <p className="text-white text-xl sm:text-2xl font-bold mb-2">
                    Form functionality coming soon.
                  </p>
                  <p className="text-white text-lg sm:text-xl">Please use our email or phone number directly.

                  </p>
                </div>
              </div>

              <Card className="p-8 shadow-lg bg-white">
                <h3 className="text-2xl font-bold text-black mb-6">
                  Send Us an Inquiry
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact inquiry form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="border-black/20 focus:bg-white"
                        style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                      
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Email *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="border-black/20 focus:bg-white"
                        style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                      
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Phone Number
                    </label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+30..."
                      className="border-black/20 focus:bg-white"
                      style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                    
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Venue Type *
                      </label>
                      <Select
                        required
                        value={formData.venue_type}
                        onValueChange={(value) => setFormData({ ...formData, venue_type: value })}>
                        
                        <SelectTrigger className="border-black/20 focus:bg-white" style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }}>
                          <SelectValue placeholder="Select venue type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hotel">Hotel</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="bar">Bar</SelectItem>
                          <SelectItem value="wellness">Wellness Center</SelectItem>
                          <SelectItem value="retail">Retail Space</SelectItem>
                          <SelectItem value="private_event">Private Event</SelectItem>
                          <SelectItem value="corporate_event">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-black mb-2">
                        Service Interest *
                      </label>
                      <Select
                        required
                        value={formData.service_interest}
                        onValueChange={(value) => setFormData({ ...formData, service_interest: value })}>
                        
                        <SelectTrigger className="border-black/20 focus:bg-white" style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }}>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="music_curation">Music Curation</SelectItem>
                          <SelectItem value="audio_visual">Audio-Visual Upgrades</SelectItem>
                          <SelectItem value="event_service">Event Services</SelectItem>
                          <SelectItem value="full_package">Full Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Estimated Budget Range
                    </label>
                    <Input
                      value={formData.budget_range}
                      onChange={(e) => setFormData({ ...formData, budget_range: e.target.value })}
                      placeholder="e.g., €5,000 - €10,000"
                      className="border-black/20 focus:bg-white"
                      style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                    
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="border-black/20 focus:bg-white"
                      style={{ backgroundColor: 'rgba(240, 223, 213, 0.5)' }} />
                    
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black hover:bg-black/80 text-white font-semibold py-6 text-lg"
                    aria-label={isSubmitting ? "Sending your message" : "Send message"}>
                    
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-black/70 mb-12">
            Find answers to common questions about our <Link to={createPageUrl("Services")} className="underline hover:text-black font-semibold">music curation services</Link>. For more detailed information, visit our <Link to={createPageUrl("FAQ")} className="underline hover:text-black font-semibold">complete FAQ page</Link>.
          </p>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-0" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                What is the difference between background music and bespoke curation?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Background Music offers pre-curated, automated playlists for a seamless ambiance, ideal for general business needs. Bespoke Curation is a fully customized music strategy, crafted to reflect a brand's identity and create a unique, immersive experience. It is ideal for luxury venues, boutique spaces, and businesses seeking a signature sound experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                How long does it take to create a custom playlist?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                It varies. For a single venue with a clear music profile, it may take just a few days. For larger or multi-location clients, it can take a week or more to finalize the whole process.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do I need special equipment for playing your music playlists?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Basic sound systems work just fine, but if you want specialized audio-visual solutions, we can provide design, purchase, and installation services. For more info see our AV Design & Integration section.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                Do you offer support after setup?
              </AccordionTrigger>
              <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                Yes. We are available for ongoing support, updates, and any adjustments you need along the way. Just send us a message and we will talk about it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-12">
            <Link to={createPageUrl("FAQ")}>
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white group">
                Browse FAQs First
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>);

}