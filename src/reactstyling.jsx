import React from 'react';

const FunctionalComponent = () => {
  const divStyle = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
  };

  return (
    <div style={divStyle}>
      This is a functional component with inline styles.
    </div>
  );
};

class ClassComponent extends React.Component {
  render() {
    return (
      <div className="container">
        This is a class component with regular CSS stylesheet.
      </div>
    );
  }
}

// CSS styles for ClassComponent
const classComponentStyles = `
  .container {
    color: red;
    background-color: lightyellow;
    padding: 10px;
  }
`;

export { FunctionalComponent, ClassComponent, classComponentStyles };
