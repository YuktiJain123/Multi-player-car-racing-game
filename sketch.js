var gameState=0;
var playerCount=0;
var form,player,game;
var database;
var allPlayers;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-20);
  game=new Game();
  game.getState();
  game.start();
 
}

function draw(){
  background("white");
if (playerCount===2){
  game.update(1)

}if (gameState===1){
  clear();
  game.play();
}
   
    drawSprites();
  
}


