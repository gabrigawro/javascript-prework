// zamiana liczby 1..3 na słowo
function getMoveName(num) {
if (num === 1) return 'kamień';
if (num === 2) return 'papier';
return 'nożyce';
}

// ustalenie wyniku i ogłoszenie
function displayResult(playerMove, computerMove) {
if (playerMove === computerMove) {
printMessage('Remis! Obaj wybraliście: ' + playerMove + '.');
return;
}
var playerWins =
(playerMove === 'kamień' && computerMove === 'nożyce') ||
(playerMove === 'papier' && computerMove === 'kamień') ||
(playerMove === 'nożyce' && computerMove === 'papier');

if (playerWins) {
printMessage('Wygrywasz! ' + playerMove + ' pokonuje ' + computerMove + '.');
} else {
printMessage('Przegrywasz! ' + computerMove + ' pokonuje ' + playerMove + '.');
}
}

// jedno rozdanie gry
function playGame(playerMove) {
clearMessages();
var randomNumber = Math.floor(Math.random() * 3) + 1;
var computerMove = getMoveName(randomNumber);

printMessage('Komputer: <strong>' + computerMove + '</strong>');
printMessage('Gracz: <strong>' + playerMove + '</strong>');

displayResult(playerMove, computerMove);
}

// tworzymy 3 przyciski i podpniemy click
(function createButtons(){
var buttonsBox = document.getElementById('buttons');
var moves = ['kamień', 'papier', 'nożyce'];

moves.forEach(function(move){
var btn = document.createElement('button');
btn.textContent = move.toUpperCase();
btn.addEventListener('click', function(){ playGame(move); });
buttonsBox.appendChild(btn);
});
})();