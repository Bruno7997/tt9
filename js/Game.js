class Game {
  constructor() {
    this.r=0
    this.a=undefined
  }
  //Fazendo referencia ao valor do gameState
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
    
  }
 //Atualizando o gameState
  update(state) {
    
    database.ref("/").update({
      gameState: state
    })
    if(state==1){this.updateRound(Round+1);this.r=1;round=new Rounds;round.a=qdm.toFixed(0);if(round.a>50){nl+=nl/2.25}}
    if(state==0){this.updateQuant(qdm)}
    
  }

  
  start() {
    if(gameState==-2){
    player = new Player();
   playerCount = player.getCount();
    form = new Form();
    form.display();
  }
  }

  //Esconder o formulário
  handleElements() {
    form.hide();
  }

  //Criando os jogadores
  play() {
    Monster.getMonstersInfo()
    Bullet.getBulletsInfo();
    Player.getPlayersInfo();
    this.getQuant();this.getRound()
    
    this.handleElements();
//if(gameState==1&&this.r==0){this.createMonster()}
    

  
  for(var i=0;p.length!=playerCount;i++){
  this.sprite=createSprite(windowWidth/2, windowHeight/2,windowWidth/16, windowHeight/16)
  this.sprite.setCollider("rectangle", 0, 0, windowWidth/16,windowHeight/16)
  this.sprite.shapeColor= gco[i]
  p.push(this.sprite)
  }
  
  
  var indexp = 0;
for(var plr in allPlayers){
  var x=allPlayers[plr].positionX
  var y=allPlayers[plr].positionY
  var n=allPlayers[plr].name
  if(p[indexp]!=undefined){
  p[indexp].position.x = x
  p[indexp].position.y = y
  fill("black");textSize( Math.sqrt(width/4.25 , height/16*2).toFixed(0))
  text(n,  p[indexp].position.x-(p[indexp].width/2), p[indexp].position.y-(p[indexp].height))
  indexp+=1
  }
}
var indexmm = 0;

if(allMonsters!=undefined){
  for(var plr in allMonsters){
    if(this.r==0&&gameState==1){
      this.createMonster()}
    var x=allMonsters[plr].positionX
    var y=allMonsters[plr].positionY
    if(m[indexmm]!=undefined){
    m[indexmm].sprite.position.x = x
    m[indexmm].sprite.position.y = y
    m[indexmm].update(indexmm)
    indexmm+=1
    
    }
    
  }
  }


if(allBullets!=undefined){
  console.log(buls.length)
  for(var plr in allBullets){

var P = allBullets[plr] 
    for(var PLR in P){
var B = P[PLR]
var x = B.positionX; var vx = B.velox
var y = B.positionY; var vy = B.veloy
var d = B.damage
for(var b =-1;b<buls.length;b+=1){
  if(b==-1){b=0}
  if(b==0&&buls.length==0){
    this.createBullet(x,y,vx,vy,d,plr)
  }
  if (buls[b][0]!=plr){
    this.createBullet(x,y,vx,vy,d,plr)
  }
  
  else if(buls[b][0]!=undefined && buls[b][0]==plr){
    buls[b][1].sprite.position.x=x
    buls[b][1].sprite.position.y=y
  }
  
}
   
      
  }
}
  }
    }
    jnNpe(){
      if(gameState!=-2){
        clear()
        background(200,200,200);
        fill("red");textSize(25)
text("O jogo ja começou, você não pode mais entrar",windowWidth/2-windowWidth/4,windowHeight/2-windowHeight/4)
    fill("black")
    this.r=1}
    else{this.r=0}
}
colora(a){
  while(a>0){
    pC = database.ref("players/player"+a+"/color1")
    pC.on("value", data =>{info1 = data.val()})
    pC = database.ref("players/player"+a+"/color2")
    pC.on("value", data =>{info2 = data.val()})
    pC = database.ref("players/player"+a+"/color3")
    pC.on("value", data =>{info3 = data.val()})
    gco[a-1]=[info1,info2,info3]
    a-=1

  }
}
updateRound(count) {
  database.ref("/").update({
    round: count
    
  });
this.getRound()}
  getRound() {
      var rods = database.ref("round");
      rods.on("value", data => {
        Round = data.val();
      });
}
updateQuant(qdm) {
  database.ref("/").update({
    qdm: qdm
    
  });
this.getQuant()}
  getQuant() {
      var qdmm = database.ref("qdm");
      qdmm.on("value", data => {
        qdm = data.val();
      });

}
createMonster(){
  
for(var plr in allMonsters){
  var px=allMonsters[plr].positionX
  var py=allMonsters[plr].positionY
  var w=allMonsters[plr].width
  var h=allMonsters[plr].height
  var clr=allMonsters[plr].color
  var lf=allMonsters[plr].life
  mons = new Monster(px,py,w,h,clr,lf,1);m.push(mons);mL.push(lf);indexm+=1
}
if(m.length>=qdm.toFixed(0)){this.r+=1}
}

createBullet(X,Y,VX,VY,D,P){
  var bul = new Bullet(X,Y,VX,VY,D,P,1)
 buls.push([P,bul])
  }
}
/*getMonster(){
      var pXf = database.ref("round");
      pXf.on("value", data => {
        pX = data.val();
      });
      var pYf = database.ref("round");
      pYf.on("value", data => {
        pY = data.val();
      });
      var lff = database.ref("round");
      lff.on("value", data => {
        lf = data.val();
      });
      var clrf = database.ref("round");
      clrf.on("value", data => {
        clr = data.val();
      });
      var bDf = database.ref("round");
      bDf.on("value", data => {
        bD = data.val();
      });
      var wf = database.ref("round");
      wf.on("value", data => {
        w = data.val();
      });
      var hf = database.ref("round");
      hf.on("value", data => {
        h = data.val();
      });
      
}*/
