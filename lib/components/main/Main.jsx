import React from 'react';
import RecipeContainer from '../recipe/RecipeContainer';
import FormContainer from '../form/FormContainer';
import Display from '../layout/Display';
import QuickViewContainer from '../quick-view/QuickViewContainer';
import Spinner from '../layout/Spinner';
import HeaderContainer from '../header/HeaderContainer';
import { RECIPE_VIEW, FORM_VIEW, QUICK_VIEW } from '../../const/CookbookConst';

class Main extends React.Component {

  componentDidMount() {
    this.props.fetchCookbook();
  }

  render() {
    const { view, isReady } = this.props;

    return (
      <div className="main">
        <Display
          when={isReady && view !== ''}
          what={<HeaderContainer />}
        />
        <Display
          when={isReady && view === QUICK_VIEW}
          what={<QuickViewContainer />}
        />
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
