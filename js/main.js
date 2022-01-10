$(function() {
    const $gameBox = $(".box");

    $gameBox.on("click", function(){
        const $playerOneMove =$("<div><img src='css/images/close.png')></div>"); 
        $(this).append( $playerOneMove );
    });
})

