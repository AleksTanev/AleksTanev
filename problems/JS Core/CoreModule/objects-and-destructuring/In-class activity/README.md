<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Objects - Tasks

1. Write a function `getKeys` that accepts an object and returns a list of all its keys.
    - hint #1: you can use the `for...in` loop
    - hint #2: there is a built-in js function that you can search for
    ```javascript
    // Example usage:
    let jobOffer = { 
      title: 'Looking for devops guru', 
      description: 'Our growing startup of 27400 emplo...' 
    };

    let keys = getKeys(jobOffer);
    // keys: [ 'title', 'description' ]
    ```


2. Write a function `deleteKey` that accepts an object and a key and returns a new object with the passed key deleted.
    - hint #1 - you can use the function getKeys() to receive a list of all the original keys
    - hint #2 - the bracket notation for accessing object properties is very handy here: you can copy from one object to another like this `newObj[someKey] = oldObj[someKey]` when `someKey` is a string
    ```javascript
    // Example usage:
    let jobOffer = { 
      title: 'Looking for devops guru', 
      description: 'Our growing startup of 27400 emplo...' 
    };

    let jobOffer2 = deleteKey(jobOffer, 'description');
    
    console.log(getKeys(jobOffer2)): // [ 'title' ]
    console.log(jobOffer.description); // 'Our growing startup of 27400 emplo...' 
    console.log(jobOffer == jobOffer2); // false
    ```

3. Write a function `deleteKeys` that accepts an object and a collection of keys and returns a new object with the passed keys deleted.
    ```javascript
    // Example usage:
    let jobOffer = { 
      title: 'Looking for devops guru', 
      description: 'Our growing startup of 27400 emplo...',
      date: '21/12/2112' 
    };

    let jobOffer2 = deleteKey(jobOffer, [ 'description', 'date' ]);
    
    console.log(getKeys(jobOffer2)): // [ 'title' ]
    console.log(jobOffer.description); // 'Our growing startup of 27400 emplo...' 
    console.log(jobOffer == jobOffer2); // false
    ```

4. Write a function `getTypeStats` that accepts an object and returns a new object with the number of unique property types.
    - hints: you can use the typeof operator for most of the things, but beware of `typeof []` is `object`. Search how you can check if something is an Array. Also, it's not shown in the examples, but `typeof null` is also tricky
    - check only first-level properties, don't dive into nested objects
    ```javascript
    // Example usage:
    let jobOffer = { 
      title: 'Looking for devops guru', 
      description: 'Our growing startup of 27400 emplo...',
      date: '21/12/2112' 
    };

    let person = {
      firstName: 'Steven',
      lastName: 'Queen',
      age: 60,
      address: {
        street: '12 Port str',
        city: 'Portland'
      },
      interests: [ 'writing', 'drinking' ]
    }

    let typeStats1 = getTypeStats(jobOffer);
    // typeStats1: { strings: 3 }
    let typeStats2 = getTypeStats(person);
    // typeStats2: { strings: 2, numbers: 1, objects: 1, arrays: 1 }
    ```

5. Write a javascript function `parseUrl` that accepts a URL string and returns an object with the parsed URL. Assume that all URLs are valid.
    ```txt
    url example: 
      https://learn.telerikacademy.com/course/view.php?id=36
    parts:
      protocol: https
      host: learn.telerikacademy.com
      path: /course/view.php
      query: ?id=36
        query can contain more than one key=value pair, separated by `&` sign, such as ?id=36&category=18 
    ```
    - hints: `split()` is your friend here, or `indexOf()` and `substring()`. There is only one place in the URL where the sequence `://` is allowed (after the protocol). There is also only one place where the `?` symbol is allowed - defines the start of the 'query' part 

    > Understanding URL structure will be extremely helpful later in the program and is required for developers.

    ```javascript
    let parsed1 = parseUrl('https://learn.telerikacademy.com/course/view.php?id=36');
    // parsed1:
    // {
    //   protocol: 'https',
    //   host: 'learn.telerikacademy.com',
    //   path: '/course/view.php',
    //   query: {
    //      id: '36'
    //   }
    // }


    let parsed2 = parseUrl('https://google.com/search?q=cats&region=eu');
    // parsed2:
    // {
    //   protocol: 'https',
    //   host: 'google.com',
    //   path: '/search',
    //   query: {
    //      q: 'cats',
    //      region: 'eu'
    //   }
    // }
    ```
