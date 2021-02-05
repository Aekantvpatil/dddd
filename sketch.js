const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var engine,world,rope2,ball1,ball2,rope3,ball3,ball4,ball5,rope4,rope5,rope6,mConstraint

function setup() {
      canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
       engine = Engine.create();
        world = engine.world;
         let canvasmouse = Mouse.create(canvas.elt);
          canvasmouse.pixelRatio = pixelDensity(); 
          let options = { mouse: canvasmouse }; 
          mConstraint = MouseConstraint.create(engine, options);
           World.add(world, mConstraint);



  
   ball1=new ball(200,200,"yellow")
  rope2=new rope(ball1.body,{x:340,y:200})
   ball2=new ball(250,200,"green")
   rope3=new rope(ball2.body,{x:400,y:200})
   ball3=new ball(300,200,"red")
   rope4=new rope(ball3.body,{x:460,y:200})
   ball4=new ball(350,200,"blue")
   rope5=new rope(ball4.body,{x:520,y:200})
   ball5=new ball(400,200,"white")
   rope6=new rope(ball5.body,{x:580,y:200})
}
function draw() {
background("black")
Engine.update(engine);


ball1.display()
rope2.display()
ball2.display()
rope3.display()
ball3.display()
rope4.display()
ball4.display()
rope5.display()
ball5.display()
rope6.display()
}

function mouseDragged(){
 
      Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
 
}
