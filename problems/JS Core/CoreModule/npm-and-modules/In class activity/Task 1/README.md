<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# ES Modules - Task 1

You have a `Template` folder that contains of several files:
  - `array-op.js` - a module which manipulates an array that you will write - you have all function declarations and you need to implement them.
  - `main.js` - the project consist of code that uses your module. This is a nice way to test your functions.
  - `test` folder - it has one file with tests for your module. Testing your code is important part of the development process. In this case you have already written tests to make sure you have implemented your module correctly. Do not worry how they're written for now just use them.

1. Constraints

   - All the tests must pass when you create the module. (You will see how to run them in a bit).
   - All the functions do not manipulate the array in place, but return a new array instead
   - All the functions receive an array as a first argument and if needed an element as a second
   - Use arrow functions
   - Check if the argument passed as arr is actually array itself
     - Use [https://www.w3schools.com/jsref/jsref_isarray.asp](https://www.w3schools.com/jsref/jsref_isarray.asp)
   - When importing use object destructuring to import only the functions you need
     - [https://dev.to/sarah_chima/object-destructuring-in-es6-3fm](https://dev.to/sarah_chima/object-destructuring-in-es6-3fm)

2. Create a `package.json` file - this is a npm project and there you will have some dependencies and descriptions.

   ```
   npm init
   ```

3. Update the `package.json` file to specify you will be using ES Modules. Add the following:

  ```json
    "type": "module",
  ```

4. In order to execute the tests you must create a script in the `package.json` file. We got familiar with `npm start command`. There are different scripts you can create. one of them is [npm test](https://docs.npmjs.com/cli/test.html)

   ```
   npm run test
   //or
   npm test
   ```

   ```
   "scripts": {
     "test": "node test/array-op.tests.js"
   }
   ```

All the tests are separated in files, each file testing a single `unit` or functionality. The `test/array-op.tests.js` file is importing all of the test files. Note the test files are only imported, no named or default exports are used, because each of the individual test files is executing code rather than export variables.

5. Now create a module which manipulates an array called `array-op` and export 5 functions
6. Function called `removeLast(arr)`
7. Function called `addLast(arr, element)`
8. Function called `removeFirst(arr)`
   - Try to use array destructuring
     - [https://medium.freecodecamp.org/array-destructuring-in-es6-30e398f21d10](https://medium.freecodecamp.org/array-destructuring-in-es6-30e398f21d10)
     - [https://dev.to/sarah_chima/destructuring-assignment---arrays-16f](https://dev.to/sarah_chima/destructuring-assignment---arrays-16f)
9. Function called `addFirst(arr, element)`
10. Function called `contains(arr, element)`, which checks if an element is in the array and return a boolean
