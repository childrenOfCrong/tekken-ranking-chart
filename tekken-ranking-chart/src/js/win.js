let winBtn = document.querySelectorAll(".win-btn");
let loseBtn = document.querySelectorAll(".lose-btn");

let playCount = document.querySelectorAll(".count");
let winCount = document.querySelectorAll(".win-count");
let loseCount = document.querySelectorAll(".lose-count");
let rateCount = document.querySelectorAll(".rate-count");



winBtn.forEach((elem, idx) => {
  elem.addEventListener('click', e => {
    playersList[idx].win++;
    console.log(playersList[idx]);

  })
})




loseBtn.forEach((elem, idx) => {
  elem.addEventListener('click', e => {
    playersList[idx].lose++;
    console.log(playersList[idx]);

  })
})