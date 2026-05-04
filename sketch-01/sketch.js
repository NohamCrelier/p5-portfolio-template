function setup() {
    createCanvas(500, 500);
    noFill();
    strokeWeight(1);
  }
  
  function draw() {
    background(0, 0, 0, 10);
    let cols = 20;
    let rows = 20;
    let spacingX = width / cols ;
    let spacingY = height / rows ;
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = i * spacingX + spacingX / 2;
        let y = j * spacingY + spacingY / 2;
        let w = sin(frameCount * 0.1 + i + j) * 10 + 10;
        let h = cos(frameCount * 0.1 + i - j) * 25 + 10;
        
        stroke(random(100), random(0), random(255));
        ellipse(x, y, w, h+y-x);
      }
    }
  }