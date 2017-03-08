import React from 'react';
import LeftNavigatorContainer from '../leftNavigator/container/LeftNavigatorContainer';
import Recipe from '../recipe/component/Recipe';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCookbook();
  }

  render() {
    return (
      <div className="main">
        <LeftNavigatorContainer items={this.props.category} />
        <Recipe value={this.props.recipe} />
      </div>
    );
  }
}

Main.defaultProps = {
  category: [],
  recipe: {},
};


Main.propTypes = {
  fetchCookbook: React.PropTypes.func.isRequired,
  category: React.PropTypes.array.isRequired,
  recipe: React.PropTypes.object.isRequired,
};

export default Main;
