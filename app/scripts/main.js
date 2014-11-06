(function(){
  'use strict';
  var $carousel = $('#carousel');
  var $carouselItem = $carousel.find('.carousel-item');
  var id = 1;
  var itemsAmount = 4;
  var delay = 5000;
  var shouldContinue = true;
  var startTime;
  var timer;

  var moveCarousel  = function(itm){
    $carousel.attr('class','ch'+itm);
    if(shouldContinue){
      timer = setTimeout(startTime, delay);
    }
  };

  startTime = function(){
    if(id < itemsAmount){
        id++;
      }
    else{
      id = 1;
    }
    moveCarousel(id);
  };

  timer = setTimeout(startTime, delay);

  $carouselItem.on('click', function(){
    id = this.id.split('_')[1];
    clearTimeout(timer);
    shouldContinue = false;
    moveCarousel(id);
  });

  $carousel.on('mouseleave', function(){
    if( !shouldContinue ){
      shouldContinue = true;
      timer = setTimeout(startTime, delay);
    }
  });


  if( ($(document.body).hasClass('lt-ie9')) ){
      $('.grid27, .grid30, .grid70, .grid72, .grid100, .footer').each(function(){
          var fullW = $(this).outerWidth(),
              actualW = $(this).width(),
              wDiff = fullW - actualW,
              newW = actualW - wDiff;

          $(this).css('width',newW);
      });
      $('.grid33, .carousel-item').each(function(){
          var fullW = $(this).outerWidth(),
              actualW = $(this).width(),
              wDiff = fullW - actualW,
              newW = actualW - wDiff;

          $(this).css('width', newW - 1 );
      });
  }

})();

//twitter widget
(function(d, s, id) {
    'use strict';
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = '//platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
    }
})(document, 'script', 'twitter-wjs');
