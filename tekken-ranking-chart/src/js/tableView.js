class TableView {
  constructor(selector){
    this.table = document.querySelector(selector)
  }
  orderByRank(){
    const tableRows = this.table.querySelectorAll('tr')
    // debugger;
    const sortedTableTemplate =[...tableRows].sort((a,b)=> {
      const rateElA = a.querySelector('.rate-count')
      const rateElB = b.querySelector('.rate-count')
      if((+rateElA.innerHTML) > (+rateElB.innerHTML)) return 1;
      if((+rateElA.innerHTML) < (+rateElB.innerHTML)) return -1;
      return 0;
    })
    .reduce((ac,c)=>{
      ac+=`<tr>${c.innerHTML}</tr>}`
      return ac
    },'')
    this.table.innerHTML = sortedTableTemplate;
  }
}



const tableView = new TableView('tbody')
// tableView.orderByRank();