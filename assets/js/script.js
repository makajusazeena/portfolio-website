// let mobBtn = document.getElementById('#sm-mob-btn');
// let navbar = document.querySelector('.sm-header .sm-navbar');
// if(mobBtn){
// 	mobBtn.onclick = () => {
// 		mobBtn.classList.toggle('fa-times');
// 		navbar.classList.toggle('active');
// 	};

// }

// window.onscroll = () => {
// 	mobBtn.classList.remove('fa-times');
// 	navbar.classList.remove('active');
// };

// ***** typing animation ****/
// var typed = new Typed(".typing", {
//   strings: [
//     "",
//     "Web Developer",
//     "Web Designer",
//     "Graphic Designer",
//     "Youtuber",
//   ],
//   typeSpeed: 100,
//   BackSpeed: 60,
//   loop: true,
// });

document.addEventListener("scroll", function () {
  const flipContainer = document.querySelector(".flip-container");
  const cardBody = document.querySelector(".sm-card-body");
  const cardBodyRect = cardBody.getBoundingClientRect();
  const cardBodyMiddle = cardBodyRect.top + cardBodyRect.height * 0.5; // 50% of card body
  const windowHeight = window.innerHeight;
  // Step 1: Flip after passing slightly more than the middle of sm-card-body
  if (cardBodyMiddle < windowHeight * 0.5) {
    // Flip after middle + extra
    flipContainer.classList.add("flipped");
  } else {
    flipContainer.classList.remove("flipped"); // Flip back when scrolling up
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("sm-menu-toggle");
  const nav = document.querySelector("nav");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
  });
});

// jQuery(document).ready(function ($) {
//   var mobBtn = $(".sm-btn-wrap #sm-mob-btn");
//   var navbar = $(".sm-header .sm-navbar");
//   if (mobBtn) {
//     mobBtn.click(function () {
//       // alert('here');
//       mobBtn.toggleClass("fa-times");
//       navbar.toggleClass("active");
//     });
//   }
// });
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  },
);

// counter block
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".counter").forEach((el) => {
  let target = +el.getAttribute("data-target");

  gsap.fromTo(
    el,
    { innerText: 0 },
    {
      innerText: target,
      duration: 2,
      ease: "power2.out",
      snap: { innerText: 1 },
      scrollTrigger: {
        trigger: "#counterblock",
        start: "top 80%",
        toggleActions: "play none none none",
      },
      onUpdate: function () {
        el.innerText = Math.ceil(el.innerText) + "+";
      },
    },
  );
});
