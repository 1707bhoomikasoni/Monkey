
var monkey , monkey_running,gameState=PLAY
var PLAY=1,END=0
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,ground,survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400)
  monkey=createSprite(100,250)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.12
  
  ground=createSprite(300,285,600,5)
  ground.shapeColor="yellow"
  
  foodGroup=createGroup()
  obstacleGroup=createGroup()
}     


function draw() {
background("green")
 
 var rocks
  
  if(keyDown("space")&& monkey.y >= 110) {
  monkey.velocityY = -10;
}
 monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground) 
  console.log(frameCount)
 
  bananas()
  stones()
  
   
  
  text("Survival Time :"+survivalTime,100,50)
  survivaltime =Math.round(frameCount/frameRate());
  stroke="black"
  fill="balck"
  textSize(30)
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach()
    survivalTime++
  }
 if(monkey.isTouching(obstacleGroup)){
  gameState=END;
   
 }
  
 if(gameState===END) {
   monkey.velocityX=0
   foodGroup.destroyEach()
   obstacleGroup.destroyEach()
 }
  
  
  
  
  drawSprites() 

}

function bananas(){
if(frameCount%80===0)  {
var fruit=createSprite(600,150)  
fruit.y=Math.round(random(120,200))  
  fruit.velocityX=-7
  fruit.addImage(bananaImage)
  foodGroup.add(fruit)
  fruit.scale=0.1
fruit.lifetime=80

}
  }

function stones(){
 if(frameCount%100===0) {
var rocks=createSprite(600,255)  
 rocks.velocityX=-6;
 
  obstacleGroup.add(rocks)
 rocks.scale=0.5
 rocks.lifetime=80
 rocks.addImage(obstacleImage)
   rocks.scale=0.2
 }
 }










