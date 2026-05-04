let img;

function preload() {
  // Charger une image depuis une URL ou un fichier local
  img = loadImage('Capture d’écran 2025-07-23 à 10.32.46.png'); 
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Ondulation
  let waveAmplitude = 200; // amplitude 
  let waveFrequency = 0.5; // fréquence 

  // Parcourir la hauteur du canvas ligne par ligne
  for (let y = 0; y < height; y++) {
    // Effet wave 
    let waveOffset = sin((y + frameCount * 4) * waveFrequency) * waveAmplitude
                   + sin((y * 0.3 + frameCount * 3) * 0.1) * (waveAmplitude / 2) - waveAmplitude * 2;

    // Afficher une ligne déformée
    copy(
      img,
      0,
      y,
      img.width,
      1,
      waveOffset,
      y,
      width + waveAmplitude * 4,
      1
    );
  }
}