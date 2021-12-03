const api_url = "https://quizapi.io/api/v1/questions?apiKey=YSH1KNbEMiQ1DIKRIQ4pkYIx18oVhLQuEIbAyH8V&category=code&difficulty=Easy&limit=10";
console.log("appp.js is working");
 
document.getElementById('start-btn').addEventListener("click",()=>{
    delete i;
    document.getElementById('score').style.display ="none"; 
    i = 0;
    getip(i);
});

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
            box.style.display="inline";
            l.textContent = array[j];
            let prop = j + "_correct";
            box.setAttribute('value',data[i]["correct_answers"][prop]);
        }
    } 
}

 function round(i,data,score){
    console.log(i);
    if(i >= 10){
        delete i;
        document.getElementById('quiz').style.display = "none";
        var final = 0;
        for (var one in score ){
            if (score[one]== 'true'){
                final++;
            }
        }
        let scoreDiv = document.getElementById('score');
        scoreDiv.style.display ="block";
        if (final <4){
            scoreDiv.style.background =" red";
        }else if (final >7){
            scoreDiv.style.background =" green";
        }else{
            scoreDiv.style.background ="orange";

        }
        scoreDiv.textContent = "your score is "+ final + "/10";
        return;
    }else{
    let quest = data[i]['question'];
    let element = document.getElementById('question');
    element.textContent = quest;
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
    
}


function reset() {
    var radios = document.querySelectorAll(".radios");
    var labels = document.querySelectorAll(".ans-label");
    var index = 0, length = labels.length;
    for ( ; index < length; index++) {
        labels[index].textContent = "";
        radios[index].style.display="none";
        radios[index].checked =false;
    }
}

async function getip(i){
    const  response = await fetch(api_url);
    const data = await response.json();
    console.log(data,"data is working");
    var score = [];
    round(i,data,score);
    i++;
        document.querySelector('.answer-btn').addEventListener("click",()=>{
            reset();
            round(i,data,score);
            if (i<=9){i++;}else{i=0;};
        });
        
}


