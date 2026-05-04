function setup() {
    createCanvas(500, 500);
    noFill();
    strokeWeight(2);
    colorMode(HSB, 360, 100, 100, 100); // mode couleur beaucoup plus riche
  }
  
  function draw() {
    background(0, 0, 0, 1);
    
    let cols = 25;
    let rows = 15;
    
    let spacingX = width / cols;
    let spacingY = height / rows;
    
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        
        let x1 = i * spacingX;
        let y1 = j * spacingY + 20 + sin(frameCount * 0.02 + j) * 10;
        
        let x2 = x1 + spacingX;
        
        let amp = map(j, 0, rows, 10, 40);
        let y2 = y1 + sin(frameCount * 0.04 + i * 0.5) * amp;
        
        // couleur basée sur position + temps
        let hue = (i * 15 + j * 10 + frameCount) % 360;
        let sat = 80;
        let bri = 100;
        
        stroke(hue, sat, bri, 80); // un peu de transparence
        
        line(x1, y1, x2, y2);
      }
    }
  }