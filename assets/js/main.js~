$(document).foundation();
  $('body').show();
    NProgress.start();
    NProgress.inc(0.1);
    NProgress.inc(0.1);
    setTimeout(function() { NProgress.done(); $('.fade').removeClass('out'); }, 2500);

new WOW().init();

$('.team-pic').hover(function(){
    $(this).children(".overlay").toggleClass('appear-about');
    $(this).children("h5").toggleClass('appear-about');
});




$( document ).ready(function() {      
    var isMobile = window.matchMedia("(max-width: 900px)");   
    var height=$(".workhover").height();

   if (isMobile.matches) {
   		$(window).scroll(function(){
   		var scrollvalue = $(window).scrollTop()-100;
       	var ratio = Math.floor(scrollvalue/height);
       	
       	console.log(ratio);
       	$(".work_pic").find(".work-prof").eq(ratio + 1).find(".workhover").toggleClass('appear-background-work');
       	$(".work_pic").find(".work-prof").eq(ratio + 1).find(".lookfor").toggleClass('appear-text-work');
   		$(".work_pic").find(".work-prof").eq(ratio + 1).find(".clientprof").toggleClass('appear-text-work');
   		});

   }
});

$('.work-prof').hover(function(){
    $(this).find(".workhover").toggleClass('appear-background-work');
    $(this).find(".lookfor").toggleClass('appear-text-work');
    $(this).find(".clientprof").toggleClass('appear-text-work');
});

function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(23.755408, 90.366498),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        	var image = '../images/map-pin.png';
  			var myLatLng = new google.maps.LatLng(23.755408, 90.366498);
  			var beachMarker = new google.maps.Marker({
      		position: myLatLng,
      		map: map,
      		icon: image
 		 });

  			map.set('styles', [
{
    featureType: "all",
    stylers: [
      { saturation: -80 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#00ffee" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
]);
              }
      google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(
    function() { 
    $("html").niceScroll({
        scrollspeed: "80",
        mousescrollstep: "80",
        cursorcolor: "#ed4523",
        cursorwidth: "10",
        cursorborderradius: "0",
        zindex:"1000",
        horizrailenabled:"false",
        autohidemode: "false",
        cursorborder: "0px"
    });
  }
);



$(".capability-item").hover(function() {
    $(this).children(".capability-svg").removeClass("hide-for-medium-up");
    /* $(this).children(".capability-details").show();*/
}, function() {
    $(this).children(".capability-svg").addClass("hide-for-medium-up");
    $/*(this).children(".capability-details").hide();*/
});
 
 
 $('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay2').toggleClass('open');
   $('body').toggleClass("overflow-hidden");  
   $('span.top,span.bottom').toggleClass('cross-white');
  
 });

/*    var $items = $(".work-prof");
    $items.hide();
    $items.slice(0, Math.floor($items.length/2)).show();
 
$( "#show_more" ).click(function() {
  
     var $items = $(".work-prof");
    $items.show();
    $('#show_more').addClass('hidden');
});*/

    var $items = $(".ins");
    $items.hide();
    $items.slice(0, Math.ceil($items.length/3)).show();

    
$( "#show_more" ).click(function() {
  
     var $items = $(".ins");
    $items.show();
    $('#show_more').addClass('hidden');
});

$("#contact-info.full-width").click(function() {
    $(this).children("#map-canvas").delay(1500).toggleClass("pointer-events");
});

$(function(){
      $(".join-typed-text").typed({
        strings: ["If you are a perfectionist", "If you like Putin", "If you are a social butterfly",
"If you love coffee","If you are  Lord of the Codes", "If you cook like Walter White", "If you stalk people", "If you are a minimalist", "If you like it simple", "If you hate oatmeals","If you are all about the bass","If you read 100 minds per second","If you are secretly rebel", "If you hate Hooli", "If you are oxymoronic", "If you hate your boss", "If you are alignment OCD", "If you like to crunch numbers", "If you are judging us now"],
        loop: true,
        typeSpeed: 50,
        backspace: function(curString, curStrPos){
            setTimeout(function() {

            // check string array position
            // on the first string, only delete one word
            // the stopNum actually represents the amount of chars to
            // keep in the current string. In my case it's 3.
            if (self.arrayPos == 1){
                self.stopNum = 3;
            }
            //every other time, delete the whole typed string
            else{
                self.stopNum = 0;
            }
            });
        }
      })
 });

$("#arrow-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

$(".go-to-map").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-info").offset().top
    }, 2000);
});

// $('html,body').delay(3000).animate({
//   scrollTop: $(window.location.hash).offset().top
// }, 5000);