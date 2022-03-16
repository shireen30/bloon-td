var bgImage;
var balloon,baloonImg;
var horiztl=true;
function preload(){
bgImage=loadImage("assets/Monkey_Lane.webp")
baloonImg=loadImage("assets/bloon_blue.png")
}

function setup() {
  createCanvas(1200,800);
  balloon=createSprite(20,470,50,50);
  balloon.addImage(baloonImg);
  balloon.scale=0.15;
  balloon.velocityX=4;
}

function draw() {
  background(bgImage);

  
  
 // balloon.x+=2;
  if(balloon.x>294 ){
    balloon.velocityY=-4;
    //balloon.x=294;

    balloon.velocityX=0

    
     }
 if(balloon.y<349 && horiztl==true){
  balloon.velocityY=0;    
  // balloon.y=349;
      
      balloon.velocityX=4;
       console.log("path2")
       
     }
  if(balloon.x>484 && horiztl==true){
    balloon.velocityY=4;
    balloon.velocityX=0;

  }
  if(balloon.y>753 && horiztl==true){
    balloon.velocityY=0;   
    balloon.velocityX=4;
         
       }
       if(balloon.x>775 && horiztl==true){
         balloon.x=776;
         balloon.y=452
        //  balloon.velocityX=0;
        //  balloon.velocityY=0;
        horiztl=false;
        console.log("hello")
       }
       if(balloon.y==452 && balloon.x==776){
         balloon.velocityY=-4
         balloon.velocityX=0;
       }
       if(balloon.y<230){
         balloon.velocityX=-4;
         balloon.velocityY=0;
       }
       if(balloon.x<295 && horiztl==false){
         balloon.velocityX=0;
         balloon.velocityY=-4
       }
       if(balloon.y<96 && balloon.x<300 && horiztl==false){

        balloon.velocityX=4;
        balloon.velocityY=0
       }
  
 //console.log("balloon"+balloon.y)
  drawSprites();
console.log(mouseX,mouseY)
  }
