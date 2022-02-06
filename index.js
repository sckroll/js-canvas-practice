const TILE_SIZE = 32;

const tileCanvas = document.getElementById('tile-layer-1');
const tileCtx = tileCanvas.getContext('2d');

const tile = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1],
  [1],
]
tileCanvas.height = tile.length * TILE_SIZE;
tileCanvas.width = Math.max(...tile.map(row => row.length)) * TILE_SIZE;

const grassImg = new Image();
grassImg.src = './images/grass.png';
grassImg.onload = () => {
  const pattern = tileCtx.createPattern(grassImg, 'repeat');
  tileCtx.fillStyle = pattern;
  for (let y = 0; y < tile.length; y++) {
    for (let x = 0; x < tile[y].length; x++) {
      if (tile[y][x] == 1) {
        tileCtx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }
}

const playerCanvas = document.getElementById('player');
const playerCtx = playerCanvas.getContext('2d');

playerCanvas.height = tileCanvas.height;
playerCanvas.width = tileCanvas.width;

const playerImg = new Image();
playerImg.src = '';