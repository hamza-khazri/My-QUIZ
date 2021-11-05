const api_url = "https://quizapi.io/api/v1/questions?apiKey=YSH1KNbEMiQ1DIKRIQ4pkYIx18oVhLQuEIbAyH8V&category=code&difficulty=Easy&limit=10";



async function getip(){
    const  response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    var i = 0;
    let quest = data[i]['question'];
    console.log(quest);
        let element = document.getElementById('question');
        element.innerHTML = quest;
    let answers = data[i]["answers"];
    //     let answerDiv = document.querySelector(".answers");
    // answers.map(answers =>{
    //     retrun (<div>{answers}</div>);
    // })
}

getip();