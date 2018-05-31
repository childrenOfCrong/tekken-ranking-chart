let playerStates = document.querySelector(".player-states");

const gameResultList = Object.values(gameResults.gameResults);
function showItems(val, templateId) {
  return val.reduce((acc, curr) => (acc += template(templateId, curr)), "");
}

function template(templateid, data) {
  return document
    .getElementById(templateid)
    .innerHTML.replace(/{{(\w*)}}/g, (match, key) => (data.hasOwnProperty(key) ? data[key] : ""));
}

playerStates.innerHTML += showItems(gameResultList, "player-template");

const winBtn = document.querySelectorAll(`[id*=win-btn-]`);
const loseBtn = document.querySelectorAll(`[id*=lose-btn-]`);
console.log(winBtn, loseBtn);

winBtn.forEach(elem => {
  elem.addEventListener("click", e => {
    const button = e.target;
    const getId = button.id.split("-")[2];
    gameResults.gameResults[getId].win++;
    gameResults.gameResults[getId].count++;
    updateUserRecord(gameResults.gameResults[getId], getId);
  });
});


loseBtn.forEach((elem, idx) => {
  elem.addEventListener("click", e => {
    const button = e.target;
    const getId = button.id.split("-")[2];
    gameResults.gameResults[getId].lose++;
    gameResults.gameResults[getId].count++;
    updateUserRecord(gameResults.gameResults[getId], getId);
  });
});



const updateUserRecord = (updatedata, id) => {
  console.dir(updatedata)
  const playerRecordEl = document.querySelector(`#player-${id}`);
  playerRecordEl.innerHTML = `
  <th>1</th>
  <td>
    <a href="#">${updatedata.name}</a>
  </td>
  <td class="count">${updatedata.count}</td>
  <td class="win-count">${updatedata.win}</td>
  <td class="lose-count">${updatedata.lose}</td>
  <td class="rate-count">${(updatedata.win/updatedata.count*100).toFixed(0)+'%'}</td>
  <td><a id="win-btn-${updatedata.id}" class="win-btn button is-primary">승 추가</a></td>
  <td><a id="lose-btn-${updatedata.id}" class="lose-btn button is-danger">패 추가</a></td>
</tr>
  `
  const winButtonEl = document.querySelector(`#win-btn-${id}`)
  const loseButtonEl = document.querySelector(`#lose-btn-${id}`)
  winButtonEl.addEventListener('click', (e)=> {
    const button = e.target;
    const getId = button.id.split("-")[2];
    gameResults.gameResults[getId].win++;
    gameResults.gameResults[getId].count++;
    console.log(gameResults.gameResults[getId])
    updateUserRecord(gameResults.gameResults[getId], getId);
  })
  loseButtonEl.addEventListener('click', (e)=> {
    const button = e.target;
    const getId = button.id.split("-")[2];
    gameResults.gameResults[getId].lose++;
    gameResults.gameResults[getId].count++;
    updateUserRecord(gameResults.gameResults[getId], getId);
  })
};
