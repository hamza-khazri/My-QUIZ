const api_url = "https://quizapi.io/api/v1/questions?apiKey=YSH1KNbEMiQ1DIKRIQ4pkYIx18oVhLQuEIbAyH8V&category=code&difficulty=Easy&limit=10";
console.log("appp.js is working");


function answersManipulation(array) {
    // const div = docuement.querySelector('.answers');
    console.log(array,'answers are working');
    var counter = 0;
    var name ='';
    var div = '';
    for (j in array){
        counter++;
        name = 'l'+ counter;
        divState = 'd'+ counter;
        console.log(divState)
        var l = document.getElementById(name);
        var box = document.getElementById(counter);
        var div = document.getElementById(divState);
        if (array[j] != null){
            div.style.display="block";
            l.textContent = array[j];
            box.setAttribute('value',j);
        }
    }
    console.log("end");
}

function round(i,data){
    let quest = data[i]['question'];
    console.log(quest);
    let element = document.getElementById('question');
    element.innerHTML = quest;
    let answers = data[i]["answers"];
    answersManipulation(answers);
}

async function getip(){
    const  response = await fetch(api_url);
    const data = await response.json();
    console.log(data,"data is working");
    var i = 0;
    document.getElementById('start-btn').addEventListener("click",()=>{
        round(i,data);
        i++;
    });
    document.querySelector('.answer-btn').addEventListener("click",()=>{
        round(i,data);
        i++;
    });
}




getip();