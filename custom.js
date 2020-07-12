// gsap.registerPlugin(ScrollTrigger);
// const timeline = gsap.timeline({ defaults: {duration: 1 }})
// timeline
//     .from('.header', { y:'-100%', ease: 'bounce'})
//     .from('.link', { opacity: 0, stagger: .5})
//     .from('.right', { x: '-100vw',  ease: "power2.in"}, 1)
//     .from('.left', { x: "-100%"}, '<.5')
//     .to('.footer', { y: 0, ease: 'elastic', })
//     .fromTo('.button', { opacity: 0, scale: 0, rotation: 720 }, { opacity: 1, scale: 1, rotation: 0 })

// const button = document.querySelector('.button')

// button.addEventListener('click', () => {
//     // timeline.timescale(3)
//     timeline.reverse()
// })

    // gsap.registerPlugin(ScrollTrigger);

    gsap.from('header', { duration: 1, y:'-50px',  ease: 'bounce'})
    gsap.from("nav", { scrollTriger: "nav", duration: 2, x: '-100%', y: '-50px', delay: 1,})
    gsap.from('.link', { opacity: 0, stagger: .5, delay: 2})
    gsap.from('.content1',{duration: 1, x:'-100%', scale: 0.5, delay:3.7, ease: 'power3'})
    gsap.from('.content2', {duration: 1, x:'200%', scale: 0.5, rotate: 360, delay:4, ease: 'circ' })
    gsap.from('.brune', {duration:3, opacity: 0, delay: 5, ease: 'elastic', stagger: 0.5, scale:2})