console.log('The house always wins!')

const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

console.log(idInput);
console.log(colorInput);

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
    console.log(card);
}
function reset(){
    let colorReset = document.getElementById('hearts');
    hearts.style.color = 'gray'
    colorReset = document.getElementById('diamonds');
    hearts.style.color = 'gray'
    colorReset = document.getElementById('clubs');
    hearts.style.color = 'gray'
    colorReset = document.getElementById('spades');
    hearts.style.color = 'gray'
}