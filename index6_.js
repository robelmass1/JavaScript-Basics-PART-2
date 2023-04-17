const greeting =(userName)=> 
console.log(`hello ${userName}`);
greeting("Tobac");
/*
const percent=function(x,y){
    return x/y*100;
}
console.log(`${percent(10,20)}%`);
*/
const percent=(x,y)=>x/y*100;
console.log(`${percent(10,40)}%`);

let grades=[76,55,88,33,99];
grades.sort((x,y)=>y-x);
grades.forEach((element)=>console.log(element));

let cards=['A','2','3','4','5','6','7','8','9','10',
            'J','K','Q'];

shuffle(cards);
cards.forEach(card=>console.log(card));
function shuffle(array){
    let currentIndex=array.length;

    while(currentIndex!=0){
        let randomIndex=Math.floor(Math.random()*array.length);
        currentIndex-=1;
        
     // temporary storage to swap elements.
        let temp=array[currentIndex];
        array[currentIndex]=array[randomIndex];
        array[randomIndex]=temp;
    }
    return array;
}

let user="Robel";
let userInbox=10;
login();
function login(){
    displayUser();
    displayInbox();

    function displayUser(){
        console.log(`Welcome ${user}`);
    }
    function displayInbox(){
        console.log(`You have ${userInbox} messages`);
    }
}

const store=new Map([
    ['Pant',32],['T-shirt',17],['Socks',7],['U_wear',30]

]);
let  shoppingCart=0;
shoppingCart+=store.get('Pant');// display 32
shoppingCart+=store.get('Socks');// display 32+7=39

store.set('hat',40);
store.delete('Socks'); // delete it
console.log(shoppingCart);
store.forEach((value,key)=>console.log(`${key} $${value}`));

console.log(store.has('hat')); 
// gives boolean value by checking it has the element listed or not.
console.log(store.size);// gives us the size

const car1={
    model:'Ferrari',color:'green',year:2023,
    // the one below is drive function.drive is the function name
    drive:function (){
        console.log(`You drive the ${car1.model} car`);
        // to access the model we use this. key word
        // this refer the object we currently work with.
    },

 
}

const car2={
    model:'Audi',color:'gray',year:2022,
    drive:function (){
        console.log(`You drive the ${car2.model} car`);
    },  
}
//console.log(car1.model);
car1.drive();

//console.log(car2.model);
car2.drive();
window.name='My window';
console.log(window.name);

class Player{
    score=0;
    pause(){
        console.log('You paused the game');
    }
    exit(){
        console.log('You exited the game');
    }
}
const Player1=new Player(); // important line before calling
const Player2=new Player();

Player1.score+=1;
console.log(Player1.score);
Player1.exit();

Player2.score+=10;
console.log(Player2.score);
Player2.pause();

class Student{

    constructor(name,age,gpa){
        this.name=name;
        this.age=age;
        this.gpa=gpa;
    }
    // study here is a method.
    study(){
        console.log(`${this.name} is on study's`);

    }

}
const Student1=new Student("Robel",22,5.0);
console.log(Student1.name);
console.log(Student1.age);
console.log(Student1.gpa);
Student1.study();


class car{
       static numberOfCars=0;
    constructor(model){
        this.model=model;
        car.numberOfCars+=1;
    }

    static startRace(){
        console.log('3...2.....1....Go!');
    }
}
const carz=new car("Vols and Rols");
const cary=new car("Ford");
const carx=new car("BMW");
console.log(carx.model);
console.log(car.numberOfCars);

car.startRace();
class Animal{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

}
class Rat extends Animal {
    constructor(name,age,runSpeed){
        super(name,age);
        // here we are extending our code so we have 
        // to use super constructor before.
        this.runSpeed=runSpeed;
    }   
}

class Goat extends Animal {
    constructor(name,age,walkSpeed){
        super(name,age);
        this.walkSpeed=walkSpeed;
    } 
}

const rat=new Rat("Guzi",4,44);
const goat=new Goat("Lufa-goat",4,17);
console.log(rat.name);
console.log(rat.age);
console.log(rat.runSpeed);

console.log(goat.name);
console.log(goat.age);
console.log(goat.walkSpeed);

class device{
    constructor (power){
        this._gas=67;
        this._power=power;
    }
    get power(){
        return `${this._power} hp`; // protected property
    }
    /*
    get gas(){
        return `${this._gas} L`; // protected property
    }*/
    set gas(value){
        if(value>50){
            value=50; 
        // if it is above 50 we set it as 50.
        }
        else if(value<0){
            value=0;
        }
        this._gas=value;
    }
}
let device1=new device(450);
device1.gas=-20;
device1._power=1000000; // thsi works
console.log(device1.power);
console.log(device1.gas);