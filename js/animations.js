(function(){
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const hasGSAP=window.gsap&&window.ScrollTrigger;
  if(!hasGSAP){
    document.querySelectorAll('.reveal-up').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
    return;
  }
  gsap.registerPlugin(ScrollTrigger);
  if(reduced){
    document.querySelectorAll('.reveal-up').forEach(el=>{el.style.opacity=1;el.style.transform='none'});
    return;
  }

  // Section reveals: larger, slower movement for a calm editorial rhythm.
  gsap.utils.toArray('.reveal-up').forEach((el,i)=>{
    gsap.fromTo(el,{autoAlpha:0,y:48},{autoAlpha:1,y:0,duration:1.15,ease:'power3.out',
      scrollTrigger:{trigger:el,start:'top 88%',once:true}});
  });

  // Cinematic 3D banner — the hero is pinned only for its own animation.
  // IMPORTANT: pinSpacing:true reserves the scroll distance in document flow,
  // so the next section cannot slide underneath the still-pinned banner.
  const hero=document.querySelector('.hero-3d');
  if(hero){
    ScrollTrigger.matchMedia({
      '(min-width: 761px)':function(){
        const tl=gsap.timeline({scrollTrigger:{
          trigger:hero,
          start:'top top',
          end:'+=100%',
          scrub:1.05,
          pin:hero,
          pinSpacing:true,
          anticipatePin:1,
          invalidateOnRefresh:true,
          fastScrollEnd:true
        }});

        tl.to('.hero-image-layer',{
            scale:1.48,
            yPercent:11,
            rotationX:-7,
            rotationY:2.5,
            z:-150,
            transformOrigin:'50% 45%',
            ease:'none'
          },0)
          .to('.hero-wash',{opacity:.94,ease:'none'},0)
          .to('.hero-image-vignette',{opacity:1,ease:'none'},0)
          .to('.hero-copy',{
            y:-145,
            z:130,
            rotationX:5,
            rotationY:-1.5,
            scale:.93,
            autoAlpha:.12,
            ease:'none'
          },0)
          .to('.hero-side-note',{x:28,z:75,rotationY:10,autoAlpha:0,ease:'none'},0)
          .to('.hero-outline',{y:-190,z:-70,rotationX:-9,scale:1.16,autoAlpha:0,ease:'none'},0)
          .to('.hero-glass-note',{y:-80,z:125,rotationY:-14,rotationX:7,scale:.9,autoAlpha:.12,ease:'none'},0)
          .to('.hero-orbit-one',{rotation:88,scale:1.3,xPercent:-12,yPercent:-14,z:75,autoAlpha:.18,ease:'none'},0)
          .to('.hero-orbit-two',{rotation:-62,scale:1.38,xPercent:-8,yPercent:14,z:-70,autoAlpha:.14,ease:'none'},0)
          .to('.hero-light-beam',{xPercent:28,opacity:.18,ease:'none'},0)
          .to('.hero-scroll-fill',{scaleX:1,ease:'none'},0);
      },
      '(max-width: 760px)':function(){
        // No pinning on touch screens: preserve natural page flow.
        gsap.to('.hero-image-layer',{
          scale:1.2,
          yPercent:7,
          ease:'none',
          scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.8}
        });
        gsap.to('.hero-orbit-one',{
          yPercent:-15,
          rotation:22,
          ease:'none',
          scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:1}
        });
        gsap.to('.hero-scroll-fill',{
          scaleX:1,
          ease:'none',
          scrollTrigger:{trigger:hero,start:'top top',end:'bottom top',scrub:.8}
        });
      }
    });
  }

  // Parallax on every major section image. The image itself moves within its
  // clipped container so page geometry remains stable.
  const parallaxImages=[
    '.intro-image-wrap img','.treatment-photo img','.why-image img',
    '.masonry-preview img','.maya-photo img','.page-hero-bg',
    '.about-image-band>img','.practitioner-image img',
    '.directory-item img','.detail-hero-image','.gallery-open img',
    '.final-cta-bg'
  ];
  parallaxImages.forEach(selector=>{
    gsap.utils.toArray(selector).forEach((img)=>{
      const holder=img.closest('.treatment-photo,.intro-image-wrap,.why-image,.masonry-preview figure,.maya-photo,.page-hero,.about-image-band,.practitioner-image,.directory-item,.treatment-detail-hero,.gallery-item,.final-cta')||img.parentElement;
      gsap.fromTo(img,{yPercent:-5,scale:1.035},{yPercent:5,scale:1.10,ease:'none',
        scrollTrigger:{trigger:holder,start:'top bottom',end:'bottom top',scrub:1}});
    });
  });

  // Subtle vertical drift for the editorial text groups and package rows.
  gsap.utils.toArray('.section-heading,.intro-heading,.why-content,.faq-intro,.maya-copy,.about-title,.approach-copy,.gallery-intro,.booking-intro,.contact-details').forEach(el=>{
    gsap.fromTo(el,{y:24},{y:-18,ease:'none',
      scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}});
  });

  // Soft background movement on major blocks gives every section a sense of depth.
  gsap.utils.toArray('.brand-intro,.treatments-section,.why-section,.results-preview,.reviews-section,.maya-section,.packages-section,.faq-section,.about-values,.treatment-directory,.gallery-page,.booking-section,.contact-section').forEach((section,i)=>{
    const wash=section.querySelector(':scope > .page-wrap');
    if(wash){
      gsap.fromTo(wash,{y:14},{y:-14,ease:'none',
        scrollTrigger:{trigger:section,start:'top bottom',end:'bottom top',scrub:1.2}});
    }
  });

  // Keep ScrollTrigger dimensions correct after fonts and responsive images settle.
  window.addEventListener('load',()=>ScrollTrigger.refresh(),{once:true});
})();
