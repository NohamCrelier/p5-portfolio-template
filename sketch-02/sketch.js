function setup() {
    createCanvas(500, 500);
    strokeWeight(1);
    frameRate(24)
  }
  
  function draw() {
    background(0, 0, 0, 1);
    let cols = 20;
    let rows = 20;
    let spacingX = width / cols ;
    let spacingY = height / rows ;
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        fill(random(255), random(255), random(255), 80);
        let x = i * spacingX + spacingX / 2;
        let y = j * spacingY + spacingY / 2;
        let w = sin(frameCount * 0.1 + i + j) * 20 + 40;
        let h = cos(frameCount * 0.1 + i - j) * 20 + 40;
        
        stroke(0, 0, 0);
        ellipse(x, y, w, h);
      }
    }
  }
  