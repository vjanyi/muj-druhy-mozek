import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import confetti from 'canvas-confetti';
import ThankYouPage from '../components/ThankYouPage';
import PrivacyPolicy from '../components/PrivacyPolicy';
import AboutMe from '../components/AboutMe';
import './LandingPage.css';

const LandingPage = () => {
  const sectionsRef = useRef([]);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [downloadCount, setDownloadCount] = useState(847); // Social proof counter

  // Handle hash navigation on load (especially for Instagram in-app browser)
  useEffect(() => {
    const handleHashNavigation = () => {
      // Check for hash
      const hash = window.location.hash;
      // Check for query parameter (better for Instagram)
      const urlParams = new URLSearchParams(window.location.search);
      const downloadParam = urlParams.get('download');
      
      if (hash === '#download' || downloadParam === 'true') {
        setTimeout(() => {
          const element = document.getElementById('download');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 500); // Delay to ensure page is fully loaded
      }
    };

    // Check on mount
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  const fullText = 'Ale skoro se k nim nevracíš.';

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80); // 80ms per character

    return () => clearInterval(typingInterval);
  }, []);

  // Email form handler with loading states
  const handleEmailSubmit = async (e, location) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Prosím zadejte platný e-mail');
      return;
    }

    setIsLoading(true); // Start loading

    try {
      // Try to save email to ECOMAIL
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          firstName: 'Subscriber',
          lastName: ''
        })
      });

      // Download PDF regardless of API success
      const link = document.createElement('a');
      link.href = '/druhy-mozek-guide.pdf';
      link.download = 'Muj-Druhy-Mozek-Prvnich-5-Kroku.pdf';
      link.click();

      if (response.ok) {
        console.log('Email uložen do ECOMAIL');
        // Increment download counter
        setDownloadCount(prev => prev + 1);
      } else {
        console.warn('ECOMAIL API selhalo, ale PDF staženo');
      }
      
      setEmailSubmitted(true);
      setIsLoading(false);
      
      // Show Thank You page
      setTimeout(() => {
        setShowThankYou(true);
      }, 500);
      
      // Reset form after Thank You closes
      setTimeout(() => {
        setEmail('');
        setEmailSubmitted(false);
      }, 10000);
      
    } catch (error) {
      console.error('Chyba:', error);
      
      // Download PDF even on error
      const link = document.createElement('a');
      link.href = '/druhy-mozek-guide.pdf';
      link.download = 'Muj-Druhy-Mozek-Prvnich-5-Kroku.pdf';
      link.click();
      
      setEmailSubmitted(true);
      setIsLoading(false);
      
      setTimeout(() => {
        setEmail('');
        setEmailSubmitted(false);
      }, 5000);
    }
  };

  // Scroll progress tracker + Back to top visibility
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Show back to top button after scrolling 300px
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Back to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Scroll to next section handler
  const scrollToNextSection = (currentIndex) => {
    const sections = document.querySelectorAll('section');
    const nextSection = sections[currentIndex + 1];
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Confetti celebration on CTA click
  const handleCTAClick = () => {
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f4a261', '#e89451', '#ffd4a3']
    });
    
    // Open Instagram
    window.open('https://www.instagram.com/muj_druhy_mozek/', '_blank');
  };

  // Share functionality
  const handleShare = async () => {
    const shareData = {
      title: 'Můj druhý mozek',
      text: 'Zapomínáš nápady? Podívej se na systém, který funguje!',
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('✅ Link zkopírován!');
      }
    } catch (err) {
      console.log('Share cancelled or failed');
    }
  };

  useEffect(() => {
    // Check for saved dark mode preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark-mode');
    }

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // SEO: Update page title and meta
    document.title = "Druhý mozek: Jak si uspořádat poznámky a přestat zapomínat";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Zapomínáš nápady a máš poznámky všude? Ukazuju, jak si vytvořit systém, ve kterém se k nim vrátíš. Bez složitých nástrojů, v reálném životě.");
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", "druhý mozek, organizace poznámek, jak si dělat poznámky, systém poznámek, digitální poznámky, jak si pamatovat věci, produktivita");
    }

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Dark mode toggle handler
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="landing-page">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Dark Mode Toggle */}
      <button 
        className="dark-mode-toggle" 
        onClick={toggleDarkMode}
        aria-label={darkMode ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
      >
        {darkMode ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
            <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>

      <main>
        {/* SEO H1 - visually hidden but accessible to search engines */}
        <h1 style={{ 
          position: 'absolute', 
          width: '1px', 
          height: '1px', 
          padding: 0, 
          margin: '-1px', 
          overflow: 'hidden', 
          clip: 'rect(0, 0, 0, 0)', 
          whiteSpace: 'nowrap', 
          border: 0 
        }}>
          Jak si organizovat poznámky a myšlenky
        </h1>
        
        {/* Hero Section */}
        <section className="hero-section fade-in" ref={addToRefs}>
          <div className="graphic-dot"></div>
          <h2 className="hero-title">
            Píšeš si poznámky.
          </h2>
          <p className="hero-subtitle typewriter">
            {typewriterText}
            <span className="typewriter-cursor">|</span>
          </p>
          
          {/* Visual separator - result indicator */}
          <div className="result-divider"></div>
          
          <p className="hero-subline">
            Ukazuju, jak si vytvořit systém,<br />
            ve kterém se k nim vrátíš.
          </p>
          
          {/* Subtle scroll indicator */}
          <div className="subline-arrow" onClick={() => scrollToNextSection(0)}>
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M10 2 L10 26 M10 26 L4 20 M10 26 L16 20" 
                stroke="#f4a261" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </section>

        {/* Orange Statement Section */}
        <section className="statement-section fade-in" ref={addToRefs}>
          <div className="statement-content">
            <div className="statement-dot"></div>
            <p className="statement-text">
              Hlava není na ukládání.<br />
              Je na přemýšlení.
            </p>
            
            {/* Scroll indicator */}
            <div className="subline-arrow" onClick={() => scrollToNextSection(1)}>
              <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 2 L10 26 M10 26 L4 20 M10 26 L16 20" 
                  stroke="#f4a261" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="problem-section fade-in" ref={addToRefs}>
          <div className="section-content">
            <h2 className="section-heading">Informační vyčerpání není tvoje vina.</h2>
            <p className="problem-intro">
              Máš toho v hlavě moc.
            </p>
            <p className="problem-intro">
              A snažíš se to udržet pohromadě.
            </p>
            
            <div className="problem-bullets">
              <div className="problem-item">
                <div className="graphic-dot-small"></div>
                <p className="problem-bullet">„Někam jsem si to psala… ale nevím kam."</p>
              </div>
              <div className="problem-item">
                <div className="graphic-dot-small"></div>
                <p className="problem-bullet">Věci ti protékají mezi prsty.</p>
              </div>
              <div className="problem-item">
                <div className="graphic-dot-small"></div>
                <p className="problem-bullet">
                  Zkoušíš další aplikaci.<br />
                  A stejně to nepomáhá.
                </p>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="subline-arrow" onClick={() => scrollToNextSection(2)}>
              <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 2 L10 26 M10 26 L4 20 M10 26 L16 20" 
                  stroke="#f4a261" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section fade-in" ref={addToRefs}>
          <div className="section-content">
            <h2 className="section-heading">Tohle je můj příběh.</h2>
            
            {/* Author Photo */}
            <div className="author-photo-container">
              <img 
                src="/author-photo.jpg" 
                alt="Jana - Můj druhý mozek" 
                className="author-photo"
              />
            </div>
            
            <div className="story-text">
              <p>Jmenuju se Jana.</p>
              <p>
                Jsem manažerka<br />
                a dlouho jsem narážela na to,<br />
                že se nemůžu spoléhat jen na svou paměť.
              </p>
              <p>
                A pak mi došlo,<br />
                že to není chyba.
              </p>
              <p className="story-emphasis">
                Jen mi chyběl systém.
              </p>
            </div>
            
            {/* About Me Button */}
            <div className="about-me-button-container">
              <button 
                className="about-me-button"
                onClick={() => setShowAboutMe(true)}
              >
                Více o mém příběhu
              </button>
            </div>
            
            {/* Scroll indicator */}
            <div className="subline-arrow" onClick={() => scrollToNextSection(3)}>
              <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 2 L10 26 M10 26 L4 20 M10 26 L16 20" 
                  stroke="#f4a261" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="use-cases-section fade-in" ref={addToRefs}>
          <div className="section-content">
            <div className="use-cases-grid">
              <div className="use-case-card">
                <h3 className="use-case-title">Zdraví</h3>
                <p className="use-case-text">
                  Výsledky, vyšetření a důležité informace na jednom místě.
                </p>
              </div>

              <div className="use-case-card">
                <h3 className="use-case-title">Vztahy</h3>
                <p className="use-case-text">
                  Pamatuju si, co mi lidé řekli minule.
                </p>
              </div>

              <div className="use-case-card">
                <h3 className="use-case-title">Vzdělání</h3>
                <p className="use-case-text">
                  Poznámky z knih, kurzů nebo přednášek,<br />
                  ke kterým se můžu kdykoliv vrátit.
                </p>
              </div>
            </div>
            
            {/* Scroll indicator */}
            <div className="subline-arrow" onClick={() => scrollToNextSection(4)}>
              <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 2 L10 26 M10 26 L4 20 M10 26 L16 20" 
                  stroke="#f4a261" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Benefit Section */}
        <section className="benefit-section fade-in" ref={addToRefs}>
          <div className="section-content">
            <h3 className="benefit-heading">Co kdybys nemusela mít všechno v hlavě?</h3>
            
            <div className="benefit-text">
              <p>
                Druhý mozek je místo,<br />
                kam si věci odložíš.
              </p>
              <p>
                A víš, že se k nim vrátíš.
              </p>
              <p>
                Hlava se uvolní.
              </p>
              <p className="benefit-emphasis">
                A ty můžeš přemýšlet,<br />
                ne jen si pamatovat.
              </p>
            </div>
            <div className="graphic-dots-cluster">
              <div className="cluster-dot"></div>
              <div className="cluster-dot"></div>
              <div className="cluster-dot"></div>
            </div>
            
            {/* Scroll indicator */}
            <div className="subline-arrow" onClick={() => scrollToNextSection(5)}>
              <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 2 L10 26 M10 26 L4 20 M10 26 L16 20" 
                  stroke="#f4a261" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Email Signup Section */}
        <section id="download" className="email-signup-section fade-in" ref={addToRefs}>
          <div className="section-content">
            <div className="graphic-dot"></div>
            
            <h2 className="email-signup-heading">Získej 5 prvních kroků, jak začít i s příklady z praxe</h2>
            <p className="email-signup-text">
              Stáhni si návod, jak začít s budováním vlastního druhého mozku
            </p>
            
            <form onSubmit={(e) => handleEmailSubmit(e, 'bottom')} className="email-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tvůj e-mail"
                className="email-input"
                required
                disabled={isLoading || emailSubmitted}
              />
              <Button 
                type="submit" 
                className="email-submit-button"
                disabled={isLoading || emailSubmitted}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Ukládám email...
                  </>
                ) : emailSubmitted ? (
                  'ODESLÁNO ✓'
                ) : (
                  'STÁHNOUT PDF'
                )}
              </Button>
            </form>
            
            {/* GDPR Notice */}
            <p className="email-gdpr-notice">
              🔒 Tvůj e-mail je u nás v bezpečí. Vždy ctíme{' '}
              <button 
                className="privacy-link-inline" 
                onClick={() => setShowPrivacyPolicy(true)}
                aria-label="Otevřít Ochranu osobních údajů"
              >
                Ochranu osobních údajů
              </button>
              .
            </p>
            
            {emailSubmitted && (
              <p className="email-success-message">
                ✓ Hotovo! PDF se právě stahuje do vašeho zařízení.
              </p>
            )}
            
            {/* Scroll arrow to Final CTA */}
            <div className="subline-arrow" onClick={() => scrollToNextSection(6)}>
              <svg width="20" height="32" viewBox="0 0 20 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M10 2 L10 26 M10 26 L4 20 M10 26 L16 20" 
                  stroke="#f4a261" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="final-cta-section fade-in" ref={addToRefs}>
          <div className="section-content">
            <div className="graphic-dot"></div>
            
            <h2 className="cta-heading">Chceš vidět, jak to vypadá v praxi?</h2>
            <p className="cta-text">
              Stavím ho veřejně.
            </p>
            <p className="cta-text">
              Sdílím, jak ho používám v reálném životě.
            </p>
            <div className="cta-with-arrow">
              <Button 
                className="cta-button"
                onClick={handleCTAClick}
                aria-label="Sledovat cestu na Instagramu"
              >
                SLEDOVAT CESTU NA INSTAGRAMU
              </Button>
            </div>
            
            {/* Share Section */}
            <div className="share-section">
              <p className="share-text">Sdílej s někým, kdo to potřebuje:</p>
              <div className="share-buttons">
                <button 
                  className="share-button share-native"
                  onClick={handleShare}
                  aria-label="Sdílet odkaz"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12548 15.0077 15.2491 15.0227 15.3715L7.3146 19.2256C6.77133 18.7688 6.06801 18.5 5.30902 18.5C3.51269 18.5 2.05902 19.9537 2.05902 21.75C2.05902 23.5463 3.51269 25 5.30902 25C7.10535 25 8.55902 23.5463 8.55902 21.75C8.55902 21.6245 8.55129 21.5009 8.5363 21.3795L16.2444 17.5254C16.7877 17.9822 17.491 18.251 18.25 18.251C20.0463 18.251 21.5 16.7973 21.5 15.001C21.5 13.2047 20.0463 11.751 18.25 11.751C16.4537 11.751 15 13.2047 15 15.001C15 15.1265 15.0077 15.2501 15.0227 15.3725L7.3146 11.5184C7.85787 11.0616 8.5612 10.7928 9.32019 10.7928C11.1165 10.7928 12.5702 9.33913 12.5702 7.54281C12.5702 5.74648 11.1165 4.29281 9.32019 4.29281" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  Sdílet
                </button>
                
                <a 
                  href="https://www.instagram.com/muj_druhy_mozek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button share-instagram"
                  aria-label="Sledovat na Instagramu"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button share-facebook"
                  aria-label="Sdílet na Facebooku"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Můj druhý mozek • 2025</p>
        <button 
          className="privacy-link-footer" 
          onClick={() => setShowPrivacyPolicy(true)}
          aria-label="Zásady ochrany osobních údajů"
        >
          Ochrana osobních údajů
        </button>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          className="back-to-top" 
          onClick={scrollToTop}
          aria-label="Zpět nahoru"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}

      {/* Thank You Page Modal */}
      {showThankYou && (
        <ThankYouPage onClose={() => setShowThankYou(false)} />
      )}
      
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <PrivacyPolicy onClose={() => setShowPrivacyPolicy(false)} />
      )}
      
      {/* About Me Modal */}
      {showAboutMe && (
        <AboutMe onClose={() => setShowAboutMe(false)} />
      )}
    </div>
  );
};

export default LandingPage;
