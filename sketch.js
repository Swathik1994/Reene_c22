//namespacing

const Engine=Matter.Engine;   // universe
const World= Matter.World;   // Globe
const Bodies= Matter.Bodies;   // Object

var engine,world,ground;


function setup() {
  createCanvas(400,400);
  //createSprite(200,200,50,50);

 engine=Engine.create();
 world=engine.world;

var ground_options = {

  isSttatic: true

}

 ground=Bodies.rectangle(200,390,400,20, ground_options);
 World.add(world,ground);

console.log(ground);

}

function draw() {
  background(0,0,0); 

  rectMode (CENTER);
  rect (ground.position.x,ground.position.y,400,20);

  drawSprites();
}