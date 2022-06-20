const arr = [1, 2, 3, 4];

arr[-1] = 42;

// The biggest problem is not the order (it is a big problem), but that now we have access to elements which are not the real indices of the array
for (const key in arr) {
  console.log(arr[key]);
}
