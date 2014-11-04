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



})();
