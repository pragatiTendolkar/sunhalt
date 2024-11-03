gsap.registerPlugin(ScrollTrigger);

// Timeline for the first scroll animation
const timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".alo-container",
    start: "top top",
    end: "bottom top",
    scrub: 2,
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
    scrub: 5,
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
    scrub: 5,
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
  


    
// Timeline for the first scroll animation
const pack = gsap.timeline({
  scrollTrigger: {
    trigger: ".work-section",
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true,
    anticipatePin: 1,
  },
});

pack.to(".feature-package", { y: "-550px", ease: "power2.out"}, 0);


const packreveal = gsap.timeline({
  scrollTrigger: {
    trigger: ".feature-product",
    start: "center",
    end: "bottom",
    scrub: 5,
  
  },
});

packreveal.to(".feature-product", { 
  scale: 1.2,
  scrub: 1,
  ease: "power2.out",
  onStart: () => {
    document.querySelector(".feature-product").classList.add("float");
  }
}, 0);




// START


// const bubbles = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".feature-product",
//     start: "top center", // Adjusted for a smoother start point
//     end: "bottom center", // Adjusted to keep animation smooth till bottom
//     scrub: 1, // Increased for a smoother scrub effect
//     markers: true,
//   },
// });


//END






const bubbles = document.querySelectorAll(".bubble");

const desktopValues = {
  x: [180, 250, 180, -180,-250, -180],
  y: [-220, -50, 100,100,  -50, -220],
  delay: [0, 0.2, 0.4, 0.6, 1.5, 0.8]
};

const mobileValues = {
  x: [120, 120, 120, 120, 120, -120],
  y: [-230, -95, 55, 210, 360, -230],
  delay: [0, 0.2, 0.4, 0.6, 1.5, 0.8]
};

const isMobile = window.innerWidth <= 768;

const xValues = isMobile ? mobileValues.x : desktopValues.x;
const yValues = isMobile ? mobileValues.y : desktopValues.y;
const delayValues = isMobile ? mobileValues.delay : desktopValues.delay;


bubbles.forEach((bubble, index) => {
  packreveal.to(bubble, {
    opacity: 1,
    scale: index % 2 === 0 ? 1.3 : 1,  
    x: xValues[index],
    y: yValues[index],
    duration: 2,
    ease: "power1.out",
  }, delayValues[index]);  
});

window.addEventListener('resize', () => {
  const isMobile = window.innerWidth <= 768;

  const xValues = isMobile ? mobileValues.x : desktopValues.x;
  const yValues = isMobile ? mobileValues.y : desktopValues.y;
  const delayValues = isMobile ? mobileValues.delay : desktopValues.delay;

  bubbles.forEach((bubble, index) => {
    gsap.to(bubble, {
      x: xValues[index],
      y: yValues[index],
      delay: delayValues[index],
    });
  });
});
