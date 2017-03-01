import React from 'react';
import testMethod from '../../utils/utils';
import database from '../../database/database';

class Main extends React.Component {

  componentDidMount() {
    database.ref('/').once('value', (snap) => {
      const recipe = snap.val();
      console.log(recipe);
    });
  }

  render() {
    return (
      <div className="main">
        <button>{testMethod(1, 2)}</button>
      </div>
    );
  }
}

export default Main;
