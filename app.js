const api_url = "https://quizapi.io/api/v1/questions?apiKey=YSH1KNbEMiQ1DIKRIQ4pkYIx18oVhLQuEIbAyH8V&category=code&difficulty=Easy&limit=10";



async function getip(){
    const  response = await fetch(api_url);
    const data = await response.json();
        var i = 0;
        var quest = data[i]['question'];
    console.log(quest);
let element = document.getElementById('question');
element.innerHTML = quest;

}

document.getElementById('start-btn').addEventListener("click",()=>{
    document.getElementById('quiz').style.display = "inline";
});
getip();