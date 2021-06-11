class Ground{
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restution: 0,
          friction: 0,
          density: 1
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = width; 
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(255);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
    
    }
  };