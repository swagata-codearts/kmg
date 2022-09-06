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
        
        // jQuery( ".product-items-wrap .custom-col-5" ).eq( showingVal - 1 ).nextAll().hide()  
        // showLi()
        let current = 0,
        numToShow = jQuery(".showing-select").val(),
        colDiv = jQuery('.product-items-wrap .custom-col-5'),
        numOfcolDiv = jQuery('.product-items-wrap .custom-col-5').children().length
        let startIndex = current * numToShow;   // calculate your slice start number
    if (startIndex > numOfcolDiv) {          // if start number greater than number of li, reset
        startIndex = 0;
        current = 0;
    } else if (current < 0) {               // if start number less than 0, reset to end
        current = Math.floor(numOfcolDiv / numToShow);
        startIndex = current * numToShow;
    } else {
        colDiv.hide()                                   // hide all li
            .slice(startIndex, startIndex + numToShow) // slice off the ones you want to show
            .show();                                   // show them
    }
        // console.log(colDiv.length)
    });
});

// var current = 0,
//   numToShow = showingVal,
//   $li = jQuery('.product-items-wrap row').children();          // get all li once and work with this set for better performance

// function showLi() {
//   var startIndex = current * numToShow;   // calculate your slice start number
//   if (startIndex > $li.length) {          // if start number greater than number of li, reset
//     startIndex = 0;
//     current = 0;
//   } else if (current < 0) {               // if start number less than 0, reset to end
//     current = Math.floor($li.length / numToShow);
//     startIndex = current * numToShow;
//   } else {
//       $li.hide()                                   // hide all li
//         .slice(startIndex, startIndex + numToShow) // slice off the ones you want to show
//         .show();                                   // show them

//   }



