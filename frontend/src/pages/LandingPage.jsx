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
        <h1 className="hero-title">
          Máš poznámky všude…<br />
          ale když něco potřebuješ,<br />
          nenajdeš to.
        </h1>
        <p className="hero-subtitle">
          Ukazuju, jak si buduju systém,<br />
          ve kterém se dá vracet.
        </p>
        <Button 
          className="cta-button"
          onClick={() => window.open('https://www.instagram.com/muj_druhy_mozek/', '_blank')}
        >
          Sleduj, jak to stavím v praxi
        </Button>
        <div className="graphic-arrow-down"></div>
      </section>

      {/* Problem Section */}
      <section className="problem-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <div className="graphic-dot-small"></div>
          <p className="problem-text">
            Znáš ten pocit, kdy máš poznámky všude?
          </p>
          <p className="problem-text">
            V telefonu, v notebooku, na papírcích…<br />
            něco si zapíšeš — ale už se k tomu nevrátíš.
          </p>
          <p className="problem-text">
            Pamatuješ si, že jsi to někde měla.<br />
            Ale kde?
          </p>
          <p className="problem-text-emphasis">
            Chaos v hlavě.<br />
            Chaos v poznámkách.
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="section-separator fade-in" ref={addToRefs}>
        <div className="separator-line"></div>
      </div>

      {/* Breakthrough Section */}
      <section className="insight-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <h2 className="insight-title">
            Problém není v paměti.
          </h2>
          <p className="insight-text">
            Problém je, že nemáš systém.
          </p>
          <p className="insight-description">
            Tvůj mozek není úložiště.<br />
            Je nástroj na přemýšlení.
          </p>
          <div className="graphic-arrow-right"></div>
        </div>
      </section>

      {/* What Is Second Brain Section */}
      <section className="solution-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <h2 className="section-title">Druhý mozek není aplikace.</h2>
          <p className="solution-text">
            Je to systém,<br />
            do kterého si ukládáš věci ze života —<br />
            z práce, ze vztahů, ze zdraví,<br />
            z každodenních situací.
          </p>
          <p className="solution-subtext">
            Ne proto, abys si všechno pamatovala,<br />
            ale abys věděla, kam se vrátit.
          </p>
          <div className="graphic-dots-cluster">
            <div className="cluster-dot"></div>
            <div className="cluster-dot"></div>
            <div className="cluster-dot"></div>
          </div>
        </div>
      </section>

      {/* How I Build It Section */}
      <section className="how-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <h2 className="section-title">Tenhle systém si stavím postupně.</h2>
          <p className="how-text">
            Zkouším, co funguje.<br />
            Co nefunguje, pouštím.
          </p>
          <p className="how-text">
            Začínám vždy jednou věcí,<br />
            která mě zrovna nejvíc tíží.
          </p>
          <p className="how-subtext">
            Nejde o dokonalý nástroj.
          </p>
          <p className="how-subtext-emphasis">
            Jde o to,<br />
            aby ten systém fungoval v reálném životě.
          </p>
          <div className="graphic-arrow-right"></div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <p className="benefit-text">
            Méně chaosu v hlavě.
          </p>
          <p className="benefit-text">
            Věci na jednom místě.
          </p>
          <p className="benefit-text">
            Možnost se k nim vracet —<br />
            a opravdu je používat.
          </p>
          <p className="benefit-subtext">
            Ne jen sbírat informace.<br />
            Ale pracovat s nimi.
          </p>
          <div className="graphic-dot-small"></div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta-section fade-in" ref={addToRefs}>
        <div className="section-content">
          <div className="graphic-dot"></div>
          <h2 className="cta-title">
            Sdílím, jak si ten systém buduju v praxi.
          </h2>
          <p className="cta-subtitle">
            Bez dokonalosti.<br />
            Za pochodu.
          </p>
          <Button 
            className="cta-button"
            onClick={() => window.open('https://www.instagram.com/muj_druhy_mozek/', '_blank')}
          >
            Podívej se, jak to funguje
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">Můj druhý mozek • 2026</p>
      </footer>
    </div>
  );
};

export default LandingPage;
