/* First-party GA4 integration. Never send form values or error messages. */
(function () {
  'use strict';
  var id = 'G-42R17NK4JX';
  var key = 'mozek_analytics_consent_v1';
  var maxAge = 180 * 24 * 60 * 60 * 1000;
  var production = /^(www\.)?mujdruhymozek\.cz$/.test(location.hostname);
  var consent = null;
  var loaded = false;
  var startedForms = new WeakSet();
  var depths = new Set();
  var allowed = {
    generate_lead: ['form_id', 'form_location', 'lead_source'],
    file_download: ['file_name', 'file_extension', 'download_source'],
    form_start: ['form_id'],
    form_error: ['form_id', 'error_type'],
    cta_click: ['cta_name', 'cta_location'],
    share: ['method', 'content_type', 'item_id'],
    view_content: ['content_type', 'content_id'],
    scroll_depth: ['percent_scrolled'],
    section_view: ['section_name']
  };
  try {
    var saved = JSON.parse(localStorage.getItem(key));
    if (saved && Date.now() - saved.time < maxAge && saved.time <= Date.now()) {
      consent = saved.value === 'granted' ? 'granted' : 'denied';
    }
  } catch (_) { /* Storage may be unavailable. Ask again next visit. */ }
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('consent', 'default', {
    analytics_storage: 'denied', ad_storage: 'denied',
    ad_user_data: 'denied', ad_personalization: 'denied'
  });
  function track(name, params) {
    if (!production || consent !== 'granted' || !allowed[name]) return;
    var safe = {};
    allowed[name].forEach(function (field) {
      var value = params && params[field];
      if (typeof value === 'number' && Number.isFinite(value)) safe[field] = value;
      else if (typeof value === 'string' && /^[a-zA-Z0-9_.-]{1,100}$/.test(value)) safe[field] = value;
    });
    window.gtag('event', name, safe);
  }
  function start() {
    if (loaded || !production || consent !== 'granted') return;
    loaded = true;
    window.gtag('js', new Date());
    // Keep campaign attribution, discard arbitrary URL parameters and fragments.
    var clean = new URL(location.origin + location.pathname);
    var query = new URLSearchParams(location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid'].forEach(function (field) {
      var value = query.get(field);
      if (value && /^[a-zA-Z0-9_.-]{1,150}$/.test(value)) clean.searchParams.set(field, value);
    });
    var referrer = '';
    try { referrer = new URL(document.referrer).origin; } catch (_) {}
    window.gtag('config', id, {page_location: clean.href, page_referrer: referrer,
      allow_google_signals: false, allow_ad_personalization_signals: false});
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + id;
    document.head.appendChild(script);
  }
  function choose(value, persist) {
    consent = value;
    if (persist !== false) {
      try { localStorage.setItem(key, JSON.stringify({value: value, time: Date.now()})); } catch (_) {}
    }
    window['ga-disable-' + id] = value !== 'granted';
    window.gtag('consent', 'update', {analytics_storage: value});
    if (value === 'granted') start();
    else {
      // Remove previously granted GA cookies after withdrawal.
      document.cookie.split(';').forEach(function (cookie) {
        var name = cookie.trim().split('=')[0];
        if (/^_ga($|_)/.test(name)) {
          ['', location.hostname, '.mujdruhymozek.cz'].forEach(function (domain) {
            document.cookie = name + '=; Max-Age=0; path=/' + (domain ? '; domain=' + domain : '');
          });
        }
      });
    }
    var banner = document.getElementById('analytics-consent');
    if (banner) banner.remove();
  }
  function showChoices() {
    if (document.getElementById('analytics-consent')) return;
    var banner = document.createElement('section');
    banner.id = 'analytics-consent';
    banner.setAttribute('aria-label', 'Nastavení analytických cookies');
    banner.style.cssText = 'position:fixed;bottom:12px;left:12px;right:12px;max-width:680px;margin:auto;padding:20px;background:#fff;color:#222;border:2px solid #f4a261;border-radius:16px;box-shadow:0 4px 24px #0003;z-index:10000;font:16px/1.5 sans-serif';
    var text = document.createElement('p');
    text.textContent = 'Pomůžeš mi zjistit, co na webu funguje? S tvým souhlasem použiji Google Analytics pro měření návštěvnosti a používání webu. Web i stažení PDF fungují také bez analytiky. Volbu můžeš kdykoli změnit.';
    banner.appendChild(text);
    [['Povolit analytiku', 'granted'], ['Odmítnout analytiku', 'denied']].forEach(function (choice) {
      var button = document.createElement('button');
      button.type = 'button';
      button.textContent = choice[0];
      button.style.cssText = 'margin:4px;padding:10px 16px;border:1px solid #444;border-radius:8px;background:#fff;color:#222;cursor:pointer;font:inherit';
      button.addEventListener('click', function () { choose(choice[1]); });
      banner.appendChild(button);
    });
    document.body.appendChild(banner);
  }
  window.mozekAnalytics = {track: track, choose: choose, showChoices: showChoices};
  if (consent) choose(consent, false);
  function ready() {
    if (!consent) showChoices();
    var settings = document.createElement('button');
    settings.type = 'button';
    settings.textContent = 'Nastavení cookies';
    settings.style.cssText = 'display:block;margin:16px auto;padding:8px;border:0;background:transparent;color:inherit;text-decoration:underline;cursor:pointer;font:inherit';
    settings.addEventListener('click', showChoices);
    (document.querySelector('footer') || document.body).appendChild(settings);
    document.addEventListener('focusin', function (event) {
      var form = event.target.closest && event.target.closest('form.email-form');
      if (form && consent === 'granted' && !startedForms.has(form)) {
        startedForms.add(form);
        track('form_start', {form_id: 'pdf_guide'});
      }
    });
    document.addEventListener('click', function (event) {
      var link = event.target.closest && event.target.closest('a');
      if (link && link.href.indexOf('https://www.instagram.com/muj_druhy_mozek/') === 0) {
        track('cta_click', {cta_name: 'instagram', cta_location: link.closest('.thankyou-modal') ? 'thankyou' : 'footer'});
      }
      if (link && link.href.indexOf('https://www.facebook.com/sharer/') === 0) {
        track('cta_click', {cta_name: 'facebook_share', cta_location: 'share_links'});
      }
    });
    window.addEventListener('scroll', function () {
      if (consent !== 'granted') return;
      var height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      var percent = window.scrollY / height * 100;
      [25, 50, 75].forEach(function (depth) {
        if (percent >= depth && !depths.has(depth)) {
          depths.add(depth); track('scroll_depth', {percent_scrolled: depth});
        }
      });
    }, {passive: true});
    if (window.IntersectionObserver) {
      var seen = new WeakSet();
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (consent === 'granted' && entry.isIntersecting && !seen.has(entry.target)) {
            seen.add(entry.target);
            track('section_view', {section_name: entry.target.id === 'download' ? 'pdf_guide' : 'instagram'});
          }
        });
      }, {threshold: 0.25});
      function observe() {
        document.querySelectorAll('#download, .final-cta-section').forEach(function (section) { observer.observe(section); });
      }
      observe();
      // React may mount after this deferred script runs.
      var mountObserver = new MutationObserver(observe);
      mountObserver.observe(document.getElementById('root') || document.body, {childList: true, subtree: true});
      setTimeout(function () { mountObserver.disconnect(); }, 10000);
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', ready);
  else ready();
})();