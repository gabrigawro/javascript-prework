// js/script.js

// helper: 1..3 -> 'kamień' | 'papier' | 'nożyce'
function getMoveName(num) {
if (num === 1) return 'kamień';
if (num === 2) return 'papier';
return 'nożyce';
}

// helper: ustalenie wyniku i komunikaty
function displayResult(playerMove, computerMove) {
if (playerMove === computerMove) {
printMessage('Remis! Obaj wybraliście: ' + playerMove + '.');
return;
}
const playerWins =
(playerMove === 'kamień' && computerMove === 'nożyce') ||
(playerMove === 'papier' && computerMove === 'kamień') ||
(playerMove === 'nożyce' && computerMove === 'papier');

if (playerWins) {
printMessage('Wygrywasz! ' + playerMove + ' pokonuje ' + computerMove + '.');
} else {
printMessage('Przegrywasz! ' + computerMove + ' pokonuje ' + playerMove + '.');
}
}

// główna funkcja jednego rozdania
function playGame(playerMove) {
clearMessages();

const randomNumber = Math.floor(Math.random() * 3) + 1;
const computerMove = getMoveName(randomNumber);

printMessage('Mój ruch: <strong>' + computerMove + '</strong>');
printMessage('Twój ruch: <strong>' + playerMove + '</strong>');

displayResult(playerMove, computerMove);
}

// UI: tworzymy trzy przyciski
(function createButtons(){
const buttonsBox = document.getElementById('buttons');
const moves = ['kamień', 'papier', 'nożyce'];

moves.forEach((move) => {
const btn = document.createElement('button');
btn.textContent = move.toUpperCase();
btn.addEventListener('click', () => playGame(move));
buttonsBox.appendChild(btn);
});
})();