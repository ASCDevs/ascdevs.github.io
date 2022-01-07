function scrollAnimation(){
    gsap.from('.presentation__social-icon',{ opacity: 0, duration: .2, delay: .2, x:-20})
    gsap.from('.presentation__hello',{opacity: 0, duration: .2, delay: .2, y: -20})
    gsap.from('.presentation__name',{opacity: 0, duration: .3, delay: .3, y: -20})
    gsap.from('.presentation__office',{opacity: 0, duration: .4, delay: .4, y: -20})
}

window.addEventListener('load', scrollAnimation)