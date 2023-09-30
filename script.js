const dice1= document.querySelector("#button1");
const dice2= document.querySelector("#button2");
const text= document.querySelector("#text");


dice1.addEventListener("click", roll1);
dice2.addEventListener("click", roll2);

var d1= 0;
var d2 = 0;

function roll1(){
    d1= Math.floor((Math.random() * 6)+ 1);
    dice1.textContent = 'Dice1 : ${d1}';
    total();
}

function roll2(){
    d2= Math.floor((Math.random() * 6)+1);
    dice2.textContent = 'Dice2: ${d2}';
    total();
}

function total(){
    //Total displayed
    const total = d1 + d2;
    text.textContent = 'Total Value: ${total}';
}
