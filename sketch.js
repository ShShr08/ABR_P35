var bal
var balimg
var backimg

function preload(){
  balimg = loadAnimation("pro-C35 images/Hot Air Ballon-02.png", "pro-C35 images/Hot Air Ballon-03.png", "pro-C35 images/Hot Air Ballon-04.png");
  backimg = loadImage("pro-C35 images/background.png")
}

function setup() {
  createCanvas(1500,500);
  bal = createSprite(400, 200, 50, 50);
  bal.addAnimation(balimg);
  database=firebase.database();
}

function draw() {
  background(backimg);  

  if(keyDown(LEFT_ARROW)){
    bal.x = bal.x -7;
  }
  if(keyDown(RIGHT_ARROW)){
    bal.x = bal.x +7;
  }
  if(keyDown(UP_ARROW)){
  bal.y = bal.y -7;
  }
  if(keyDown(DOWN_ARROW)){
    bal.y = bal.y +7;
  }
  drawSprites();
}