function setup() {
    createCanvas(500, 500);
    frameRate(20);
    noFill();
    strokeWeight(1);
  }
  
  function draw() {
    background(0, 0, 0, 10);
    
    let cellSize = 40;
    for (let x = 0; x < width; x += cellSize) {
      for (let y = 0; y < height; y += cellSize) {
        stroke(random(100, 255), random(100, 255), random(100, 255));
        let r = int(random(6));
        
        if (r === 0) {
          line(x, y, x + cellSize, y + cellSize);
        } else if (r === 1) {
          line(x + cellSize, y, x, y + cellSize);
        } else if (r === 2) {
          line(x, y + cellSize / 2, x + cellSize, y + cellSize / 2);
        } else if (r === 3) {
          line(x + cellSize / 2, y, x + cellSize / 2, y + cellSize);
        } else if (r === 4) {
          arc(x + cellSize / 2, y + cellSize / 2, cellSize, cellSize, 0, PI);
        } else {
          arc(x + cellSize / 2, y + cellSize / 2, cellSize, cellSize, PI, TWO_PI);
        }
      }
    }
  }