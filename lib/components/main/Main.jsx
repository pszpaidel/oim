import React from 'react';
import T from 'prop-types';
import RecipeContainer from '../../containers/RecipeContainer';
import FormContainer from '../../containers/FormContainer';
import QuickViewContainer from '../../containers/QuickViewContainer';
import HeaderContainer from '../../containers/HeaderContainer';
import Spinner from '../layout/Spinner';
import Display from '../layout/Display';
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
          when={isReady}
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
  fetchCookbook: T.func.isRequired,
  view: T.string.isRequired,
  isReady: T.bool,
};

Main.defaultProps = {
  isReady: false,
};

export default Main;
