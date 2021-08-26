var ball, ground, wall1, wall2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(50,50,20, ball_options);
	World.add(world, ball);

	ground = new Ground(400,350,800,15);
	wall1 = new Ground(600,305,10,75);
	wall2 = new Ground(750,305,10,75);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	ellipseMode(RADIUS);
	ellipse(ball.position.x, ball.position.y,15);
	ground.show();
	wall1.show();
	wall2.show();
	drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position,{x:45, y:-45})
		
	}
}



