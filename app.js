const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

function reveal() {
  var reveals = document.querySelectorAll("#about");

	for (var i = 0; i < reveals.length; i++) {
		var windowHeight = window.innerHeight;
		var elementTop = reveals[i].getBoundingClientRect().top;
		var elementVisible = 150;
		if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
	}
}
window.addEventListener("scroll", reveal);

hamburger.addEventListener('click',() => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', ()=>{
	var scroll_position = window.scrollY;
	if(scroll_position > 150){
		header.style.backgroundColor = "rgb(3, 3, 47)";
	}else{
		header.style.backgroundColor = "transparent";

	}
});

menu_item.forEach((item) => {
 item.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
	});

});

// fade in effects
$(document).ready(function() {
$('.col-right').waypoint(function(direction) {
	$('.col-right').addClass('animated fadeIn');
}, {
	offset: '50%'
});

});
