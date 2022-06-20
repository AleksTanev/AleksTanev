<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# ESLint - In home activity

1. Setup and try ESLint

   - Place the `.eslintrc.json` file from this folder into one of your local folders in which you will write some code
   - Setup the ESLint VSCode extension and install the needed packages

     ```
     npm install eslint eslint-config-google babel-eslint -D
     ```

   - Think what the above is doing? How many packages it installs and in which dependencies they end up?
   - Or use the provided `package.json` file
   - Write some fun JavaScript code or use this one

     ```js
     var text = 'Telerik Academy';
     console.log(unexistingVariable);
     ```

   - If the setup is correct VSCode ESlint extension should underline the rule violations
     <br/>
     !['bad-javascript'](./imgs/bad-javascript.png)
   - The extension also provides you with autofix option for some of them
     <br/>
     !['autofix-javascript'](./imgs/autofix-javascript.png)

1. Put a few scripts to automate the process of error finding and fixing

   ```json
   // package.json
   "scripts": {
     "lint": "eslint .",
     "lint-fix": ""
   },
   ```

   - run `npm run lint` and try `npm run lint-fix`
   - Notice that fix option won't fix everything, but it could automate a lot of code fixes

1. In order to stop receiving an `!ERR` output from eslint like the below example run the above commands with `--silent` flag

   - `npm run lint --silent`

     ![lint-error](./imgs/error-lint.png)

1. Research for the [ESLint supported rules](https://eslint.org/docs/rules/) and test some of them in the suggested **rules property** in the **.eslintrc.json** file

   - A comma at the end of the file or after last property is forbidden because it will be invalid and ESLint won't work

   ```json
   "rules": {
     "quotes": 2 // no comma here
   },
   "parserOptions": {
     "ecmaVersion": 6,
     "sourceType": "module" // no comma here
   } // no comma here
   ```
