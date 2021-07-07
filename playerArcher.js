class PlayerArcher{
  constructor(x,y,w,h,angle){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.angle = angle;
    this.PlayerArcherImg = loadImage("./assets/playerArcher.png")
    this.body = Bodies.rectangle(x, y, w, h);
    
    Matter.Body.setAngle(this.body, this.angle);
    World.add(world,this.body);

    
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;
     
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, 120, 140);
    pop();
    
  }
  shoot(archerAngle){
    var velocity = p5.velocity.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body,{ x: velocity.x, y:velocity.y});

  }
  move(){
    if (keyIsDown(DOWN_ARROW) && this.angle < -1.2) {
      this.angle += 0.01;
      Matter.Body.setAngle(this.body, angle);
    }

    if (keyIsDown(UP_ARROW) && this.angle > -1.9) {
      this.angle -= 0.01;
      Matter.Body.setAngle(this.body, this.angle);
    }
  }
}

  