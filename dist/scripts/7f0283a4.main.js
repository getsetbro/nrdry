!function(){"use strict";var a,b,c=$(document.body),d=c.find("#bgw"),e=c.find("#bgImg"),f=c.find(".contain"),g=c.find("#carousel"),h=g.find(".carousel-item"),i=1,j=4,k=5e3,l=!0,m=function(c){g.attr("class","ch"+c),l&&(b=setTimeout(a,k))};a=function(){j>i?i++:i=1,m(i)},b=setTimeout(a,k),h.on("click",function(){i=this.id.split("_")[1],clearTimeout(b),l=!1,m(i)}),g.on("mouseleave",function(){l||(l=!0,b=setTimeout(a,k))}),c.hasClass("lt-ie9")&&($(".grid27, .grid30, .grid70, .grid72, .grid100, .footer").each(function(){var a=$(this).outerWidth(),b=$(this).width(),c=a-b,d=b-c;$(this).css("width",d)}),$(".grid33, .carousel-item").each(function(){var a=$(this).outerWidth(),b=$(this).width(),c=a-b,d=b-c;$(this).css("width",d-1)})),c.width()<c.height()?(e.height(f.height()),e.width("auto"),d.height("auto")):(e.height("auto"),e.width(c.width()),d.height(f.height()))}(),function(a,b,c){"use strict";var d,e=a.getElementsByTagName(b)[0];a.getElementById(c)||(d=a.createElement(b),d.id=c,d.src="https://platform.twitter.com/widgets.js",e.parentNode.insertBefore(d,e))}(document,"script","twitter-wjs");