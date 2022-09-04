//Substituir todas as informações do BULS, que agora necessita de 2 informações


var canvas;
var p=[], Y=0
var m = [],mons,mL=[], buls = [], bulsD=[]
var r = 1
var dx=[],dy=[]
var score=0
var indexX=1,indexY=1,indexL=0
var qdm = 1, Round = 0, nl=1,Boss=0,X=-1
var database, gameState=-2;
var form, player, playerCount=0
var allPlayers,allMonsters, allBullets
var round
var pi
var monsterIndex, indexm=0
var mpy=[0,0,0],mpx=[0,0,0]
var d=1, tdd=500, vdb=2
var posix=0, posiy=0
var pC, gco=[], info1, info2, info3
var plca
var xx,yy
var pX,pY,lf,clr,bD,w,h
var P=1
//GameState : -2=Espera por jogadores; -1=PERDEU; 0=pause; 1=start
function preload() {
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {

  
  if(gameState==-2){form.message();game.colora(playerCount)}
  background(200,200,200);

  /*var monx = database.ref("monsters/monster"+a+"/positionX");monx.on("value",data=>{pX=data.val();});
    var mony = database.ref("monsters/monster"+a+"/positionY");mony.on("value",data=>{pY=data.val();});
    var monw = database.ref("monsters/monster"+a+"/width");monw.on("value",data=>{w=data.val();});
    var monh = database.ref("monsters/monster"+a+"/height");monh.on("value",data=>{h=data.val();});
    var monl = database.ref("monsters/monster"+a+"/life");monl.on("value",data=>{lf=data.val();});
    var monc = database.ref("monsters/monster"+a+"/color");monc.on("value",data=>{clr=data.val()})*/
  
  //Cor do personagem e Nome mostrados
  if(gameState==-2&&player.color==null){
    textSize(70)
    fill("red")
    text(form.inputN.value(),width/2 - textSize()*2, height/2-height/2.5)
    form.showColor()
    //Parar de mostrar
  }else{form.sprite.remove()}
  if(gameState!=-2){form.res()}
  //Pontuação
textSize(windowHeight/50)
if(gameState==1){
if(p[plca]!=undefined){
camera.position.x=p[plca].position.x
camera.position.y=p[plca].position.y
}
  if(m.length<9&&round.a>0){
    round.rounds()
  }
  
  
  //Movimento
  if(player.index!=null){
  if(keyIsDown(RIGHT_ARROW)){player.positionX+=1.5;player.move(); }
  else if(keyIsDown(LEFT_ARROW)){player.positionX-=1.5;player.move(); }
  if(keyIsDown(DOWN_ARROW)){player.positionY+=1.5;player.move(); }
  else if(keyIsDown(UP_ARROW)){player.positionY-=1.5;player.move(); }
  }
  //Monstros
for (var i=0;i<m.length;i++){
  if(player.index!=null&&p.length>0){
    
  
  //Perseguir o jogador mais perto
  //O jogador atual X
  if(m[i].sprite.position.x>p[player.index-1].position.x){mpx[2]=m[i].sprite.position.x-p[player.index-1].position.x}
  else if(m[i].sprite.position.x<p[player.index-1].position.x){mpx[2]=p[player.index-1].position.x-m[i].sprite.position.x}
  //Outro jogador X
  if(m[i].sprite.position.x>p[m[i].indexXY].position.x){mpx[1]=m[i].sprite.position.x-p[m[i].indexXY].position.x}
  else if(m[i].sprite.position.x<p[m[i].indexXY].position.x){mpx[1]=p[m[i].indexXY].position.x-m[i].sprite.position.x}
  
  //O jogador atual Y
  if(m[i].sprite.position.y>p[player.index-1].position.y){mpy[2]=m[i].sprite.position.y-p[player.index-1].position.y}
  else if(m[i].sprite.position.y<p[player.index-1].position.y){mpy[2]=p[player.index-1].position.y-m[i].sprite.position.y}
  //Outro jogador Y
  if(m[i].sprite.position.y>p[m[i].indexXY].position.y){mpy[1]=m[i].sprite.position.y-p[m[i].indexXY].position.y}
  else if(m[i].sprite.position.y<p[m[i].indexXY].position.y){mpy[1]=p[m[i].indexXY].position.y-m[i].sprite.position.y}
  //Velocidade
  
  //if(Math.sqrt((Math.pow(mpx[1],2)+Math.pow(mpy[1],2)))>Math.sqrt((Math.pow(mpx[2],2)+Math.pow(mpy[2],2))) && m.length>0){m[i].speed(p[m[i].indexXY].position.x,p[m[i].indexXY].position.y,i)}
  //else if(Math.sqrt((Math.pow(mpx[1],2)+Math.pow(mpy[1],2)))<Math.sqrt((Math.pow(mpx[2],2)+Math.pow(mpy[2],2))) && m.length>0){m[i].speed(p[player.index-1].position.x,p[player.index-1].position.y,i)}
  //else if(m.length>0){m[i].speed(p[Math.round(random(0,playerCount-1))].position.x,p[Math.round(random(0,playerCount-1))].position.y,i)}
  
    //m[i].speed(p[mpx[0]].position.x,p[mpy[0]].position.y,i)
    //Radar (distancia entre o cinza e o preto mais proximo)
    /*if(r==1){
    if(m.length>0){
  if(m[i].sprite.position.x>p[player.index-1].position.x){dx[i+1]=m[i].sprite.position.x-p[player.index-1].position.x;xx=1}
  if(m[i].sprite.position.x<p[player.index-1].position.x){dx[i+1]=p[player.index-1].position.x-m[i].sprite.position.x;xx=-1}
  if(dx[indexX]>dx[i+1]){indexX=i+1}
  dx[0]=dx[indexX]
  if(m[i].sprite.position.y>p[player.index-1].position.y){dy[i+1]=m[i].sprite.position.y-p[player.index-1].position.y;yy=-1}
  if(m[i].sprite.position.y<p[player.index-1].position.y){dy[i+1]=p[player.index-1].position.y-m[i].sprite.position.y;yy=1}
  if(dy[indexY]>dy[i+1]){indexY=i+1}
  dy[0]=dy[indexY]
  }else{dx=0;dy=0}
    radar(xx,yy)
  }*/
    //Colisão com o jogador
    if(m[i].sprite.collide(p[player.index-1])&&player.index!=null){m[i].indexXY=0;retirarJ(player.index-1)}
    else if(m[i].sprite.collide(p[m[i].indexXY])){retirarJ(m[i].indexXY);m[i].indexXY=0}
    if(m.length>0){
    if(m[i].indexXY+1==player.index-1){m[i].indexXY+=1}
    else{m[i].indexXY+=1}
    if(m[i].indexXY>playerCount-1){m[i].indexXY=0}
    }
}
}
//Balas
for (var i=0;i<buls.length;i++){
  if(buls.length>0){
  //Update da posição
  if(i<buls.length && buls.length>0){
  buls[i][1].update(buls[i][0],i)}
  //Colisão bala <=> monstro
  if(m.length>0&&buls.length>0){
  
  // var bd = database.ref("Bullets/"+player.name+"/b"+i);bd.on("value",data=>{bD=data.val();})
    if(buls[i][1].sprite.collide(m[indexL].sprite)){
   m[indexL].Life(indexL,i)
    buls[i][1].Destroy((buls[i][0]),i)
    indexm-=1;indexL=0
    }
  //Overlaps(i)
  if(i>=buls.length-1){
    indexL+=1
  }
  if(indexL>=m.length){
    indexL=0
  }
}
//Destruir balas
if(i<buls.length&&(buls[i][1].sprite.position.x>p[player.index-1].position.x+windowWidth/1.9 || buls[i][1].sprite.position.x<p[player.index-1].position.x-windowWidth/1.9 || buls[i][1].sprite.position.y>p[player.index-1].position.y+windowHeight/1.9 || buls[i][1].sprite.position.y<p[player.index-1].position.y-windowHeight/1.9)){
  buls[i][1].Destroy(buls[i][0],i)}
  }
}
}
//gameState = 0/-1 => faça:

  if (gameState === 0||gameState==1){
    if(m.length==0){indexL=0;indexm=0;
      for(var b=0;b<buls.length;b+=1){buls[b][1].Destroy(buls[b][0],b)}
    }
    game.play()
    //Pontuação
  if(player.index!=null){text("Pontuação: "+score,p[player.index-1].position.x-width/16,p[player.index-1].position.y-height/2.2)
  //Interface\\
    if(r==1){text("Rodada: "+Round+"\nInimigos restantes: "+m.length+"\nBosses: "+Boss+"\nVida: "+nl.toFixed(2),p[player.index-1].position.x-width/2,p[player.index-1].position.y-height/2.2)}
    if(P==1){text("Taxa de disparo: "+(tdd/1000)+"\nDano: "+d+"\nVida: "+1+"\nVelocidade da bala: "+vdb,p[player.index-1].position.x+width/3,p[player.index-1].position.y-height/2.2)}
text("Posição atual: "+(p[player.index-1].position.x-posix).toFixed(0)+" : "+(p[player.index-1].position.y-posiy).toFixed(0),p[player.index-1].position.x-width/16,p[player.index-1].position.y-height/2.1)}else{text("Pontuação: "+score,width/2,height/2-height/4)}}
  if(gameState==0){game.r=0;text("Aperte A(←),W(↑),S(↓),D(→) para atirar\nAperte as setas ↓, ←, →, ↑ para andar\nAperte r para ativar/desativar algumas informações na tela\nAperte Z para ativar/desativar o tiro na diagonal (anti-horario)\nAssim: \tS(↓) => ↘, A(←) => ↙, D(→) => ↗, W(↑) => ↖\nAperte espaço para começar/terminar a rodada",windowWidth/2-windowWidth/4,windowHeight/2-windowHeight/4)}
  
  drawSprites()
  if(gameState==-3){reset()}
}

function keyPressed() {
  //Mudar o jogador observado
  if(player.index==null){
    if(keyCode==37){plca-=1;if(plca<1){plca=playerCount}}
    if(keyCode==39){plca+=1;if(plca>playerCount){plca=0}}
  }
  //Esc => recomeçar
  if(keyCode==27){
    game.update(-3)
  }
  //Enter
  if(gameState==-2&&keyCode==13){game.update(0)}
  //Espaço:
  
  //Sem monstro => gameState = 0
if(m.length==0&&keyCode==32&&gameState==1){;qdm+=(qdm/(Round*0.95));game.update(0)}
else if(gameState==0&&keyCode==32){game.update(1)}
  if(gameState==1){
    
  //W:
if(keyCode===87&&X!=1){setTimeout(()=>{if(player.index!=null){var bul = new Bullet(p[player.index-1].position.x,p[player.index-1].position.y,0,-vdb,d,player.index,1);buls.push([player.index-1,bul])}},500)}
  //S:
if(keyCode===83&&X!=1){setTimeout(()=>{if(player.index!=null){var bul = new Bullet(p[player.index-1].position.x,p[player.index-1].position.y,0,vdb,d,player.index,1);buls.push([player.index-1,bul])}},500)}
  //A:
if(keyCode===65&&X!=1){setTimeout(()=>{if(player.index!=null){var bul = new Bullet(p[player.index-1].position.x,p[player.index-1].position.y,-vdb,0,d,player.index,1);buls.push([player.index-1,bul])}},500)}
  //D:
if(keyCode===68&&X!=1){setTimeout(()=>{if(player.index!=null){var bul = new Bullet(p[player.index-1].position.x,p[player.index-1].position.y,vdb,0,d,player.index,1);buls.push([player.index-1,bul])}},500)}

//Contrario do Relogio
//W:
if(keyCode===87&&X==1){setTimeout(()=>{if(player.index!=null){var bul = new Bullet(p[player.index-1].position.x,p[player.index-1].position.y,-vdb,-vdb,d,player.index,1);buls.push([player.index-1,bul])}},500)}
  //S:
if(keyCode===83&&X==1){setTimeout(()=>{if(player.index!=null){var bul = new Bullet(p[player.index-1].position.x,p[player.index-1].position.y,vdb,vdb,d,player.index,1);buls.push([player.index-1,bul])}},500)}
  //A:
if(keyCode===65&&X==1){setTimeout(()=>{if(player.index!=null){var bul = new Bullet(p[player.index-1].position.x,p[player.index-1].position.y,-vdb,vdb,d,player.index,1);buls.push([player.index-1,bul])}},500)}
  //D:
if(keyCode===68&&X==1){setTimeout(()=>{if(player.index!=null){var bul = new Bullet(p[player.index-1].position.x,p[player.index-1].position.y,vdb,-vdb,d,player.index,1);buls.push([player.index-1,bul])}},500)}
}

//X: Ativar/Desativar tiro na diagonal
if(keyCode==90){X=-X}
//Informações da rodada
if(keyCode===82){r=-r}
//Informações do jogador
if(keyCode==80){P=-P}
}
/*function radar(mx,my){
fill("red");textSize(windowHeight/50);stroke(200,200,200);strokeWeight(0.5)
  text(Math.round(dx[0]*mx)+"  /  "+Math.round(dy[0]*my),windowWidth/2,windowHeight/2-windowHeight/2.25)
}*/
function retirarJ(i){
  if(playerCount==1){
    game.update(-1)
    for(var b=0;b<m.length;b+=1){m[b].Destroy(b,0)}
    for(var b=0;b<buls.length;b+=1){buls[b][1].Destroy(buls[i][0],b)}
    }
  p[i].remove();p.splice(i,1);plca=Math.round(random(0,p.length))
  var ref = database.ref("players/player"+(i+1))
   ref.remove()
   player.updateCount((playerCount-1))
   if(i==player.index-1){player.index=null}
   
   Player.getPlayersInfo();
  /*for(var t=1;t<p.length+1;t++){
    player.update(t)
  }*/
  
}
function reset(){
  
    //Recomeçando o jogo (chama o setup)
    database.ref("/").set({
      gameState:-2,
      playerCount:0,
      players:{},
      qdm:0,
      round:0,
      Bullets:{},
      monsters:{},
    })
    form.res();player.res()
    window.location.reload()
    setup()
}