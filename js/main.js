$(document).ready(function() {
      /*GET CURRENT YEAR*/
      var currentYear = new Date().getFullYear();
      $(".copy .year").html(currentYear);

      /*MAIN NAVIGATION*/
      $("body").on("click", ".icon-menu", function() {
          //$("#navigation-menu ul.sf-menu > li").show();
          dropDown = $("#primary-nav");
          if ($(dropDown).is(":visible")) {
              $(dropDown).slideUp(300);
              $(dropDown).removeClass("visible");
          } else {
              $(dropDown).slideDown(300);
              $(dropDown).addClass("visible");
          }
          return false;
      });

      $(window).resize(function() {
          if (matchMedia('only screen and (max-width: 767px)').matches) {
              if (!($("body").hasClass("mobile"))) {
                  $("body").removeClass("desktop").addClass("mobile");
                  $("#primary-nav").hide();
              }
          }
          if (matchMedia('only screen and (min-width: 768px)').matches) {
              if (!($("body").hasClass("desktop"))) {
                  $("body").removeClass("mobile").addClass("desktop");
                  $("#primary-nav").show();
              }
          }
      });

      /*Testimnoials Slider*/
      $('#main-content .testimonial-group .testimonial-slider').flexslider({
          controlNav: false,
          directionNav: false,
          direction: 'vertical',
          animation: 'slide'
      });

      $("#main-content .testimonial-group .flexslider-controllers .prev").on("click", function(e) {
          $(this).parent('.flexslider-controllers').siblings('.testimonial-slider').flexslider("prev");
          e.preventDefault();
      });

      $("#main-content .testimonial-group .flexslider-controllers .next").on("click", function(e) {
          $(this).parent('.flexslider-controllers').siblings('.testimonial-slider').flexslider("next");
          e.preventDefault();
      });


      /*PRODUCT MODALS*/
      var mfp = $.magnificPopup.instance;
      $('body').on('click', '.mfp-content .modal-controls .icon-close', function(e) {
          mfp.close();
          e.preventDefault();
      });
      $('body').on('click', '.mfp-content .modal-controls .icon-next', function(e) {
          mfp.next();
          e.preventDefault();
      });

      $('body').on('click', '.mfp-content .modal-controls .icon-prev', function(e) {
          mfp.prev();
          e.preventDefault();
      });

      $('.product-link').magnificPopup({
          type: 'ajax',
          gallery:{
            enabled:true,
            preload: [1,2]
          },
          callbacks: {
              change: function() {
                  setTimeout(function(){
                      $('.mfp-content .modal-slider').flexslider({
                          controlNav: true,
                          directionNav: false,
                      });

                      $(".mfp-content .modal-slider-controllers .prev").on("click", function(e) {
                          $(this).parents('.modal-slider').flexslider("prev");
                          e.preventDefault();
                      });

                      $(".mfp-content .modal-slider-controllers .next").on("click", function(e) {
                          $(this).parents('.modal-slider').flexslider("next");
                          e.preventDefault();
                      });

                      $('.mfp-content .common-modal .testimonial-slider').flexslider({
                          controlNav: false,
                          directionNav: false,
                          direction: 'vertical',
                          animation: 'slide'
                      });

                      $(".mfp-content .common-modal .flexslider-controllers .prev").on("click", function(e) {
                          $(this).parent('.flexslider-controllers').siblings('.testimonial-slider').flexslider("prev");
                          e.preventDefault();
                      });

                      $(".mfp-content .common-modal .flexslider-controllers .next").on("click", function(e) {
                          $(this).parent('.flexslider-controllers').siblings('.testimonial-slider').flexslider("next");
                          e.preventDefault();
                      });

                  }, 1500);

              },
          }

      });

});
