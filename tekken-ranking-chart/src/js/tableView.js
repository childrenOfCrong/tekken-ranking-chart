class TableView {
  constructor(selector){
    this.table = document.querySelector(selector)
  }
  orderByRank(){
    const tableRows = this.table.querySelectorAll('tr')
    tableRows.sort((a,b)=> {
      const rateElA = a.document.querySelector('.rate-count')
      const rateElB = a.document.querySelector('.rate-count')
      return Number(rateElA.innerHTML)>Number(rateElB.innerHTML)
    })
    this.table.innerHTML = tableRows;
  }
}



const tableView = new TableView('.table')