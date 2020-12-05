var paper1, ground, log1, log2, log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.


    Engine.run(engine);
    paper1 = new Paper(150, 200, 30);
    ground = new Ground(150, 690, 200, 20);
    log1 = new Ground(500, 675, 200, 30);
    log2 = new Ground(385, 640, 30, 100);
    log3 = new Ground(615, 640, 30, 100);
}


function draw() {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 10, y: -10 });
    }
    rectMode(CENTER);
    background(100);

    drawSprites();
    paper1.display();
    log1.display();
    log2.display();
    log3.display();
    ground.display();
}