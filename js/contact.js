(function(){
  const form=document.getElementById('contactForm');if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const status=document.getElementById('contactStatus');
    if(status)status.textContent='Preview only: this form is not connected and no message has been sent. Add a secure form handler before launch.';
    form.reset();
  });
})();
