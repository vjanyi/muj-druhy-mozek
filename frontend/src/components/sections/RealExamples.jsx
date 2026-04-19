import React from 'react';

const RealExamples = ({ addToRefs, scrollToNextSection, sectionIndex }) => {
  return (
    <section className="examples-section fade-in" ref={addToRefs}>
      <div className="section-content">
        <h2 className="section-heading">Reálné příklady ze života</h2>
        <p className="examples-subtitle">Malé změny. Velký dopad.</p>
        
        {/* Example 1: Barvy a nátěry */}
        <div className="example-block">
          <div className="example-header">
            <span className="example-icon">🎨</span>
            <h3 className="example-title">Barvy a nátěry</h3>
            <p className="example-scenario">Je sobota, jdeš natřít/obnovit dřevěný vyvýšený záhon</p>
          </div>
          
          <div className="example-comparison">
            <div className="comparison-card without">
              <div className="card-label">
                <span className="label-icon">✕</span>
                <span className="label-text">bez systému</span>
              </div>
              <p className="card-content">
                Ale nepamatuješ si, jakou barvou jsi to před 2 lety natírala. Chceš to mít stejnou barvou jako ostatní záhony. Jdeš do garáže a hledáš mezi plechovkami. Není tam nic. Jdeš na internet a hledáš. Konečně najdeš. Jedeš ji koupit. Uf a natírání se nakonec rozhodneš nechat na zítra. Než jsi to celé zařídila, tak padla tma.
              </p>
            </div>
            
            <div className="comparison-card with">
              <div className="card-label">
                <span className="label-icon">✓</span>
                <span className="label-text">se systémem</span>
              </div>
              <p className="card-content">
                Dva kliky v mobilu na poznámky, které sis dělala před 2 lety. Vidíš fotku plechovky, přesný kód barvy i obchod, kde ji mají. Jedeš najisto. Než zapadne slunce, záhony září novotou a ty máš hotovo. A máš klid.
              </p>
            </div>
          </div>
        </div>

        {/* Example 2: Kuchařka */}
        <div className="example-block">
          <div className="example-header">
            <span className="example-icon">👩‍🍳</span>
            <h3 className="example-title">Kuchařka</h3>
            <p className="example-scenario">Konec stresu "co vymyslet k večeři" a jistota, že výsledek bude chutnat.</p>
          </div>
          
          <div className="example-comparison">
            <div className="comparison-card without">
              <div className="card-label">
                <span className="label-icon">✕</span>
                <span className="label-text">bez systému</span>
              </div>
              <p className="card-content">
                Najdeš super recept na Pinterestu, jednou ho uvaříš, je to pecka. Za měsíc ho chceš zopakovat, ale nemůžeš ho najít. Nebo ho najdeš, ale nepamatuješ si, že minule jsi tam dala o polovinu méně soli, aby to bylo k jídlu. Výsledek? Zase jen experimentuješ a riskuješ, že zkazíš večeři.
              </p>
            </div>
            
            <div className="comparison-card with">
              <div className="card-label">
                <span className="label-icon">✓</span>
                <span className="label-text">se systémem</span>
              </div>
              <p className="card-content">
                Máš vlastní „zlatý fond". Každý recept má tvůj komentář: „Příště péct o 5 minut déle" nebo „Martinovi tohle nechutná". Máš složku „Vyzkoušeno – už nikdy víc", která ti ušetří peníze za suroviny i zklamání. Jdeš na jistotu.
              </p>
            </div>
          </div>
        </div>

        {/* Example 3: Správa domova */}
        <div className="example-block">
          <div className="example-header">
            <span className="example-icon">🏠</span>
            <h3 className="example-title">Technický klid</h3>
            <p className="example-scenario">Přehled a konec přehrabování šuplíků s papíry ve chvíli, kdy něco hoří.</p>
          </div>
          
          <div className="example-comparison">
            <div className="comparison-card without">
              <div className="card-label">
                <span className="label-icon">✕</span>
                <span className="label-text">bez systému</span>
              </div>
              <p className="card-content">
                Rozbije se pračka. Hledáš v pěti šuplících záruční list. Když ho najdeš, zjistíš, že je vybledlý nebo už rok po záruce. Chceš pomoct rodičům s topením přes telefon, ale nedokážeš jim vysvětlit, které tlačítko mají kdy zmáčknout, a končí to frustrací na obou stranách.
              </p>
            </div>
            
            <div className="comparison-card with">
              <div className="card-label">
                <span className="label-icon">✓</span>
                <span className="label-text">se systémem</span>
              </div>
              <p className="card-content">
                Jedna tabulka. Vidíš značku, datum nákupu i konec záruky. U každého řádku je fotka účtenky a PDF návod. Když rodiče neví, co s kotlem, pošleš jim odkaz na 20vteřinové video, které jsi si natočila loni, když u vás byl opravář.
              </p>
            </div>
          </div>
        </div>

        {/* Example 4: Vztahy */}
        <div className="example-block">
          <div className="example-header">
            <span className="example-icon">💝</span>
            <h3 className="example-title">Vztahy</h3>
            <p className="example-scenario">Pocit blízkosti a důkaz, že ti na druhých opravdu záleží.</p>
          </div>
          
          <div className="example-comparison">
            <div className="comparison-card without">
              <div className="card-label">
                <span className="label-icon">✕</span>
                <span className="label-text">bez systému</span>
              </div>
              <p className="card-content">
                Potkáš kamarádku po půl roce. Pamatuješ si, že řešila něco v práci, ale nevíš co. Nevíš, jak se jmenují její děti, a tak se raději ptáš obecně: „Jak se mají malí?". Cítíš se povrchně, i když ji máš ráda. Detaily ti protékají mezi prsty.
              </p>
            </div>
            
            <div className="comparison-card with">
              <div className="card-label">
                <span className="label-icon">✓</span>
                <span className="label-text">se systémem</span>
              </div>
              <p className="card-content">
                Pětiminutové osvěžení paměti před schůzkou (třeba s pomocí AI). Víš, že dcera Ema měla jít na operaci mandlí, pes se jmenuje Bertík a minule jste mluvily o tom, že chce změnit obor. Tvá otázka: „Jak dopadly ty mandle u Emy?" okamžitě prohlubuje váš vztah.
              </p>
            </div>
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

export default RealExamples;
