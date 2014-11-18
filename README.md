#Read me

##nav
I really don't want to use an actual TABLE for this site nav but there is no other way to get the spacing that is required from the PSD file. I mean I coould use display:table in CSS if this page didnt need to support oldIE. The customer won't care what the code looks like.
The other option shown in the PSD and give all the nav elements the same percent of the site width which is around 16% for this number of nav items. But that doesnt perform as well in RWD as the TABLE layout.
Nope. Nevermind. That doesnt even get me what I want. I feel what this needs is anchors in a div. Newer browsers can handle the percent width, ie7 will get padding.

##background
I am not saying there is no way to make this background image centered and scrollable and always fill the screen and work in oldIE but I am saying there is no GOOD WAY of doing it. It is not worth it. I am going with progressive enhancement, the newer browsers get the best experience. I will position it at the bottom for oldIE so there isnt an abrupt ending of the backgroun image. It will start a little lower than desired but at least it will not look like a mistake.

##rwd
The page is responsive in that it loads appropriately for the viewport that it rendering it. However it is not built to respond to every resize event of the browser – real users are not doing that often.

