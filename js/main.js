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
    $("#name").html("Player 1"); 
    $playerOneWins = $("#p1Score");
    $playerTwoWins = $("#p2Score");
    const $gameBox = $(".box");
    let $p2icon;
    let $p1icon;
    let iconSelect = 0;


    $(".icons img").on("click", function(){ //saves the selected icon into a var to use in box click function
                if(iconSelect === 0){ 
                    $("#name").html("Player 2"); 
                    $(this).css("border", "2px solid blue");
                    $p1icon = $(this).clone();
                    $p1icon.removeClass("icon-select");
                    $p1icon.css("border", "none");
                    iconSelect ++;
                    $(this).css("pointer", "none");
                } 
                else if(iconSelect === 1) {
                    $(this).css("border", "2px solid red");
                    $p2icon = $(this).clone();
                    $p2icon.removeClass("icon-select");
                    $p2icon.css("border", "none");
                    iconSelect ++;
                    $("#name").html("Lets get ready to RUMBLE!!!"); 
                }
                else if (iconSelect === 2) {
                    $(this).css("pointer", "none")
                }
    });

    

    $("#exitModal").on("click", function(){
        $("#winPopup").css("visibility", "hidden");
        $(".box").empty();
        $player1Array = [];
        $player2Array = [];
        $playerTurn = 1;
    })

    $("#resetScore").on("click", function(){
        $playerOneWins.html("0");
        $playerTwoWins.html("0");
    })

    $("#iconBtnClose").on("click", function(){
        $("#selectIconBeforePlaying").css("visibility", "hidden");
        
    })
    
    $(".box").on("click", function(event){
        if(iconSelect === 2){
            if($playerTurn % 2 === 1){
                if($(this).has("img").length === 0){
                const $playerOneMove = $p1icon.clone();
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
                if($(this).has("img").length === 0){
                const $playerTwoMove = $p2icon.clone();
                    $(this).append( $playerTwoMove );
                    $player2Array.push(event.target.id)
                    checkForWin("player2", $player2Array);
                    $playerTurn++
                } 
            } // end else
        } else {
                $("#selectIconBeforePlaying").css("visibility", "visible");
        }
        
    }); //end gamebox onClick
})

