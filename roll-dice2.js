
var scores, roundScore, activePlayer, dice, prevDice;
prevDice = 0;
var gameScore;

initGame();

document.querySelector(".btn-roll").addEventListener('click',function(){
    if(scores[activePlayer] < gameScore){
        dice = Math.floor(Math.random()*6)+1;
        document.querySelector("img").style.display = 'block';
        document.querySelector("img").src = "images/dice-" + dice + ".png";
        if(dice ===6 && prevDice === 6){
            scores[activePlayer] = 0;
            document.querySelector("#score-"+activePlayer).innerHTML =  0;
            changePlayer();
        }
        else if(dice !== 1){
        roundScore += dice;
        document.querySelector("#current-"+activePlayer).innerHTML =  roundScore;
        }
        else{
        changePlayer();
        }
}
prevDice = dice; 
});

document.querySelector(".btn-hold").addEventListener('click',function(){
    if(scores[activePlayer] < gameScore){
        document.querySelector("img").style.display = 'none';
        scores[activePlayer] += roundScore; 
        document.querySelector("#score-"+activePlayer).innerHTML = scores[activePlayer];
        
        var inputValue = Number(document.querySelector("input").value);
        if(inputValue){
            gameScore = inputValue;
        }else{
            gameScore = 100;
        }
        if(scores[activePlayer] >= gameScore){
            document.querySelector("#name-"+activePlayer).innerHTML = "Winner!";
            document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-"+ activePlayer + "-panel").classList.toggle("active");
        }
        else{
            changePlayer();
        }
    }
});

document.querySelector(".btn-new").addEventListener('click',initGame);

function changePlayer(){
    roundScore=0;
    document.querySelector("#current-"+activePlayer).innerHTML = 0;
    document.querySelector(".player-"+ activePlayer +"-panel").classList.toggle("active");    
    activePlayer = activePlayer === 0 ? 1 : 0 ; 
    document.querySelector(".player-"+ activePlayer + "-panel").classList.toggle("active");

}

function initGame(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gameScore = 100;    
    
    // not displaying dice when you open game
    document.querySelector("img").style.display = 'none';
    
    document.querySelector("#score-0").innerHTML = 0;
    document.querySelector("#score-1").innerHTML = 0;
    document.querySelector("#current-0").innerHTML = 0;
    document.querySelector("#current-1").innerHTML = 0;
    
    document.querySelector("#name-0").innerHTML = "PLAYER 1";
    document.querySelector("#name-1").innerHTML = "PLAYER 2";

    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");     

    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active"); 
    //default make player 1 active
    document.querySelector(".player-0-panel").classList.add("active");  

    
    }