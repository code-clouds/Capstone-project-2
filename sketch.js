const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bg;

var ball;
var ballImg;

var bricks1, bricks2, bricks3, bricks4, bricks5, bricks6, bricks7;
var wall1, wall2;
var floor;

var right,left, up;

function preload() {
  bg = loadImage("bg.jpg");
  ballImg = loadImage("ball.png");
}

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  floor = new Ground(450, 590, 900, 20);
  wall1 = new Ground(10, 300, 20, 600);
  wall2 = new Ground(790, 300, 20, 600);

  var ballOptions = {
    restitution: 1,
    density: 0.8
  }

  ball = Bodies.circle(400, 300, 60, ballOptions);
  World.add(world, ball);

  bricks2 = new Brick(400, 130);
  bricks7 = new Brick(440, 130);
  bricks3 = new Brick(360, 130);
  bricks4 = new Brick(380, 170);
  bricks5 = new Brick(420, 170);
  bricks6 = new Brick(400, 210);
  


  Engine.run(engine);

  right = createButton("Right");
  right.position(700,500);
  right.size(50,50);
  right.mouseClicked(moveRight);

  left = createButton("Left");
  left.position(100,500);
  left.size(50,50);
  left.mouseClicked(moveLeft)

  up = createButton("Push");
  up.position(400,500);
  up.size(50,50);
  up.mouseClicked(uForce)
  
}


function draw() {
  background(51);
  background(bg);

  Engine.update(engine);

  floor.display();
  wall1.display();
  wall2.display();

  bricks2.display();
  bricks3.display();
  bricks4.display();
  bricks5.display();
  bricks6.display();
  bricks7.display();

  push();
  imageMode(CENTER);
  image(ballImg, ball.position.x, ball.position.y, 80, 80);
  pop();


}

function uForce() {
  Matter.Body.setVelocity(ball, {
    x: 0,
    y: -15
  });
}

function moveLeft() {
  Matter.Body.setVelocity(ball, {
    x: -5,
    y: 0
  });
}

function moveRight() {
  Matter.Body.setVelocity(ball, {
    x: 5,
    y: 2
  });
}