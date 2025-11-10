
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown, Facebook, Instagram, ChevronUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ScrollToTop from "./components/ScrollToTop";

export default function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState(null);
  const [isScrolled, setIsScrolled] = React.useState(false); // Added isScrolled state
  const [selectedLanguage, setSelectedLanguage] = React.useState('EN'); // Track selected language
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = React.useState(false); // State for language dropdown

  // Track scroll position for navigation height
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: createPageUrl("Home") },
    {
      name: "Services",
      path: createPageUrl("Services"),
      subItems: [
        { name: "Signature Playlists", path: createPageUrl("signature-playlists") },
        { name: "Event Soundtracks", path: createPageUrl("event-soundtracks") }, // Updated from "Events Soundtrack"
        { name: "Sonic Strategy", path: createPageUrl("sonic-strategy") },
        { name: "Audio Upgrades", path: createPageUrl("audio-upgrades") } // Updated from "Audio Experience Upgrade"
      ]
    },
    {
      name: "Industries",
      path: createPageUrl("Industries"),
      subItems: [
        { name: "Hotels & Resorts", path: createPageUrl("hotels-resorts") },
        { name: "Restaurants & Bars", path: createPageUrl("restaurants-bars") },
        { name: "Retail Stores", path: createPageUrl("retail-stores") },
        { name: "Wellness Centers", path: createPageUrl("wellness-centers") },
        { name: "Events & Experiences", path: createPageUrl("events-experiences") },
        { name: "Art, Museums & Fashion", path: createPageUrl("art-museums-fashion") },
        { name: "Playlists Demos", path: createPageUrl("PlaylistsDemos") }
      ]
    },
    {
      name: "Case Studies",
      path: createPageUrl("CaseStudies"),
      subItems: [
        { name: "Blue Bamboo", path: createPageUrl("blue-bamboo") },
        { name: "Klouvi", path: createPageUrl("klouvi-bar") },
        { name: "Beach House", path: createPageUrl("beach-house-antiparos") },
        { name: "Pelicanos", path: createPageUrl("pelicanos-sifnos-restaurant") }
      ]
    },
    { name: "About", path: createPageUrl("AboutUs") },
    { name: "Contact", path: createPageUrl("ContactUs") },
    { name: "Blog", path: createPageUrl("Blog") }
  ];

  const languages = [
    {
      code: 'EN',
      name: 'English',
      flag: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/0fe5b1241_flag-united-kingdom_1f1ec-1f1e7.png'
    },
    {
      code: 'EL',
      name: 'Ελληνικά',
      flag: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/6ab43f54e_flag-greece_1f1ec-1f1f7.png'
    }
  ];

  const handleLanguageChange = (languageCode) => {
    setSelectedLanguage(languageCode);
    setOpenDropdown(null);
    // TODO: Implement actual language switching functionality
    console.log('Language changed to:', languageCode);
  };

  const footerNavItems = {
    services: [
      { name: "Signature Playlists", path: createPageUrl("signature-playlists") },
      { name: "Event Soundtracks", path: createPageUrl("event-soundtracks") }, // Updated from "Events Soundtrack"
      { name: "Sonic Strategy", path: createPageUrl("sonic-strategy") },
      { name: "Audio Upgrades", path: createPageUrl("audio-upgrades") } // Updated from "Audio Experience Upgrade"
    ],
    industries: [
      { name: "Hotels & Resorts", path: createPageUrl("hotels-resorts") },
      { name: "Restaurants & Bars", path: createPageUrl("restaurants-bars") },
      { name: "Retail Stores", path: createPageUrl("retail-stores") },
      { name: "Wellness Centers", path: createPageUrl("wellness-centers") },
      { name: "Events & Experiences", path: createPageUrl("events-experiences") },
      { name: "Art, Museums & Fashion", path: createPageUrl("art-museums-fashion") }
    ],
    caseStudies: [
      { name: "Blue Bamboo", path: createPageUrl("blue-bamboo") },
      { name: "Klouvi", path: createPageUrl("klouvi-bar") },
      { name: "Beach House", path: createPageUrl("beach-house-antiparos") },
      { name: "Pelicanos", path: createPageUrl("pelicanos-sifnos-restaurant") }
    ],
    company: [
      { name: "About", path: createPageUrl("AboutUs") },
      { name: "Contact", path: createPageUrl("ContactUs") },
      { name: "Blog", path: createPageUrl("Blog") },
      { name: "FAQ", path: createPageUrl("FAQ") },
      { name: "Sitemap", path: createPageUrl("Sitemap") }
    ]
  };

  // Function to generate social markup and JSON-LD schema
  const generateSocialMarkup = () => {
    const currentPageUrl = window.location.href;
    const description = "Enhance experiences through curated music and sonic branding. Discover how SensEar elevates brands."; // Default description
    const imageUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg"; // Default image

    // Update title based on route
    if (location.pathname === createPageUrl("sonic-strategy")) {
      document.title = "Sonic Strategy | SensEar";
    } else if (location.pathname === createPageUrl("signature-playlists")) {
      document.title = "Signature Playlists | SensEar";
    } else if (location.pathname === createPageUrl("event-soundtracks")) { // Renamed path
      document.title = "Event Soundtracks | SensEar"; // Updated title to match new name
    } else if (location.pathname === createPageUrl("audio-upgrades")) { // Renamed path
      document.title = "Audio Upgrades | SensEar"; // Updated title to match new name
    } else if (location.pathname === createPageUrl("hotels-resorts")) {
      document.title = "Hotels & Resorts | SensEar";
    } else if (location.pathname === createPageUrl("restaurants-bars")) {
      document.title = "Restaurants & Bars | SensEar";
    } else if (location.pathname === createPageUrl("retail-stores")) {
      document.title = "Retail Stores | SensEar";
    } else if (location.pathname === createPageUrl("wellness-centers")) {
      document.title = "Wellness Centers | SensEar";
    } else if (location.pathname === createPageUrl("events-experiences")) { // Updated path and title
      document.title = "Events & Experiences | SensEar"; // Updated title
    } else if (location.pathname === createPageUrl("art-museums-fashion")) { // New path and title
      document.title = "Art, Museums & Fashion | SensEar"; // New title
    } else if (location.pathname === createPageUrl("PlaylistsDemos")) {
      document.title = "Playlists & Demos | SensEar"; // Added title for Playlists Demos
    } else if (location.pathname === createPageUrl("blue-bamboo")) {
      document.title = "Blue Bamboo Case Study | SensEar";
    } else if (location.pathname === createPageUrl("klouvi-bar")) {
      document.title = "Klouvi Bar Case Study | SensEar";
    } else if (location.pathname === createPageUrl("beach-house-antiparos")) {
      document.title = "Beach House Antiparos Case Study | SensEar";
    } else if (location.pathname === createPageUrl("pelicanos-sifnos-restaurant")) {
      document.title = "Pelicanos Restaurant Case Study | SensEar";
    } else if (location.pathname === createPageUrl("AboutUs")) {
      document.title = "About Us | SensEar";
    } else if (location.pathname === createPageUrl("ContactUs")) {
      document.title = "Contact Us | SensEar";
    } else if (location.pathname === createPageUrl("Blog")) {
      document.title = "Blog | SensEar";
    } else {
      document.title = "SensEar - Soundtracking Unique Experiences"; // Default
    }

    const localBusinessSchema = {
      "@context": "http://schema.org",
      "@type": "LocalBusiness",
      "name": "SensEar",
      "image": imageUrl,
      "url": "https://www.sensear.music", // Assuming this is the main domain
      "telephone": "+306976994212",
      "email": "hello@sensear.music",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Athens",
        "addressCountry": "GR"
      },
      "sameAs": [
        "https://www.facebook.com/61575909304249/",
        "https://www.instagram.com/sensear.music"
      ],
      "description": "SensEar specializes in sonic branding and curated music experiences for businesses in hospitality, retail, and wellness.",
      "openingHours": "Mo-Fr 09:00-17:00", // Example, adjust if specific hours exist
      "priceRange": "$$$" // Example, adjust if specific price range exists
    };

    return (
      <>
        <meta property="og:url" content={currentPageUrl} />
        <meta property="og:title" content={document.title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={document.title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-[#faebe3]">
      {/* ScrollToTop component - automatically scrolls to top on route change */}
      <ScrollToTop />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@400;500;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700&display=swap');
        
        :root {
          --peach: #faebe3;
          --peach-layer: #f0dfd5;
          --black: #000000;
          --text-main: #000000;
          --text-subtle: #575757;
          --white: #ffffff;
        }

        .font-syne {
          font-family: 'Syne', sans-serif;
        }

        body {
          font-family: 'Satoshi', sans-serif;
          background-color: var(--peach);
          color: var(--text-main);
        }
        
        h1, h2, h3, h4, h5, h6 {
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-weight: 700;
        }
        
        /* Enforce consistent line-height for H1 and H2 */
        h1 {
          line-height: 1.25 !important;
        }
        
        h2 {
          line-height: 1.25 !important;
        }
        
        /* Universal rounded button styling */
        button, .button, [role="button"] {
          border-radius: 9999px !important;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .dropdown-enter {
          opacity: 0;
          transform: translateY(-10px);
        }
        
        .dropdown-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.3s ease-out;
        }
      `}</style>
      {generateSocialMarkup()}

      {/* Navigation - Transparent initially, dark on scroll, always slim (py-2) */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2 ${
          isScrolled 
            ? 'bg-black/90 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
        }`}>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
            <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg" alt="SensEar Logo" className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform" />
            <div>
              <h1 className={`text-2xl font-bold tracking-wide font-syne transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-black'
              }`}>SENSEAR</h1>
              <p className={`text-xs -mt-1 font-syne font-bold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-black'
              }`}>Soundtracking Unique Experiences</p>
            </div>
          </Link>

          {/* Desktop Navigation - moved significantly more to the left with larger negative margin */}
          <div className="hidden lg:flex items-center gap-6" style={{ marginLeft: '-200px' }}>
            {navItems.map((item) =>
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}>

                <Link
                  to={item.path} 
                  className={`py-2 text-sm font-bold tracking-wide transition-colors relative flex items-center gap-2 hover:underline decoration-1 underline-offset-4 ${
                    isScrolled ? 'text-slate-50' : 'text-black'
                  }`}>

                  {item.name}
                  {item.subItems && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && openDropdown === item.name &&
                  <div className="absolute top-full left-0 pt-2 w-64 z-10">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                      {item.subItems.map((subItem) =>
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setOpenDropdown(null)}
                          className={`block px-6 py-3 text-sm transition-colors hover:underline decoration-1 underline-offset-4 ${
                            location.pathname === subItem.path ?
                              "bg-peach-layer text-black font-medium" :
                              "text-black hover:bg-peach-layer"}`
                          }>

                          {subItem.name}
                        </Link>
                      )}
                    </div>
                  </div>
                }
              </div>
            )}
            {/* Language Selector for Desktop */}
            <div
              className="relative group"
              onMouseEnter={() => setIsLanguageDropdownOpen(true)}
              onMouseLeave={() => setIsLanguageDropdownOpen(false)}
            >
              <button
                className={`py-2 text-sm font-bold tracking-wide transition-colors relative flex items-center gap-2 hover:underline decoration-1 underline-offset-4 ${
                  isScrolled ? 'text-slate-50' : 'text-black'
                }`}
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)} // For better accessibility
              >
                <Globe className="w-4 h-4" />
                <span className="flex items-center gap-1">
                  {selectedLanguage}
                  <img
                    src={languages.find(lang => lang.code === selectedLanguage)?.flag}
                    alt={`${selectedLanguage} flag`}
                    className="w-4 h-auto ml-1"
                  />
                </span>
                {isLanguageDropdownOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 pt-2 w-40 z-10">
                  <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setIsLanguageDropdownOpen(false); // Close dropdown after selection
                        }}
                        className={`block px-4 py-2 text-sm text-black flex items-center gap-2 w-full text-left transition-colors hover:bg-peach-layer ${
                          selectedLanguage === lang.code ? 'bg-peach-layer font-medium' : ''
                        }`}
                      >
                        <img src={lang.flag} alt={`${lang.name} flag`} className="w-5 h-auto" />
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-white' : 'text-black'
            }`}>

            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen &&
          <div className="lg:hidden bg-black border-t border-peach/20 mt-4 max-h-[calc(100vh-100px)] overflow-y-auto">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) =>
                <div key={item.name}>
                  <Link
                    to={item.path}
                    onClick={() => !item.subItems && setIsMenuOpen(false)}
                    className={`block text-base font-bold py-2 hover:underline decoration-1 underline-offset-4 ${
                      location.pathname === item.path ? "text-white underline" : "text-white/90"}`
                    }>

                    {item.name}
                  </Link>
                  {item.subItems &&
                    <div className="pl-4 space-y-1 mt-1">
                      {item.subItems.map((subItem) =>
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block text-sm py-2 hover:underline decoration-1 underline-offset-4 ${
                            location.pathname === subItem.path ?
                              "text-white underline" :
                              "text-white/70 hover:text-peach"}`
                          }>

                          {subItem.name}
                        </Link>
                      )}
                    </div>
                  }
                </div>
              )}
              {/* Language Selector for Mobile */}
              <div className="border-t border-peach/20 pt-4 mt-4"> {/* Separator */}
                <button
                  onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                  className="block text-base font-bold py-2 text-white/90 hover:text-peach flex items-center gap-2 w-full text-left"
                >
                  <Globe className="w-5 h-5" />
                  <span>Language: {languages.find(lang => lang.code === selectedLanguage)?.name}</span>
                  {isLanguageDropdownOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>

                {isLanguageDropdownOpen && (
                  <div className="pl-4 space-y-1 mt-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang.code);
                          setIsLanguageDropdownOpen(false); // Close dropdown after selection
                          setIsMenuOpen(false); // Also close main mobile menu
                        }}
                        className={`block text-sm py-2 text-white/70 hover:text-peach flex items-center gap-2 w-full text-left ${
                          selectedLanguage === lang.code ? 'text-white underline' : ''
                        }`}
                      >
                        <img src={lang.flag} alt={`${lang.name} flag`} className="w-5 h-auto" />
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        }
      </nav>

      {/* Page Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Logo, Socials & Contact */}
            <div className="lg:col-span-2">
              <Link to={createPageUrl("Home")} className="flex items-center gap-3 group mb-6 w-fit">
                <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/16dd574fc_se-profile-silver-profile-1.jpg" alt="SensEar Logo" className="w-12 h-12 rounded-full group-hover:scale-110 transition-transform" />
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-wide font-syne">SENSEAR</h1>
                  <p className="text-xs text-white -mt-1 font-syne">Soundtracking Unique Experiences</p>
                </div>
              </Link>
              <div className="flex gap-6 mb-6">
                <a href="https://www.facebook.com/61575909304249/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-peach transition-colors" aria-label="Visit SensEar on Facebook">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/sensear.music" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-peach transition-colors" aria-label="Visit SensEar on Instagram">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
              <div className="space-y-2 mb-6">
                <div>
                  <a href="mailto:hello@sensear.music" className="text-white/70 hover:text-peach transition-colors hover:underline decoration-1 underline-offset-4">hello@sensear.music</a>
                </div>
                <div>
                  <a href="tel:+306976994212" className="text-white/70 hover:text-peach transition-colors hover:underline decoration-1 underline-offset-4">+30 6976994212</a>
                </div>
              </div>

              {/* Sonic Insights */}
              <div>
                <h3 className="text-sm font-semibold text-peach mb-3">Sonic Insights</h3>
                <div className="flex gap-2">
                  <Input type="email" placeholder="Your email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 flex-1 text-sm h-9 max-w-[180px]" />
                  <Button className="bg-slate-50 text-slate-950 px-3 py-2 text-xs font-semibold rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-9 hover:bg-peach-layer">Subscribe</Button>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <Link to={createPageUrl("Services")} className="text-sm font-semibold text-peach mb-4 uppercase tracking-wider hover:underline decoration-1 underline-offset-4 inline-block">
                Services
              </Link>
              <div className="space-y-2">
                {footerNavItems.services.map((item) => (
                  <Link key={item.name} to={item.path} className="block text-white/70 hover:text-peach transition-colors text-sm hover:underline decoration-1 underline-offset-4">{item.name}</Link>
                ))}
              </div>
            </div>

            {/* Industries */}
            <div>
              <Link to={createPageUrl("Industries")} className="text-sm font-semibold text-peach mb-4 uppercase tracking-wider hover:underline decoration-1 underline-offset-4 inline-block">
                Industries
              </Link>
              <div className="space-y-2">
                {footerNavItems.industries.map((item) => (
                  <Link key={item.name} to={item.path} className="block text-white/70 hover:text-peach transition-colors text-sm hover:underline decoration-1 underline-offset-4">{item.name}</Link>
                ))}
                <Link to={createPageUrl("PlaylistsDemos")} className="block text-white/70 hover:text-peach transition-colors text-sm hover:underline decoration-1 underline-offset-4">Playlists Demos</Link>
              </div>
            </div>

            {/* Case Studies */}
            <div>
              <Link to={createPageUrl("CaseStudies")} className="text-sm font-semibold text-peach mb-4 uppercase tracking-wider hover:underline decoration-1 underline-offset-4 inline-block">
                Case Studies
              </Link>
              <div className="space-y-2">
                {footerNavItems.caseStudies.map((item) => (
                  <Link key={item.name} to={item.path} className="block text-white/70 hover:text-peach transition-colors text-sm hover:underline decoration-1 underline-offset-4">{item.name}</Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-peach mb-4 uppercase tracking-wider">Company</h3>
              <div className="space-y-2">
                {footerNavItems.company.map((item) => (
                  <Link key={item.name} to={item.path} className="block text-white/70 hover:text-peach transition-colors text-sm hover:underline decoration-1 underline-offset-4">{item.name}</Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8">
            <p className="text-xs text-white/50 text-center leading-relaxed">SensEar Music Curation G.P. is a registered company in the E.U. operating in Athens, Greece (Registration No. ELGEMI.183951803000). The company is authorized and regulated by the Corporate Registry (GEMI) and governed by Greek commercial and corporate law, as handled through the Athens Chamber of Tradesmen. All consulting services provided by SensEar adhere to Greek and E.U. regulations, ensuring compliance and ethical business practices.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-black/80 hover:bg-black text-white z-50 transition-opacity duration-300 border-2 border-white/30"
        size="icon"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6" />
      </Button>
    </div>
  );
}
