const gameResults = new GameResultsModel(playersList)
const formView = new FormView('form')
const tableView = new TableView('table')

const view = {
  formView,
  tableView,
}

const controller = new Controller(gameResults,view)

document.addEventListener("DOMContentLoaded", ()=>controller.init());