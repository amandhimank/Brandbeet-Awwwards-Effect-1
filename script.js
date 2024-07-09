const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".part1",
        scroller: "body",
        markers: true,
        start: "20% 50%",
        end: "150% 50%",
        scrub: true,
        pin: true
    }
})

tl.to(".rotate-div", {
    rotate: -15,
    scale: 0.8
}, 'a')
.to("#row-div1", {
    marginTop: "-25%"
}, 'a')

.to("#row-div2", {
    marginTop: "-30%"
}, 'a')
.to("#row-div3", {
    marginTop: "-35%"
}, 'a')
.to(".overlay h1", {
    // delay: 0.3,
    opacity: 1
}, 'a')
.to(".overlay", {
    // delay: 0.3,
    backgroundColor: "rgba(0, 0, 0, 0.489)"
}, 'a')