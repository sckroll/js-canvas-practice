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
  [0, 1, 0, 1, 1],
]
tileCanvas.height = (tile.length + 2) * TILE_SIZE;
tileCanvas.width = (Math.max(...tile.map(row => row.length)) + 2) * TILE_SIZE;

const grassImg = new Image();
grassImg.src = './images/grass.png';
grassImg.onload = () => {
  const TilePattern = tileCtx.createPattern(grassImg, 'repeat');
  tileCtx.fillStyle = TilePattern;
  for (let y = 0; y < tile.length; y++) {
    for (let x = 0; x < tile[y].length; x++) {
      if (tile[y][x] == 1) {
        tileCtx.fillRect((x + 1) * TILE_SIZE, (y + 1) * TILE_SIZE, TILE_SIZE, TILE_SIZE);
      }
    }
  }
}

const playerCanvas = document.getElementById('player');
const playerCtx = playerCanvas.getContext('2d');

playerCanvas.height = tileCanvas.height;
playerCanvas.width = tileCanvas.width;

const playerImg = new Image();
playerImg.src = './images/player.png';
playerImg.onload = () => {
  const playerPattern = playerCtx.createPattern(playerImg, 'repeat');
  playerCtx.fillStyle = playerPattern;
  playerCtx.fillRect(32, 0, TILE_SIZE, TILE_SIZE * 2);
}