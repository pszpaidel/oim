import React from 'react';
import { Spin } from 'antd';
import RecipeNavigator from '../recipe/RecipeNavigator';
import FormContainer from '../form/FormContainer';
import NavigatorContainer from '../navigator/NavigatorContainer';
import { RECIPE, FORM } from '../../const/CookbookConst';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCookbook();
  }

  render() {
    let view = null;
    let content = null;

    if (this.props.isReady) {
      switch (this.props.view) {
        case RECIPE:
          content = <RecipeNavigator />;
          break;
        case FORM:
          content = <FormContainer />;
          break;
        default:
          content = null;
      }

      view = (
        <div className="content">
          <NavigatorContainer />
          {content}
        </div>);
    } else {
      view = (<div className="spinner">
        <Spin size="large" />
      </div>);
    }

    return (
      <div className="main">
        {view}
      </div>
    );
  }
}

Main.propTypes = {
  fetchCookbook: React.PropTypes.func.isRequired,
  view: React.PropTypes.string,
  isReady: React.PropTypes.bool,
};

export default Main;
