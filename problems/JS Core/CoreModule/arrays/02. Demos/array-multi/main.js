const arr = [];

const rows = 4;
const cols = 4;

for (let row = 0; row < rows; row++) {
  arr[row] = [];
  for (let col = 0; col < cols; col++) {
    arr[row][col] = row * rows + (col + 1)
  }
}

console.log(arr);
