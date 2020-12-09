
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new roof(400,20,200,20);
	bob1 = new bob(320,250,20);
	chain1 = new chain(bob1.body,{x:320,y:20});
	bob2 = new bob(360,250,20);
	chain2 = new chain(bob2.body,{x:360,y:20});
	bob3 = new bob(400,250,20);
	chain3 = new chain(bob3.body,{x:400,y:20});
	bob4 = new bob(440,250,20);
	chain4 = new chain(bob4.body,{x:440,y:20});
	bob5 = new bob(480,250,20);
	chain5 = new chain(bob5.body,{x:480,y:20});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  bob1.display()
  roof1.display()
  chain1.display()
  bob2.display()
  chain2.display()
  bob3.display()
  chain3.display()
  bob4.display()
  chain4.display()
  bob5.display()
  chain5.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode===LEFT_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:10,y:-10})

	}

}



