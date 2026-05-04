function setup() {
    createCanvas(500, 500);
    noFill();
    strokeWeight(1);
  }
  
  function draw() {
    background(10, 10, 10, 10);
    let spacing = height / 20;
    
    for (let i = 0; i < 20; i++) {
      let y = i * spacing + spacing / 2;
      let w = sin(frameCount * 0.03 + i) * 200 + 500;
      let h = cos(frameCount * 0.05 + i) * 120 + 120;
      
      stroke(random(255), random(255), random(255));
      ellipse(width / 2, y, w, h);
    }
  }