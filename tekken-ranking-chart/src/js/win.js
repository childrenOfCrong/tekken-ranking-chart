let winBtn = document.querySelector(".win-btn");
let loseBtn = document.querySelector(".lose-btn");
let winCount = document.querySelector(".win-count");
let loseCount = document.querySelector(".lose-count");

winBtn.addEventListener("click", function(e) {
  console.log(e);
  for (var i = 0; i < playersList.length; i++) {
    playersList[i].win++;
    console.log(playersList[i]);
  }
});
