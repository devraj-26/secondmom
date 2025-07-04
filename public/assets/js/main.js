/*
Template Name:  Alphabet
Author: Ingrid Kuhn
Author URI: http://themeforest.net/user/ingridk
*/
jQuery(function ($) {
	

   // Window load function

    $(window).load(function () {  
	
	//Open street  Map
	var mapcanvas = document.getElementById("map-canvas");
	if(mapcanvas){
	  // Element exists
		var coord = [40.738270, -74.008911]; // <--- coordinates here

		var map = L.map('map-canvas', { scrollWheelZoom:false}).setView(coord, 18);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 22,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		var customIcon = L.icon({
		iconUrl: 'img/mapmarker.png',
		  iconSize:     [80, 95], // size of the icon
		iconAnchor:   [40, 94] // point of the icon which will correspond to marker's location
		});

	var marker = L.marker(coord, {icon: customIcon}).addTo(map); 

    }	

        // Page Preloader 	

        $("#preloader").fadeOut("slow");


        //Load Skrollr

		var skr0llr = skrollr.init({
			forceHeight: false,
			mobileCheck: function() {
                //hack - forces mobile version to be off
                return false;
            }
		});		

        //Portfolio Isotope 
		
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
		
		$(window).smartresize(function(){
			$container.isotope({
			columnWidth: '.col-sm-3'
			});
		});
		

		//Portfolio Nav Filter

        $('.cat a').on('click', function () {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');

            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
		
    });


    $(document).ready(function () {
        "use strict"
				
		
        //Scrolling feature 

        $('.page-scroll a').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        //	Back Top Link

        var offset = 5200;
        var duration = 500;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });		
     
        //Testimonials Carousel
		
        $("#owl-testimonials").owlCarousel({
            dots: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            nav: true,
            navText: [
                "<i class='flaticon-arrows-1'></i>",
                "<i class='flaticon-arrows'></i>"
            ],
			 responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        });

        //About Carousel
		
        $("#owl-about").owlCarousel({
            items: 1,
            dots: true,
            loop: true,
            autoplay: false,
        });

        // Blog Carousel
		
        $("#owl-blog").owlCarousel({
            items: 3,
            dots: true,
            margin: 40,
            loop: true,
            autoplay: false,
            nav: true,
            navText: [
                "<i class='flaticon-arrows-1'></i>",
                "<i class='flaticon-arrows'></i>"
            ],
            responsive: {
                1: {items: 1,},
                1000: {items: 2,},
                1200: {items: 3,}
            }
        });

        //Team Carousel	
		
        $("#owl-team").owlCarousel({
            items: 4,
            dots: true,
            loop: true,
            margin: 20,
            autoplay: false,
            nav: true,
            navText: [
                "<i class='flaticon-arrows-1'></i>",
                "<i class='flaticon-arrows'></i>"
            ],
             responsive: {
                1: {items: 1,},
				550:{items: 2,},
                1000: {items: 3,},
                1200: {items: 4,}
            }
        });

        // Pretty Photo

        $("a[data-gal^='prettyPhoto']").prettyPhoto({
            hook: 'data-gal'
        });
        ({
            animation_speed: 'normal',
            opacity: 1,
            show_title: true,
            allow_resize: true,
            counter_separator_label: '/',
            theme: 'light_square',
            /* light_rounded / dark_rounded / light_square / dark_square / facebook */
        });
		
		
		
    }); // end document ready


    //On Click  function
	$(document).on('click',function(){
		
			//Navbar toggle
			$('.navbar .collapse').collapse('hide');
	})		 
	 	
   
});