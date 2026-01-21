class Ball {
  constructor(x, y) {
    this.startX = x;
    this.startY = y;

    this.sprite = new Sprite(x, y, 600);

    this.sprite.img = ballImg;
    this.sprite.scale = 0.1;
    this.sprite.collider = 'dynamic';

    this.sprite.bounciness = 0.67;
    this.sprite.friction = 0.03;
  }

  shoot(angleRad, power) {
  this.sprite.vel.x = Math.cos(angleRad) * power * 2;
  this.sprite.vel.y = Math.sin(angleRad) * power * 2;

  /*
  console.log(
  'vx:', this.sprite.vel.x,
  'vy:', this.sprite.vel.y
);
*/

}

  reset() {
    this.sprite.pos.x = this.startX;
    this.sprite.pos.y = this.startY;
    this.sprite.vel.x = 0;
    this.sprite.vel.y = 0;
  }

  update() {
    
  }
}
