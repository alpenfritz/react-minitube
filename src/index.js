import React from 'react';
import ReactDOM from 'react-dom';

// Create component (this component produces some HTML)
const App = () => {
  return <div>Hello World!</div>
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
