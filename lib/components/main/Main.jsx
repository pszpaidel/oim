import React from 'react';
import Unit from '../unit/Unit';

class Main extends React.Component {

  componentDidMount() {
    //if (process.env.NODE_ENV != "production")
    //{
    //  document.write('<script src="http://localhost:35729/livereload.js"></script>')
    //}
  }

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
