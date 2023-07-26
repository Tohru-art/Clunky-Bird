//Character Code
let xPos = 100;
let yPos = 250;
let accel = 3;
let flap;

function preload(){
    flap = loadImage("images/flappy_bird.png")
}

function setup(){
    createCanvas(500, 500);
    background(225);
    imageMode(CENTER);
}

function draw(){
    //character model
    background(225);
    fill(255, 0, 0);
    yPos += accel;
    image(flap, xPos, yPos, 60, 60);

    //movement and acceleration
    if(keyIsDown(UP_ARROW)){
        accel = 3;
        yPos -= 12;
    }

    else{
        accel += 0.15;
    }
}

