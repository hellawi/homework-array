let checkMassiv = +prompt("Enter quantity of elements in massiv: (NO MORE 45)");

let massiv = [];
let sum = 0;

Array.length = checkMassiv;
for(let i = 0; i <= checkMassiv; i++) {
    let randomNumber = Math.floor(Math.random() * 45);
    massiv.push(randomNumber);
    console.log(massiv);   
}
if(massiv.length > 45){
    alert("NO MORE 45!!");
}
for (let i = 0; i < massiv.length; i++) {
    sum += massiv[i];
}
console.log(sum);

