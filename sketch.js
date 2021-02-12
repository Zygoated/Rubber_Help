
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(400,350,50,1);
	ground = new Ground(400,height,800,20);
	stone = new Stone(200,200);
	rubber = new Rubber(400,400);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  drawSprites();
 
}



