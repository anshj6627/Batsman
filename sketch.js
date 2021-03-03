const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var thunder1,thunder2,thunder3,thunder4;
var maxDrops=100;
var drops=[];
var umbrella;
var boy;
function preload(){
    boy=loadAnimation("images/walking/walking_1.png","images/walking/walking_2.png","images/walking/walking_3.png","images/walking/walking_4.png","images/walking/walking_5.png","images/walking/walking_6.png","images/walking/walking_7.png","images/walking/walking_8.png")
thunder1=loadImage("thunderbolt/thunder1.png");
thunder2=loadImage("thunderbolt/thunder2.png");
thunder3=loadImage("thunderbolt/thunder3.png");
thunder4=loadImage("thunderbolt/thunder4.png");
}

function setup(){
   createCanvas(400,800);
   engine = Engine.create();
   world = engine.world;
    umbrella=new Umbrella(200,500);
    if(frameCount%150==0){
        for(var i=0;i<maxDrops;i++){
            drops.push(new Drops(random(0,400),random(0,400)));
        }
    }

}

function draw(){

    background(0);
    Engine.update(engine);
    umbrella.display();
    for(var i=0;i<maxDrops;i++){
drops[i].display();
drops[i].update();
    }
    if(frameCount%150==0){
        var thunder=createSprite(random(10,370), random(10,30), 10, 10);
        lifetime=20;
        var n =Math.round(random(1,4));
        switch(n){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;  
    }
   
    drawSprites();
}
}