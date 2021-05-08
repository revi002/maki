
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1170,130,30);
	 mango3=new mango(1010,140,30);
	  mango4=new mango(1000,70,30);
	   mango5=new mango(1100,70,30);
	   mango6=new mango(1000,230,30); 
	   mango7=new mango(900,230,40);
	    mango8=new mango(1140,150,40);
		 mango9=new mango(1100,230,40);
		  mango10=new mango(1200,200,40);
		   mango11=new mango(1120,50,40);
		    mango12=new mango(900,160,40);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone1=new Stone(235,420,30)
	launcher1=new launcher(stone1.body,{x:235,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stone1.display();
  launcher1.display();
  groundObject.display();
  Detectcollision(stone1,mango1)
  Detectcollision(stone1,mango2)
  Detectcollision(stone1,mango3)
  Detectcollision(stone1,mango4)
  Detectcollision(stone1,mango5)
  Detectcollision(stone1,mango6)
  Detectcollision(stone1,mango7)
  Detectcollision(stone1,mango8)
  Detectcollision(stone1,mango9)
  Detectcollision(stone1,mango10)
  Detectcollision(stone1,mango11)
}
function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	launcher1.fly()
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body,{x:235,y:420})
		launcher1.attach(stone1.body)
	}
}
function Detectcollision(s1,m1){
	var distance=dist(s1.body.position.x,s1.body.position.y,m1.body.position.x,s1.body.position.y)
	if(distance<=s1.r+m1.r){
		Matter.Body.setStatic(m1.body,false)
	}
}