function setup() {
    createCanvas(500, 500);
    background(255);
    frameRate (200);
  }
  
  function draw() {
    background(255, 10);
    
    let r = map(mouseX, 0, width, 0, 255);
    let v = map(mouseY, 0, height, 0, 255);
    let b = 150;
  
    noStroke();
    rectMode(CENTER);
    fill(r, v, b);
    rect(300, mouseY, width, 50, 0);
  }
  