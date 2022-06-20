<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Closure - Tasks

Use the `people.js` file and with `import './people.js'` you could load the content in JavaScript object

We already know that there are built-in `sort` and `find` methods in JavaScript. There are some more useful functions in JavaScript. We will try to use `filter` too.

- The `find` method receives a function as an argument. This function itself accepts one argument and returns the first element which satisfies a condition.

  ```js
  const arr = [10, 1, 2, 20];

  // The result will be 1, because this is the first element smaller than 5
  const result = arr.find(elem => {
    return elem < 5;
  });
  ```

  - This is the function to be passed and you must return this type of function from another function and thus create a closure.

    ```js
    elem => {
      return elem < 5;
    };
    ```

  - Here **5** is **hard-coded value** and we could pass it from outside

    ```js
    // Pass the value
    num => {
      const returnFn = elem => {
        return elem < num;
      };

      // Closure
      return returnFn;
    };
    ```

- The `sort` method receives a function as an argument. This function itself accepts two arguments and based on their precedence sorts the collection.

  ```js
  const arr = [10, 1, 2, 20];

  const sorted = arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    } else {
      return -1;
    }
  });
  ```

- The `filter` method receives a function as an argument. This function itself accepts one argument and return the all the elements which satisfy a condition.

  ```js
  const arr = [10, 1, 2, 20];

  // The result will array  [1, 2], because these are all elements smaller than 5
  const result = arr.filter(elem => {
    return elem < 5;
  });
  ```

1. Your task is to create a function which to be passed as argument to the `find` method. This function when executed must return a function accepting one argument and return the first element which satisfies a condition.

   - Create a function `findBy(key, value)` which accepts two arguments (key and value) and returns the first element which meets the condition `el[key] === value;`

     ```js
     const res1 = people.find(findBy('name', 'Mills'));
     const res2 = people.find(byKey('city', 'Sofia'));
     ```

1. Your task is to create a function which to be passed as argument to the `sort` method. This function when executed must return a function accepting two arguments and based on the condition return a value to sort the collection.

   ```js
   const people = [
     {
       age: 46,
       city: 'Plovdiv',
       name: 'Mallory'
     },
     {
       age: 20,
       city: 'Sofia',
       name: 'Delores'
     }
   ];
   ```

   - Create a function `byKey(key)` which accepts a key (name, age, city) and sorts the collection by this key

     ```js
     const sorted1 = people.sort(byKey('name'));
     const sorted2 = people.sort(byKey('age'));
     ```

   - Upgrade the function to accept another argument which defines if the sort will be ascending or descending order

     ```js
     const sorted1 = people.sort(byKey('name', 'asc'));
     const sorted2 = people.sort(byKey('age', 'desc'));
     ```

1. Your task is to create a few functions which to be passed as argument to the `filter` method. This functions when executed must return a function accepting one argument and return true or false. All the values evaluated to true will end pup in the final array.

   - Create a function `isBetween(key, low, high)` which accepts three arguments (key, low and high) and returns true or false if the key value is between low and high`el[key] >= low && el[key] <= high;`

     ```js
     const res = people.filter(isBetween('age', 20, 23));
     ```

   - Create a function `isLower(key, value)` which accepts two arguments (key and value) and returns true or false if the key value is lower than the value `el[key] <= value;`

     ```js
     const res = people.filter(isLower('age', 20));
     ```

   - Create a function `isHigher(key, value)` which accepts two arguments (key and value) and returns true or false if the key value is higher than the value `el[key] >= value;`

     ```js
     const res = people.filter(isHigher('age', 20));
     ```

   - Create a function `startsWith(key, letter)` which accepts two arguments (key and letter) and returns true or false if the key first letter is equal to the letter provided as argument `el[key][0] === letter;`

     ```js
     const res = people.filter(startsWith('name', 'M'));
     ```
