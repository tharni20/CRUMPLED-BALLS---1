
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var ball1;
var dustbin1;
var dustbin2;
var dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800,400);


	engine = Engine.create();
	world = engine.world;

	


	//Create the Bodies Here.
 ground1 = new Ground (400,390,800,10);
 ball1 = new Ball (100,200,20);
 dustbin1 = new Dustbin (700,320,10,70);
 dustbin2= new Dustbin (600,320,10,70);
 dustbin3= new Dustbin (650,360,90,10);
 


	
 Engine.run(engine);
  
}


function draw() {
  background(0);
  

  ball1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:60,y:-60});
  }
 }


