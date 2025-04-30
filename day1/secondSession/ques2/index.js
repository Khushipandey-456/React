import React from 'react';
import ReactDOM from 'react-dom/client';

const container = React.createElement(
  'div',
  {
    id: 'container',
    style: {
      backgroundColor: 'lightblue',
      padding: '20px'
    }
  },
  [
    React.createElement(
      'h1',
      {
        key: 'title',
        style: {
          color: 'darkblue',
          textAlign: 'center'
        }
      },
      'Welcome to React.createElement'
    ),
    React.createElement(
      'ul',
      { key: 'list' },
      ['Learn React', 'Understand React.createElement', 'Build Amazing Apps'].map((item, index) =>
        React.createElement(
          'li',
          {
            key: index,
            style: {
              margin: '10px',
              fontSize: '18px'
            }
          },
          item
        )
      )
    ),
    React.createElement(
      'p',
      {
        key: 'paragraph',
        style: {
          fontStyle: 'italic',
          color: 'gray'
        }
      },
      'This page is built using React.createElement'
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(container);
