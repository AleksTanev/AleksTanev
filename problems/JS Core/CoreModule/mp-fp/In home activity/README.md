<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Functional Programming - In home activity

1. Implement a `pipe` function which combines several functions. It’s a pipe flowing left-to-right, calling each function with the output of the last one.

- Let’s write a function that returns someone’s name.

  ```js
  const getName = person => person.name;
  getName({ name: 'Pesho' });
  // 'Pesho'
  ```

- Let’s write a function that uppercase strings.

  ```js
  const uppercase = string => string.toUpperCase();
  uppercase('Pesho');
  // 'Pesho'
  ```

- So if we wanted to get and capitalize person's name, we could do this:

  ```js
  const name = getName({ name: 'Pesho' });
  uppercase(name);
  // 'PESHO'
  ```

- Let’s eliminate that intermediate variable `name`.

  ```js
  uppercase(getName({ name: 'Pesho' }));
  ```

- And now what if we want to add a function that gets the first 3 characters of a string?

  ```js
  const get3Characters = string => string.substring(0, 3);
  get3Characters('Pesho');
  // 'Pes'
  ```

- Resulting in:

  ```js
  get3Characters(uppercase(getName({ name: 'Pesho' })));
  // PES
  ```

- Here comes the `pipe`. The function will combine all other functions in a single call so the code becomes much more readable and understandable and still does the same. Implement it.

  ```js
  const pipe = ...;

  pipe(
    getName,
    uppercase,
    get3Characters
  )({ name: 'Pesho' });
  // 'PES'
  ```
