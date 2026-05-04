let img;

function preload() {
  img = loadImage('Capture d’écran 2025-07-23 à 10.32.46.png');
}

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(5);

  for (let i = 0; i < 600; i++) {
    let x = floor(random(width));
    let y = floor(random(height));
    let w = floor(random(10, 80));
    let h = floor(random(10, 80));

    let sx = constrain(x + random(-100, 100), 0, width - w);
    let sy = constrain(y + random(-100, 100), 0, height - h);

    let fragment = img.get(sx, sy, w, h);

    push();
    translate(x + w / 2, y + h / 2);
    rotate(random(-PI, PI));
    imageMode(CENTER);
    tint(random(255), random(255), random(255), 220);
    image(fragment, 0, 0);
    pop();
  }
}