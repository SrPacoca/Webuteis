const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const scoreElement = document.getElementById("score");
const hsScoreElement = document.getElementById("high-score");
const speedElement = document.getElementById("speed");
const startElement = document.getElementById("start");
const restartElement = document.getElementById("restart");

const row = 20;
const col = 10;

let square = 30;

console.log("Tamanho do quadrado:", square);

const defaultColor = "#111111";

let isGameOver = false;
let isAlredyStart = false;
let canMove = true;
let speed = 500;
let dropStart = Date.now();
let score = 0;
let hs = 0;

let board = [];
for (let i = 0; i < row; i++) {
  board[i] = [];
  for (let j = 0; j < col; j++) {
    board[i][j] = defaultColor;
  }
}

drawBoard();

// Peças
const pieces = [
  [I, "#A08EBF"],
  [J, "#8CBEB2"],
  [L, "#F2EBBF"],
  [O, "#F3B562"],
  [S, "#F06060"],
  [T, "#BFBD8E"],
  [Z, "#4D6A63"],
];

let pieceSel = randomPiece();

restartElement.addEventListener("click", resetGame);
startElement.addEventListener("click", startGame);
document.addEventListener("keydown", control);
