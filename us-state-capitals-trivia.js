const penaltyTime = -10;
const targetNumberOfQuestions = 7;
const targetNumberOfQuestionsString = "seven"

var questionArray = [];
var buttonBegin = document.querySelector("#buttonBegin");
var sectionWelcome = document.querySelector("#welcome");
var sectionMainTrivia = document.querySelector("#mainTrivia");
var sectionResultsWinner = document.querySelector("#resultsWinner");
var sectionResultsLoser = document.querySelector("#resultsLoser");
var sectionHighScores = document.querySelector("#highScores");
var spanNumberQuestions = document.querySelector("#numberQuestions");
var spanPenaltyLength = document.querySelector("#penaltyLength");
var headerBar1 = document.querySelector(".headerBar1");
var headerBar2 = document.querySelector(".headerBar2");


function updateMessage () {
  spanPenaltyLength.textContent = penaltyTime * -1;
  spanNumberQuestions.textContent = targetNumberOfQuestionsString;
}

function beginQuiz () {
  showSection ("mainTrivia");
  alert ("Quiz begins");
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
      sectionWelcome.setAttribute("style", "display: block");
      break;

    case "mainTrivia":
      sectionWelcome.setAttribute("style", "display: block");
      headerBar1.setAttribute("style", "display: block");
      headerBar2.setAttribute("style", "display: block");
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

loadQuestionArray ();
showSection ("welcome");
updateMessage ();

buttonBegin.addEventListener("click", beginQuiz);




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