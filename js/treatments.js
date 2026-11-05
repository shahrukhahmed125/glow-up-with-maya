(function(){
  const search=document.getElementById('treatmentSearch');
  const grid=document.getElementById('treatmentGrid');
  const noResults=document.getElementById('noTreatments');
  if(!grid)return;
  let filter='all';
  const cards=[...grid.querySelectorAll('.directory-item')];
  function update(){
    const q=(search?.value||'').toLowerCase().trim();let count=0;
    cards.forEach(card=>{
      const category=card.dataset.category||'';
      const terms=(card.dataset.search||card.textContent).toLowerCase();
      const show=(filter==='all'||category===filter)&&(!q||terms.includes(q));
      card.hidden=!show;if(show)count++;
    });
    if(noResults)noResults.hidden=count>0;
  }
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('is-active'));
    btn.classList.add('is-active');filter=btn.dataset.filter;update();
  }));
  search?.addEventListener('input',update);
})();
