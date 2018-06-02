const playersList = [
  { "id": 1, "name": "달리", "win": 0, "lose": 0 },
  { "id": 2, "name": "만도", "win": 0, "lose": 0 },
  { "id": 3, "name": "우기", "win": 0, "lose": 0 },
  { "id": 4, "name": "웨일", "win": 0, "lose": 0 },
  { "id": 5, "name": "리오", "win": 0, "lose": 0 },
  { "id": 6, "name": "동동", "win": 0, "lose": 0 },
  { "id": 7, "name": "솔로몬", "win": 0, "lose": 0 },
  { "id": 8, "name": "루미", "win": 0, "lose": 0 },
  { "id": 9, "name": "새라", "win": 0, "lose": 0 },
  { "id": 10, "name": "현", "win": 0, "lose": 0 },
  { "id": 11, "name": "크롱", "win": 0, "lose": 0 },
  { "id": 12, "name": "호눅스", "win": 0, "lose": 0 },
  { "id": 13, "name": "팀", "win": 0, "lose": 0 },
]

class GameResults {
  constructor(playersList) {
    this.playersList = playersList;
    this.gameResults = this.makeResults(this.copyData());
  }

  copyData() {
    return this.playersList.slice();
  }


  makeResults(playersList) {
    return this.playersList.reduce((acc, crr) => {
      acc[crr.id] = {}
      acc[crr.id].id = crr.id;
      acc[crr.id].name = crr.name;
      acc[crr.id].win = 0;
      acc[crr.id].lose = 0;
      acc[crr.id].count = 0;
      acc[crr.id].rate = 0;
      acc[crr.id].rank = 0;
      return acc;
    }, {})
  }
}
const gameResults = new GameResults(playersList)