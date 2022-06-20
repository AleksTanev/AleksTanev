let a = 1;

function test(a) {
  a = 2;

  return a;
}

test(a);

console.log(a);

