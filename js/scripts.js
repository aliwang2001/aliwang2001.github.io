
 /*
 $(window).mousemove(function(e) {
    var change;
    var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
    var  xpos=xpos*2;ypos=ypos*2;
    $('.title').css('top',((0+(ypos/50))+"px"));
    $('.title').css('right',(( 0+(xpos/80))+"px"));
                   
  });
  */
  /*
$(document).on("mousemove", function(event) {
    const x= ($(window).width()-event.pageX)
    const y= ($(window).width()-event.pageY)
    const target=document.querySelector(".title")
    //target.style.transform = "translate(" + x/100 + "%," + y/100 + "%) rotate(-90deg)"
    $("h1.title").css("padding-left", ($(window).width()-event.pageX)*0.1)
    $("h1.title").css("padding-right", ($(window).height()-event.pageY)*0.1)
})
*/

/*
var myFullpage = new fullpage('#fullpage', {
  sectionsColor: ['#FA8072', '#FA8072'],
  autoScrolling:true,
  scrollHorizontally: true,
  controlArrows: true,
  scrollBar: true,
  anchors: ['intro','works','about']
});

//methods
fullpage_api.setAllowScrolling(true);
*/
/*
const section = document.querySelector("section")
let currentPixel = window.pageYOffset
const looper = function() {
    const newPixel = window.pageYOffset
    const diff = newPixel - currentPixel
    const speed = diff * 0.25

section.style.transform = "skewY(" + speed + "deg)"

currentPixel = newPixel

requestAnimationFrame(looper)

}

looper()
*/

