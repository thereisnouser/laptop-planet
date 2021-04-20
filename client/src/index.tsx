import React from 'react';
import ReactDOM from 'react-dom';

const Greeting:React.FC = () => (
  <h1>Hello World!</h1>
);

ReactDOM.render(<Greeting />, document.getElementById('root'));
