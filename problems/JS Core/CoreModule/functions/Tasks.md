<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Functions - Tasks

1. Create a `forEach` function which accepts an `array` and a `fn` and executes the function on each element of the array

   - `fn` accepts an argument (each element of the array) and do some logic with it

1. Create a `filter` function which accepts an `array` and a `checkFn` and returns a new filtered array

   - The `checkFn` accepts an argument and return true or false based on condition applied to that argument

     ```js
     // Plain function
     function (item) {
         return item % 2 === 0;
     }

     // Arrow function
     (item) => item % 2 === 0
     ```

   - Execute the `checkFn` on each element of the array and if it returns true add it to the resulting array.
   - Return the resulting array at the end
   - **FACT**: The `checkFn` is called **predicate**. A predicate is a function that takes one item as input and returns **either true or false** based on whether the item satisfies some condition.

1. Using the same logic as in `filter` function, create a `map` function which accepts an `array` and a `modifyFn` and returns a new array with modified items

   - `modifyFn` accepts an argument and modify it
     ```js
     // Gets the item and add 10 to it
     item => item + 10;
     ```

1. Write composition of the three functions above on the `const arr = [1, 2, 3]`
   - `map` and add 10 to any element
   - `filter` only elements greater than 10 (exclusive)
   - `write` all the elements on the console
