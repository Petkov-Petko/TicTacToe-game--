const table = document.getElementById("table");
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;
let winner = document.getElementById("win");

table.addEventListener("click", (event) => {
  const cell = event.target;

  if (cell.textContent === "") {
    cell.textContent = currentPlayer;
    currentPlayer = currentPlayer === player1 ? player2 : player1; 
    checkForWin();
  }
});

const winCombinations = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row                                0 | 1 | 2
  [0, 3, 6], // Left column
  [1, 4, 7], // Middle column                             3   4    5
  [2, 5, 8], // Right column
  [0, 4, 8], // Diagonal from top-left to bottom-right    6   7    8
  [2, 4, 6], // Diagonal from top-right to bottom-left
];



function checkForWin() {
    for (const combo of winCombinations) {
      const [a, b, c] = combo;
      const cells = [document.getElementById(a + 1), document.getElementById(b + 1), document.getElementById(c + 1)];

      if (cells.every((cell) => cell.textContent === "X") || cells.every((cell) => cell.textContent === "O")) {
        if (currentPlayer === "X"){
            currentPlayer = "O";
        }
        else{
            currentPlayer = "X"
        }
        winner.innerHTML = `Winner is: ${currentPlayer}`
        
      }
    }
  }


function playAgean(){
    location.reload();
}