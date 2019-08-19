console.log('Hi All!')

const board = []

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
        board[clickedId] ='X';
    } else {
        playerSpan.innerText ='X';
        clickedElement.innerText = 'O';
        board[clickedId] = 'O';
    }

console.log(board);

const topLeft = board[0];
const topCenter = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleCenter = board[4];
const middleRight = board[5];
const bottomLeft = board[6];
const bottomCenter = board[7];
const bottomeRight = board[8];

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight)
{
    alert(`${topLeft} is the winner`);
    return;
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    alert(`${middleLeft} is the winner`);
    return;
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomeRight){
    alert (`${bottomLeft} is the winner`);
    return;
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert (`${topLeft} is the winner`);
    return;
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert (`${topCenter} is the winner`);
    return;
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomeRight){
    alert(`${topRight} is the winner`);
    return;
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomeRight){
    alert (`${topLeft} is the winner`);
    return;
}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    alert (`${topRight} is the winner`);
    return;
}
let boardFull = true
for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    }
}
if (boardFull === true) {
    alert ("CAT's game, there is no winner");
}
}