class Platform {
  constructor(x, y) {
    this.sprite = new Sprite(x, y, 90, 10, 'static');
    this.sprite.color = 'white';
  }

  draw() {
    // p5play kreslí sprite automaticky
  }
}
