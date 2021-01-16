var fixedRect, movingRect;
var fixedRect2,fixedRect3,fixedRect4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = false;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  fixedRect2 = createSprite(400, 400, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect3 = createSprite(200, 400, 50, 80);
  fixedRect3.shapeColor = "green";
  fixedRect4 = createSprite(800, 400, 50, 80);
  fixedRect4.shapeColor = "green";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,fixedRect)|| isTouching(movingRect, fixedRect2)|| 
  isTouching(movingRect, fixedRect3)|| isTouching(movingRect, fixedRect4)){
  

  }else{
    
  

  }


  
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
     
      object1.shapeColor = "red"
      object2.shapeColor = "red"
      return  true;
}
else {

      object1.shapeColor = "green"
      object2.shapeColor = "green"

      return false;
}
































}