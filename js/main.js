(function(){
  const header=document.getElementById('siteHeader');
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.getElementById('primaryNav');
  const year=document.querySelector('[data-year]');
  if(year) year.textContent=new Date().getFullYear();

  const onScroll=()=>{if(header) header.classList.toggle('is-scrolled',window.scrollY>35)};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();

  if(toggle&&nav){
    toggle.addEventListener('click',()=>{
      const open=toggle.getAttribute('aria-expanded')==='true';
      toggle.setAttribute('aria-expanded',String(!open));
      nav.classList.toggle('is-open',!open);
      document.body.classList.toggle('nav-open',!open);
    });
    nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded','false');
      document.body.classList.remove('nav-open');
    }));
  }

  const page=document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(a=>{
    if(a.dataset.nav===page) a.classList.add('is-active');
  });

  // Give the full premium preloader animation time to finish, with a hard fallback.
  const loader=document.querySelector('.page-loader');
  const started=performance.now();
  let dismissed=false;
  function dismissLoader(){
    if(dismissed)return;
    dismissed=true;
    const wait=Math.max(0,1550-(performance.now()-started));
    window.setTimeout(()=>{
      if(loader) loader.classList.add('is-hidden');
      document.body.classList.remove('is-loading');
      const hero=document.querySelector('.hero');
      if(hero) window.setTimeout(()=>hero.classList.add('is-ready'),180);
    },wait);
  }
  window.addEventListener('load',dismissLoader,{once:true});
  window.setTimeout(dismissLoader,4200);

  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click',e=>{
      const id=link.getAttribute('href');
      if(!id||id==='#')return;
      const target=document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});
      }
    });
  });
})();
