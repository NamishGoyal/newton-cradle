const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var b1,b2,b3,b4,b5;
var roof;

var engine,world;
function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(300,300,300,10);
	b1=new Bob(300,500,20);
	rope1=new Slingshot(b1.body,{x:300,y:300});
	b2=new Bob(260,500,20);
	rope2=new Slingshot(b2.body,{x:260,y:300});
	b3=new Bob(220,500,20);
	rope3=new Slingshot(b3.body,{x:220,y:300});
	b4=new Bob(340,500,20);
	rope4=new Slingshot(b4.body,{x:340,y:300});
    b5=new Bob(380,500,20);
    rope5=new Slingshot(b5.body,{x:380,y:300});
	
  
}


function draw() {
  background(0);
  Engine.update(engine);
 roof.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 
}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(b3.body,b3.body.position,{x:-95,y:95});
	}
}



