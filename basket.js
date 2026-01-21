class Hoop {
  constructor(x, y) {
    this.sprite = new Sprite(x, y, 0, 0, 'static');
    this.sprite.img = hoopImg;
    this.sprite.scale = 0.38;

    // obroučka
    this.rim = new Sprite(690, 370, 120, 10);
    this.rim.collider = 'none';
    this.rim.visible = false;

    // levý bok obroučky
    this.leftRim = new Sprite(630, 370, 10, 10);
    this.leftRim.collider = 'static';
    this.leftRim.visible = false;

    // pravý bok obroučky
    this.rightRim = new Sprite(740, 375, 10, 10);
    this.rightRim.collider = 'static';
    this.rightRim.visible = false;


    // deska
    this.backboard = new Sprite(775, 335, 20, 180);
    this.backboard.collider = 'static';
    this.backboard.visible = false;
  }
  
  draw() {
    
  }
}
