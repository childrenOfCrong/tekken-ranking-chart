const playersList = [
  {"id": 1, "name": "달리", "win": 0, "lose": 0},
  {"id": 2, "name": "만도", "win": 0, "lose": 0},
  {"id": 3, "name": "우기", "win": 0, "lose": 0},
  {"id": 4, "name": "웨일", "win": 0, "lose": 0},
  {"id": 5, "name": "리오", "win": 0, "lose": 0},
  {"id": 6, "name": "동동", "win": 0, "lose": 0},
  {"id": 7, "name": "솔로몬", "win": 0, "lose": 0},
  {"id": 8, "name": "루미", "win": 0, "lose": 0},
  {"id": 9, "name": "새라", "win": 0, "lose": 0},
  {"id": 10, "name": "현", "win": 0, "lose": 0},
  {"id": 11, "name": "크롱", "win": 0, "lose": 0},
  {"id": 12, "name": "호눅스", "win":0, "lose": 0},
  {"id": 13, "name": "팀", "win": 0, "lose": 0},
]

class GameResults {
  constructor(playersList){
    this.playersList = playersList;
    this.gameResults = this.makeResults(this.playersList);
  }
  makeResults(playersList){
    return this.playersList.reduce((ac,c)=>{
       ac[c.id] = {}
       ac[c.id].id = c.id;
       ac[c.id].name = c.name;
       ac[c.id].win = c.win;
       ac[c.id].lose = c.lose;
       ac[c.id].count = c.win+c.lose;
       if(ac[c.id].count) ac[c.id].rate = ((c.win / ac[c.id].count)* 100).toFixed(0) + "%"
       else ac[c.id].rate = 0 + "%";
       return ac;
    },{})
  }
}
const gameResults = new GameResults(playersList)

console.log(gameResults.gameResults);
