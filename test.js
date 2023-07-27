//Coin variables
let canvasWidth = 400;
let canvasHeight = 600;
let coinSize = 20;
let coinSpeed = 3;

let coins = [];
let score = 0;

//Character variables
let xPos = 100;
let yPos = 250;
let accel = 3;
let rectSize = 60;
let flap;

//Collision Variables
let myLeft, myRight, myTop, myBottom, distance;


//Image of bird
function preload(){
  flap = loadImage("images/flap.png")
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  imageMode(CENTER);
  rectMode(CENTER);
}

function draw() {
  background(220);
  
  //character model
  yPos += accel;
  image(flap, xPos, yPos, rectSize, rectSize);
  // fill(255, 0, 0);
  // rect(xPos, yPos, rectSize, rectSize);
  //Movement and acceleration
  if(keyIsDown(UP_ARROW)){
    accel = 3;
    yPos -= 12;
  }

  else{
    accel += 0.15;
  }

  // Generate coins
  if (frameCount % 60 == 0) { // Add a new coin every second
    coins.push({ x: width, y: random(coinSize, height - coinSize) });
  }

  // Draw coins and check for click (catching) event
  for (let i = coins.length - 1; i >= 0; i--) {
    const coin = coins[i];
    coin.x -= coinSpeed;

    fill(255, 165, 0); // Orange coin
    ellipse(coin.x, coin.y, coinSize, coinSize);

    // Remove coins that went off-screen
    if (coin.x < 0 - coinSize / 2) {
      coins.splice(i, 1);
    }
  }

  //Collision detection
  let distance = dist(xPos, yPos, coins.x, coins.y);
  if(distance < "imageSize" + coinSize / 2){
    score += 1;
    coins.splice(i, 1);
  }
  
  // Display score
  fill(0);
  textSize(20);
  text("Score: " + score, 10, 30);
}