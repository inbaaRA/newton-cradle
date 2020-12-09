class chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:2,
            length:100

        }
        this.bodyA = bodyA
        this.pointB = pointB
        this.chain=Constraint.create(options);
        World.add(world,this.chain)
    }
    display(){
      //  var pointA=this.chain.bodyA.position;
        //var pointB=this.pointB;
        strokeWeight(5);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y-20,this.pointB.x,this.pointB.y);

    }
}