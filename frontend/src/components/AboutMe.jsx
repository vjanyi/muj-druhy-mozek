import React from 'react';
import './AboutMe.css';

const AboutMe = ({ onClose }) => {
  return (
    <div className="about-me-overlay" onClick={onClose}>
      <div className="about-me-content" onClick={(e) => e.stopPropagation()}>
        <button className="about-close-btn" onClick={onClose} aria-label="Zavřít">
          ✕
        </button>
        
        <div className="about-story">
          <p className="about-paragraph">
            Jmenuji se Jana.
          </p>
          
          <p className="about-paragraph">
            Jsem marketingová manažerka ve střední firmě už skoro 10 let. Denně řeším desítky věcí – porady, nápady, rozhodnutí. A dlouho jsem narážela na jedno: <strong>nemohla jsem se spoléhat jen na svou paměť.</strong>
          </p>
          
          <p className="about-paragraph">
            V práci to byly situace typu „někde to mám", „už jsme to řešili", „vím, že jsem to viděla"… ale nevěděla jsem kde.
          </p>
          
          <p className="about-paragraph">
            A pak i doma. Jakou barvu jsme vybírali? Co mi přesně řekl lékař? Na čem jsme se domluvili? Detaily, které jsou vlastně důležité.
          </p>
          
          <p className="about-paragraph">
            <strong>Začala jsem si věci zapisovat.</strong> Ale každý jinam – poznámky, papíry, aplikace. <strong>A výsledek?</strong> Stejný chaos. Jen na víc místech.
          </p>
          
          <p className="about-paragraph emphasis">
            A pak mi došlo, že to není pamětí.<br />
            Jen mi chyběl systém.
          </p>
          
          <p className="about-paragraph">
            Začala jsem si ho tvořit. Jednoduše, postupně, podle sebe.
          </p>
          
          <p className="about-paragraph">
            Dnes už nezačínám od nuly. Vím, kde co mám. Vím, kam se vrátit. A hlavně – <strong>nemusím si všechno pamatovat.</strong>
          </p>
          
          <p className="about-paragraph final">
            A ten klid, který to přinese, ten za to stojí.<br /><br />
            A pokud to máš podobně, jsi tu správně.
          </p>
          
          {/* Back to Website Button */}
          <button className="back-to-website-btn" onClick={onClose}>
            Zpátky na web
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
