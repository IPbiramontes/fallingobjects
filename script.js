/*global $*/ 
$( document ).ready(function() {

    var $pic = $("#pic"); 

    function move() {
 
       //$pic.click(function(){
         $pic.css("top", $pic.offset().top + 40);
        //   });

    }

    


$pic.click(function(){ 
        var gabby = setInterval(function() {
            move();
            console.log($("#ground").offset().top);
            console.log( $pic.offset().top);
if ($pic.offset().top > $("#ground").offset().top){
clearInterval(gabby)
}
        }, 300);
   
 });



    /*
    $pic.click(function(){
       $pic.css("top", $pic.offset().top + 40);
        });*/
});
   