import React from 'react';
import Unit from '../unit/Unit';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <button>Button OK</button>
        <Unit name="Live reloading works fine!!!"/>
      </div>
    );
  }
}

export default Main;
