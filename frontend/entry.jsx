import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => (
  <div>Yo!</div>
);


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  ReactDOM.render(<Root />, root)
})
