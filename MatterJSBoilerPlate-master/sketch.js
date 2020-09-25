
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bucket1,bucketL,bucketR,paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bucket1 = new Bucket(650,670,130,10);
	bucketL = new Bucket(590,650,10,50);
	bucketR = new Bucket(710,650,10,50);
	paper = new Paper(100,400,40);
	ground = new Ground(400,680,800,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  bucket1.display();
  bucketL.display();
  bucketR.display();
  paper.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	var randX = random(50,80);
	var randY = random(-80,-50);
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:randX,y:randY});
	}
}



