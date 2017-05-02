import React from 'react';
import RecipeNavigator from '../recipe/RecipeNavigator';
import FormContainer from '../form/FormContainer';
import NavigatorContainer from '../navigator/NavigatorContainer';
import { RECIPE, FORM } from '../../const/CookbookConst';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCookbook();
  }

  render() {
    let view;
    switch (this.props.view) {
      case RECIPE:
        view = <RecipeNavigator />;
        break;
      case FORM:
        view = <FormContainer />;
        break;
      default:
        view = null;
    }

    return (
      <div className="main">
        <NavigatorContainer />
        {view}
      </div>
    );
  }
}

Main.propTypes = {
  fetchCookbook: React.PropTypes.func.isRequired,
  view: React.PropTypes.string,
};

export default Main;
