$(function() {
    const $playerOneMove =$("<div><img src='css/images/close.png')></div>"); 

    const $gameBoard = $(".grid-container");
    const $topLeft = $("#top1");
    console.log($topLeft);

    $gameBoard.on("click", function(){
        $topLeft.append ($playerOneMove);
        console.log("clicked");
    } )
})

// const $playerOneMove = $("<div><img src='css/images/close.png')></div>"); 

//     const $gameBox = $(".box");
    

//     $gameBox.on("click", function(event){
//         const $squareClicked = event.target.id;
//         console.log($squareClicked);
//         $($squareClicked).append( $playerOneMove );
//     } )