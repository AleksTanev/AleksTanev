// foo is hoisted and because it is declaration it is available for execution here
// This is why you MUST use function expressions
foo();

// This will output an error. And once again it is not found anywhere so it is a ReferenceError
// bar();

function foo() {
  console.log('Telerik Academy');
}

// Always use function expressions
const bar = function (){
  console.log('No this time :)');
};
