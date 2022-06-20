<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Functions - In home activity

1. Create a function `add` which adds two numbers

   - Check if any of the arguments is not a number and throw an Error

     - Search how to check for type in JavaScript

     ```js
     throw new Error(`${item} is not a number`);
     ```

   - Use try catch to catch the error

     ```js
     try {
       add('Telerik', 1, 2);
     } catch (error) {
       console.log(error.message);
     }
     ```

1. Now create functions `subtract`, `multiply` and `divide`. Make them work just like the `add` function.

1. Extract the check as external function `checkIfNumber` and reuse it in all functions above

1. Extend the function `add` to accept any number of arguments, add them together and return the result

1. Now it is time to make some more advanced task. Create a calculator function that accepts two numbers and any of the first four functions as third parameter (not the extended add function, but the one with two parameters). It invokes the passed function with the two numbers and returns the result

1. Now extend the calculator to receive not just one of the functions but any number of them, invoke all of them, store the results in an array and return it
