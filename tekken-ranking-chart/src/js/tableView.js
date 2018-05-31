class TableView {
  constructor(selector){
    this.table = document.querySelector(selector)
    this.orderBtn = null;
    this.init();
  }
  init(){
    this.orderBtn =this.table.querySelector('.order-by-rank')
    this.orderBtn.addEventListener('click', e => this.orderByRank())
  }
  orderByRank(){
    const body = this.table.querySelector('tbody')
    const tableRows = body.querySelectorAll('tr')
    const sortedTableTemplate =[...tableRows].sort((a,b)=> {
      const rateElA = a.querySelector('.rate-count')
      const rateElB = b.querySelector('.rate-count')
      if((+rateElA.innerHTML) > (+rateElB.innerHTML)) return -1;
      if((+rateElA.innerHTML) < (+rateElB.innerHTML)) return 1;
      return 0;
    })
    .reduce((ac,c)=>{
      ac+=`<tr>${c.innerHTML}</tr>`
      return ac
    },'')
    body.innerHTML = sortedTableTemplate;
  }
}



const tableView = new TableView('table')
