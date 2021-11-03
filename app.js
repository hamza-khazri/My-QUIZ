const api_url = "https://quizapi.io/api/v1/questions?apiKey=YSH1KNbEMiQ1DIKRIQ4pkYIx18oVhLQuEIbAyH8V&category=code&difficulty=Easy&limit=10";



async function getip(){
    const  response = await fetch(api_url);
    const data = await response.json();
        var i = 0;
        let quest = data[i]['question'];
    console.log(quest);
let element = document.getElementById('question');
element.innerHTML = quest;
    let answors = data[i]["answors"];
    for (var  j in answors){
        console.log(answors[j]);
    }
}

document.getElementById('start-btn').addEventListener("click",()=>{
    document.getElementById('quiz').style.display = "inline";
});
getip();





const typed = document.getElementById("title-text");
const cursor = document.querySelector(".cursor");

const textArray = ["learn","have fun","grow your knowlage"];
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
