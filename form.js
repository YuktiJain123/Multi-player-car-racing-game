class Form{
    constructor(){
       this.input=createInput("Name")
       this.button=createButton("Play"); 
       this.greeting=createElement('h2');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title=createElement('h1');
        title.html("Yukti's Car Racing Game");
        title.position(displayWidth/2-150,0);

         this.input.position(displayWidth/2,displayHeight/2);
         this.button.position(600,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

           player.name=this.input.value();
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount)
            this.greeting.html("Hi "+ player.name);
            this.greeting.position(600,250);
        })
    }
}