// https://www.youtube.com/watch?v=wLUJ9VNzZXo

const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//
const section = document.querySelector('section')
const end = document.querySelector('h1')

// Scroll Magic
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration: 10000,
    triggerElement: intro,
    triggerHook: 0
})
    .addIndicators()
    .setPin('intro')
    .addTo(controller);

// Video Animation
let accelamount = 0.1;