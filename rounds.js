
class Rounds{
    
    constructor(){
        
if((Round) % 2 === 0){
        nl+=nl/2.25
}

this.a=null
this.pi=null

}
rounds(){
   
    for(var q=0;q<this.a;this.a-=1){
this.pi=Math.round(random(0,playerCount-1))
        switch(Math.round(random(1,4))){
//X = 0
case(1):var mons = new Monster(p[this.pi].position.x-windowWidth/16-windowWidth/2, Math.round(random(p[this.pi].position.y-windowHeight/2,p[this.pi].position.y+windowHeight/2)),windowWidth/16,windowHeight/16,0,nl,0);m.push(mons);mL.push(nl);indexm+=1
break;
//X = windowWidth
case(2):var mons = new Monster(p[this.pi].position.x+windowWidth/16+windowWidth/2, Math.round(random(p[this.pi].position.y-windowHeight/2,p[this.pi].position.y+windowHeight/2)),windowWidth/16,windowHeight/16,0,nl,0);m.push(mons);mL.push(nl);indexm+=1
break;
//Y = 0
case(3):var mons = new Monster(Math.round(random(p[this.pi].position.x-windowWidth/2,p[this.pi].position.x+windowWidth/2)), p[this.pi].position.y-windowHeight/16-windowHeight/2,windowWidth/16,windowHeight/16,0,nl,0);m.push(mons);mL.push(nl);indexm+=1
break;
//Y = windowHeight
case(4):var mons = new Monster(Math.round(random(p[this.pi].position.x-windowWidth/2,p[this.pi].position.x+windowWidth/2)), p[this.pi].position.y+windowHeight/16+windowHeight/2,windowWidth/16,windowHeight/16,0,nl,0);m.push(mons);mL.push(nl);indexm+=1
break;
}  
}
if(Round % 10 ===0){
    for(var I=Round/5;I>0;I-=1){
        Boss+=1
     switch(Math.round(random(1,4))){
        //X = 0
        case(1):var mons = new Monster(p[this.pi].position.x-windowWidth/16-windowWidth/2, Math.round(random(p[this.pi].position.y-windowHeight/2,p[this.pi].position.y+windowHeight/2)),windowWidth/16+windowWidth/32,windowHeight/16+windowHeight/32,1,nl*2,0);m.push(mons);mL.push(nl*2);indexm+=1
        break;
        //X = windowWidth
        case(2):var mons = new Monster(p[this.pi].position.x+windowWidth/16+windowWidth/2, Math.round(random(p[this.pi].position.y-windowHeight/2,p[this.pi].position.y+windowHeight/2)),windowWidth/16+windowWidth/32,windowHeight/16+windowHeight/32,1,nl*2,0);m.push(mons);mL.push(nl*2);indexm+=1
        break;
        //Y = 0
        case(3):var mons = new Monster(Math.round(random(p[this.pi].position.x-windowWidth/2,p[this.pi].position.x+windowWidth/2)), p[this.pi].position.y-windowHeight/16-windowHeight/2,windowWidth/16+windowWidth/32,windowHeight/16+windowHeight/32,1,nl*2,0);m.push(mons);mL.push(nl*2);indexm+=1
        break;
        //Y = windowHeight
        case(4):var mons = new Monster(Math.round(random(p[this.pi].position.x-windowWidth/2,p[this.pi].position.x+windowWidth/2)), p[this.pi].position.y+windowHeight/16+windowHeight/2,windowWidth/16+windowWidth/32,windowHeight/16+windowHeight/32,1,nl*2,0);m.push(mons);mL.push(nl*2);indexm+=1
        break;
        }  
}
}
}

    
    }