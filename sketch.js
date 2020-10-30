const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var world,engine;
var divisions = []
var particles = []
var plinkos  = []
var divisionsheight = 300

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);
  ground = new Ground(width/2,height,width,20)

for(var k = 0; k <= width; k = k+80) {
  divisions.push(new Divisions(k,height - divisionsheight/2,10,divisionsheight))
}
for(var j = 50; j <= width - 10; j = j+50) {
  plinkos.push(new Plinko(j,175))
}
for(var j = 30; j <= width - 10; j = j+50) {
  plinkos.push(new Plinko(j,240))
}

for(var j = 70; j <= width - 10; j = j+50) {
  plinkos.push(new Plinko(j,305))
}

for(var j = 50; j <= width - 10; j = j+50) {
  plinkos.push(new Plinko(j,370))
}

for(var j = 30; j <= width - 10; j = j+50) {
  plinkos.push(new Plinko(j,435))
}

  

 
}

function draw() {
  
  background(200);  
  Engine.update(engine);
  ground.display();
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  if(frameCount%60===0) {
    particles.push(new Particle(random(width/2 - 30,width/2 + 30),10,10))
  }
  for(var j = 0; j < particles.length;j++) {
    particles [j].display();
  }
  for(var i = 0; i < plinkos.length; i++) {
    plinkos[i] .display();
  }
  drawSprites();
}