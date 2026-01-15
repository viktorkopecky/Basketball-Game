let walls = [];
let BOTTOM_Y = 580;
let bottomWall;
let topWall;


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
    const canvas = createCanvas(900, 600);
    canvas.parent("container");

    // Spodní hranici určeme z výšky canvasu (bez ohledu na stěnu tloušťky)
    BOTTOM_Y = height - 5;
    
    world.gravity.y = 10;

    // Kreslení spritů vypneme automaticky a provedeme ručně, aby HUD byl vždy navrchu
    if (typeof world !== 'undefined' && world) {
        world.autoDraw = false;
    }
   
    createWalls();

  }

function draw() {
    background(255, 178, 102);

    
}
