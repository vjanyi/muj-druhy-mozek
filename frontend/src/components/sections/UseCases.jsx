import React from 'react';

const UseCases = ({ addToRefs, scrollToNextSection, sectionIndex }) => {
  return (
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
              Poznámky, projekty a nápady, které se neztratí.
            </p>
          </div>

          <div className="use-case-card">
            <h3 className="use-case-title">Domov</h3>
            <p className="use-case-text">
              Návody, opravy a plány na jedno kliknutí.
            </p>
          </div>

          <div className="use-case-card">
            <h3 className="use-case-title">Finance</h3>
            <p className="use-case-text">
              Smlouvy, pojistky a fakturační údaje vždy po ruce.
            </p>
          </div>

          <div className="use-case-card">
            <h3 className="use-case-title">Koníčky</h3>
            <p className="use-case-text">
              Recepty, techniky a nápady, které chci vyzkoušet.
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="subline-arrow" onClick={() => scrollToNextSection(sectionIndex)}>
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
  );
};

export default UseCases;
