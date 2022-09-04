class Bullet{
constructor(x,y,vx,vy,d,i){
    this.d=d
    this.sprite=createSprite(x,y,windowWidth/32, windowHeight/32)
    this.sprite.shapeColor="yellow"
    this.sprite.setVelocity(vx,vy)
    this.sprite.setCollider("rectangle", 0, 0, windowWidth/32, windowHeight/32)
    //this.sprite.debug=true
    bulsD.push(d)
   if(i===1){var bulletIndex = "Bullets/"+(player.index-1)+"/b"+buls.length;
      database.ref(bulletIndex).set({
        positionX: x,
        positionY: y,
        velox:vx,
        veloy:vy,
        damage: d,
      })
}
}

Destroy(i,ii){
    buls[ii][1].sprite.destroy()
    buls.splice(ii,1)

    var ref = database.ref("Bullets/"+i+"/b"+ii);ref.remove()
}
update(i,ii){
    var bulletIndex = "Bullets/"+i+"/b"+ii;
      database.ref(bulletIndex).set({
        positionX: this.sprite.position.x,
        positionY: this.sprite.position.y,
        velox:this.sprite.velocity.x,
        veloy:this.sprite.velocity.y,
        damage: this.d,
      })
}

static getBulletsInfo(){
  var bulletInfoRef=database.ref("Bullets");
  bulletInfoRef.on("value", data=>{
    allBullets=data.val()
  })
  }
}
