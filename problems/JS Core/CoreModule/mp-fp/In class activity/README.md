<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Module Pattern - In class activity

1. Create a **bank account** object using **revealing module pattern**. The object should have the following properties:
   - `balance` - number
   - `deposit` - function that will take one number as a parameter and will add the number to the ballance. Check against invalid numbers and throw an `Error`
   - `withdraw` - function that will take one number as a parameter and will subtract the number from the ballance. Check against invalid numbers and throw an `Error`. Think about what else can go wrong here and guard against it.
   - (*Advanced*) `getBalance` - function that will return the current value of the balance. Research and use a [getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) to do it
