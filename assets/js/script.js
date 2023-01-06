var startButton = document.querySelector("#start-button")
var countDown = document.querySelector("#countdown")
// countdown is the text that says "Time left:"
var timer = 60
var questionBox = document.querySelector("#question")
var answerButton1 = document.querySelector("#answer1")
var answerButton2 = document.querySelector("#answer2")
var answerButton3 = document.querySelector("#answer3")
var answerButton4 = document.querySelector("#answer4")
var answers = document.querySelector(".answers")
var message = document.querySelector("#message")
var playerScore = 0
var scoreDisplayed = document.querySelector("#player-score")
var submitButton = document.querySelector("#submitButton")
var initialField = document.querySelector("#initialField")
var highscoreList = document.querySelector("#highscore-list")



// created question objects to call from
var question1 = {
    question: "What is Washington's state nickname?",
    answerOption: {
        a1: "The Evergreen State",
        a2: "The Rainy State",
        a3: "The Nirvana State",
        a4: "The Coffee State"
    }
}
var question2 = {
    question: "Washington is the ___ state.",
    answerOption: {
        a1: "39th",
        a2: "42nd",
        a3: "50th",
        a4: "8th"
    }
}
var question3 = {
    question: "What is the capital of Washington?",
    answerOption: {
        a1: "Seattle",
        a2: "Tacoma",
        a3: "Olympia",
        a4: "Yakima"
    }
}
var question4 = {
    question: "What year did Washington gain its statehood?",
    answerOption: {
        a1: "1928",
        a2: "1808",
        a3: "2005",
        a4: "1889"
    }
}
var question5 = {
    question: "What is Washington's state bird?",
    answerOption: {
        a1: "Goldfinch",
        a2: "American Robin",
        a3: "Steller's Jay",
        a4: "Canada Goose"
    }
}


// 1. create a page that describes the quiz with a start button (card-1)
// - start button leads to quiz (card-2)

startButton.addEventListener("click",function(){
    // add previous data to stored scores and initials
    storedScores = localStorage.getItem("score");
    storedInitials = localStorage.getItem("initials");
    // remove the welcome page
    document.querySelector(".card-1").style.display="none";
    // display quiz
    document.querySelector(".card-2").style.display="flex";
    // 2. present user with a timer that starts counting down and start with the first question
    countDown.innerText = timer;
    setInterval(function(){
        timer--;
        countDown.innerText=timer;
        // changed if statement parameter from (timer === 0) to (timer <= 0) to account for if user goes into the negatives by getting an incorrect statement with less than 10 seconds left.
        if(timer <= 0){
            clearInterval();
            document.querySelector(".card-2").style.display="none";
            document.querySelector(".card-3").style.display="flex";
        } ;
    },"1000")
    setTimeout(function(){
    startQuiz();
    },"1000")
})
// 3. When user selects a question indicate incorrect or correct; move to next question
// - if answer is wrong subtract time from countdown timer
// - complete when all questions are answered or countdown timer reaches 0

// creating functions for switching to next questions
function startQuiz() {
    questionBox.innerText = question1.question;
    answerButton1.innerText = question1.answerOption.a1;
    answerButton2.innerText = question1.answerOption.a2;
    answerButton3.innerText = question1.answerOption.a3;
    answerButton4.innerText = question1.answerOption.a4;
}
function secondQuestion() {
    questionBox.innerText = question2.question;
    answerButton1.innerText = question2.answerOption.a1;
    answerButton2.innerText = question2.answerOption.a2;
    answerButton3.innerText = question2.answerOption.a3;
    answerButton4.innerText = question2.answerOption.a4;
}
function thirdQuestion() {
    questionBox.innerText = question3.question;
    answerButton1.innerText = question3.answerOption.a1;
    answerButton2.innerText = question3.answerOption.a2;
    answerButton3.innerText = question3.answerOption.a3;
    answerButton4.innerText = question3.answerOption.a4;
}
function fourthQuestion() {
    questionBox.innerText = question4.question;
    answerButton1.innerText = question4.answerOption.a1;
    answerButton2.innerText = question4.answerOption.a2;
    answerButton3.innerText = question4.answerOption.a3;
    answerButton4.innerText = question4.answerOption.a4;
}
function fifthQuestion() {
    questionBox.innerText = question5.question;
    answerButton1.innerText = question5.answerOption.a1;
    answerButton2.innerText = question5.answerOption.a2;
    answerButton3.innerText = question5.answerOption.a3;
    answerButton4.innerText = question5.answerOption.a4;
}

function nextQuestion(){
    if (questionBox.innerText === question1.question){
        setTimeout(function(){
            // successfully goes to question 2, but from question 2 it just goes back to 1 and then 2 again *SOLVED by changing assigmnet operator to strict quality
            message.innerText = "";
            secondQuestion();
            },"1000")
    } else if (questionBox.innerText === question2.question){
        setTimeout(function(){
            message.innerText = "";
            thirdQuestion();
    }       ,"1000")
    } else if (questionBox.innerText === question3.question){
        setTimeout(function(){
            message.innerText = "";
            fourthQuestion();
            },"1000")
    } else if (questionBox.innerText === question4.question){
        setTimeout(function(){
            message.innerText = "";
            fifthQuestion();
            },"1000")
    } else if (questionBox.innerText === question5.question){
        setTimeout(function(){
            message.innerText = "";
            // Need to go to last page (card 3) if last question is answered
            document.querySelector(".card-2").style.display="none";
            document.querySelector(".card-3").style.display="flex";
            clearInterval;
            },"1000")
    }}

answers.addEventListener("click",function(event){
    console.log(event) 
    // need to see target data
     if(event.target === answerButton1 && questionBox.innerText === question1.question){
        message.innerText = "Correct!";
        playerScore += 20;
    } else if (event.target === answerButton2 && questionBox.innerText === question2.question){
        message.innerText = "Correct!";
        playerScore += 20;
    } else if (event.target === answerButton3 && questionBox.innerText === question3.question){
        message.innerText = "Correct!";
        playerScore += 20;
    } else if (event.target === answerButton4 && questionBox.innerText === question4.question){
        message.innerText = "Correct!";
        playerScore += 20;
    } else if (event.target === answerButton1 && questionBox.innerText === question5.question){
        message.innerText = "Correct!";
        playerScore += 20;
    } else {
        message.innerText = "Incorrect";
        timer -= 10;
    }
    nextQuestion();
    scoreDisplayed.innerText = playerScore;
    localStorage.setItem("score", playerScore)
// PROBLEM: it switches to question 2 but then goes back to question 1
    // Reason: Had startQuiz function inside the setInterval on the start button, so it was automatically resetting every 1 sec
})


// answers.addEventListener("click",function(event){
// PROBLEM: while this event click is active the previous event click is somehow removed; when I click any button on question 1 I get the incorrect message, but when I click the correct button on question 2 I get the correct message; telling me that this event click is overwriting the previous
// *SOLVED by putting the click event code into the if statement in the previous click event

// 4. present user with score and option to submit score with intials

// function for determining score
// *correction* I didn't need a function; instead added a var for player's score, set to 0 and added to it for each correct answer. Now need to test to make sure it won't add for incorrect answers *successful

var savedScores = []

// submitButton.addEventListener("click", function(event){
//     event.preventDefault;
//     // move to card 4
//     document.querySelector(".card-3").style.display="none";
//     document.querySelector(".card-4").style.display="flex";
//     // save initials
//     localStorage.setItem("Initials", initialField.value);
//     // add list item including intitials + score
//     var initialsSaved = localStorage.getItem("Initials")
//     var scoreSaved = localStorage.getItem("score")
//     var finalizedScore = initialsSaved + " - " + scoreSaved + "%";

//     scoreList.appendChild(document.createTextNode(finalizedScore));
//     highscoreList.appendChild(scoreList);
    
//     savedScores.push(finalizedScore);

//     JSON.parse(localStorage.getItem("savedScores"));
    
//     localStorage.setItem("savedScores", JSON.stringify(savedScores));
    
// // TODO: need to include the user's initials they submit in text area on the final card
// })
submitButton.addEventListener("click", function(event){
    event.preventDefault;
    // move to card 4
    document.querySelector(".card-3").style.display="none";
    document.querySelector(".card-4").style.display="flex";
    // save initials
    var initial = initialField.value.trim();
    var finalizedScore = initial + " - " + playerScore + "%"
    if (initial === ""){
        return;
    };

    savedScores.push(finalizedScore);
    
    storedList ()
    renderList ()
    
// TODO: need to include the user's initials they submit in text area on the final card
})


function storedList () {
    localStorage.setItem("savedScores", JSON.stringify(savedScores));
}

function renderList () {
     highscoreList.innerHTML = "";
     for (let i = 0; i < savedScores.length; i++){
        var listedScores = savedScores[i];
        console.log(listedScores);
        var scoreList = document.createElement("li");
        scoreList.textContent = listedScores;
        highscoreList.appendChild(scoreList);
     }
}

function run() {
    var storedStuff = JSON.parse(localStorage.getItem("savedScores")); 
    if (storedStuff !== null) {
        savedScores = storedStuff
    }
}

run()


