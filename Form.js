class Form {

 constructor(){
   this.input = createInput("Name");
   this.play = createButton('Play');
   this.greeting = createElement('h2');
   this.start = createButton('Start')
 }

 hide(){
   this.input.hide();
   this.play.hide();
   this.greeting.hide();
   this.start.hide();
 }

 display(){
   var title = createElement('h2');
   title.html("The War Of Countries");
   title.position(900,30);
   this.input.position(900,270);
   this.play.position(900,300);
   this.play.mousePressed(()=>{
     this.input.hide();
     this.play.hide();
     player.name = this.input.value();
     playerCount 
     this.greeting.html("Welcome " + player.name + " ,You must be a new recruit");
     this.greeting.position(900,285);
     this.start.position(900,360);
   })
   this.start.mousePressed(()=>{
     this.greeting.hide();
     this.start.hide();
     game.update(1);
   })
 }

}
