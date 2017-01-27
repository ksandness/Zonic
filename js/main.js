$(document).ready(function() {

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
      $('.product-link').magnificPopup({
          type: 'inline',
          gallery:{
            enabled:true
          },
          callbacks: {
              open: function() {
                    var mfp = $.magnificPopup.instance;
                    var proto = $.magnificPopup.proto;

                    // extend function that moves to next item
                    mfp.next = function() {
                        proto.next.call(mfp);
                    };

                    // same with prev method
                    mfp.prev = function() {
                        proto.prev.call(mfp);
                    };

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

              },
              change: function() {
                  setTimeout(function(){
                      /*Modal Screen Slider*/
                      $('.modal-slider').flexslider({
                          controlNav: true,
                          directionNav: false,
                      });

                      $(".modal-slider-controllers .prev").on("click", function(e) {
                          $(this).parents('.modal-slider').flexslider("prev");
                          e.preventDefault();
                      });

                      $(".modal-slider-controllers .next").on("click", function(e) {
                          $(this).parents('.modal-slider').flexslider("next");
                          e.preventDefault();
                      });

                      /*Modal Testimonial Slider*/
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

                  }, 1000);

              },
          }

      });

});
