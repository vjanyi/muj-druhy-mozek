import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../components/ui/button';
import './LandingPage.css';

const LandingPage = () => {
  const sectionsRef = useRef([]);
  const [darkMode, setDarkMode] = useState(false);

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
          <p className="hero-subline">
            Ukazuju, jak si vytvořit systém,<br />
            ve kterém se k nim vrátíš.
          </p>
          <div className="graphic-arrow-down"></div>
        </section>

        {/* Orange Statement Section */}
        <section className="statement-section fade-in" ref={addToRefs}>
          <div className="statement-content">
            <div className="statement-dot"></div>
            <p className="statement-text">
              Hlava není na ukládání.<br />
              Je na přemýšlení.
            </p>
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
          </div>
        </section>

        {/* Story Section */}
        <section className="story-section fade-in" ref={addToRefs}>
          <div className="section-content">
            <h2 className="section-heading">Neučím software. Učím klid.</h2>
            
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
              <div className="arrow-indicator-down"></div>
              <Button 
                className="cta-button"
                onClick={() => window.open('https://www.instagram.com/muj_druhy_mozek/', '_blank')}
                aria-label="Sledovat cestu na Instagramu"
              >
                SLEDOVAT CESTU NA INSTAGRAMU
              </Button>
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
