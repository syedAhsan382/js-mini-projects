//Created a dice roller program that'll roll dice on random and show each face of the die.

function rollDice(){
    const numOfDice = document.getElementById('numOfDice').value;
    const diceResult = document.getElementById('diceResult');
    const diceImages = document.getElementById('diceImages');
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;  //Math.floor round the number to the nearest integer
        values.push(value);  

        images.push(`<img src="Images/${value}.png">`);  //Images are directly pushed in JS file
    
    }
    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');

    
}