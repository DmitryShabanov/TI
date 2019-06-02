// --------------
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


// --------------
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


// --------------
const payne = { name: 'Major Payne' };
const wayne = { name: 'Bruce Wayne' };

function foo() {
  console.log(`Hi, my name is ${this.name}`);
}

foo = foo.bind(wayne).bind(payne);
foo();


// --------------
for (var i = 0; i < 10; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}


// --------------
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


// --------------
class Button extends Component {
  render() {
    return <button onClick={() => alert('boom')}>Alert</button>;
  }
}

// or

class Button extends Component {
  onClick = () => {
    alert('boom');
  };

  render() {
    return <button onClick={this.onClick}>Alert</button>;
  }
}


// --------------
const MyComponent = () => (
  <p>
    First paragraph
  </p>
  <p>
    Second paragraph
  </p>
);
