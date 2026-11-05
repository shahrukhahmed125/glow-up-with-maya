(function(){
  const hero=document.querySelector('.hero-3d');
  if(!hero||!window.matchMedia('(hover:hover) and (pointer:fine)').matches||
     window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;

  const image=hero.querySelector('.hero-image-layer');
  const copy=hero.querySelector('.hero-copy');
  const glass=hero.querySelector('.hero-glass-note');
  const orbit=hero.querySelector('.hero-orbit-one');
  let frame=0,tx=0,ty=0;

  function apply(){
    frame=0;
    if(image) image.style.translate=`${tx*13}px ${ty*10}px`;
    if(copy) copy.style.translate=`${-tx*5}px ${-ty*4}px`;
    if(glass) glass.style.translate=`${tx*16}px ${ty*12}px`;
    if(orbit) orbit.style.translate=`${tx*20}px ${ty*15}px`;
  }
  hero.addEventListener('pointermove',e=>{
    const r=hero.getBoundingClientRect();
    tx=((e.clientX-r.left)/r.width-.5)*2;
    ty=((e.clientY-r.top)/r.height-.5)*2;
    if(!frame)frame=requestAnimationFrame(apply);
    hero.classList.add('is-pointer-active');
  },{passive:true});
  hero.addEventListener('pointerleave',()=>{
    tx=0;ty=0;
    if(!frame)frame=requestAnimationFrame(apply);
    hero.classList.remove('is-pointer-active');
  });
})();
