let ball, ballImg;
let hoop, hoopImg;
let platform;

let scoreSensor;
let score = 0;

let power = 0;
let maxPower = 12;
let charging = false;
let canShoot = true;

let bottomWall;
let topWall;
let walls = [];
const bottomY = 720;

// funkce pro výpočet úhlu střely podle nabití
function lerp(a, b, t) {
  return a + (b - a) * t;
}

function preload() {
  hoopImg = loadImage('./img/hoop.png');
  ballImg = loadImage('./img/ball.png');
}

function createWalls() {
    bottomWall = new StaticWall(width / 2, height - 20, width, 40);
    walls.push(bottomWall);

    topWall = new StaticWall(width / 2, 20, width, 40);
    walls.push(topWall);

    const left = new StaticWall(20, height / 2, 40, height);
    walls.push(left);

    const right = new StaticWall(width - 20, height / 2, 40, height);
    walls.push(right);
}

function setup() {
    const canvas = createCanvas(1000, 800);
    canvas.parent("container");
    world.gravity.y = 8;

    ball = new Ball(150, height / 2);
    hoop = new Hoop(width - 210, height / 2 + 95);
    platform = new Platform(150, height / 2 + 50);


    scoreSensor = new Sprite(hoop.rim.x, hoop.rim.y + 50, 60, 6);
    scoreSensor.collider = 'none';
    scoreSensor.sensor = true;  // detekce
    scoreSensor.visible = false;

    createWalls();
}

function draw() {
    background(255, 178, 102);

    ball.update();

  // nabíjení střely
  if (charging && power < maxPower) {
    power += 0.25;
  }

  // skóre
  fill(0);
  textSize(50);
  text("Score: " + score, 60, 90);

  //reset a přičtení skóre, když se míč dotkne senzoru
  if (ball.sprite.overlaps(scoreSensor)) {
  if (ball.sprite.vel.y > 0) { // míč padá dolů
    score++;
    resetBall();
  }
}

// reset, když se míč dotkne země
if (ball.sprite.pos.y >= bottomY) {
    resetBall();
  }

}

// ovládání
function keyPressed() {
  if (key === ' ' && canShoot) {
    charging = true;
    power = 0;
  }

  if (key === 'r' || key === 'R') {
    resetBall();
  }
}

function keyReleased() {
  if (key === ' ' && charging) {

    let minAngle = -75;
    let maxAngle = -35;

    let t = power / maxPower;
    let angleDeg = lerp(minAngle, maxAngle, t);
    let angleRad = angleDeg * Math.PI / 180;

    ball.shoot(angleRad, power);

    charging = false;
    canShoot = false;
  }
}

// reset
function resetBall() {
  ball.sprite.x = 150;
  ball.sprite.y = height / 2;

  ball.sprite.vel.x = 0;
  ball.sprite.vel.y = 0;

  canShoot = true;

}
