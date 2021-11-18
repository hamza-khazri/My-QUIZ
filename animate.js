
//--------------------header animation-----------------------------
const typed = document.getElementById("title-text");
const cursor = document.querySelector(".cursor");

const textArray = ["learn","have fun","grow your knowlege"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textI = 0;
let charI = 0;

function type(){
    if(charI < textArray[textI].length){
        if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typed.textContent += textArray[textI].charAt(charI);
        charI++;
        setTimeout(type,typingDelay);
    }else{
        cursor.classList.remove("typing");
        setTimeout(erase,newTextDelay);
    }
}
function erase(){
    if(charI>0){
        if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
        typed.textContent = textArray[textI].substring(0,charI-1);
        charI--;
        setTimeout(erase,erasingDelay);
    }else{
        cursor.classList.remove("typing");
             textI++;
             if(textI>=textArray.length) textI=0;
             setTimeout(type,typingDelay + 1100);
        }
}


document.addEventListener("DOMContentLoaded",()=>{
    setTimeout(type,newTextDelay + 250);
});


//----------------------------------------------------------
document.getElementById('start-btn').addEventListener("click",()=>{
    document.getElementById('quiz').style.display = "inline";
});
//---------------show and hide --nav-----------------------
function showmenu(){
    var navlinks = document.querySelector(".nav-links");
    navlinks.style.right ="0";
}
function hidemenu(){
    var navlinks = document.querySelector(".nav-links");
   navlinks.style.right ="-200px";
}