class String{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            length:220
        }
        this.pointB = pointB;
        this.rubber = Constraint.create(options);
        World.add(world,this.rubber);
    }
  
    display(){
        var pointA = this.rubber.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line(pointA.x , pointA.y , pointB.x , pointB.y);
    }
  }