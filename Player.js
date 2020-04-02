class Player {
  constructor(){
    this.index = 0;
    this.score = 0;
    this.name = null;
  }

  update(){
    var playerIndex = "player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      score:this.score
    });
  }

  static getPlayerInfo(){
    console.log(this.index);
    var playerInfoRef = database.ref('player'+this.index);
    playerInfoRef.on("value",(data)=>{
      playerInfo = data.val();
    })
  }
}
