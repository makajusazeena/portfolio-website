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

	spaceBetween: 20,
	effect: "fade",
	loop: true,
	grabCursor: true,
	centeredSlides: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

// Fancybox.bind('.fancybox', {
// //
// });
jQuery(document).ready(function(){
	jQuery(".various").fancybox({
	    	type: "iframe",
	    	// fullScreen : {
			//     autoStart: true
			// }
            // maxWidth    : 800,
            // maxHeight   : 600,
            // fitToView   : false,
            // width       : '70%',
            // height      : '70%',
            // autoSize    : true,
            // closeClick  : false,
            // openEffect  : 'none',
            // closeEffect : 'none'
        });
})