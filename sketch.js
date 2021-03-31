//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;

var myworld, myengine;
var box;
var ground;

function setup() {
  createCanvas(400,400);

  //creating your own engine using matter.engine
  myengine = Engine.create();
  //creating world
  myworld = myengine.world;

  //functionalities
  var ground_options ={
    isStatic: true
  }

//creating an object
  ground = Bodies.rectangle(200,390,400,10,ground_options);
  //adding object to the world
  World.add(myworld, ground);


//creating an object
box = Bodies.rectangle(200,50,70,70,{restitution : 1.0});
World.add(myworld, box);


//to see the object in the console. (not a mandatory step)
console.log(box);

}

function draw() {
  Engine.update(myengine);
  background(0);  

  //the objects created using physics engine are invisible. 
  // adding a skin to it to make sure it is visible
  rectMode(CENTER);
  rect(box.position.x,box.position.y,70,70)

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10)

}