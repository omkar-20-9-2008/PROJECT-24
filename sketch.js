
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,gro,dust1,dust2,dust3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	options = {
		isStatic:true
	}
	
	engine = Engine.create();
	world = engine.world;

	
	//Create the Bodies Here.

	paper = new Paper(50,600,20);
	gro = new Grounds(400,650,800,20);
	dust1 = new DUSTBIN(660,625,120,20);
	dust2 = new DUSTBIN(590,590,20,50);
	dust3 = new DUSTBIN(730,590,20,50);
  
}


function draw() {
  background(0);
  Engine.update(engine);

paper.display();
gro.display();
dust1.display();
dust2.display();
dust3.display();
 
keyPressed();

 drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10});

	}
}
