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
        title.position(600,40);;

         this.input.position(600,160);
         this.button.position(600,250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            var Name=this.input.value();
            playerCount=playerCount+1;
            player.update(Name)
            player.updateCount(playerCount)
            this.greeting.html("Hi "+ Name);
            this.greeting.position(600,250);
        })
    }
}