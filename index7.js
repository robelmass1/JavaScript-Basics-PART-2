class Car{
    constructor(model,year,color){
        this.model=model;
        this.year=year;
        this.color=color;
    }

    drive(){
        console.log(`You are driving ${this.model} car`);
    }
}

const car1=new Car("Ferrari",2023,"Green");
const car2=new Car("Rolls and Royce",2024,"Black");
const car3=new Car("Volkswagen",2023,"White");

changeCo(car2,'White');

display(car1);
display(car2);
display(car3);
function display(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);
}
function changeCo(car,color){
    car.color=color;

}
car1.drive();

const cars=[car1,car2,car3];
console.log(cars[0].model);
/*
for(let i=0;i<cars.length;i++){
    cars[i].drive();
}
// way 2 is below.
*/
startRace(cars);
function startRace(cars){
    for (const car of cars){
        car.drive();
    }
}

class Card{
    constructor(value,suit){
        this.value=value;
        this.suit=suit;
    }
}

let cards=[new Card('J','Heart'),
           new Card('J','Spades'),
           new Card('J','Clubs'),
           new Card('J','Diamonds'),
           new Card('A','Heart'),
           new Card('A','Spades'),
           new Card('A','Clubs'),
           new Card('A','Diamonds')];

   
cards.forEach(card=>console.log(`${card.value}  ${card.suit}`));
console.log(cards[2].value+" of "+cards[2].suit);// indirectly via array index

 


// Both the aboves do on the same way 
/*
try{
    let x=window.prompt('Enter a #');
    x=Number(x);
    if(isNaN(x)) throw "This is not a number";
    if(x=="") throw "You didn't put anything";

    console.log(`${x} is a number`);
}
catch(error){
    console.log(error);
}

finally{
    // it is good for anykind of clean up.
    console.log(`This always executes`);
}
*/


/*
setTimeout(firstMessage,4000);
setTimeout(secondMessage,5000);
setTimeout(thirdMessage,6000); 
*/
/*
let item='dollar';
let price=230.9;

let timer1=setTimeout(firstMessage,4000,item,price);
let timer2=setTimeout(secondMessage,5000);
let timer3=setTimeout(thirdMessage,6000);
function firstMessage(item,price){
    alert(`Buy this item for ${item} ${price}`);
}

function secondMessage(){
    alert(`Don't lose it`);
}

function thirdMessage(){
    alert(`This is the right time for it`);
}

document.getElementById('myButton').onclick=function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert("Thanks for buying");
}
*/
/*
let count=0;
let max=window.prompt('count up to some number');
max=Number(max);
const myTimer=setInterval(countUp,500);
function countUp(){
    count+=1;
    console.log(count);
    if(count>=max){
        clearInterval(myTimer);
    }
}
*/
/*
let date=new Date();
let year=date.getFullYear();

// date.setFullYear(2025);   // we can set the year as well
// We can also set the month,date,...
let dayOfMonth=date.getDate();
let dayOfWeek=date.getDay();// 0 is sunday, 1 - monday
let month=date.getMonth();
let hour=date.getHours();// between 0 and 23..military hours
let minutes=date.getMinutes();

date=date.toLocaleString();
document.getElementById('myLabel').innerHTML=date;
console.log(dayOfMonth);
console.log(dayOfWeek);
console.log(month); // 0 is January, 3 for April
console.log(hour);
console.log(minutes);
*/

let date=new Date();
document.getElementById('myLabel').innerHTML=formatTime(date);
function formatDate(date){
    let yearr=date.getFullYear();
    let monthh=date.getMonth();
    let dayy=date.getDate();

    return `${monthh}/${dayy}/${yearr}`
}

function formatTime(date){
    let hour=date.getHours();
    let minutes=date.getMinutes();
    let second=date.getSeconds();
    let amOrpm=hour>=12?"pm":"am";0
 // ternary operator above
    hour=(hour%12)|| 12;  // bitwise operators used.
 //if we have 12 hour then 12%12 is 0 then 0 || 12 is 12

 // the above changes our time from military to normal


    return `${hour}:${minutes}:${second} ${amOrpm}`
}

