// /**

const board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
//  * @param {character[][]} board
//  * @return {boolean}
//  */
 var isValidSudoku = function(board) {
  let [row,rowsMax,col,colsMax,isValid] = [0,9,0,9,true];

  const checkIfValid = (row,col) => {
    let isValidCell = true;

    if (board[row][col] === '.') return true;

    if (board[row][col] !== '.') {
      for (let i = 0; i < rowsMax && i < colsMax;i++) {
        //checking horizontally & vertically
        if ((board[row][i] === board[row][col] && i !== col) || (board[i][col] === board[row][col] && i !== row)) {
          isValidCell= false
          break
        }
      }
      // checking if box is valid
      bigLoop:
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j<3; j++) {
        // top left
          if (row<3 && col<3) {
            if (board[i][j] === board[row][col] && (i!== row || j!== col)) {
              isValidCell = false
              break bigLoop
            }
        
        // centre left
          } else if (row >= 3 && row < 6 && col < 3) {
            if (board[3+i][j] === board[row][col] && (3+i!== row || j!== col)) {
              isValidCell = false
              break bigLoop
            }

        // bottom left
          } else if (row >= 6 && col < 3) {
            if (board[6+i][j] === board[row][col] && (6+i!== row || j!== col)) {
              isValidCell = false
              break bigLoop
            }
        
        // top centre
          } else if (row < 3 && col >= 3 && col < 6){
            if (board[i][3+j] === board[row][col] && (i!== row || 3+j!== col)) {
              isValidCell = false
              break bigLoop
            }

        // mid centre
          } else if (row >= 3 && row < 6 && col >= 3 && col < 6) {
            if (board[3+i][3+j] === board[row][col] && (3+i!== row || 3+j!== col)) {
              isValidCell = false
              break bigLoop
            }
        
        // bot centre
          } else if (row >= 6 && col >= 3 && col < 6) {
            if (board[6+i][3+j] === board[row][col] && (6+i!== row || 3+j!== col)) {
              isValidCell = false
              break bigLoop
            }

        // top right
          } else if (row < 3 && col >= 6) {
            if (board[i][6+j] === board[row][col] && (i!== row || 6+j!== col)) {
              isValidCell = false
              break bigLoop
            }

        // mid right
          } else if (row >= 3 && row < 6 && col >= 6) {
            if (board[3+i][6+j] === board[row][col] && (3 + i!== row || 6 + j!== col)) {
              isValidCell = false
              break bigLoop
            }

        // bot right (default)
          } else {
            if (board[6+i][6+j] === board[row][col] && (6+i!== row || 6+j!== col)) {
              isValidCell = false
              break bigLoop
            }
          
          }
        }
      }
    }


    return isValidCell;
  };

  while (col < colsMax && row < rowsMax && isValid) {
    if (!checkIfValid(row,col)) return false
    
    col++;
    
    if (col === colsMax) {
      col = 0;
      row++;
    }
    if (row === rowsMax) {
      break;
    }
  }
  
  
  return isValid;
};

console.log(isValidSudoku(board));
