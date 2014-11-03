//$('.lt-ie9 .clearfix').append('<div class="clearfixer"></div>');

var $carousel = $('#carousel');
var id = 1;
var itemsAmount = 4;
var delay = 5000;
var shouldContinue = true;
var startTime;
var timer;
var moveCarousel  = function(itm){
  'use strict';
  $carousel.attr('class','ch'+itm);
  if(shouldContinue){
    timer = setTimeout(startTime, delay);
  }
};

startTime = function(){
  'use strict';
  if(id < itemsAmount){
      id++;
    }
  else{
    id = 1;
  }
  moveCarousel(id);
};

timer = setTimeout(startTime, delay);

$('.carousel-item').on('click', function(){
  'use strict';
  id = this.id.split('_')[1];
  clearTimeout(timer);
  shouldContinue = false;
  moveCarousel(id);
});

$carousel.on('mouseleave', function(){
  'use strict';
  if( !shouldContinue ){
    shouldContinue = true;
    timer = setTimeout(startTime, delay);
  }
});
