# JS Core

## Questions

- Types

  ```javascript
  typeof undefined;
  typeof null;
  typeof NaN;
  typeof [];
  typeof 'something';
  typeof false;
  typeof Symbol(new Array()) instanceof Object;
  Symbol() === Symbol();
  11.7 - 10.3 === 1.4;
  '11' == 11;
  console.log(3 + '4' - '2');
  ```

- Funcrion Declaration vs Function Expression (Hoisting). Difference between `var` vs `let` & `const`

  ```javascript
  foo();
  bar();

  function foo() {
    console.log(a);
    a = 0;
    console.log(a);
    var a;
  }
  const bar = function() {
    console.log(b);
    b = 0;
    console.log(b);
    let b;
  };
  ```

- Explain the difference between function and arrow function

- What is prototype? Prototype inheritance

- What is closures in JS?

- What will console print?

  ```javascript
  const payne = { name: 'Major Payne' };
  const wayne = { name: 'Bruce Wayne' };

  function foo() {
    console.log(`Hi, my name is ${this.name}`);
  }

  foo = foo.bind(wayne).bind(payne);
  foo();
  ```

- JS Event Loop. Explain the following code & fix

  ```javascript
  for (var i = 0; i < 10; i++) {
    setTimeout(function() {
      console.log(i);
    }, 1000);
  }
  ```

- What is `Promise`? Which problem `Promise`'s are solves? (`Async/await`)

- What will console print?

  ```javascript
  new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
  })
    .then(() => {
      throw new Error('Something failed');

      console.log('Do this');
    })
    .catch(() => {
      console.log('Do that');
    })
    .then(() => {
      console.log('Will it be printed?');
    });
  ```

## Links

- [37 Essential JavaScript Interview Questions](https://www.toptal.com/javascript/interview-questions)
- [Advanced and Basic JavaScript Interview Questions](https://www.onlineinterviewquestions.com/advanced-javascript-interview-questions)
