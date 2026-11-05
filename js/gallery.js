(function(){
  const lightbox=document.getElementById('galleryLightbox');
  if(!lightbox)return;
  const image=lightbox.querySelector('img');
  document.querySelectorAll('.gallery-open').forEach(btn=>btn.addEventListener('click',()=>{
    image.src=btn.dataset.full;lightbox.classList.add('is-open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
  }));
  function close(){lightbox.classList.remove('is-open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';}
  lightbox.querySelector('.lightbox-close').addEventListener('click',close);
  lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
  document.querySelectorAll('[data-gallery-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-gallery-filter]').forEach(b=>b.classList.remove('is-active'));btn.classList.add('is-active');
    const filter=btn.dataset.galleryFilter;
    document.querySelectorAll('.gallery-item').forEach(item=>item.hidden=filter!=='all'&&item.dataset.galleryType!==filter);
  }));
})();
