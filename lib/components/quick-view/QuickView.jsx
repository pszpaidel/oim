import React from 'react';
import { Tag } from 'antd';
import _ from 'lodash';
import { TITLE, CATEGORY } from '../../model/recipe';
import Gap from '../../components/layout/Gap';

class QuickView extends React.Component {

  render() {
    const items = [];
    _.forIn(this.props.recipes, (recipe, key) =>
      items.push(
        <div
          key={key}
          className="quick-view-recipe"
          onClick={() => this.props.onSelect(key)}
        >
          <Gap style={{ width: '30px' }} />
          <div className="title">{_.get(recipe, TITLE)}</div>
          <Gap style={{ width: '100%' }} />
          <Tag>{_.find(this.props.category,
            value => value.id === _.get(recipe, CATEGORY)).name} </Tag>
        </div>,
        ),
    );

    return (
      <div className="quick-view">
        <Gap style={{ height: '20px', width: '100%' }} />
        {items}
      </div>
    );
  }
}

QuickView.propTypes = {
  recipes: React.PropTypes.object,
  onSelect: React.PropTypes.func,
  category: React.PropTypes.array,
};

export default QuickView;