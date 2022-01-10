let $playerTurn = 1;
let $playerOneWins = 0;
let $playerTwoWins = 0;
let $player1Array = [];
let $player2Array = [];
const $winConditions = [
    ["top1", "top2", "top3"],
    ["top1", "middle2", "bottom3"],
    ["top1", "middle1", "bottom1"],
    ["top2", "middle2", "bottom2"],
    ["middle2", "middle2", "middle3"],
    ["top3", "middle2", "top3"],
    ["top3", "middle3", "bottom3"],
    ["bottom1", "bottom2", "bottom3"],
    ];


const checkForWin = function(arr){
    //check if player array is greater or = to 3
    // check if player array contains all items in win condition
    //if yes return true
    //set winner var to player that won
    //disable game and show winner
    
}


$(function() {
    
    const $gameBox = $(".box");
    

    $gameBox.on("click", function(event){
        if($playerTurn % 2 === 1){
            if($(this).has("div").length === 0){
            const $playerOneMove =$("<div><img src='css/images/close.png')></div>"); 
                $(this).append( $playerOneMove );
                $player1Array.push(event.target.id)
                console.log($player1Array);
                checkForWin($player1Array);
                $playerTurn++
            }  else {
                alert("You can't go there!")
        }
            
        } else {
            if($(this).has("div").length === 0){
            const $playerTwoMove =$("<div><img src='css/images/dry-clean.png')></div>"); 
                $(this).append( $playerTwoMove );
                $playerTurn++
            } else {
                alert("You can't go there!")

            }
        } 
        // end else
    }); //end gamebox onClick
})

