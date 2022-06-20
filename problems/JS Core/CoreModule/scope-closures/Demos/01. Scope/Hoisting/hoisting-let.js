// a is hoisted again but it is in Temporal Dead Zone (TDZ)
// Start of TDZ
console.log(a); 

// End of TDZ
const a = 42; // the same is with let
