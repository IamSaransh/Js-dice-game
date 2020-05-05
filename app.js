/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gameState;
    



document.querySelector('.btn-new').addEventListener('click', function(){
    scores =[0,1];
    roundScore = 0;
    activePlayer = 0;
    gameState= true;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('#name-0').classList.remove('winner');
    document.querySelector('#name-1').classList.remove('winner');
    

})

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 

    roundScore=0;
    document.querySelector('.dice').style.display= 'none';
    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

};



document.querySelector('.btn-roll').addEventListener('click', function()
{
    if(gameState){
        //1. create random no 
    var dice = Math.floor((Math.random() * 6) + 1);
    //2.display dice with that no
    document.querySelector('.dice').style.display= 'block';
    document.querySelector('.dice').src = `dice-${dice}.png`;
    //3. update score with corresponding to dice we rolled
    if(dice !== 1)
    {
        roundScore += dice;
        document.querySelector(`#current-${activePlayer}`).innerHTML = roundScore;
    }
    else
    {
        
        //change the active player
        nextPlayer();
       
    }
    }
   
}
);
document.querySelector('.btn-hold').addEventListener('click', function()
{   if(gameState){
    scores[activePlayer]+=roundScore;
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 20){
        document.querySelector(`#name-${activePlayer}`).textContent= 'WINNER!!!';
        document.querySelector(`#name-${activePlayer}`).classList.add('winner');
        gameState=false;
    }
    else{
         nextPlayer();
    }
}
    
   
 
    
} );
