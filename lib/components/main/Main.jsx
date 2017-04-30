import React from 'react';
import RecipeNavigator from '../recipe/RecipeNavigator';
import NavigatorContainer from '../navigator/NavigatorContainer';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCookbook();
  }

  render() {
    return (
      <div className="main">
        <NavigatorContainer />
        <RecipeNavigator />
      </div>
    );
  }
}

Main.propTypes = {
  fetchCookbook: React.PropTypes.func.isRequired,
};

export default Main;
