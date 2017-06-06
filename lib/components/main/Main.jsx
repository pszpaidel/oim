import React from 'react';
import { Spin } from 'antd';
import RecipeContainer from '../recipe/RecipeContainer';
import FormContainer from '../form/FormContainer';
import NavigatorContainer from '../navigator/NavigatorContainer';
import Display from '../layout/Display';
import { RECIPE_VIEW, FORM_VIEW } from '../../const/CookbookConst';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCookbook();
  }

  render() {
    return (
      <div className="main">

        <NavigatorContainer />
        <Display
          when={this.props.isReady && this.props.view === RECIPE_VIEW}
          what={<RecipeContainer />}
        />
        <Display
          when={this.props.isReady && this.props.view === FORM_VIEW}
          what={<FormContainer />}
        />
        <Display
          when={!this.props.isReady}
          what={<div className="spinner"><Spin size="large" /></div>}
        />
      </div>
    );
  }
}

Main.propTypes = {
  fetchCookbook: React.PropTypes.func.isRequired,
  isReady: React.PropTypes.bool,
  view: React.PropTypes.string,
};

export default Main;
