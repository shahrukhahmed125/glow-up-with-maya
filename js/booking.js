(function(){
  const form=document.getElementById('bookingForm');if(!form)return;
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const status=document.getElementById('bookingStatus');
    if(status)status.textContent='Preview only: no appointment has been booked or submitted. Connect the clinic booking provider to enable live availability and confirmation.';
    form.reset();
  });
})();
