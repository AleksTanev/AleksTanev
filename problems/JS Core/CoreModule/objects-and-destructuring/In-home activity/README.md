<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## 1. Project information
Let's practice using objects in JavaScript.

## 2. Objects
- an object is a group of related (key: value) pairs called properties.
- objects are used in every real-world application.
- they can represent different concepts - users, bookings, flights, bank accounts, programming courses, etc.

## 3. Creating Objects
1. Create a main.js file.
2. Create an object `course` that represents a school course with the following properties:
    - **name**: (string, e.g. 'Music'),
    - **teacher**: (string, e.g. 'Mr. Peshev'),
    - **studentsCount**: (number, e.g. 25),
    - **weekDay**: (string, e.g. 'Friday'),
3. Paste the following line after creating the object
    ```javascript
    console.log(`${course.name} by ${course.teacher}. Every ${course.weekDay}, expected attendance: ${course.studentsCount}`);
    ```

4. If everything is fine, you should see `Music by Mr. Peshev. Every Friday, expected attendance: 25`
5. Create a function `createCourse` that accepts name, teacher, weekDay, studentsCount and creates a new course with the provided parameters.
6. Create a function `getCourseLabel` that accepts a course and returns information like the above example.
7. If everything is ok, the following code should work.
    ```javascript
    const math = createCourse('Math', 'Ms. Atanasova', 31, 'Monday');
    const label = getCourseLabel(math);
    console.log(label);
    // Math by Ms. Atanasova. Every Monday, expected attendance: 31
    ```

## 4. Understanding References
We've created several examples for you.
    - they show the behavior of reference types.
    - try to predict the result before running the code.
    - **write down any questions you have** and ask them in the session about objects.
1. Task #1
    ```javascript
    const pointOne = {};
    const pointTwo = pointOne;
    pointTwo.x = 10;
    delete pointOne.x;
    console.log(pointTwo.x);

    // What's the result? 
    // a) undefined
    // b) 10
    // c) TypeError
    ```
2. Task #2
    ```javascript
    const letters = ['a', 'e', 'c', 'b', 'd'];
    const lettersCopy = letters;
    lettersCopy.sort();
    console.log(letters);

    // What's the result?
    // a) [ 'a', 'b', 'c', 'd', 'e' ]
    // b) Error: you can't sort letters
    // c) [ 'a', 'e', 'c', 'b', 'd' ]
    ```

3. Task #3
    ```javascript
    const person = { name: 'Pesho' };
    const modify = (p) => {
      p.name = 'Gosho';
    };
    modify(person);
    console.log(person.name);

    // What's the result?
    // a) Pesho
    // b) Gosho
    // c) undefined
    ```

4. Task #4
    ```javascript
    const person = { name: 'Pesho' };
    const modify = (p) => {
      p = { name: 'Gosho' }
    };
    modify(person);
    console.log(person.name);

    // What's the result?
    // a) Pesho
    // b) Gosho
    // c) undefined
    ```

5. Task #5
    ```javascript
    const user1 = { name: 'Pesho' };
    const user2 = { ...user1 };
    user2.name = 'Gosho';
    user2.age = 30;
    console.log(`${user1.name} ${user1.age} ${user2.name} ${user2.age}`);

    // What's the result?
    // a) Gosho 30 Gosho 30
    // b) Pesho 30 Gosho 30
    // c) Pesho undefined Gosho 30
    // d) Pesho undefined Pesho undefined
    ```

6. Task #6
    ```javascript
    const user1 = { name: 'Pesho' };
    const user2 = { name: 'Pesho' };
    const user3 = user1;
    console.log(user1 === user2);
    console.log(user2 === user3);
    console.log(user1 === user3);

    // What's the result?
    // a) false, false, true
    // b) false, true, true
    // c) true, true, false
    // d) true, false, true
    ```

7. Task #7
    ```javascript
    const user1 = { name: 'Pesho' };
    const user2 = { name: 'Gosho' };
    const user3 = { ...user1, ...user2 };

    console.log(user3);
    console.log(user1 === user2);
    console.log(user1 === user3);
    console.log(user2 === user3);

    // What's the result?
    // a) { name: 'Pesho', name: 'Gosho' }, false, false, false
    // b) { name: 'Gosho' }, false, true, true
    // c) { name: 'Gosho' }, false, false, false
    // d) { name: 'Pesho' }, false, true, true
    // e) { name: 'Gosho' }, true, true, true
    // f) { name: 'Gosho' }, false, true, true
    ```

8. Task #8
    ```javascript
    let obj1 = {};
    const obj2 = {};

    obj1.key = 'value';
    obj2.key = 'value';

    console.log(obj1.key);
    console.log(obj2.key);

    // What's the result?
    // a) value, undefined
    // b) Error - can't modify a constant
    // c) value, value
    ```