(function(){
  document.querySelectorAll('.faq-question').forEach(button=>{
    button.addEventListener('click',()=>{
      const item=button.closest('.faq-item');
      const isOpen=item.classList.contains('is-open');
      item.classList.toggle('is-open',!isOpen);
      button.setAttribute('aria-expanded',String(!isOpen));
    });
  });
})();
