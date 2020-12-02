var monkey,monkeyimg,bananaimg,stoneimg,scene,sceneimg, bananagrp,stonegrp,score,ground,rockimg,score 

function preload() {
  monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png","Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png" )

bananaimg=loadImage("banana.png");
stoneimg=loadImage("stone.png");
sceneimg=loadImage("jungle.jpg")
rockimg=loadImage("stone.png");
}

function setup() {
  createCanvas(600,600);
  scene=createSprite(0,0,600,600);
  scene.addImage(sceneimg)
  scene.scale=1.8;
  scene.velocityX=-3;
  monkey=createSprite(150,505,80,50)
  monkey.addAnimation("monkeyimage",monkeyimg);
  monkey.scale=0.18
  ground=createSprite(300,510,600,20)
  ground.visible=false
  bananagrp=new Group();
  stonegrp=new Group();
  score=0;
}

function draw() {
  background(220);
  drawSprites();
  if(scene.x<0) {
    scene.x=300
   
  }
   banana();
  if(keyDown("SPACE")&&monkey.y>440) {
    monkey.velocityY=-12
  }
    
  
  monkey.velocityY=monkey.velocityY+0.5
  
  console.log(monkey.y)
  rock();
  
  if(bananagrp.isTouching(monkey)) {
    score=score+2;
    bananagrp.destroyEach();
  }
  if(stonegrp.isTouching(monkey)) {
    monkey.scale=0.2;
  }
  
  fill("YELLOW")
  textSize(18);
  text("Score: "+score,5,15)
  
  
  switch(score) {
    case 10: monkey.scale=0.5
      break
      case 20: monkey.scale= 1.0
       break
       case 30: monkey.scale= 1.2
       
      
  }
  monkey.collide(ground)
}

function banana() {
  if(frameCount %60==0){
    var banana=createSprite(600,350,50,50)
    banana.addImage(bananaimg);
    banana.velocityX=-5
    banana.scale=0.08
    banana.y=Math.round(random(350,200))
    banana.lifetime=120
    bananagrp.add(banana);
    
  }
}

function rock () {
  if(frameCount%80==0) {
    var rock=createSprite(600,507,50,50)
    rock.addImage(rockimg)
    rock.scale=0.2
    rock.velocityX=-5
    rock.lifetime=120;
    stonegrp.add(rock);
    
  }
}