let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(
  ".our-skills .skills .skill .the-progress span"
);

// window.onscroll = function () {
//   if (window.scrollY >= section.offsetTop - 500) {
//     spans.forEach((span) => {
//       span.style.width = span.getAttribute("data-width");
//     });
//   }
// };

//1000 millseconds = 1 second
//gettime give time in millseconds

let countDownDate = new Date("Dec 31 , 2024 23:59:59").getTime();

let counter = setInterval(() => {
  //get time now
  let dateNow = new Date().getTime();

  //find the difference between time to the end of the year and time now
  let timeDiff = countDownDate - dateNow;
  let days = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); //الباقى من الدقايق

  document.querySelector(".events .unit .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .unit .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .unit .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .unit .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if ((timeDiff = 0)) {
    clearInterval(counter);
  }
}, 1000);

let nums = document.querySelectorAll(".statistics .box .number");
let sectionNums = document.querySelector(".statistics");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= sectionNums.offsetTop - 300) {
    if (!started) {
      nums.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }

  if (window.scrollY >= section.offsetTop - 500) {
    spans.forEach((span) => {
      span.style.width = span.getAttribute("data-width");
    });
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.innerHTML++;
    if (el.innerHTML == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
