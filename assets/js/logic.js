// STEP 1: Get HTML elements setup so we can manipulate them with JS for our quiz
let questionNumber = 0;
let timer = 60;
let startClock = document.getElementById("startClock");

// console.log(data);
const startscreen = document.getElementById("startscreen");
const startBtn = document.getElementById("startBtn");
const qBox = document.getElementById("qBox");
const choiceBtns = document.getElementById("choiceBtns");
const feedback = document.getElementById("feedback");
// const startClock = document.getElementById("startClock");


// STEP 2: Connect multiple .js files to use separate file for data (questions)
function setTimer() {
  const myTimer = setInterval(function() {
    // timer--
      if (timer <= 0) {
      clearInterval(myTimer);
      feedback.textContent = timer + " seconds left!";
      console.log(timer);
      };
  }, 1000);
};


// STEP 3: Hide instructions when game starts then display a question with possible answers
startscreen.addEventListener("click", function() {
  onClick = this.style.visibility='hidden';
});

setTimer();

// STEP 4: Show question and answer button

startBtn.addEventListener("click", function() {
  //hide startscreen (instructions etc)
  // onClick = "this.style.visibility= 'hidden';"

  //show 1st question
  qBox.textContent = data[0].question;
  //create the buttons for the possible answers
  choiceBtns.innerHTML = "";
  for (let i = 0; i < data[0].choices.length; i++) {
      // console.log("the function is running!")
    let btn = document.createElement("BUTTON");
    btn.innerHTML = data[0].choices[i];
    choiceBtns.appendChild(btn);
    // btn.onClick ("click", function() {
    //   if (this.textContent === data[0].answer)
    //   feedback.value = ("Correct!") 
    //   else 
    //   feedback.value = ("Wrong!")
    // });
  };
});






// STEP 4: Clicking on an answer will display "Correct!" or "Wrong." in our feedback element
// Add an on click event to the buttons you create
// a method that will check the text/value  of the button and see if it equals the correct answer
choiceBtns.addEventListener("click", function() {
  console.log(this.textContent);
  // element.className += 'className';
  if (this.textContent === data[0].answer)
  feedback.value = ("Correct!")
  else
  feedback.value = ("Wrong!")
});


// then bring us to the next question
// choiceBtns.addEventListener("click", event => {
//   if text.value === "correct")

// });
//add an event listener that reacts to correct v incorrect displays in feedback

// STEP 5: When all questions are done, prompt user for intiials
