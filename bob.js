class bob
{
constructor(x,y,r)
{
    var options={

        restitution: 0.3,
        friction: 1,
        density: 1

    }
    this.x = x;
    this.y = y;
    this.r = r;
    this.body = Bodies.circle(this.x,this.y,this.r/2,options);
    World.add(world,this.body);
  }
display()
{
var paperpos=this.body.position;
push();
translate(paperpos.x,paperpos.y);
ellipseMode(RADIUS);
strokeWeight(3);
fill(255,0,255)
ellipse(0,0,this.r,this.r);
pop();
}

}