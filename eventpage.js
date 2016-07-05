videojs.options.flash.swf = "/video-js/video-js.swf"

$(function() {
  var BV = new $.BigVideo();
  BV.init();
  BV.show('snoopdance.mp4', {ambient:true});
  var audio = document.getElementById("weedsong");
  audio.play();
});

$('#button1').click(function() {
 window.open("https://www.youtube.com/watch?v=o2TO5atI4rU", '_blank');
});


function play(){
   var audio = document.getElementById("weedsong");
    audio.play();
}
function pause(){
    var audio = document.getElementById("weedsong");
    audio.pause();
}

function play2(){
  var audio = document.getElementById("airhorn.mp3");
  audio.play();
}

$('airhornpic').click(function() {
  play2();
});
  

$('#button2').click(function() {
  play();
});

$('#button3').click(function() {
  pause();
});


function blinker() {
  $('.blink_me').fadeOut(500).fadeIn(500);
}

setInterval(blinker, 600);


