let playerStates = document.querySelector('.player-states')
function showItems(val, templateId) {
  return val.reduce((acc, curr) => acc += template(templateId, curr), '')
}

function template(templateid, data) {
  return document.getElementById(templateid).innerHTML
    .replace(/{{(\w*)}}/g, (match, key) => data.hasOwnProperty(key) ? data[key] : "");
}

playerStates.innerHTML += showItems(playersList, 'player-template');