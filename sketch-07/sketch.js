function setup() {
    createCanvas(500, 500);
    noStroke();
  }
  
  function draw() {
    background(0, 0, 0, 50);
    
    let taille = 50;
  
    for (let y = 0; y < height; y += taille) {
      for (let x = 0; x < width; x += taille) {
        
        let colonnes = x / taille;
        let rangées = y / taille;
        
        if ( (colonnes + rangées) - 2 * floor((colonnes + rangées)/2) == 0 ) {
          fill(0);
        } else {
          fill(random (255), random (255), random (255), );
        }
  
        let tailleAnim = map(sin(frameCount * 0.1 + x + y), -1, 1, 10, taille);
  
        rect(x + (taille - tailleAnim) / 2, y + (taille - tailleAnim) / 2, tailleAnim, tailleAnim);
      }
    }
  }