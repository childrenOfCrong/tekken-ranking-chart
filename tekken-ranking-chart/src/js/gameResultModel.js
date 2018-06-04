class GameResultsModel {
  constructor(playersList) {
    this.playersList = playersList;
    this.gameResults = this.getInitResult(this.copyData());
    this.notifyUpdate = null;
    this.notifyUpdateOrder = null;
  }
  copyData() {
    return this.playersList.slice();
  }
  getInitResult(playersList) {
     return this.gameResults = playersList.reduce((acc, crr) => {
      const {id, name} = crr
      acc[id] = {}
      acc[id].id = id;
      acc[id].name = name;
      acc[id].win = 0;
      acc[id].lose = 0;
      acc[id].count = 0;
      acc[id].rate = 0;
      acc[id].rank = 0;
      return acc;
    }, {})
  }
  getResult(){
    return this.gameResults;
  }
  bindGetResult(){
    return this.gameResults
  }
  updateResult(id,type){
    if(type==='win'){
      this.gameResults[id].win++;
      this.gameResults[id].count++;
      this.gameResults[id].rate = Number((this.gameResults[id].win / this.gameResults[id].count * 100).toFixed(0))
    }
    else{
      this.gameResults[id].lose++;
      this.gameResults[id].count++;
      this.gameResults[id].rate = Number((this.gameResults[id].win / this.gameResults[id].count * 100).toFixed(0))
    }
    return this.notifyUpdate(id, this.gameResults[id])
  }
  getOrder(order){
    const oredered = Object.values(this.gameResults).slice().sort((a,b)=>{
      if(a[order] > b[order]) return -1;
      if(a[order] < b[order]) return 1;
      return 0;
    }
  )
    this.notifyUpdateOrder(oredered)
  }
}
