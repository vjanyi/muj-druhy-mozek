import React, { useEffect, useRef } from 'react';
import { Button } from '../components/ui/button';
import './LandingPage.css';

const LandingPage = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

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
      {/* Hero Section */}
      <section className="hero-section fade-in" ref={addToRefs}>
        <div className="graphic-dot"></div>
        <h1 className="hero-title">Nemusíš si všechno pamatovat</h1>
        <p className="hero-subtitle">
          Ukazuju, jak si buduju svůj druhý mozek v reálném životě
        </p>
        <Button 
          className="cta-button"
          onClick={() => window.open('https://instagram.com', '_blank')}
        >
          Sleduj moji cestu
        </Button>
        <div className="graphic-arrow-down"></div>
      </section>

      {/* Problem Section */}
      <section className="problem-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <div className="graphic-dot-small"></div>
          <p className="problem-text">
            Znáš ten pocit, když máš poznámky všude?
          </p>
          <p className="problem-text">
            V telefonu, v notebooku, na papírkách…
          </p>
          <p className="problem-text">
            A když něco potřebuješ, tak to stejně nenajdeš?
          </p>
          <p className="problem-text-emphasis">
            Chaos v hlavě. Chaos v poznámkách.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="section-separator fade-in" ref={addToRefs}>
        <div className="separator-line"></div>
      </div>

      {/* Insight Section */}
      <section className="insight-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <h2 className="insight-title">Problém není v paměti</h2>
          <p className="insight-text">
            Problém je v tom, že nemáš systém.
          </p>
          <p className="insight-description">
            Tvůj mozek není úložiště. Je nástroj na myšlení.
          </p>
          <div className="graphic-arrow-right"></div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <h2 className="section-title">Druhý mozek</h2>
          <p className="solution-text">
            Druhý mozek není aplikace. Je to systém.
          </p>
          <p className="solution-text">
            Systém, do kterého ukládáš věci ze života — z práce, ze vztahů, ze zdraví, z domácnosti.
          </p>
          <p className="solution-text">
            Ne proto, abys si všechno pamatovala, ale abys věděla, kam se vrátit.
          </p>
          <div className="graphic-dots-cluster">
            <div className="cluster-dot"></div>
            <div className="cluster-dot"></div>
            <div className="cluster-dot"></div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <h2 className="section-title">Jak začít?</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3 className="step-title">Začni jednou věcí</h3>
              <p className="step-description">
                Neřeš všechno najednou. Vyber si jednu oblast života a začni tam.
              </p>
            </div>
            
            <div className="step-arrow">→</div>

            <div className="step">
              <div className="step-number">2</div>
              <h3 className="step-title">Vytvoř jednoduchý systém</h3>
              <p className="step-description">
                Žádná složitost. Prostě místo, kam věci ukládáš a kde je najdeš.
              </p>
            </div>

            <div className="step-arrow">→</div>

            <div className="step">
              <div className="step-number">3</div>
              <h3 className="step-title">Postupně ho rozšiřuj</h3>
              <p className="step-description">
                Systém roste s tebou. Přidávej, co funguje. Měň, co nefunguje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <h2 className="section-title">O mně</h2>
          <div className="about-text">
            <p>
              Jsem marketingová ředitelka a roky bojuju s pamětí.
            </p>
            <p>
              Ne proto, že bych nevnímala, ale protože si věci zkrátka nepamatuju tak, jak bych chtěla.
            </p>
            <p>
              Začala jsem si proto budovat vlastní systém poznámek — nejdřív v práci, postupně i v osobním životě.
            </p>
            <p>
              Dnes si tak ukládám věci z práce, vztahů, zdraví i běžného života.
            </p>
            <p>
              Ne proto, abych si všechno pamatovala, ale abych věděla, kam se vrátit.
            </p>
            <p>
              Tenhle systém si dál buduju a zkouším v praxi.
            </p>
            <p className="about-emphasis">
              A ukazuju, jak to dělám.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <div className="graphic-dot"></div>
          <h2 className="cta-title">Pojď se mnou</h2>
          <p className="cta-subtitle">
            Sleduj, jak si buduju druhý mozek v reálném životě
          </p>
          <Button 
            className="cta-button"
            onClick={() => window.open('https://instagram.com', '_blank')}
          >
            Sleduj moji cestu
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Můj druhý mozek • 2024</p>
      </footer>
    </div>
  );
};

export default LandingPage;
