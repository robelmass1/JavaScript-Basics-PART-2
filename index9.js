/*
let element=document.querySelectorAll("#vegetables");
element.forEach(eleme=>{
    eleme.style.backgroundColor='lightgreen'; 
});
*/
//let child=element.firstElementChild;
// if we make it lastElementChild it gets the script
// file we have at the end of the class not the ul.
// console.log(child);
//child.style.backgroundColor='lightgreen';
//let element=document.querySelector("#vegetables");
//let sibling=element.nextElementSibling;
// makes the one after called to be selected.
// let child=element.lastElementChild;
// makes the one before called to be selected.
let element=document.querySelector("#vegetables");
let children=Array.from(element.children);
children.forEach(child=>child.style.backgroundColor="yellow");


const nameTag=document.createElement("h1");
nameTag.textContent='#:Hash-Tak';
document.body.append(nameTag);

const myList=document.querySelector('#fruit');
const listItem=document.createElement('li');
listItem.textContent="mango";
//myList.append(listItem); // at end
//myList.prepend(listItem);  // at beginning
myList.insertBefore(listItem,myList.getElementsByTagName("li")[2]);
// we add the listItem in index number 2

const header=document.getElementById('myHeader');
header.style.backgroundColor='rgb(20,120,20)';
header.style.color='rgb(40,250,100)';
header.style.fontFamily='consolas';
header.style.textAlign='center';
header.style.border='2px dotted';
header.style.display='none'; // hides it
header.style.display='block';// shows it
//const button=document.getElementById('myButt');
//button.onclick=doSomething;

//const ele=document.body;
//ele.onload=doSomething;// works when the page is loading
const elem=document.getElementById('myText');
// The text displays when we bring a change on it.
elem.onchange=doSomething;
function doSomething(){
    alert('You can do something');
}

const elu=document.getElementById('myDiv');
//elu.onmouseout=didSomethingElse;
//elu.onmouseover=didSomething;
elu.onmouseup=didSomethingElse;
elu.onmousedown=didSomething;
// we have onmouseup,leave,enter,move,out,over...
function didSomething(){
    elu.style.backgroundColor='yellow';
}
function didSomethingElse(){
    elu.style.backgroundColor='purple';
}

const innerDiv=document.getElementById('innerDiv');
const outerDiv=document.getElementById('outerDiv');

innerDiv.addEventListener('click',changeBlue);
outerDiv.addEventListener('click',changeBlue);
// outerDiv.addEventListener('click',changeBlue,true);
// The above makes outer element true
// This is the use of capture when two events are
// waiting for the same response we specify which
// one comes first. 
function changeBlue(){
    // to check wheather inner or outer is clicked first
    alert(`You selected ${this.id}`);
    this.style.backgroundColor='lightblue';
}