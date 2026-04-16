import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = ({ onClose }) => {
  return (
    <div className="privacy-policy-overlay" onClick={onClose}>
      <div className="privacy-policy-content" onClick={(e) => e.stopPropagation()}>
        <button className="privacy-close-btn" onClick={onClose} aria-label="Zavřít">
          ✕
        </button>
        
        <h1>Ochrana osobních údajů (GDPR)</h1>
        
        <div className="privacy-section">
          <h2>Správce osobních údajů</h2>
          <p>
            Správcem vašich osobních údajů je provozovatel webu Můj druhý mozek.
          </p>
        </div>
        
        <div className="privacy-section">
          <h2>Jaké údaje sbíráme</h2>
          <p>
            Při stažení e-booku "5 kroků jak přestat vše držet v hlavě" od vás vyžadujeme:
          </p>
          <ul>
            <li><strong>E-mailovou adresu</strong> - pro zaslání PDF příručky a případnou budoucí komunikaci</li>
          </ul>
        </div>
        
        <div className="privacy-section">
          <h2>Jak údaje používáme</h2>
          <p>Vaši e-mailovou adresu používáme pro:</p>
          <ul>
            <li>Zaslání e-booku ve formátu PDF</li>
            <li>Zasílání užitečných tipů a informací o organizaci poznámek (můžete se kdykoliv odhlásit)</li>
          </ul>
        </div>
        
        <div className="privacy-section">
          <h2>Analytické nástroje</h2>
          <p>
            Na našem webu používáme:
          </p>
          <ul>
            <li><strong>Google Analytics</strong> - pro měření návštěvnosti a chování uživatelů</li>
            <li><strong>PostHog</strong> - pro analýzu použití webu a zlepšování uživatelské zkušenosti</li>
          </ul>
          <p>
            Tyto nástroje mohou používat cookies pro sledování anonymních údajů o návštěvnících.
          </p>
        </div>
        
        <div className="privacy-section">
          <h2>Třetí strany</h2>
          <p>
            E-mailové adresy jsou uloženy v systému <strong>Ecomail</strong>, který slouží pro správu e-mailové komunikace.
            Ecomail je v souladu s GDPR a vaše data jsou chráněna.
          </p>
        </div>
        
        <div className="privacy-section">
          <h2>Vaše práva</h2>
          <p>Máte právo na:</p>
          <ul>
            <li>Přístup k vašim osobním údajům</li>
            <li>Opravu nepřesných údajů</li>
            <li>Výmaz vašich údajů (právo být zapomenut)</li>
            <li>Odhlášení z e-mailové komunikace kdykoliv</li>
          </ul>
        </div>
        
        <div className="privacy-section">
          <h2>Kontakt</h2>
          <p>
            Pokud máte jakékoliv dotazy ohledně ochrany osobních údajů, můžete nás kontaktovat přes Instagram: 
            <a href="https://www.instagram.com/muj_druhy_mozek/" target="_blank" rel="noopener noreferrer">
              @muj_druhy_mozek
            </a>
          </p>
        </div>
        
        <div className="privacy-footer">
          <p>Poslední aktualizace: 16. dubna 2025</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
