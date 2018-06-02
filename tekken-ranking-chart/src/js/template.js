let playerStates = document.querySelector('.player-states');
const gameResultList = Object.values(gameResults.gameResults);





function showItems(val, templateId) {
  return val.reduce((acc, curr) => (acc += template(templateId, curr)), '');
}





function template(templateid, data) {
  return document
    .getElementById(templateid).innerHTML
    .replace(/{{(\w*)}}/g, (match, key) => (data.hasOwnProperty(key) ? data[key] : ''));
}

playerStates.innerHTML += showItems(gameResultList, 'player-template');





const winBtn = document.querySelectorAll(`[id*=win-btn-]`);
const loseBtn = document.querySelectorAll(`[id*=lose-btn-]`);
console.log(winBtn, loseBtn);






winBtn.forEach(elem => {
  elem.addEventListener('click', e => {
    const button = e.target;
    const getId = button.id.split('-')[2];
    gameResults.gameResults[getId].win++;
    gameResults.gameResults[getId].count++;
    gameResults.gameResults[getId].rate = Number((gameResults.gameResults[getId].win / gameResults.gameResults[getId].count * 100).toFixed(0))

    updateUserRecord(gameResults.gameResults[getId], getId);
  });
});






loseBtn.forEach((elem, idx) => {
  elem.addEventListener('click', e => {
    const button = e.target;
    const getId = button.id.split('-')[2];

    gameResults.gameResults[getId].lose++;
    gameResults.gameResults[getId].count++;
    gameResults.gameResults[getId].rate = Number((gameResults.gameResults[getId].win / gameResults.gameResults[getId].count * 100).toFixed(0))

    updateUserRecord(gameResults.gameResults[getId], getId);
  });
});





const updateUserRecord = (updatedata, id) => {
  // console.dir(updatedata);
  const tmpl = document.querySelector('.player-states');







  const playerRecordEl = document.querySelector(`#player-${id}`);
  playerRecordEl.innerHTML = `
  <th>0</th>
  <td>
    <a href="#">${updatedata.name}</a>
  </td>
  <td class="count">${updatedata.count}</td>
  <td class="win-count">${updatedata.win}</td>
  <td class="lose-count">${updatedata.lose}</td>
  <td class="rate-count">${updatedata.rate}</td>
  <td><a id="win-btn-${updatedata.id}" class="win-btn button is-primary">승 추가</a></td>
  <td><a id="lose-btn-${updatedata.id}" class="lose-btn button is-danger">패 추가</a></td>
  `;



  const winButtonEl = document.querySelector(`#win-btn-${id}`);
  const loseButtonEl = document.querySelector(`#lose-btn-${id}`);




  winButtonEl.addEventListener('click', e => {
    const button = e.target;
    const getId = button.id.split('-')[2];
    gameResults.gameResults[getId].win++;
    gameResults.gameResults[getId].count++;
    gameResults.gameResults[getId].rate = Number((gameResults.gameResults[getId].win / gameResults.gameResults[getId].count * 100).toFixed(0))

    updateUserRecord(gameResults.gameResults[getId], getId);
  });




  loseButtonEl.addEventListener('click', e => {
    const button = e.target;
    const getId = button.id.split('-')[2];
    gameResults.gameResults[getId].lose++;
    gameResults.gameResults[getId].count++;
    gameResults.gameResults[getId].rate = Number((gameResults.gameResults[getId].win / gameResults.gameResults[getId].count * 100).toFixed(0))

    updateUserRecord(gameResults.gameResults[getId], getId);
  });



  if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[1].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[1]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[2].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[2]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[3].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[3]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[4].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[4]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[5].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[5]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[6].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[6]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[7].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[7]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[8].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[8]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[9].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[9]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[10].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[10]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[11].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[11]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[12].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[12]);
  } else if (Number(playerRecordEl.children[5].innerText > Number(playerRecordEl.parentElement.children[13].children[5].innerText))) {
    tmpl.insertBefore(playerRecordEl, tmpl.children[13]);
  }

};