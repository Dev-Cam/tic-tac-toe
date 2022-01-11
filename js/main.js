let $playerTurn = 1;
let $playerOneWins = 0;
let $playerTwoWins = 0;
let $player1Array = [];
let $player2Array = [];

const winConditions = [
    ["top1", "top2", "top3"],
    ["top1", "middle2", "bottom3"],
    ["top1", "middle1", "bottom1"],
    ["top2", "middle2", "bottom2"],
    ["top3", "middle2", "bottom1"],
    ["top3", "middle3", "bottom3"],
    ["middle1", "middle2", "middle3"],
    ["bottom1", "bottom2", "bottom3"],
    ];

const checkForWin = function(playerName, playerArr){
    if(playerName === "player1"){
        for( childArrayOfWinConditions of winConditions){
            let player1WinMoves = 0;  
            for(elementOfChildArray of childArrayOfWinConditions){
                if(playerArr.includes(elementOfChildArray)){
                    player1WinMoves ++;
                    console.log("player1 winValue: ", player1WinMoves);
                } // end of first if
            }  //end forloop
            if( player1WinMoves === 3){
                console.log("Hooray!");                
            } //end of second if checking if winVal is 3
        } //end of winConditions for of  
    } else if (playerName === "player2"){
        for( childArrayOfWinConditions of winConditions){
            let player2WinMoves = 0;  
            for(elementOfChildArray of childArrayOfWinConditions){
                if(playerArr.includes(elementOfChildArray)){
                    player2WinMoves ++;
                    console.log("player2 winValue: ", player2WinMoves);
                } // end of first if

            } //end of forloop
            if( player2WinMoves === 3){
                console.log("Hooray!");
                
            } //end of second if checking if winVal is 
        } //end of winConditions for of  
    }// end else if
}; //end of checkForWin

//  google sub array forof loop


$(function() {
    
    const $gameBox = $(".box");
    

    $gameBox.on("click", function(event){
        if($playerTurn % 2 === 1){
            if($(this).has("div").length === 0){
            const $playerOneMove =$("<div><img src='css/images/close.png')></div>"); 
                $(this).append( $playerOneMove );
                $player1Array.push(event.target.id)
                checkForWin("player1" ,$player1Array);
                $playerTurn++
            }  else {
                alert("You can't go there!")
        }
            
        } else {
            if($(this).has("div").length === 0){
            const $playerTwoMove =$("<div><img src='css/images/dry-clean.png')></div>"); 
                $(this).append( $playerTwoMove );
                $player2Array.push(event.target.id)
                checkForWin("player2", $player2Array);
                $playerTurn++
            } else {
                alert("You can't go there!")

            }
        } 
        // end else
    }); //end gamebox onClick
})

