import React from 'react';
import _ from 'lodash';
import Gap from '../gap/Gap';

class Recipe extends React.Component {
  render() {
    if (!this.props.recipe) return null;

    const ingredients = _.get(this.props.recipe, 'ingredients');
    let ingredientsList = null;

    if (ingredients) {
      ingredientsList = ingredients.map((data, i) => <li key={i}>{data}</li>);
    }

    return (
      <div className="recipe">
        <div className="font-x-large font-bold">{this.props.recipe.title}</div>
        <Gap />
        <div className="font-large font-bold">Składniki</div>
        <Gap />
        <div className="recipe-ingredients font-medium">
          <ul>{ingredientsList}</ul>
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
