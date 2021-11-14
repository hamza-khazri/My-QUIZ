const api_url = "https://quizapi.io/api/v1/questions?apiKey=YSH1KNbEMiQ1DIKRIQ4pkYIx18oVhLQuEIbAyH8V&category=code&difficulty=Easy&limit=10";
console.log("appp.js is working");


function answersManipulation(array,data,i) {

    var counter = 0;
    var name ='';
    var div = '';
    for (j in array){
        counter++;
        name = 'l'+ counter;
        divState = 'd'+ counter;
        var l = document.getElementById(name);
        var box = document.getElementById(counter);
        var div = document.getElementById(divState);
        if (array[j] != null){
            div.style.display="block";
            l.textContent = array[j];
            let prop = j + "_correct";
            console.log(i);
            box.setAttribute('value',data[i]["correct_answers"][prop]);
        }
    } 
}

 function round(i,data,score){
 
    if(i >= 10){
        document.getElementById('quiz').style.display = "none";
        var final = 0;
        for (var one in score ){
            if (score[one]== 'true'){
                final++;
            }
        }
        let scoreDiv = document.getElementById('score');
        scoreDiv.innerHTML = "your score is "+ final + "/10";
        return;
    }
    let quest = data[i]['question'];
    let element = document.getElementById('question');
    element.innerHTML = quest;
    let answers = data[i]["answers"];
    answersManipulation(answers,data,i);
    //-----------checked----verif------------------------
    var radios = document.forms["f"].elements["ans"];
    for(radio in radios) {
        radios[radio].onclick = function() {
        score[i]=[this.value];
        }
    }
    
}

async function getip(){
    const  response = await fetch(api_url);
    const data = await response.json();
    console.log(data,"data is working");
    var i = 0;
    let score = [];
        document.getElementById('start-btn').addEventListener("click",()=>{
            round(i,data,score);
            i++;
        });
        document.querySelector('.answer-btn').addEventListener("click",()=>{
            round(i,data,score);
            i++;
        });
}


getip();