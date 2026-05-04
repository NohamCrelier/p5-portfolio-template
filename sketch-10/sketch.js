let grid = [];
let cellSize = 20;

function setup() {
  createCanvas(500, 500);
  frameRate(30);
  noStroke();
  
  initializeGrid();
}

function initializeGrid() {
  for (let x = 0; x < width / cellSize; x++) {
    grid[x] = [];
    for (let y = 0; y < height / cellSize; y++) {
      grid[x][y] = {
        size: random(cellSize * 0.1, cellSize * 2.5)
      };
    }
  }
}

function draw() {
  background(255);
  fill(random(255), random(255), random(255));
  
  for (let x = 0; x < width / cellSize; x++) {
    for (let y = 0; y < height / cellSize; y++) {
      grid[x][y].size = lerp(grid[x][y].size, random(cellSize * 0.1, cellSize * 2.5), 0.2);
      
      ellipse(
        x * cellSize + cellSize / 2,
        y * cellSize + cellSize / 2,
        grid[x][y].size,
        grid[x][y].size
      );
    }
  }
}