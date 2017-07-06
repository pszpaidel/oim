import React from 'react';
import RecipeContainer from '../recipe/RecipeContainer';
import FormContainer from '../form/FormContainer';
import NavigatorContainer from '../navigator/NavigatorContainer';
import Display from '../layout/Display';
import Spinner from '../layout/Spinner';
import { RECIPE_VIEW, FORM_VIEW } from '../../const/CookbookConst';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCookbook();
  }

  render() {
    const { view, isReady } = this.props;

    return (
      <div className="main">
        <NavigatorContainer />
        <Display
          when={isReady && view === RECIPE_VIEW}
          what={<RecipeContainer />}
        />
        <Display
          when={isReady && view === FORM_VIEW}
          what={<FormContainer />}
        />
        <Display
          when={!isReady}
          what={<Spinner />}
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
