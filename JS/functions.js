//Desenha cada quadrado do Game
function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const squareColor = board[i][j];
      drawSquare(i, j, squareColor);
    }
  }

  scoreElement.innerHTML = "Pontos: " + score;
  speedElement.innerHTML = "Velocidade: " + speed;
  hsScoreElement.innerHTML = "Melhor Pontuação: " + hs;
}
//Desenha o Quadrado do Game
function drawSquare(y, x, color) {
  ctx.fillStyle = color;

  ctx.strokeStyle = defaultColor;
  ctx.fillRect(x * square, y * square, square, square);
  ctx.strokeRect(x * square, y * square, square, square);
}

//Selecionar uma peça aleatória
function randomPiece() {
  const randomPieceNumber = Math.floor(Math.random() * pieces.length);
  return new Piece(pieces[randomPieceNumber][0], pieces[randomPieceNumber][1]);
}

//Peça cair
function drop() {
  const now = Date.now();
  const delta = now - dropStart;

  if (delta > speed) {
    pieceSel.moveDown();
    dropStart = Date.now();
  }

  requestAnimationFrame(drop);
}

const moveLeft = () => {
  if (!canMove) return;
  pieceSel.moveLeft();
};

const moveRight = () => {
  if (!canMove) return;
  pieceSel.moveRight();
};

const rotatePiece = () => {
  if (!canMove) return;
  pieceSel.rotate();
};

const moveUp = () => {
  if (!canMove) return;
  pieceSel.rotate();
};

const moveDown = () => {
  if (!canMove) return;
  pieceSel.moveDown();
};

function control(event) {
  const moveFunctions = {
    ArrowLeft: moveLeft,
    KeyA: moveLeft,
    ArrowRight: moveRight,
    KeyD: moveRight,
    ArrowUp: rotatePiece,
    Space: rotatePiece,
    KeyW: rotatePiece,
    ArrowDown: moveDown,
    KeyS: moveDown,
  };

  const moveMethod = moveFunctions[event.code];
  if (!!moveMethod) {
    event.preventDefault();
    moveMethod();
  }
}

function updateRow(row) {
  canMove = false;

  for (let i = row; i > 1; i--) {
    for (let j = 0; j < col; j++) {
      removeRow(i, j);
    }
  }

  for (let j = 0; j < col; j++) {
    board[0][j] = defaultColor;
  }

  score += 10;

  if (speed > 100) {
    speed -= 20;
  }

  canMove = true;
}

function removeRow(rowToRemove, colToRemove) {
  board[rowToRemove][colToRemove] = board[rowToRemove - 1][colToRemove];
}

function highScore() {
  if (hs < score) hs = score;
}

function gameOver() {
  highScore();
  canMove = false;
  restartElement.disabled = false;
}

function resetGame() {
  speed = 500;
  dropStart = Date.now();
  score = 0;
  bordersDrawn = false;

  board = [];
  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < col; j++) {
      board[i][j] = defaultColor;
    }
  }

  pieceSel = randomPiece();
  drawBoard();
  restartElement.disabled = true;
  canMove = true;
}

function startGame() {
  drop();
  startElement.disabled = true;
}
