const arr = [1, 2, 3, 4];

arr[-1] = 42;

// We do not have access to the array index, but rather to the element itself. This is very convenient 
for (const item of arr) {
  console.log(item);
}
