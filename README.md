# TI

Front-End (JS, React, markup) technical interview questions

## Computer Science and Software Engineering

- Patterns (Singletone, Adapter, Factory Method, Adapter, etc.)
- Algorithms & _O(n)_ notation
- Data structures

## CSS Questions

- What `box-sizing` property does? Explain DOM element's structure
- Flexbox. Did you use them and how?
- Preprocessors (`SASS`, `LESS`, etc.)
- Which CSS frameworks you are familliar with?
- Have you ever used _CSS in JS_ solution? (styled-components, aphrodite, etc.)
- CSS methodoligies (`BEM`, `SMACSS`, etc.)

## JS Core

- [Js Core Questions](JsCore.md)

## React

- [React Questions](React.md)

## Tools

- Gulp
- Webpack
- ESLint
- Stylelint
- Testing

## Practical Tasks

- Get a sum of n arguments

```javascript
console.log(sum(12, 42, 6));
```

- Make a single array

```javascript
// eg: [[1, 2], [3, 4]] === [1, 2, 3, 4]
const array = [[1, 2, 3], [1, 1, 2, 3], [1, 2, 2, 3, 3, 3]];
```

- Implement function that would return summ of numbers with following call signature:

Basic level:

```javascript
sum(10)(20)(30)(); // 60
```

Advanced level:

```javascript
sum(10)(20)(30)(40); // 100
```

- Implement myBind function

```javascript
const LordSnow = {
  firstName: 'John',
  lastName: 'Snow'
};

function greeting() {
  console.log(`Hello ${this.firstName} ${this.lastName}!`);
}

const greet = greeting.myBind(LordSnow);
greet();
```

- Implement [linked list](https://en.wikipedia.org/wiki/Linked_list) class:

```javascript
const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);

linkedList.indexOf(2); // 1

linkedList.pop(); // 4

console.log(`${linkedList}`); // 1, 2, 3, 4
```

- Check if given strings are a palindrome:

```javascript
// eg. [‘race car’, ‘boat’] === [true, false]
// Input:
const strings = [
  'noon',
  'race car',
  'radar',
  'boat',
  'Step on no pets',
  'keyboard'
];

// Outpoot:
[true, true, true, false, true, false];
```

- Create EventEmitter class that would fit following using:

```javascript
const eventEmitter = new EventEmitter();
eventEmitter.on('something', () => {
  console.log('Hi');
});
eventEmitter.emit('something'); // Hi
```

- Convert plain input array with routes into a paths tree:

```javascript
// Input:
const paths = [
  'rootDir1/subDir1/subSubDir/file',
  'rootDir2/file',
  'rootDir1/subDir1/subSubDir1',
  'rootDir1/subDir1/subSubDir',
  'rootDir2/subDir2',
  'rootDir2/subDir2/file',
  'file'
];

// Output:
const tree = {
  rootDir1: {
    subDir1: {
      subSubDir: {
        file: {}
      },
      subSubDir1: {}
    }
  },
  rootDir2: {
    file: {}
  },
  file: {}
};
```

- Your task is to create `Promise.sequence` function, that would chain **n** promises together. It's notation is `Promise.sequence(Array<Promise>): Promise`

Example of use:

```javascript
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

Promise.sequence([wait(1000), wait(2000), wait(3000)]).then(() => {
    console.log(“Done after approx 6 sec :)”);
});
```
