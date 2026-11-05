(function(){
  const fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
  const dot=document.querySelector('.cursor-dot');
  const ring=document.querySelector('.cursor-ring');
  if(!fine||!dot||!ring)return;

  document.documentElement.classList.add('custom-cursor-enabled');
  const label=ring.querySelector('.cursor-label');
  let x=-100,y=-100,rx=-100,ry=-100,visible=false,frame=0;

  function render(){
    rx+=(x-rx)*.19;
    ry+=(y-ry)*.19;
    ring.style.transform=`translate3d(${rx}px,${ry}px,0) translate(-50%,-50%)`;
    frame=requestAnimationFrame(render);
  }
  function move(e){
    x=e.clientX;y=e.clientY;visible=true;
    dot.style.opacity='1';ring.style.opacity='1';
    dot.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-50%)`;
    if(!frame)render();
  }
  document.addEventListener('pointermove',move,{passive:true});
  document.addEventListener('pointerleave',()=>{
    visible=false;dot.style.opacity='0';ring.style.opacity='0';
  });
  document.addEventListener('pointerenter',()=>{
    if(visible){dot.style.opacity='1';ring.style.opacity='1'}
  });

  const hoverTargets=document.querySelectorAll('a,button,input,select,textarea,[role="button"]');
  hoverTargets.forEach(el=>{
    el.addEventListener('pointerenter',()=>{
      ring.classList.add('is-hover');
      ring.classList.remove('is-view');
      if(label){
        label.textContent=el.matches('button,.button')?'OPEN':'GO';
      }
    });
    el.addEventListener('pointerleave',()=>{
      ring.classList.remove('is-hover');
      if(label)label.textContent='VIEW';
    });
  });

  const viewTargets=document.querySelectorAll('.gallery-open,.treatment-photo,.masonry-preview figure,.maya-photo,.intro-image-wrap,.why-image,.practitioner-image');
  viewTargets.forEach(el=>{
    el.addEventListener('pointerenter',()=>{
      ring.classList.add('is-view');
      ring.classList.remove('is-hover');
      if(label)label.textContent='VIEW';
    });
    el.addEventListener('pointerleave',()=>ring.classList.remove('is-view'));
  });

  document.querySelectorAll('.magnetic').forEach(el=>{
    el.addEventListener('pointermove',e=>{
      const rect=el.getBoundingClientRect();
      const dx=e.clientX-(rect.left+rect.width/2);
      const dy=e.clientY-(rect.top+rect.height/2);
      el.style.translate=`${dx*.055}px ${dy*.075}px`;
    });
    el.addEventListener('pointerleave',()=>{el.style.translate='0 0'});
  });
})();
