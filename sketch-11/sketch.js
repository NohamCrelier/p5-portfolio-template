function setup() {
    createCanvas(500, 500);
    frameRate(30);
    noFill();
    strokeWeight(2);
  }
  
  function draw() {
    background(10);
    
    let cellSize = random(5, 80);
    
    for (let x = 0; x < width; x += cellSize) {
      for (let y = 0; y < height; y += cellSize) {
        stroke(random(255), random(255), random(255), 180);
        let angle = random(TWO_PI);
        let len = random(cellSize * 0.2, cellSize * 3);
        
        line(x, y, x + cos(angle) * len, y + sin(angle) * len);
      }
    }
  }