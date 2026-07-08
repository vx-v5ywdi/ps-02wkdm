/* GDPR consent banner -> Google Consent Mode v2 (analytics only). Self-contained, no dependencies. */
(function(){
  var KEY='gdbop_consent';
  var en=(document.documentElement.lang||'bg').slice(0,2).toLowerCase()==='en';
  var T=en?{txt:'We use analytics cookies to understand how this website is used. You can accept or decline.',ok:'Accept',no:'Decline'}
          :{txt:'Използваме аналитични бисквитки, за да разберем как се използва сайтът. Можете да приемете или откажете.',ok:'Приемам',no:'Отказвам'};
  function upd(g){ if(typeof gtag==='function') gtag('consent','update',{analytics_storage:g?'granted':'denied'}); }
  function store(v){ try{localStorage.setItem(KEY,v);}catch(e){} }
  function read(){ try{return localStorage.getItem(KEY);}catch(e){return null;} }
  function style(){ if(document.getElementById('cb-css'))return;
    var s=document.createElement('style'); s.id='cb-css';
    s.textContent='#consent-banner{position:fixed;left:1rem;right:1rem;bottom:1rem;max-width:760px;margin:0 auto;z-index:2147483000;background:#0c2350;color:#eaf0ff;border:1px solid rgba(255,255,255,.12);border-top:3px solid #ffc83d;box-shadow:0 20px 50px rgba(0,0,0,.5);font-family:system-ui,Montserrat,sans-serif}'
      +'#consent-banner .cb-in{display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap;padding:1rem 1.3rem}'
      +'#consent-banner p{margin:0;font-size:.9rem;line-height:1.5;flex:1;min-width:220px}'
      +'#consent-banner .cb-b{display:flex;gap:.6rem;flex-wrap:wrap}'
      +'#consent-banner button{cursor:pointer;font-weight:700;font-size:.8rem;letter-spacing:.03em;padding:.6rem 1.25rem;border:0}'
      +'#consent-banner .cb-ok{background:#ffc83d;color:#0b1220}'
      +'#consent-banner .cb-no{background:transparent;color:#ffc83d;border:1px solid #ffc83d}'
      +'@media(max-width:600px){#consent-banner .cb-in{flex-direction:column;align-items:stretch}#consent-banner .cb-b{justify-content:flex-end}}';
    document.head.appendChild(s);
  }
  function show(){
    style();
    var ex=document.getElementById('consent-banner'); if(ex) ex.remove();
    var b=document.createElement('div'); b.id='consent-banner'; b.setAttribute('role','dialog'); b.setAttribute('aria-live','polite');
    b.innerHTML='<div class="cb-in"><p>'+T.txt+'</p><div class="cb-b"><button class="cb-no">'+T.no+'</button><button class="cb-ok">'+T.ok+'</button></div></div>';
    (document.body||document.documentElement).appendChild(b);
    function done(g){ store(g?'granted':'denied'); upd(g); b.remove(); }
    b.querySelector('.cb-ok').onclick=function(){done(true);};
    b.querySelector('.cb-no').onclick=function(){done(false);};
  }
  var saved=read();
  if(saved==='granted'){ upd(true); return; }
  if(saved==='denied'){ upd(false); return; }
  if(document.body) show(); else document.addEventListener('DOMContentLoaded',show);
  // allow re-opening (e.g. a "Cookies" footer link: onclick="gdbopConsent()")
  window.gdbopConsent=function(){ try{localStorage.removeItem(KEY);}catch(e){} show(); };
})();
