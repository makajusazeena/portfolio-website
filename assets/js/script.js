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

jQuery(document).ready(function($) {
	var mobBtn = $('.sm-btn-wrap #sm-mob-btn');
	var navbar = $('.sm-header .sm-navbar');
	if(mobBtn){
		mobBtn.click(function(){
			// alert('here');
			mobBtn.toggleClass('fa-times');
			navbar.toggleClass('active');
		})
	}
})