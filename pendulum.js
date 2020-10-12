class Pendulum{
    constructor(x,y,color){
        var options = {
            restitution:2,
            
        }
  
        this.body = Bodies.rectangle(x,y,40,40,options);
        this.color = color;
        World.add(world,this.body);
  
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x , pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,30,30);
        pop();
    }
  }