// STEP 1: Get HTML elements setup so we can manipulate them with JS for our quiz
let questionNumber = 0;

console.log(data);
const startscreen = document.getElementById("startscreen");
const startBtn = document.getElementById("startBtn");
const qBox = document.getElementById("qBox");
const choiceBtns = document.getElementById("choiceBtns");
const feedback = document.getElementById("feedback");
// STEP 2: Connect multiple .js files to use separate file for data (questions)

// STEP 3: Hide instructions when game starts then display a question with possible answers
startBtn.addEventListener("click", function () {
  //hide startscreen (instructions etc)


  // $("#startClock").click( function(){
  //   var counter = 5;
  //   setInterval(function() {
  //     counter--;
  //      if (counter >= 0) {
  //         span = document.getElementById("count");
  //         span.innerHTML = counter;
  //      }
  //      if (counter === 0) {
  //         alert('sorry, out of time');
  //         clearInterval(counter);
  //       }
  //     }, 1000);
  // });

  //show 1st question
  qBox.textContent = data[0].question;
  //create the buttons for the possible answers
  choiceBtns.innerHTML = "";
  for (let i = 0; i < data[0].choices.length; i++) {
      // console.log("the function is running!")
    let btn = document.createElement("BUTTON");
    btn.innerHTML = data[0].choices[i];
    choiceBtns.appendChild(btn);
  }
});

// STEP 4: Clicking on an answer will display "Correct!" or "Wrong." in our feedback element
// Add an on click event to the buttons you create
// a method that will check the text/value  of the button and see if it equals the correct answer


// then bring us to the next question
// choiceBtns.addEventListener("click", event => {
//   if text.value === "correct")

// });
//add an event listener that reacts to correct v incorrect displays in feedback

// STEP 5: When all questions are done, prompt user for intiials
