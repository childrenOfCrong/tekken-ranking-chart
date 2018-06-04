
 const tableTemplate = (item)=> `
 <tr id="player-${item.id}">
 <th>0</th>
 <td>
   <a href="#">${item.name}</a>
 </td>
 <td class="count">${item.count}</td>
 <td class="win-count">${item.win}</td>
 <td class="lose-count">${item.lose}</td>
 <td class="rate-count">${item.rate}</td>
 <td><a id="win-btn-${item.id}" class="win-btn button is-primary">승 추가</a></td>
 <td><a id="lose-btn-${item.id}" class="lose-btn button is-danger">패 추가</a></td>
 </tr>
 `;

class TableView {
  constructor(selector){
    this.table = qs(selector)
    this.orderBtn = null;
    this.sendClickedBtn = null;
    this.sendOrderBtnClicked = null;
    this.init();
  }
  init(){
    this.table.addEventListener('click', e=> this.hanbdleClick(e))
  }
  hanbdleClick({target}){
    if(target.classList[0]==="win-btn") return this.handleResultBtnClicked(target, 'win')
    if(target.classList[0]==="lose-btn") return this.handleResultBtnClicked(target, 'lose')
    if(target.className==="order-btn") return this.handleOrderBtnClciked(target)
  }
  handleOrderBtnClciked(target){
    const orderKind = target.id
    this.sendOrderBtnClicked(orderKind)
  }
  handleResultBtnClicked(t, type){
    const getId = Number(t.id.split('-')[2]);
    return this.sendClickedBtn(getId, type)
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
  bindRendering(list){
    const body = qs('tbody',this.table)
    const tableCells = Object.values(list).reduce((ac, c)=> {
      return ac+=tableTemplate(c)
    }, '')
    body.innerHTML = tableCells
  }
  reRender(id, updatedData){
    const willUpdateEl = qs(`#player-${id}`,this.table)
    willUpdateEl.innerHTML = tableTemplate(updatedData)
  }
  orderUpdate(ordered){
    const body = qs('tbody',this.table)
    console.dir(ordered)
    body.innerHTML = ordered.reduce((ac,c)=> {
      return ac+=tableTemplate(c)
    },'')
  }
}





