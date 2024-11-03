gsap.registerPlugin(ScrollTrigger);

// Timeline for the first scroll animation
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".alo-container",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true,
    anticipatePin: 1,
  },
});

timeline.to(".left-element", { x: "-150vw", ease: "power2.out"}, 0);

timeline.to(".right-element", { x: "150vw", ease: "power2.out" }, 0);





const goldElement = document.querySelector(".gold");
goldElement.classList.add("float");

gsap.to(goldElement, {
  scrollTrigger: {
    trigger: ".about-section",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: false,
    onUpdate: (self) => {
      if (self.progress > 0) {
        goldElement.classList.remove("float");
      } else {
        goldElement.classList.add("float");
      }
    },
  },
  top: "650px",
  rotate: "-90deg",
  zIndex: "11111111",
  left: 180,
  scale: 0.65,
  ease: "power2.out",
});









const bt = gsap.timeline({
  scrollTrigger: {
    trigger: ".about-section",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: true,
  },
});


bt.to(".butterfly-1", {
  top: "700px",
  zIndex: "11111111",
  left: 680,
  scale: 0.65,
  ease: "power2.out"

},

  0);

bt.to(".butterfly-2", {
  top: "650px",
  zIndex: "11111111",
  right: 80,
  scale: 0.65,
  ease: "power2.out"

},

  0);


  bt.to(".butterfly-3", {
    top: "550px",
    zIndex: "11111111",
    left: 750,
    scale: 0.65,
    ease: "power2.out"
  
  },
  
    0);
  
