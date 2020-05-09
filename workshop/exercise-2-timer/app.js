/* SECTION 1 */
let currentTime = new Date();
let hour = currentTime.getHours();
let minute = currentTime.getMinutes();
let second = currentTime.getSeconds();
let paragraph1 = document.createElement("p");
paragraph1.innerText =
  "Current time: " + hour + " : " + minute + " : " + second;
document.getElementById("div1").appendChild(paragraph1);

/* SECTION 2 */

let time = 0;
let running = 0;

function startStopWatch() {
  if (running == 0) {
    running = 1;
    increment();
    document.getElementById("start").innerHTML = "START";
  }
}

function stopStopWatch() {
  running = 0;
}

function increment() {
  if (running == 1) {
    setTimeout(function () {
      time++;
      let mins = Math.floor(time / 10 / 60);
      if (mins <= 9) {
        mins = "0" + mins;
      }
      let secs = Math.floor(time / 10);
      if (secs <= 9) {
        secs = "0" + secs;
      }
      let tenths = Math.floor(time % 10);
      if (tenths <= 9) {
        tenths = "0" + tenths;
      }
      document.getElementById("timer").innerHTML =
        mins + ":" + secs + ":" + tenths;
      increment();
    }, 100);
  }
}

/* SECTION 3 */

let input = document.getElementById("enterTime");
let button = document.getElementById("startbtn");
let started = false;
let timer;
let startTimer = function (count) {
  return setInterval(function () {
    input.setAttribute("value", --count);
  }, 1000);
};
button.addEventListener("click", function () {
  if (!started) {
    let count = parseInt(input.getAttribute("value"));
    timer = startTimer(count);
    started = true;
    button.innerHTML = "STOP";
  } else {
    clearInterval(timer);
    started = false;
    button.innerHTML = "START";
  }
});
