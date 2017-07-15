import React from 'react';
import { Button } from 'antd';
import _ from 'lodash';
import { TITLE } from '../../model/recipe';
import Gap from '../../components/layout/Gap';

class QuickView extends React.Component {

  render() {
    const items = [];
    _.forIn(this.props.recipes, (recipe, key) =>
      items.push(
        <div key={key} className="quick-view-recipe">
          <Button
            icon="right-circle"
            onClick={() => this.props.onSelect(key)}
          >{_.get(recipe, TITLE)}
          </Button>
          <Gap style={{ height: '10px', width: '10px', display: 'inline-block' }} />
        </div>,
        ),
    );

    return (
      <div className="quick-view">
        {items}
      </div>
    );
  }
}

QuickView.propTypes = {
  recipes: React.PropTypes.object,
  onSelect: React.PropTypes.func,
};

export default QuickView;
