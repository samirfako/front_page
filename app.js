const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

// stagger znaci posteneo pojavljivanje teksta jedan za drugim
tl.to('.text', {y:'0%', duration: 1.5, stagger: 0.30});
tl.to('.slider', {y: "-100%", duration: 2.5, delay: 0.3});
tl.to('.intro', {y: "-100%", duration: 1}, "-=1.8");
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');