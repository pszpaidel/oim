import React from 'react';
import Recipe from '../recipe/Recipe';
import NavigatorContainer from '../navigator/NavigatorContainer';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCookbook();
  }

  render() {
    return (
      <div className="main">
        <NavigatorContainer category={this.props.category} />
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
