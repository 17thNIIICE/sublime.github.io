"use strict"
var swiper = new Swiper(".mySwiper", {
    speed: 1000,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  
// //POPUP-WINDOW via JQuery

$(document).ready(function(){
    //open popup
    $("#popup-link").click(function(){
        $("#popup").show(400);
    })
    //close popup
    $("#close-button").click(function(){
        $("#popup").hide(200);
    })
})

//Formatting phone number via Cleave, validation via parsley
$(document).ready(function(){
    var cleave = new Cleave('.input-phone', {
        phone: true,
        phoneRegionCode: 'BY',
        blocks: [2, 3, 2, 2],
        delimiter: '-'
    });
    $('#form').parsley().on('field:validated', function(){
        var ok = $('parsley-error').Length === 0;
    }).on('form:submit', function(){
        return false;
    })
})


AOS.init();
