let $playerTurn = 1;
let $playerOneWins;
let $playerTwoWins;
let $player1Array = [];
let $player2Array = [];
let $player1Score = 0;
let $player2Score = 0;

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
                } // end of first if
            }  //end forloop
            if( player1WinMoves === 3){
                $player1Score ++;
                $playerOneWins.html($player1Score);
                $("#winPlayer").html("Player 1 Wins!");
                $("#winPopup").css("visibility", "visible");
                return true;
            } //end of second if checking if winVal is 3
        } //end of winConditions for of  
    } else if (playerName === "player2"){
        for( childArrayOfWinConditions of winConditions){
            let player2WinMoves = 0;  
            for(elementOfChildArray of childArrayOfWinConditions){
                if(playerArr.includes(elementOfChildArray)){
                    player2WinMoves ++;
                } // end of first if

            } //end of forloop
            if( player2WinMoves === 3){
                $player2Score ++
                $playerTwoWins.html($player2Score);
                $("#winPlayer").html("Player 2 Wins!");
                $("#winPopup").css("visibility", "visible")
                return true;
            } //end of second if checking if winVal is 
        } //end of winConditions for of  
    }// end else if
    return false;
}; //end of checkForWin

$(function() {
    $playerOneWins = $("#p1Score");
    $playerTwoWins = $("#p2Score");
    const $closeButton = $("#exitModal")
    const $gameBox = $(".box");

    $closeButton.on("click", function(){
        $("#winPopup").css("visibility", "hidden");
        $gameBox.empty();
        $player1Array = [];
        $player2Array = [];
        $playerTurn = 1;

    })
    
    $gameBox.on("click", function(event){
        if($playerTurn % 2 === 1){
            if($(this).has("div").length === 0){
            const $playerOneMove =$("<div><img src='css/images/close.png')></div>"); 
                $(this).append( $playerOneMove );
                $player1Array.push(event.target.id)
                const foundWinner = checkForWin("player1" ,$player1Array);
                if($player1Array.length === 5 && !foundWinner){
                    $("#winPlayer").html("The game is a Draw!");
                    $("#winPopup").css("visibility", "visible")
                }
                $playerTurn++
            }    
        } else {
            if($(this).has("div").length === 0){
            const $playerTwoMove =$("<div><img src='css/images/dry-clean.png')></div>"); 
                $(this).append( $playerTwoMove );
                $player2Array.push(event.target.id)
                checkForWin("player2", $player2Array);
                $playerTurn++
            } 
        } // end else
    }); //end gamebox onClick
})

