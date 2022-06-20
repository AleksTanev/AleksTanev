<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg)" alt="logo" width="300px" style="margin-top: 20px;"/>

# Arrays - Tasks
1. Try to sort the array ```const arr = [10, 1, 2, 0, 5, 3, 9, 4, 6, 8, 7]```. 
    - Use ```sort()``` method.
    - What is the output? Why this is happening? It is not a bug in JavaScript, it is the expected behavior.

    - ["The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values."](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

    - How to sort it by preserving the number order? 
        - Use function passed in sort(). ```a``` and ```b``` are the previous and next number.

        ```js
        arr.sort(function(a, b) {
          return a - b;
        });
        ```


1. Given the array ```const people = ['Ivan', 'Maria', 'Stoyan', 'Petar', 'Iva'];``` 
    - Sort each item and then sort the elements in the array
    - Use the native sort() function of the array in JavaScript. 
    - 'Ivan' sorted is 'Ianv' (Why? [Look here](http://www.asciitable.com/))

1. Fill the matrix
    - Write a program that fills and prints a matrix of size `(n, n)` as shown below.


        | Input  | Output |
        |:------:|:------:|
        | 4<br>a | <table><tbody><tr><td>1</td><td>5</td><td>9</td><td>13</td></tr><tr><td>2</td><td>6</td><td>10</td><td>14</td></tr><tr><td>3</td><td>7</td><td>11</td><td>15</td></tr><tr><td>4</td><td>8</td><td>12</td><td>16</td></tr></tbody></table> |
        | 4<br>b | <table><tbody><tr><td>1</td><td>8</td><td>9</td><td>16</td></tr><tr><td>2</td><td>7</td><td>10</td><td>15</td></tr><tr><td>3</td><td>6</td><td>11</td><td>14</td></tr><tr><td>4</td><td>5</td><td>12</td><td>13</td></tr></tbody></table> |
        | 4<br>c | <table><tbody><tr><td>7</td><td>11</td><td>14</td><td>16</td></tr><tr><td>4</td><td>8</td><td>12</td><td>15</td></tr><tr><td>2</td><td>5</td><td>9</td><td>13</td></tr><tr><td>1</td><td>3</td><td>6</td><td>10</td></tr></tbody></table> |
        | 4<br>d | <table><tbody><tr><td>1</td><td>12</td><td>11</td><td>10</td></tr><tr><td>2</td><td>13</td><td>16</td><td>9</td></tr><tr><td>3</td><td>14</td><td>15</td><td>8</td></tr><tr><td>4</td><td>5</td><td>6</td><td>7</td></tr></tbody></table> |

        

