const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box10;
var box5,box6,box7,box8,box9;
var base;

function setup() {
  createCanvas(800,400);

  box1=new Box(330,235,30,40);
  box2=new Box(360,235,30,40);
  box3= new  Box(390,235,30,40);
  box4 = new Box(420,235,30,40);

  box5= new Box(345,195,30,40);
  box6= new Box(375,195,30,40);
  box7= new Box(415,195,30,40);

  box8=new Box(360,155,30,40);
  box9=new Box(390,155,30,40);

  box10= new Box(345,115,30,40);

  base= new Ground(375,235,90,20);
}





function draw() {
  background(255,255,255);  
  drawSprites();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box9.display();
box8.display();
box10.display();

base.display();
}