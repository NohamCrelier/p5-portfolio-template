let coins = [];

function setup() {
  createCanvas(500, 500);
  
  coins = [
    [0, 0],
    [0, height],
    [width, 0],
    [width, height]
  ];
}

function draw() {
  background(255, 50);
  
  strokeWeight(12);
stroke(random(255), random(255), random(255));
  
  for (let i = 0; i < coins.length; i+=1) {
    let x = coins[i][0];
    let y = coins[i][1];
    line(x, y, mouseX, mouseY);
  }
}