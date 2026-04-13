import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import confetti from 'canvas-confetti';
import './LandingPage.css';

const LandingPage = () => {
  const sectionsRef = useRef([]);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {/* Hero Section */}
        <section className="hero-section fade-in" ref={addToRefs}>
          <div className="graphic-dot"></div>
          <h1 className="hero-title">
            Píšeš si poznámky.
          </h1>
          <p className="hero-subtitle">
            Ale skoro se k nim nevracíš.
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
            <h2 className="section-heading">Neučím software.<br />Učím klid.</h2>
            
            <div className="story-text">
              <p>
                Jsem marketingová ředitelka<br />
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
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent('Zapomínáš nápady? Podívej se na systém, který funguje!')}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button share-twitter"
                  aria-label="Sdílet na Twitter/X"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="share-button share-linkedin"
                  aria-label="Sdílet na LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Můj druhý mozek • 2026</p>
      </footer>
    </div>
  );
};

export default LandingPage;
