// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg",
			 "images/tm-bg-slide-4.jpg",
			 "images/tm-bg-slide-5.jpg",
			 "images/tm-bg-slide-6.jpg",
			 "images/tm-bg-slide-7.jpg",
			 "images/tm-bg-slide-8.jpg",
			 "images/tm-bg-slide-9.jpg",
	 			], 	{duration: 3200, fade: 1300});
		});
})