var startButton = document.querySelector("#start-button")
var countDown = document.querySelector("#countdown")
var timer = 180


// 1. create a page that describes the quiz with a start button (card-1)
// - start button leads to quiz (card-2)

startButton.addEventListener("click",function(){
    // remove the welcome page
    document.querySelector(".card-1").style.    display="none";
    // display quiz
    document.querySelector(".card-2").style.display="block";
    countDown.innerText = timer;
    setInterval(function(){
        timer--;
        countDown.innerText=timer;
        if(timer === 0){
            clearInterval();
            document.querySelector(".card-2").style.display="none";
            document.querySelector(".card-3").style.display="block";
        }
    },"1000")
})





// 2. present user with a timer that starts counting down and start with the first question
// 3. When user selects a question indicate incorrect or correct; move to next question
// - if answer is wrong subtract time from countdown timer
// - complete when all questions are answered or countdown timer reaches 0
// 4. present user with score and option to submit score with intials
// - if user chooses to, move to highscore page