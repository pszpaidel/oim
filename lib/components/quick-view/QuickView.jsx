import React from 'react';
import { Tag } from 'antd';
import _ from 'lodash';
import { TITLE, CATEGORY } from '../../model/recipe';
import Gap from '../../components/layout/Gap';

const getItems = (props) => {
  const items = [];
  _.forIn(props.recipes, (recipe, key) =>
      items.push(
        <div
          key={key}
          className="quick-view"
          onClick={() => props.onSelect(key)}
        >
          <Gap style={{ width: '30px' }} />
          <div className="quick-view-recipe-title">{_.get(recipe, TITLE)}</div>
          <Gap style={{ width: '100%' }} />
          <Tag>{_.find(props.category,
            value => value.id === _.get(recipe, CATEGORY)).name} </Tag>
        </div>,
        ),
    );
  return items;
};

const QuickView = props =>
  <div className="quick-view-content">
    {getItems(props)}
  </div>;

QuickView.propTypes = {
  recipes: React.PropTypes.object.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  category: React.PropTypes.array.isRequired,
};

export default QuickView;
