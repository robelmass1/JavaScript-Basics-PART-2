const myButton=document.querySelector('#myButton');
const myImg=document.querySelector('#myImg');
myButton.addEventListener('click',()=>{
    // when clicked it display an arrow function
    if(myImg.style.visibility=='hidden'){
      // if hidden above it be displayed by one below
        myImg.style.visibility='visible';
    }
    else{
        myImg.style.visibility='hidden';
    }
})

const myId=document.getElementById('myId');
window.addEventListener('keydown',move);
let x=0;
let y=0;
function move(event){
   switch(event.key){
    case "ArrowDown":
        y+=5;
        myId.style.top=y +"px";
        break;
    case "ArrowUp":
        y-=5;
        myId.style.top=y +"px";
        break;
    case "ArrowRight":
        x+=5;
        myId.style.left=x +"px";
        break;
    case "ArrowLeft":
        x-=5;
        myId.style.left=x +"px";
        break;
    default:
        break;
   }
}

const theButton=document.getElementById('theButton');
const theAnimation=document.getElementById('theDiv');

theButton.addEventListener('click',begin);
// begin above is a callback.
function begin(){
    let timerId=null;
    let scaleX=1;// 1 means 100%
    let scaleY=1;
    

    timerId= setInterval(frame,7);
    // change every 7 ms.
    function frame(){
       // increement
        if(scaleX>=2||scaleY>=2){
    
            clearInterval(timerId);// stop animation
        }
        else{
            scaleX+=0.02;// 2 %
            scaleY+=0.02;// 2 %
            theAnimation.style.transform="scale("+scaleX+","+scaleY+")"
        
        } 
        /*
        // decreement
        if(scaleX<=0.2||scaleY<=0.2){
            clearInterval(timerId);// stop animation
        }
        else{
            scaleX-=0.02;// 2 %
            scaleY-=0.02;// 2 %
            theAnimation.style.transform="scale("+scaleX+","+scaleY+")"
        
        }  */
    }

}
/*
// canvas is the picture and the frame together
// context is painting in picture frame
let canvas=document.getElementById('myCanvas');
let context=canvas.getContext("2d");
  // DRAW-LINES
context.lineWidth=10;
context.strokeStyle='lightgreen';
context.beginPath();// to begin drawing line
context.moveTo(0,0);// top-left coordinates
context.lineTo(250,250);// to draw line
context.lineTo(250,350);// to draw line
context.lineTo(350,500);// to draw line
context.moveTo(500,0); // top-right 
context.lineTo(250,250);// to draw line
context.moveTo(0,500); // bottom-left
context.lineTo(250,250);// to draw line
context.stroke(); 
*/
/*
let canvas=document.getElementById('myCanvas');
let context=canvas.getContext("2d");

  // Draw Rectangle
// We draw 4 rectangles inside the canvas.
context.strokeStyle='green';
context.lineWidth=10;
context.fillStyle="purple";
context.fillRect(0,0,250,250);
context.strokeRect(0,0,250,250);//left-top-width-height

context.strokeStyle='red';
context.lineWidth=10;
context.fillStyle="green";
context.fillRect(0,250,250,250);
context.strokeRect(0,250,250,250);

context.strokeStyle='orange';
context.lineWidth=10;
context.fillStyle="aqua";
context.fillRect(250,0,250,250);
context.strokeRect(250,0,250,250);

context.strokeStyle='pink';
context.lineWidth=10;
context.fillStyle="darkgreen";
context.fillRect(250,250,250,250);
context.strokeRect(250,250,250,250);

*/
/*
let canvas=document.getElementById('myCanvas');
let context=canvas.getContext('2d');
      // Draw Circle
// (x,y,r,sAngle,eAngle,counterclockwise)
// the above are :
//(start coor.x,start coor.y,radius,startAngle,endAngle,)
// sAngle and eAngle are in radians
context.fillStyle='green';
context.beginPath();
context.arc(250,250,100,0,2*Math.PI);
context.fill();
context.stroke();
*/
let canvas=document.getElementById('myCanvas');
let context=canvas.getContext('2d');
      // Draw Text
context.font="40px MV Boli";
context.fillStyle="violet";//it is same as font color
//context.fillText("I am a success",70,70);
context.textAlign="center";
context.fillText("I am a success",canvas.width/2,canvas.height/2);// to make at center
// The text then top and left coordinates
    
console.dir(window);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.outerWidth);
console.log(window.outerHeight);
// we get the scroll positions
console.log(window.scrollX);
console.log(window.scrollY);

console.log(window.location.href);// this is the location of the window
//window.location.href="https://google.com"; // leads automatically to google when we open this window
console.log(window.location.hostname);// we get the host from the location
// It is local IP address.
console.log(window.location.pathname);// this is landing page.
const myButt=document.querySelector('#toButton');
//myButt.addEventListener('click',()=>window.open());// when clicked open new window.
//myButt.addEventListener('click',()=>window.open("https://google.com"));// when clicked open new window.
//myButt.addEventListener('click',()=>window.close());// closes the current window
myButt.addEventListener('click',()=>window.print()); // we initiate the print of the page we are in.
//window.alert('hello take care!');
//window.confirm('Make sure');
/*
let put=window.prompt('Entet age');
if(put<18){
    window.alert('You must be above 18 to access this page');
    window.close();
}*/

const firstText=document.querySelector("#firstText");
const lastText=document.querySelector("#lastText");
const submitBtn=document.querySelector("#submitBtn");
const cookiesBtn=document.querySelector("#cookiesBtn");

submitBtn.addEventListener('click',()=>{
    setCookie("firstName",firstText.value,365);
    setCookie("lastName",lastText.value,365);
});
cookiesBtn.addEventListener('click',()=>{
    firstText.value=getCookie("firstName");
    lastText.value=getCookie("lastName");
});

function setCookie(name,value,daysToLive){
    const date=new Date();
    date.setTime(date.getTime()+(daysToLive*24*60*60*1000));
    let expiress="expires = "+date.toUTCString();
    document.cookie=`${name}=${value};${expiress};`
}
// to delate cookie
function delateCookie(name){
    setCookie(name,null,null);
}

function getCookie(name){
    const cDecoded=decodeURIComponent(document.cookie);
    const cArray=cDecoded.split(";");
    let result=null;
    cArray.forEach(element=>{
        if(element.indexOf(name)==0){
            result=element.substring(name.length+1);
        }
    })
    return result;
 }
/*
//setCookie("Greater","Love",365);
//setCookie("The","MAN",365);
//getCookie("The");
// delateCookie("Greater");
console.log(document.cookie);
*/