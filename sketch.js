var bgImage;
var balloon,baloonImg;

function preload(){
bgImage=loadImage("assets/Monkey_Lane.webp")
baloonImg=loadImage("assets/bloon_blue.png")
}

function setup() {
  createCanvas(1200,800);
  balloon=createSprite(20,470,50,50);
  balloon.addImage(baloonImg);
  balloon.scale=0.15;



}

function draw() {
  background(bgImage);

  
  balloon.x+=2;
  if(balloon.x>294){
    balloon.y-=2;
    balloon.x=294
  }
  drawSprites();
console.log(mouseX,mouseY)
  }