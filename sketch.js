var garden,rabbit,fruits;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesimage = loadImage("apple.png");
  leafimage = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


 //generate random numbers
 var rand =  Math.round(random(1,100));
 console.log(rand);

}
 

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);


  drawSprites();
  spawnApples();
  spawnleaves();
}

function spawnApples(){
if(frameCount %73 ===0){
  apples = createSprite(200,5,5,30);
  apples.velocityY = 3;
  apples.addImage("apples",applesimage);
  apples.scale = 0.05;
  apples.x = Math.round(random(10,500));
  apples.lifetime = 130

 }

}

function spawnleaves(){
  if(frameCount %150 ===0){
  leaf = createSprite(200,5,30,30);
  leaf.velocityY = 2;
  leaf.addImage("leaf",leafimage);
  leaf.scale = 0.06
  leaf.x = Math.round(random(100,400));
  leaf.lifetime = 160

  }


}
