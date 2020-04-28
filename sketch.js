var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var runner, runner1, runner2;

function preload(){
  track = loadImage("../images/track.jpg");
  ground = loadImage("../images/ground.png");
  
  runner1 = createSprite(100,200);
  
  runner2 = createSprite(300,200);

  runners = [runner1, runner2];
  

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
