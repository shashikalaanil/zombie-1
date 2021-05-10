var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg,zombieImg1;
var bullet, bulletImg;

var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;

var zombieGroup;

var score = 0;
var life = 3;
var bullets = 70;

var heart1, heart2, heart3

var gameState = "fight"

var lose, winning, explosionSound;
 
function preload(){
  
  heart1Img = loadImage("assets/h1.png")
  heart2Img = loadImage("assets/h2.png")
  heart3Img = loadImage("assets/h3.png")

  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bulletImg = loadImage("assets/bullet.png");

  zombieImg = loadAnimation("assets/1.png","assets/2.png","assets/3.png","assets/4.png")
  
  bgImg = loadImage("assets/bg.jpeg")

  lose = loadSound("assets/lose.mp3")
  winning = loadSound("assets/win.mp3")
  explosionSound = loadSound("assets/explosion.mp3")

   
}

function setup() {
  
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  background(0); 
  drawSprites();

}

