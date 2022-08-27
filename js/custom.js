// JavaScript Document
jQuery('#quick-view-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
});

jQuery(document).ready(function(){
    jQuery(window).scroll(function() {
       if(jQuery(this).scrollTop() > 225 ) {
       jQuery("header").addClass("fixed-top");
      } else {
       jQuery("header").removeClass("fixed-top");
      }
    });

    jQuery('.pr-button').click(function(){
        const productName = jQuery(this).parent().siblings(".product-title").find('h4').html();
        const productPrice = jQuery(this).parent().siblings(".product-price").find('h5').html();
        jQuery('.qv-modal-heading h4').html(productName);
        jQuery('.qv-modal-price h5').html(productPrice);
    });
});
// jQuery( document ).ready(function() {
//     jQuery(".pr-button").click(  function() {

//         jQuery(".quick-view-modal").toggleClass('quick-view-none')
//         jQuery("body").toggleClass('modal-overlay')
//     })
// });