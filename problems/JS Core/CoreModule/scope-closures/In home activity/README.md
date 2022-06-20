<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Closure - In home activity

1. You have function `add`, your task is to create the behavior that whenever the function is invoked, to not only execute it, but log the times that function was called, without changing the `add` function directly

   ```js
   const add = (a, b) => a + b;

   const decorateWithLogging = func => {
     // Implement this
   };

   const decoratedAdd = decorateWithLogging(add);
   const result = decoratedAdd(1, 2);
   ```

1. Make the `decorateWithLogging` function work with any function (not just with `add`). For example decorate the `createPerson` function

   ```js
   const createPerson = (name, age, gender) => {
     return {
       name,
       age,
       gender
     };
   };
   ```

1. Now create the behavior that when the function `add` is called the first time with certain parameters and return a certain value, to store the parameters and the return value and if the function is called again with the same parameters to immediately return the stored return value, without invoking the function a second time
