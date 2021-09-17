
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg;

var ball;
var ball_img;

var bricks;



function preload() {
  bg  = loadImage("bg.png");
} 

function setup() {
  createCanvas(800,600);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  var floor_options = {
    isStatic: true
  }

  floor = Bodies.rectangle(300,600,800,20,floor_options);
  World.add(world, floor);


  var options = {
    isStatic : false,
    restitution: 1,
    friction: 0,
    density: 0.8
  }
 fill("lightblue");
  bricks1 = Bodies.rectangle(320,380,20,20,options);
  World.add(world, bricks1);

  bricks2 = Bodies.rectangle(450,380,20,20,options);
  World.add(world, bricks2);

  bricks3 = Bodies.rectangle(580,380,20,20,options);
  World.add(world, bricks3);

  bricks4 = Bodies.rectangle(290,380,20,20,options);
  World.add(world, bricks4);

  bricks5 = Bodies.rectangle(440,380,20,20,options);
  World.add(world, bricks5);

  bricks6 = Bodies.rectangle(330,380,20,20,options);
  World.add(world, bricks6);

  bricks7 = Bodies.rectangle(210,380,20,20,options);
  World.add(world, bricks7);

  Engine.run(engine);

}


function draw() 
{
  background(51);
  background(bg);

  rect(bricks1.position.x, bricks1.position.y, 40,40);
  rect(bricks2.position.x, bricks2.position.y, 40,40);
  rect(bricks3.position.x, bricks3.position.y, 40,40);
  rect(bricks4.position.x, bricks4.position.y, 40,40);
  rect(bricks5.position.x, bricks5.position.y, 40,40);
  rect(bricks6.position.x, bricks6.position.y, 40,40);
  rect(bricks7.position.x, bricks7.position.y, 40,40);

  Engine.update(engine);
  
}

