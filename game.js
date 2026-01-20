let ball, ballImg;
let hoop, hoopImg;
let platform;

let score = 0;
let power = 0;
let maxPower = 25;
let charging = false;
let canShoot = true;

let BOTTOM_Y = 580;
let bottomWall;
let topWall;

let walls = [];
let images = {};
let shootAngle = -45 * Math.PI / 180;

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
    const canvas = createCanvas(1000, 700);
    canvas.parent("container");
    world.gravity.y = 7;

    ball = new Ball(150, height / 2);
    hoop = new Hoop(width - 210, height / 2 + 50);
    platform = new Platform(150, height / 2 + 50);

    // Spodní hranici určeme z výšky canvasu (bez ohledu na stěnu tloušťky)
    BOTTOM_Y = height - 5;

    // Kreslení spritů vypneme automaticky a provedeme ručně, aby HUD byl vždy navrchu
    if (typeof world !== 'undefined' && world) {
        world.autoDraw = false;
    }
   
    createWalls();
  }

function draw() {
    background(255, 178, 102);

    ball.update();

  // NABÍJENÍ SÍLY
  if (charging && power < maxPower) {
    power += 0.3;
  }

  // UI – ukazatel síly
  drawPowerBar();

  // skóre
  fill(0);
  textSize(20);
  text("Score: " + score, 50, 70);


  if (charging) {
  stroke(255, 0, 0);
  strokeWeight(2);

  line(
    ball.sprite.x,
    ball.sprite.y,
    ball.sprite.x + cos(shootAngle) * 60,
    ball.sprite.y + sin(shootAngle) * 60
  );

  noStroke();
}

}

// ───────── OVLÁDÁNÍ ─────────

function keyPressed() {
  if (key === ' ' && canShoot) {
    charging = true;
    power = 0;
  }

  if (key === 'r' || key === 'R') {
    resetGame();
  }
}

function keyReleased() {
  if (key === ' ' && charging) {
    let minAngle = -1.3;
    let maxAngle = -0.6;

    shootAngle =
      map(power, 0, maxPower, minAngle, maxAngle) * Math.PI / 180;


    ball.shoot(shootAngle, power);

    charging = false;
    canShoot = false;
  }
}

function resetGame() {
  ball.reset();
  power = 0;
  charging = false;
  canShoot = true;
}

// ───────── UI ─────────

function drawPowerBar() {
  fill(0);
  rect(20, height - 30, 200, 10);

  fill(0, 200, 0);
  rect(200, height - 30, map(power, 0, maxPower, 0, 200), 10);
}