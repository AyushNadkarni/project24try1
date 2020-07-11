
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin,bin1,bin2,ball,ground;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bin = new Dustbin(400,400,200,10);
	bin.shapeColor = color(255,0,0);

	bin1 = new Dustbin(350,400,10,100);
	bin1.shapeColor = color(255,0,0);

	bin2 = new Dustbin(450,400,10,100);
	bin2.shapeColor = color(255,0,0);

	ball = new Paper(200,300);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
}
  
function draw() {
 
  background(0);
  rectMode(CENTER);
  rect (ground.position.x,ground.position.y,width,10)


//dustbin.display();
ball.display();

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.Body,paperObject.Body.position,{x:85,y:-85});
		
	}
}


