var block1
var block2
var block4

var ball
var edges
var music

function setup(){
    createCanvas(1000-115,1000-400)
    block1=createSprite(110,570,200,30)
    block1.shapeColor="blue"

    block2=createSprite(330,570,200,30)
    block2.shapeColor="yellow"
    
    block3=createSprite(550,570,200,30)
    block3.shapeColor="red"
    
    block4=createSprite(770,570,200,30)
    block4.shapeColor="darkgreen"
    
    ball=createSprite(850,200,50,50)
    ball.shapeColor="white"
    ball.velocityY=10
    ball.velocityX=6
}
function draw(){
    background(0)
     edges=createEdgeSprites()
        ball.bounceOff(edges)
  
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor="blue"
       
    }else if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor="yellow"
    } else if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor="red"
    }else if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor="darkgreen"
}
drawSprites()
}