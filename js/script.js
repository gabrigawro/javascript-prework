function getMoveName(argMoveId){
if(argMoveId == 1){
return 'kamień';
} else if(argMoveId == 2){
return 'papier';
} else if(argMoveId == 3){
return 'nożyce';
} else {
printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
return 'kamień';
}
}

function displayResult(argPlayerMove, argComputerMove){
printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

if(argPlayerMove == argComputerMove){
printMessage('Remis!');
} else if(
(argPlayerMove == 'kamień' && argComputerMove == 'nożyce') ||
(argPlayerMove == 'papier' && argComputerMove == 'kamień') ||
(argPlayerMove == 'nożyce' && argComputerMove == 'papier')
){
printMessage('Wygrywasz!');
} else {
printMessage('Przegrywasz!');
}
}

function buttonClicked(argButtonName){
clearMessages();
console.log(argButtonName + ' został kliknięty');

var playerMove = argButtonName;
var randomNumber = Math.floor(Math.random() * 3 + 1);
var computerMove = getMoveName(randomNumber);

displayResult(playerMove, computerMove);
}

var buttonRock = document.getElementById('button-rock');
buttonRock.addEventListener('click', function(){
buttonClicked('kamień');
});

var buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){
buttonClicked('papier');
});

var buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){
buttonClicked('nożyce');
});
