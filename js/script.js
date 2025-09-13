// Zamienia liczbę 1..3 na słowo
function getMoveName(id){
if (id === 1) return 'kamień';
if (id === 2) return 'papier';
if (id === 3) return 'nożyce';
printMessage('Nie znam ruchu o id ' + id + '. Zakładam, że chodziło o "kamień".');
return 'kamień';
}

// Wyświetla wynik jednej rundy
function displayResult(playerMove, computerMove){
printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

if (playerMove === computerMove) {
printMessage('Remis!');
return;
}

const playerWins =
(playerMove === 'kamień' && computerMove === 'nożyce') ||
(playerMove === 'papier' && computerMove === 'kamień') ||
(playerMove === 'nożyce' && computerMove === 'papier');

printMessage(playerWins ? 'Wygrywasz!' : 'Przegrywasz!');
}

// Jedno rozdanie gry
function playGame(playerMove){
clearMessages();

const randomNumber = Math.floor(Math.random() * 3) + 1;
const computerMove = getMoveName(randomNumber);

printMessage('Komputer: <strong>' + computerMove + '</strong>');
printMessage('Gracz: <strong>' + playerMove + '</strong>');

displayResult(playerMove, computerMove);
}

// Podpinamy przyciski (mały zakres zmiennych)
(function initUI(){
const buttonsBox = document.getElementById('buttons');
const btnRock = document.getElementById('button-rock');
const btnPaper = document.getElementById('button-paper');
const btnSciss = document.getElementById('button-scissors');

// Gdyby przycisków nie było w HTML, tworzymy je dynamicznie:
if (!btnRock || !btnPaper || !btnSciss) {
const create = (id, label) => {
const b = document.createElement('button');
b.id = id; b.textContent = label;
buttonsBox.appendChild(b);
return b;
};
const r = create('button-rock', 'Kamień');
const p = create('button-paper', 'Papier');
const s = create('button-scissors', 'Nożyce');

r.addEventListener('click', () => playGame('kamień'));
p.addEventListener('click', () => playGame('papier'));
s.addEventListener('click', () => playGame('nożyce'));
return;
}

btnRock.addEventListener('click', () => playGame('kamień'));
btnPaper.addEventListener('click', () => playGame('papier'));
btnSciss.addEventListener('click', () => playGame('nożyce'));
})();