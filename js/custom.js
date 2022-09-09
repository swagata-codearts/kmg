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
jQuery('#slider').owlCarousel({
    loop:false,
    margin:15,
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

jQuery( document ).ready(function() {
    jQuery(".navbar-nav .menu-item-has-children").children(".nav-link").removeAttr("data-bs-toggle").removeAttr("aria-haspopup");
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

// product inner
jQuery( document ).ready(function() {
    jQuery('.product-grid').click( function(){ 
        let gridVal = jQuery(this).attr("value");
        // jQuery('.showing-select').val(gridVal).trigger('change');
        jQuery(".product-items-wrap").removeClass(function (index, className){return (className.match (/(^|\s)product-items-v-\S+/g) || []).join(' ');}).addClass(`product-items-v-${gridVal}`);
    });
    jQuery('.showing-select').change(function(){
        let showingVal = jQuery(".showing-select").val()
        let current = 0,
        numToShow = jQuery(".showing-select").val(),
        colDiv = jQuery('.product-items-wrap .custom-col-5'),
        numOfcolDiv = jQuery('.product-items-wrap .custom-col-5').children().length
        let startIndex = current * numToShow;   
        if (startIndex > numOfcolDiv) {         
            startIndex = 0;
            current = 0;
        } else if (current < 0) {               
            current = Math.floor(numOfcolDiv / numToShow);
            startIndex = current * numToShow;
        } else {
            colDiv.hide()                                   
                .slice(startIndex, startIndex + numToShow) 
                .show();                                   
        }
    });
});

jQuery( document ).ready(function() {
    jQuery(".sidebar-nav-toggle").click(function() {
        jQuery(this).siblings(".sidebar-sub-menu").slideToggle(400)
        jQuery(this).children().toggleClass("fa-plus fa-minus")
    })
 
        if (window.matchMedia('(max-width: 991.98px)').matches) {
            jQuery(".product-items-wrap").removeClass(function (index, className){return (className.match (/(^|\s)product-items-v-\S+/g) || []).join(' ');}).addClass("product-items-v-12");
        } else {
            jQuery(".product-items-wrap").trigger("reset")
        } 
});