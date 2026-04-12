import React, { useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import './LandingPage.css';

const LandingPage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
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

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="landing-page">
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
          <p className="hero-highlight">
            Hlava není na ukládání.<br />
            Je na přemýšlení.
          </p>
          <div className="graphic-arrow-down"></div>
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
