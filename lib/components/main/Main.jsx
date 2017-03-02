import React from 'react';
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
        <div>
          <div>sadsads</div>
          <div>sadsads</div>
          <div>sadsads</div>
          <div>sadsads</div>
        </div>
      </div>
    );
  }
}

export default Main;
