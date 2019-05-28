# React

- Components State, Props & [Lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [React.Component](https://reactjs.org/docs/react-api.html#reactcomponent) / [React.PureComponent](https://reactjs.org/docs/react-api.html#reactpurecomponent)
- How to change parent state from child component?
- Which one of the following code should I use? 
```javascript
  class Button extends Component {
    render() {
      return <button onClick={() => alert('boom')}>Alert</button>;
    }
  }
```
  or
```javascript
  class Button extends Component {
    onClick = () => {
      alert('boom');
    }

    render() {
      return <button onClick={this.onClick}>Alert</button>;
    }
  }
```
- [React.Fragment](https://reactjs.org/docs/react-api.html#reactfragment), [Refs](https://reactjs.org/docs/glossary.html#refs)
- [Higher-Order Components (HOCs)](https://reactjs.org/docs/higher-order-components.html), [Render Proprs](https://reactjs.org/docs/render-props.html)
- Component context and providers creation [(link)](https://reactjs.org/docs/context.html)
- Flux, state management libraries
- [Redux](https://redux.js.org/) and it's binding way. What for was created [react-redux](https://github.com/reactjs/react-redux) `connect` method and what it does with wrapped component?
