class Bob {
    constructor(x, y, radius) {
      var options = {
        restitution:0.3,
        friction:0.5,
        density:1.2
      // isStatic:true
      }
      this.x= x;
      this.y = y;
      this.radius=radius;
      this.body = Bodies.circle(this.x,this.y, this.radius, options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
     // rotate(angle);
      fill("pink");
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius,this.radius);
      pop();
    }
  }