//Still working on getting the JS right. Thanks for all the views, hearts and comments!

var limitX = 100, limitY = 100;
var containerW = $('.smileybox').width() - $('.smileybox').offset().left;
var containerH = $('.smileybox').height() - $('.smileybox').offset().top;
$( ".smileybox" ).mousemove(function(e) {
  //var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
  //var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  var mouseY = Math.min(e.clientY/(containerH*.01), limitY);
  var mouseX = Math.min(e.clientX/(containerW*.01), limitX);
  if(e.clientY<290) {
    $('.pupil').css('top', mouseY+'%');
  }
  if(e.clientX<520) {
   $('.pupil').css('left', mouseX+'%');   
  }

});

var pupilH = $('.pupil').height();