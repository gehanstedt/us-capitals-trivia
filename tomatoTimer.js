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

