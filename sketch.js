var monkey,monkey_running;
var banana, bananaImg ;
var obstacle,obstacleImg;
var bg, backImg;
var score = 0;
var invisibleGround;




function preload(){
  
   backImg = loadImage("jungle1.jpg");
  
  monkey_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
 bananaImg = loadImage("banana.png");

  obstacleImg = loadImage("stone.png");
  

}

function setup() {
  createCanvas(600, 600);
  

  
  bg = createSprite(460,300,1500,1500);
  bg.addImage("jungle1",backImg);
  bg.velocityX = -3;
  
  monkey = createSprite(100,480);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.2  ;
  
   bananaGroup=createGroup();
 obstacleGroup=createGroup();

  
  invisibleGround = createSprite(100,480,400,10);
  invisibleGround.visible = false;
  
}

function draw() {
  background(220);
  
 text("Score: "+ score, 300,170);
  
 if(bg.x  < 300){
      bg.x = bg.width /2;
    }

    if(keyDown("space")&&monkey.y>235) {
      monkey.velocityY = -14; 
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
   if (monkey.isTouching(bananaGroup)){
      score=score +2;  
      monkey.scale= + 0.3 ;
      bananaGroup.destroyEach();
    
    }
  
   if (monkey.isTouching(obstacleGroup)){
      monkey.scale= 0.2 ;

    
    }

    monkey.collide(invisibleGround);
  
  
  
   bananas();
  obstacles ();
  
  drawSprites (); 
      
  
}



function bananas(){
  if (frameCount%200===0){
    
    banana = createSprite(200,200, 50, 50 )
    banana.addAnimation("banana", bananaImg);
    banana.scale = 0.1;
    banana.velocityX = -3     
    banana.y = Math.round(random(140, 520));
    banana.lifetime = 200;
    bananaGroup.add(banana);

    
  }

}

function bananas(){
  if (frameCount%200===0){
    
    banana = createSprite(200,200, 50, 50 )
    banana.addAnimation("banana", bananaImg);
    banana.scale = 0.1;
    banana.velocityX = -3     
    banana.x = Math.round(random(80, 520));
    banana.lifetime = 200;
    bananaGroup.add(banana);

    
  }

}

function obstacles(){
  if (frameCount%200===0){
    
    obstacle = createSprite(200,480, 50, 50 )
    obstacle.addAnimation("obstacle", obstacleImg);
    obstacle.scale = 0.3;
    obstacle.velocityX = -3     
    obstacle.x = Math.round(random(290, 580));
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);

    
  }

}


































