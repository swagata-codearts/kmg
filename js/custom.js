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
       jQuery(".bottom-section").addClass("fixed-top");
      } else {
       jQuery(".bottom-section").removeClass("fixed-top");
      }
    });
});
// jQuery( document ).ready(function() {
//     jQuery(".pr-button").click(  function() {

//         jQuery(".quick-view-modal").toggleClass('quick-view-none')
//         jQuery("body").toggleClass('modal-overlay')
//     })
// });