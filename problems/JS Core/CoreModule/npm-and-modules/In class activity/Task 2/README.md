<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# ES Modules - Task 2

You have a `Template` folder that contains of several files:
  - `logger.js` - a module which provides logging functioanlity that you will write.
  - `main.js` - the project consist of code that uses your module. This is a nice way to test your functions.

1. Create a `package.json` file - this is a npm project and there you will have some dependencies and descriptions. Don't forget to edit it and specify the module type.

   ```
   npm init
   ```

2. Create the **logger module** with three functions `info`, `error` and `success` and use default message if none is provided. 

When having default values it is better to extract them as constants, not use the strings directly.

   - Change the first part of the string to `Info`, `Error` or `Success`

   ```js
   console.info(`Info: ${msg || defaultInfoMsg}`);
   ```

   - Export the module

3. Install [moment.js](https://momentjs.com/) package. Read a bit about it - this package will be very useful for you in the future and it will be nice to get familiar with it.

   ```npm install moment```

4. Now go and write some more code in `main.js` to test out this package:
   1. Import `moment` object. Read the [documentation](https://momentjs.com/docs/) to see how. Make sure you do not just copy the code from there - adapt it to be consistent with ES6 - we do not want some vars here and there.
   2. Use `moment` and `logger.info` to print current time
   3. [Read](https://momentjs.com/docs/#/parsing/string/) how to parse string to date.
      1. You have defined a string array with different dates
      2. For each date log success if it is in correct format, or error if not. Use the following code and familiarize with `isValid()` function.

            ```js
            dates.forEach(date => {
              if (moment(date).isValid()) {
                logger.success(moment(date));
              } else {
                logger.error(moment(date));
              }
            });
            ```
