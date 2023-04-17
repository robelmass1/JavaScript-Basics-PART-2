const myLabel=document.getElementById('myLabel');
update();
setInterval(update,1000);
// changes every one seconds

function update(){
    let date=new Date();
    myLabel.innerHTML=formatTime(date);
   // myLabel.innerHTML=date;
    
    function formatTime(date){
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();
        let amOrpm=hours>=12?"pm":"am";

        hours=(hours%12)||12;

        hours=formatZero(hours);
        minutes=formatZero(minutes);
        seconds=formatZero(seconds);

        return`${hours} : ${minutes} : ${seconds}  ${amOrpm}`
    }
    // for one digit like 1 second to make it 01 we use 
    // the steps shown below.
    function formatZero(time){
        time=time.toString();
        return time.length<2?"0"+time:time;
    }

}
/*
console.log('start');
setTimeout(()=>console.log('This is asynchronous'),2000);
// step 3 doesn't need to wait step 2 to finish here.
console.log('end');
*/

console.time("Response time");// start
//alert('Click the OK button');
setTimeout(()=>console.log('It takes time'),2000);
console.timeEnd("Response time");// end

const wait=time=>new Promise(resolve=>{
    setTimeout(resolve,time);
});

wait(3000).then(()=>console.log('Thanks for waiting time'));

// we have callback for resolve and reject

async function loadFile(){
    // no need to call resolve or reject 
    let fileLoaded=false;
    if(fileLoaded){
        return "File is loaded";
    }
    else{
        throw "File is not loaded";
    }
}   

async function startProcess(){
    try{
        let message= await loadFile();
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
startProcess();


//import{PI,getCircumfrance,getArea}from "./math_ut_8.js";
/*
import * as MathUtil from "./math_ut_8.js";
console.log(MathUtil.PI);
let circumfrance=MathUtil.getCircumfrance(10);
console.log(circumfrance);
*/

console.dir(document); // tell all properties of DOM
console.log(document.title); // tell title 
console.log(document.URL); // tell URL
document.title="Part-8 is here"; // change title
document.location-"http://www.google.com";// takes to google

//document.body.style.backgroundColor="skyblue";
// changes the background color of our html page.
//document.getElementById('myTitle').style.color='green';

let element=document.getElementById('myMenu');
element.style.backgroundColor="lightblue";
let fruits=document.getElementsByName('fruits');
// same radio button items have the same name
console.log(fruits[2]);
//we get a node list of items. We access like an array.
fruits.forEach(fruit=>{
    if(fruit.checked){
        console.log(fruit.value);
    }
})

let vegetables=document.getElementsByTagName("li");
vegetables[0].style.backgroundColor="lightgreen";
vegetables[1].style.backgroundColor="lightblue";
vegetables[2].style.backgroundColor="red";

let des=document.getElementsByClassName('dessert');
des[0].style.backgroundColor='lightgreen';

//let eleme=document.querySelector("#myMenu"); // id
// let eleme=document.querySelector("li"); // TagName
// we can pass id,classname,tag name or attribute
// we put # before id names.
// we put . before className used in division.


//let eleme=document.querySelectorAll("li");// TagName for list
//let eleme=document.querySelectorAll(".dessert");// ClassName for division
let eleme=document.querySelectorAll("[for]");// id  
//eleme.style.backgroundColor="purple";
eleme.forEach(element=>{
    element.style.backgroundColor="yellow";  
});


