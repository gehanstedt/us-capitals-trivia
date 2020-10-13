const penaltyTime = 10;
const targetNumberOfQuestionsString = "seven";
const defaultTargetNumberOfQuestions = 7;
var targetNumberOfQuestions;
var startingAmountOfTime = 60;

var quizTimerInterval;
var secondsElapsed;
var secondsRemaining;
var modeCounting;

var questionArray = [];
var buttonBegin = document.querySelector("#buttonBegin");
var buttonGoBack1 = document.querySelector("#goBack1");
var buttonGoBack2 = document.querySelector("#goBack2");
var buttonHighScoreSubmit = document.querySelector("#highScoreSubmit");
var inputWinnersName = document.querySelector("#winnersName");
var sectionWelcome = document.querySelector("#welcome");
var sectionMainTrivia = document.querySelector("#mainTrivia");
var sectionResultsWinner = document.querySelector("#resultsWinner");
var sectionResultsLoser = document.querySelector("#resultsLoser");
var sectionHighScores = document.querySelector("#highScores");
var spanNumberQuestions = document.querySelector("#numberQuestions");
var spanPenaltyLength = document.querySelector("#penaltyLength");
var headerBar1 = document.querySelector(".headerBar1");
var headerBar2 = document.querySelector(".headerBar2");
var timerBar = document.querySelector("#timerBar");
var ulAnswerList = document.querySelector(".answerList");
var questionText = document.querySelector("#questionText");
var answerStatusArea = document.querySelector("#answerStatusArea");
var answerStatus = document.querySelector("#answerStatus");
var timeID = document.querySelector("#time");
var totalSecondsID = document.querySelector("#totalSeconds");
var penaltyTimeID = document.querySelector("#penaltyTime");
var myScoreHeading = document.querySelector(".myScoreHeading");
var myScoreBody = document.querySelector(".myScoreBody");
var showCorrectAnswerTimerInterval;
var showPenaltyTimerInterval;

var currentCorrectAnswer;
var randomQuestionSelection = [];
var questionNumber;

var highScoreArray = [];

function buildRandomArray (numberOfElements, minimumValue, maximumValue) {
  var fullArray = [];
  var randomArray = [];
  var count;
  var randomNumber;
  
  for (count = minimumValue; count <= maximumValue; count++) {
    fullArray.push (count);
  }

  for (count = 0; count < numberOfElements; count ++) {
    randomNumber = Math.floor (Math.random() * fullArray.length);
    randomArray.push (fullArray.splice (randomNumber, 1));
  }

  return randomArray;
}

function clearLastQuestion () {
  while (ulAnswerList.hasChildNodes ()) {
    ulAnswerList.removeChild(ulAnswerList.childNodes[0]);           // Remove <ul>'s first child node (index 0)
  }
}

function showQuestion () {
  var questionString;
  var questionPosition = randomQuestionSelection.splice (0, 1)[0];
  var randomAnswerArray = buildRandomArray (4, 0, 3);
  var answerLetter = 'a';
  var answerLineString;
  var answerString;
  var liElement;
  var buttonElement;

  console.log ("Question position: " + questionPosition);
  clearLastQuestion ();

  questionNumber++;
  questionString = "Q" + questionNumber + ": What is the capital of " + questionArray [questionPosition].state + "?";
  questionText.textContent = questionString;
  currentCorrectAnswer = questionArray[questionPosition].answer;

  // Display possible answers
  for (var count = 0; count < 4; count++) {
    numericAnswerToDisplay = randomAnswerArray [count][0];

    switch (numericAnswerToDisplay) {
      case 0:
        answerString = questionArray[questionPosition].answer;
        break;
      
      case 1:
        answerString = questionArray[questionPosition].wrong0;
        break;

      case 2:
        answerString = questionArray[questionPosition].wrong1;
        break;
  
      case 3:
        answerString = questionArray[questionPosition].wrong2;
        break;
    }

    console.log (answerString);

    answerLineString = answerLetter + ". " + answerString;
    liElement = document.createElement("li");
    liElement.setAttribute ("class", "answerListItem");
    ulAnswerList.appendChild (liElement);
  
    buttonElement = document.createElement ("button");
    buttonElement.setAttribute ("class", "btn btn-primary answerButton");
    buttonElement.setAttribute ("value", answerString);
    buttonElement.setAttribute ("id", "answerButton");
    buttonElement.textContent = answerLineString;
    liElement.appendChild (buttonElement);

    answerLetter = String.fromCharCode(answerLetter.charCodeAt(0) + 1); 
  }

  console.log (randomAnswerArray);
}

function updateMessage () {
  spanPenaltyLength.textContent = penaltyTime;
  spanNumberQuestions.textContent = targetNumberOfQuestionsString;
  totalSecondsID.textContent = startingAmountOfTime;
  timeID.textContent = startingAmountOfTime;
  penaltyTimeID.textContent = penaltyTime;
}

function beginQuiz () {
  showSection ("mainTrivia");
  randomQuestionSelection = buildRandomArray (targetNumberOfQuestions, 0, questionArray.length - 1);
  showQuestion ();
  secondsElapsed = 0;
  modeCounting = false;
  startTimer ();
}

function startTimer () {
  if (!modeCounting) {
    quizTimerInterval = setInterval (function () {
      secondsElapsed++;
      secondsRemaining = startingAmountOfTime - secondsElapsed;

      timeID.textContent = secondsRemaining;

      if (secondsRemaining <= 0) {
        clearInterval (quizTimerInterval);
        showSection ("resultsLoser");
      }
    }, 1000)
  }

  modeCounting = true;
}

function showTimer (showIt) {
  if (showIt) {
    timerBar.setAttribute("style", "visibility: visible");
  }

  else {
    timerBar.setAttribute("style", "visibility: hidden");
  }
}

function showPenaltyBar (showIt) {
  if (showIt) {
    penaltyBar.setAttribute("style", "visibility: visible");
  }

  else {
    penaltyBar.setAttribute("style", "visibility: hidden");
  }
}

function showAnswerStatusArea (showIt) {
  if (showIt) {
    answerStatusArea.setAttribute("style", "visibility: visible");
  }

  else {
    answerStatusArea.setAttribute("style", "visibility: hidden");
  }
}


function showSection (sectionToShow) {
  sectionWelcome.setAttribute("style", "display: none");
  sectionMainTrivia.setAttribute("style", "display: none");
  sectionResultsWinner.setAttribute("style", "display: none");
  sectionResultsLoser.setAttribute("style", "display: none");
  sectionHighScores.setAttribute("style", "display: none");
  headerBar1.setAttribute("style", "display: none");
  headerBar2.setAttribute("style", "display: none");
  
  switch (sectionToShow) {
    case "welcome":
      headerBar1.setAttribute("style", "display: block");
      sectionWelcome.setAttribute("style", "display: block");
      showTimer (false);
      break;

    case "mainTrivia":
      sectionMainTrivia.setAttribute("style", "display: block");
      headerBar1.setAttribute("style", "display: block");
      headerBar2.setAttribute("style", "display: block");
      showTimer (true);
      break;

      case "resultsWinner":
      sectionResultsWinner.setAttribute("style", "display: block");
      break;

      case "resultsLoser":
      sectionResultsLoser.setAttribute("style", "display: block");
      break;

      case "highScores":
      sectionHighScores.setAttribute("style", "display: block");
      break;
  }
}

// Handle when answer is clicked
ulAnswerList.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    if (event.target.value === currentCorrectAnswer) {
      answerStatus.textContent = "Correct!";      
    }

    else {
      answerStatus.textContent = "Wrong!";
      showPenaltyBar (true);
      secondsElapsed += penaltyTime;

      showPenaltyTimerInterval = setInterval (function () {
        clearInterval (showPenaltyTimerInterval);
        showPenaltyBar (false);
      }, 750);
    }

    showAnswerStatusArea (true);

    showCorrectAnswerTimerInterval = setInterval (function () {
      clearInterval (showCorrectAnswerTimerInterval);
      showAnswerStatusArea (false);
    }, 750)
  }

  if (questionNumber < targetNumberOfQuestions) {
    showQuestion ();  
  }

  else {
    clearInterval (quizTimerInterval);
    showSection ("resultsWinner");
    myScoreHeading.textContent = secondsRemaining;
    myScoreBody.textContent = secondsRemaining;
  }
});

// This is no longer referenced.  It was used to load some fake highscore data
function loadHighScoreArrayFakeData () {
  highScoreArray = [
    {
      "score": 25,
      "winnersName": "NN25"
    },
  
    {
      "score": 40,
      "winnersName": "NN40"
    },
  
    {
      "score": 2,
      "winnersName": "NN02"
    },
  ];
}

function loadHighScoreArray () {
  highScoreArray = JSON.parse(localStorage.getItem("GDOG-US-State-Capitals-Quiz"));
}

function addHighScore () {
  var winnersName = "";
  var firstTry = true;

  while (winnersName === "") {
    if (!firstTry) {
      alert ("Be proud!  Please enter your name, or make something up.");
    }

    winnersName = inputWinnersName.value;
    firstTry = false;
  }

  addHighScoreToArray (winnersName, secondsRemaining);
  showSection ("highScores");

}

function sortHighScoreArray () {
  highScoreArray = highScoreArray.sort((c1, c2) => (c1.score < c2.score) ? 1 : (c1.score > c2.score) ? -1 : 0);
}

function addHighScoreToArray (winnersName, score) {
  var count = 0;
  var stopPoint = false;
  var newEntry = {
    "score": score,
    "winnersName": winnersName
  }

  highScoreArray.push (newEntry);
  sortHighScoreArray ();
  localStorage.setItem("GDOG-US-State-Capitals-Quiz", JSON.stringify(highScoreArray));
}

/*
function addHighScoreToArray (winnersName, score) {
  var count = 0;
  var stopPoint = false;

  if (highScoreArray.length == 0) {
    stopPoint = true;
  }

  while (!stopPoint) {
    if (highScoreArray [count].score >= score) {
      count ++
    }

    else {
      stopPoint = true;
    }

    if (count === highScoreArray.length - 1) {
      stopPoint = true;
    }
  }

  highScoreArray.splice
}
*/

function resetGame () {
  showSection ("welcome");
  updateMessage ();
  showAnswerStatusArea (false);
  modeCounting = false;
  questionNumber = 0;
  targetNumberOfQuestions = defaultTargetNumberOfQuestions;
}

loadQuestionArray ();
loadHighScoreArray ();
resetGame ();

buttonBegin.addEventListener("click", beginQuiz);
buttonHighScoreSubmit.addEventListener("click", addHighScore);
buttonGoBack1.addEventListener("click", resetGame);
buttonGoBack2.addEventListener("click", resetGame);

function loadQuestionArray () {
  questionArray = [
    {
      "state": "Alabama",
      "answer": "Montgomery",
      "wrong0": "Birmingham",
      "wrong1": "Huntsville",
      "wrong2": "Mobile"
    },

    {
      "state": "Alaska",
      "answer": "Juneau",
      "wrong0": "Anchorage",
      "wrong1": "Fairbanks",
      "wrong2": "Wasilla"
    },

    {
      "state": "Arizona",
      "answer": "Phoenix",
      "wrong0": "Tucson",
      "wrong1": "Mesa",
      "wrong2": "Chandler"
    },

    {
      "state": "Arkansas",
      "answer": "Little Rock",
      "wrong0": "Fort Smith",
      "wrong1": "Fayetteville",
      "wrong2": "Bentonville"
    },

    {
      "state": "California",
      "answer": "Sacramento",
      "wrong0": "Los Angeles",
      "wrong1": "San Diego",
      "wrong2": "San Francisco"
    },

    {
      "state": "Colorado",
      "answer": "Denver",
      "wrong0": "Colorado Springs",
      "wrong1": "Aurora",
      "wrong2": "Fort Collins"
    },

    {
      "state": "Connecticut",
      "answer": "Hartford",
      "wrong0": "Bridgeport",
      "wrong1": "New Haven",
      "wrong2": "Stamford"
    },

    {
      "state": "Delaware",
      "answer": "Dover",
      "wrong0": "Wilmington",
      "wrong1": "Newark",
      "wrong2": "Middletown"
    },

    {
      "state": "Florida",
      "answer": "Tallahassee",
      "wrong0": "Jacksonville",
      "wrong1": "Miami",
      "wrong2": "Tampa"
    },

    {
      "state": "Georgia",
      "answer": "Atlanta",
      "wrong0": "Columbus",
      "wrong1": "Savannah",
      "wrong2": "Augusta"
    },

    {
      "state": "Hawaii",
      "answer": "Honolulu",
      "wrong0": "Pearl City",
      "wrong1": "East Honolulu",
      "wrong2": "Hilo"
    },

    {
      "state": "Idaho",
      "answer": "Boise",
      "wrong0": "Meridian",
      "wrong1": "Nampa",
      "wrong2": "Idaho Falls"
    },

    {
      "state": "Illinois",
      "answer": "Springfield",
      "wrong0": "Chicago",
      "wrong1": "Aurora",
      "wrong2": "Naperville"
    },

    {
      "state": "Indiana",
      "answer": "Indianapolis",
      "wrong0": "Fort Wayne",
      "wrong1": "Evansville",
      "wrong2": "South Bend"
    },

    {
      "state": "Iowa",
      "answer": "Des Moines",
      "wrong0": "Cedar Rapids",
      "wrong1": "Davenport",
      "wrong2": "Sioux City"
    },

    {
      "state": "Kansas",
      "answer": "Topeka",
      "wrong0": "Wichita",
      "wrong1": "Overland Park",
      "wrong2": "Kansas City"
    },

    {
      "state": "Kentucky",
      "answer": "Frankfort",
      "wrong0": "Louisville",
      "wrong1": "Lexington",
      "wrong2": "Bowling Green"
    },

    {
      "state": "Lousiana",
      "answer": "Baton Rouge",
      "wrong0": "New Orleans",
      "wrong1": "Shreveport",
      "wrong2": "Lafayette"
    },

    {
      "state": "Maine",
      "answer": "Augusta",
      "wrong0": "Portland",
      "wrong1": "Lewiston",
      "wrong2": "Bangor"
    },

    {
      "state": "Maryland",
      "answer": "Annapolis",
      "wrong0": "Baltimore",
      "wrong1": "Columbia",
      "wrong2": "Germantown"
    },

    {
      "state": "Massachusetts",
      "answer": "Boston",
      "wrong0": "Worcester",
      "wrong1": "Springfield",
      "wrong2": "Cambridge"
    },

    {
      "state": "Michigan",
      "answer": "Lansing",
      "wrong0": "Detroit",
      "wrong1": "Grand Rapids",
      "wrong2": "Ann Arbor"
    },

    {
      "state": "Minnesota",
      "answer": "St. Paul",
      "wrong0": "Minneapolis",
      "wrong1": "Rochester",
      "wrong2": "Duluth"
    },

    {
      "state": "Mississippi",
      "answer": "Jackson",
      "wrong0": "Gulfport",
      "wrong1": "Southaven",
      "wrong2": "Biloxi"
    },

    {
      "state": "Missouri",
      "answer": "Jefferson City",
      "wrong0": "Kansas City",
      "wrong1": "St. Louis",
      "wrong2": "Springfield"
    },

    {
      "state": "Montana",
      "answer": "Helena",
      "wrong0": "Billings",
      "wrong1": "Missoula",
      "wrong2": "Bozeman"
    },

    {
      "state": "Nebraska",
      "answer": "Lincoln",
      "wrong0": "Omaha",
      "wrong1": "Bellevue",
      "wrong2": "Grand Island"
    },

    {
      "state": "Nevada",
      "answer": "Carson City",
      "wrong0": "Las Vegas",
      "wrong1": "Henderson",
      "wrong2": "Reno"
    },

    {
      "state": "New Hampshire",
      "answer": "Concord",
      "wrong0": "Manchester",
      "wrong1": "Nashua",
      "wrong2": "Dover"
    },

    {
      "state": "New Jersey",
      "answer": "Trenton",
      "wrong0": "Newark",
      "wrong1": "Jersey City",
      "wrong2": "Paterson"
    },

    {
      "state": "New Mexico",
      "answer": "Santa Fe",
      "wrong0": "Albuquerque",
      "wrong1": "Las Cruces",
      "wrong2": "Rio Rancho"
    },

    {
      "state": "New York",
      "answer": "Albany",
      "wrong0": "New York City",
      "wrong1": "Buffalo",
      "wrong2": "Rochester"
    },

    {
      "state": "North Carolina",
      "answer": "Raleigh",
      "wrong0": "Charlotte",
      "wrong1": "Greensboro",
      "wrong2": "Durham"
    },

    {
      "state": "North Dakota",
      "answer": "Bismarck",
      "wrong0": "Fargo",
      "wrong1": "Grand Forks",
      "wrong2": "Minot"
    },

    {
      "state": "Ohio",
      "answer": "Columbus",
      "wrong0": "Cleveland",
      "wrong1": "Cincinnati",
      "wrong2": "Toledo"
    },

    {
      "state": "Oklahoma",
      "answer": "Oklahoma City",
      "wrong0": "Tulsa",
      "wrong1": "Norman",
      "wrong2": "Broken Arrow"
    },

    {
      "state": "Oregon",
      "answer": "Salem",
      "wrong0": "Portland",
      "wrong1": "Eugene",
      "wrong2": "Gresham"
    },

    {
      "state": "Pennsylvania",
      "answer": "Harrisburg",
      "wrong0": "Philadelphia",
      "wrong1": "Pittsburgh",
      "wrong2": "Allentown"
    },

    {
      "state": "Rhode Island",
      "answer": "Providence",
      "wrong0": "Cranston",
      "wrong1": "Warwick",
      "wrong2": "Pawtucket"
    },

    {
      "state": "South Carolina",
      "answer": "Columbia",
      "wrong0": "Charleston",
      "wrong1": "Mount Pleasant",
      "wrong2": "Myrtle Beach"
    },

    {
      "state": "South Dakota",
      "answer": "Pierre",
      "wrong0": "Sioux Falls",
      "wrong1": "Rapid City",
      "wrong2": "Aberdeen"
    },

    {
      "state": "Tennessee",
      "answer": "Nashville",
      "wrong0": "Memphis",
      "wrong1": "Knoxville",
      "wrong2": "Chattanooga"
    },

    {
      "state": "Texas",
      "answer": "Austin",
      "wrong0": "Dallas",
      "wrong1": "Houston",
      "wrong2": "Fort Worth"
    },

    {
      "state": "Utah",
      "answer": "Salt Lake City",
      "wrong0": "West Valley City",
      "wrong1": "Provo",
      "wrong2": "West Jordan"
    },

    {
      "state": "Vermont",
      "answer": "Montpelier",
      "wrong0": "Burlington",
      "wrong1": "South Burlington",
      "wrong2": "Rutland"
    },

    {
      "state": "Virginia",
      "answer": "Richmond",
      "wrong0": "Virginia Beach",
      "wrong1": "Norfolk",
      "wrong2": "Chesapeake"
    },

    {
      "state": "Washington",
      "answer": "Olympia",
      "wrong0": "Seattle",
      "wrong1": "Spokane",
      "wrong2": "Tacoma"
    },

    {
      "state": "West Virginia",
      "answer": "Charleston",
      "wrong0": "Huntington",
      "wrong1": "Morgantown",
      "wrong2": "Parkersburg"
    },

    {
      "state": "Wisconsin",
      "answer": "Madison",
      "wrong0": "Milwaukee",
      "wrong1": "Green Bay",
      "wrong2": "Kenosha"
    },

    {
      "state": "Wyoming",
      "answer": "Cheyenne",
      "wrong0": "Casper",
      "wrong1": "Laramie",
      "wrong2": "Gillette"
    }
  ]  
}









/*









var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");

var totalSeconds = 0;
var secondsElapsed = 0;
var minutesRemaining;
var interval;
var timerInterval;
var modeCounting = false;

var currentStatus;

function loadPreviousMinutes () {
  var tempWorkingMinutesRemaining = localStorage.getItem ("tomatoWorkingMinutes");
  if (tempWorkingMinutesRemaining !== null) {
    workMinutesInput.value = tempWorkingMinutesRemaining;
  }  

  var tempRestMinutesRemaining = localStorage.getItem ("tomatoRestMinutes");
  if (tempRestMinutesRemaining !== null) {
    restMinutesInput.value = tempRestMinutesRemaining;
  }  

  var tempCurrentStatus = localStorage.getItem ("tomatoStatus");
  if (tempCurrentStatus !== null) {
    currentStatus = tempCurrentStatus;
    if (currentStatus === "work") {
      statusToggle.checked = true;
    }

    else {
      statusToggle.checked = false;
    }
  }  
}

function saveMinutes () {
  localStorage.setItem ("tomatoWorkingMinutes", workMinutesInput.value);
  localStorage.setItem ("tomatoRestMinutes", restMinutesInput.value);
  localStorage.setItem ("tomatoStatus", currentStatus);
}


function statusToggleChanged () {
  stopTimer ();
  getStatus ();
  initializeTimer ();
  redrawTimer ();
  saveMinutes ();
}

function minutesChanged () {
  saveMinutes ();
  stopTimer ();
  getStatus ();
  initializeTimer ();
  redrawTimer ();
}

function pauseTimer () {
  clearInterval (timerInterval);
  modeCounting = false;
}

function stopTimer () {
  clearInterval (timerInterval);
  secondsElapsed = 0;
  redrawTimer ();
  modeCounting = false;
}

function startTimer () {
  if (!modeCounting) {
    timerInterval = setInterval (function () {
      secondsElapsed++;
      var secondsRemaining = totalSeconds - secondsElapsed;

      redrawTimer ();

      if (secondsRemaining === 0) {
        clearInterval (timerInterval);
        alert ("Timer has expired");
      }
    }, 1000)
  }

  modeCounting = true;
}

function getStatus () {
  if (statusToggle.checked) {
    currentStatus = "work";
  }

  else {
    currentStatus = "rest";
  }
}

function redrawTimer () {
  var minutesString;
  var seconds;
  var secondsString;
  var minutes = Math.floor ((totalSeconds - secondsElapsed) / 60);
  if (minutes < 10) {
    minutesString = "0" + minutes;
  }

  else {
    minutesString = minutes;
  }

  seconds = (totalSeconds - secondsElapsed) % 60;
  if (seconds < 10) {
    secondsString = "0" + seconds;
  }

  else {
    secondsString = seconds;
  }

  minutesDisplay.textContent = minutesString;
  secondsDisplay.textContent = secondsString;  
}

function initializeTimer () {
  getStatus;
  if (currentStatus == "work") {
    minutesRemaining = parseInt (workMinutesInput.value);
    statusSpan.textContent = "Working";
  }
  else if (currentStatus == "rest") {
    minutesRemaining = parseInt (restMinutesInput.value);
    statusSpan.textContent = "Rest";
  }

  totalSeconds = 60 * minutesRemaining;
  secondsElapsed = 0;
}

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
stopButton.addEventListener("click", stopTimer);
workMinutesInput.addEventListener("change", minutesChanged);
restMinutesInput.addEventListener("change", minutesChanged);
statusToggle.addEventListener("change", statusToggleChanged);

loadPreviousMinutes ();
getStatus ();
initializeTimer ();
redrawTimer ();

*/