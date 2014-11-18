
####general
Developing a site to work in IE7 is quite a challenge at this time (2014). I feel this challenge shows that I am no longer great at developing for IE7. During development I have had to rip out techniques that work in newer browsers.

####rwd
The page is responsive in that it loads appropriately for the viewport that is rendering it. However it is not built to respond to every resize event of the browser – real users are not doing that often. It reflows some to browser resizing but it is setup to render best on load.

####background image
I am not saying there is no way to make this background image centered and scrollable and always fill the screen and work in oldIE but I am saying there is no GOOD WAY of doing it. It is not worth it. I am going with progressive enhancement, the newer browsers get the best experience. I will position it at the bottom for oldIE so there isnt an abrupt ending of the background image. It will start a little lower than desired but at least it will not look like a mistake.

####nav
I really don't want to use an actual TABLE for this site nav but there is no other way to get the spacing that is required from the PSD file. I could use display:table if this page didn't need to support oldIE. The customer won't care what the code looks like.
Nope. Nevermind. That doesnt even get me what I want. I feel what this needs is anchors in a div. Newer browsers can handle the percent width, ie7 will get padding.
