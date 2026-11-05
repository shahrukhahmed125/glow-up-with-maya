(function(){
  document.querySelectorAll('.review-track').forEach(track=>{
    const originals=Array.from(track.children);
    originals.forEach(card=>track.appendChild(card.cloneNode(true)));
    track.addEventListener('mouseenter',()=>track.style.animationPlayState='paused');
    track.addEventListener('mouseleave',()=>track.style.animationPlayState='running');
  });
})();
