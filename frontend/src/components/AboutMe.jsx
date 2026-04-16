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
          <p className="about-paragraph">Možná to znáš.</p>
          
          <p className="about-paragraph">
            Máš v hlavě spoustu věcí.<br />
            Nápady, úkoly, rozhodnutí.
          </p>
          
          <p className="about-paragraph">
            A pořád máš pocit,<br />
            že na něco zapomínáš.
          </p>
          
          <div className="about-divider">—</div>
          
          <p className="about-paragraph">Jmenuju se Jana.</p>
          
          <p className="about-paragraph">
            A dlouho jsem si myslela,<br />
            že mám prostě špatnou paměť.
          </p>
          
          <p className="about-paragraph">
            Že si neumím věci zapamatovat.<br />
            Že nejsem dost organizovaná.
          </p>
          
          <div className="about-divider">—</div>
          
          <p className="about-paragraph">Někdy jsem si věci zapisovala.</p>
          
          <p className="about-paragraph">
            Ale pak jsem nevěděla kde.<br />
            Nebo jsem se k nim nevrátila.
          </p>
          
          <p className="about-paragraph">A často jsem začínala znovu.</p>
          
          <div className="about-divider">—</div>
          
          <p className="about-paragraph">
            Pak přišlo období,<br />
            kdy jsem potřebovala mít věci pod kontrolou víc než dřív.
          </p>
          
          <p className="about-paragraph">
            A tehdy mi došlo,<br />
            že to není pamětí.
          </p>
          
          <div className="about-divider">—</div>
          
          <p className="about-paragraph emphasis">Chyběl mi systém.</p>
          
          <div className="about-divider">—</div>
          
          <p className="about-paragraph">Začala jsem si ho tvořit.</p>
          
          <p className="about-paragraph">
            Jednoduše.<br />
            Postupně.<br />
            Podle sebe.
          </p>
          
          <div className="about-divider">—</div>
          
          <p className="about-paragraph">Dnes už nezačínám od nuly.</p>
          
          <p className="about-paragraph">
            Vím, kde co mám.<br />
            Vím, kam sáhnout.
          </p>
          
          <p className="about-paragraph">A hlavně — mám klid.</p>
          
          <div className="about-divider">—</div>
          
          <p className="about-paragraph final">
            A pokud to máš podobně,<br /><br />
            jsi tu správně.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
