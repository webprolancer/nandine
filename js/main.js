jQuery(document).ready(function() {
  
  	/* MAGNIFIC POPUP JQUERY VIDEO*/
 	jQuery('#video_link').magnificPopup({
  		type:'iframe',
  		iframe: {
  			markup: '<div class="mfp-iframe-scaler">'+
            			'<div class="mfp-close"></div>'+
            			'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
          			'</div>',
		  	patterns: {
    			youtube: {
      				index: 'youtube.com/',
      				id: 'v=',
      				src: 'https://www.youtube.com/embed/TYD7QdjAuaE?autoplay=1'
    			}
  			},
  			srcAction: 'iframe_src'
		}
  	});

    /* MAGNIFIC POPUP JQUERY IMAGE */
    jQuery('.popup_link').magnificPopup({type:'image'});
  	
    /* SKILLBAR JQUERY */
    jQuery('.skillbar').skillBars({
        // options here
    });


    /* COUNER JQUERY */
    jQuery('.count_number').each(function () {
        jQuery(this).prop('Counter',0).animate({
            Counter: jQuery(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                jQuery(this).text(Math.ceil(now));
            }
        });
    });

    /* OWL CAROUSEL TEAM JQUERY */
    jQuery('.team_members').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    /* OWL CAROUSEL TESTIMONIAL JQUERY */
    jQuery('.testimonial_details').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        items:1
    })

    /* OWL CAROUSEL BLOG JQUERY */
    jQuery('.blog_details').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    /* MIXITUP JQUERY */
    var mixer = mixitup('.portfolio_items');
    var mixer = mixitup(containerEl);
    var mixer = mixitup(containerEl, {
        selectors: {
            target: '.blog-item'
        },
        animation: {
            duration: 300
        }
    });

});