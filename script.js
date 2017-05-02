/*global $*/ 
$( document ).ready(function() {
    
  var $pic = $("#pic"); 
    function move() {
         $pic.css("top", $pic.offset().top + 5);
    }

    $pic.click(function(){ 
        var gabby = setInterval(function() {
        move();
        console.log($("#ground").offset().top);
        console.log( $pic.offset().top);
  
  var pictop = $pic.offset().top
  var picheight = $pic.height()
  var picbottom = pictop + picheight
   
    if (picbottom > $("#ground").offset().top  ){
    clearInterval(gabby)}
    }, 30);
   
 });



});
