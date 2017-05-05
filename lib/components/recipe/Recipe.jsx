import React from 'react';
import _ from 'lodash';
import Gap from '../gap/Gap';

class Recipe extends React.Component {
  render() {
    if (!this.props.recipe) return null;

    const components = _.get(this.props.recipe, 'components');
    let componentList = null;

    if (components) {
      componentList = components.map((data, i) => <li key={i}>{data}</li>);
    }

    return (
      <div className="recipe">
        <div className="font-x-large font-bold">{this.props.recipe.title}</div>
        <Gap />
        <div className="font-large font-bold">Porcja</div>
        <Gap />
        <div className="font-medium">{this.props.recipe.portion}</div>
        <Gap />
        <div className="font-large font-bold">Składniki</div>
        <Gap />
        <div className="recipe-components ">
          <ul>{componentList}</ul>
        </div>
        <Gap />
        <div className="font-large font-bold">Przygotowanie</div>
        <Gap />
        <div className="recipe-content">{this.props.recipe.content}</div>
      </div>
    );
  }
}

Recipe.propTypes = {
  recipe: React.PropTypes.object,
};

export default Recipe;
