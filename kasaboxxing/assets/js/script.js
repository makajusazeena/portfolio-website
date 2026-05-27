let mobBtn= document.querySelector('#kb-mob-btn');
let navbar = document.querySelector('.kb-header .kb-navbar');

mobBtn.onclick = () => {
	mobBtn.classList.toggle('fa-times');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	mobBtn.classList.remove('fa-times');
	navbar.classList.remove('active');
};

var swiper = new Swiper(".kb-swiper", {

	// spaceBetween: 10,
	// effect: "fade",
	loop: true,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
	},
});

$(document).ready(function(){
  $('.kb-wrapper-testimonial').slick({
  	slidesToShow: 1,
  	autoplay: true,
  	arrows: false,
  	infinite: true,
  });
});


// Fancybox.bind('.fancybox', {
// //
// });
jQuery(document).ready(function(){
	$('.fancybox').fancybox({
	    buttons: [
	      'close'
	    ],
	    animationEffect: 'fade',
	    transitionEffect: 'fade',
	    iframe: {
	      css: {
	        width: '800px',
	        height: '450px'
	      }
	    }
  });
})