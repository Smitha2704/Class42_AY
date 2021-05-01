var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var obstaclesGroup;

var cars, car1, car2, car3, car4,obstacle,soundSlide;
var track, car1_img, car2_img, car3_img, car4_img,obstacle_img,randX,randY;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  obstacle_img=loadImage("images/f1.png");
  soundSlide=loadSound("sound/sliding.mp3");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  obstaclesGroup=createGroup();

  for(var count=0; count<10; count++){
    randX=Math.round(random(50,600));
    randY=Math.round(random(-displayHeight*4, displayHeight-300));
    obstacle=createSprite(randX,randY,20,30);
    obstacle.addImage(obstacle_img);
    obstacle.debug=true;
    obstaclesGroup.add(obstacle);
  }
  
  xSet = false;
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 
  
