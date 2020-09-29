class Baseclass {
    constructor(x, y,w,h,angle) {
      var options = {
        'density':1.5,
        'friction': 1.5,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y,w,h, options);
      this.width = w;
      this.height =h;
      World.add(world, this.body);
      this.image=loadImage("sprites/base.png");
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      imageMode(CENTER)
      image (this.image,0, 0, this.width, this.height);
      pop();
    };
  };