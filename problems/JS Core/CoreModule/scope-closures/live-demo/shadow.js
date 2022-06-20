let a = 10;

function getA() {
  return a;
}

function shadow() {
  console.log(a);
  var a = 2;

  console.log(`closure over outer "a": ${getA()}`);

  console.log(a);
}

shadow();

console.log(a);