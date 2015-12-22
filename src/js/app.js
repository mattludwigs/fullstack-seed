import React from 'react';
import ReactDOM from 'react-dom';

const HelloWorld = React.createClass({
  render() {
    return <h1>Hello World</h1>
  }
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HelloWorld />,
    document.querySelector('.app')
  );
});
