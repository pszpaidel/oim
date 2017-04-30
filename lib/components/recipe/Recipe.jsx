import React from 'react';
import _ from 'lodash';

class Recipe extends React.Component {
  render() {
    console.log('Recipe: ', this.props.recipe);

    const ingredients = _.get(this.props.recipe, 'ingredients');
    let ingredientsList = null;

    if (ingredients) {
      ingredientsList = ingredients.map((data, i) => <span key={i}>{data.name}</span>);
    }

    return (
      <div className="recipe">
        <span>{this.props.recipe.title}</span>
        <div>Składniki</div>
        {ingredientsList}
        <div>Treść</div>
        <span>{this.props.recipe.content}</span>
      </div>
    );
  }
}

Recipe.defaultProps = {
  recipe: {},
};

Recipe.propTypes = {
  recipe: React.PropTypes.object,
};

export default Recipe;
