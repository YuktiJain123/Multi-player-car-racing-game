class Game{
    constructor(){

    }
getState(){
    var gameStateRef=database.ref('gameState')
    gameStateRef.on("value",function(data){
        gameState=data.val();
    });
    }
    update(State){
        database.ref('/').update({
            gameState:State
        })
    } 
    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();
        }
    }
    play() {
        form.hide();
        textSize(30);
        text("Start",400,100)
        Player.getplayerInfo()
        if(allPlayers!==undefined){
            var displayPosition=130;
            for(var plr in allPlayers)
            {
                if(plr==="player"+player.index){
                    fill("red");
                
                }else{
                    fill("black");
                    
                }
                displayPosition=displayPosition+20;
                textSize(10);
                text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition);
            }}
            
            if (keyIsDown(UP_ARROW)&&player.index!==1){
                player.distance+=50;
                player.update()
            
        }
    }
}
