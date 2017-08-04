import React from 'react';
import { Tag } from 'antd';
import _ from 'lodash';
import { TITLE, CATEGORY } from '../../model/recipe';
import Gap from '../../components/layout/Gap';
import HGroup from '../../components/layout/HGroup';

const getItems = (props) => {
  const items = [];
  _.forIn(props.recipes, (recipe, key) =>
      items.push(
        <HGroup
          key={key}
          className="quick-view"
          onClick={() => props.onSelect(key)}
        >
          <Gap width="30px" />
          <div className="quick-view-recipe-title">{_.get(recipe, TITLE)}</div>
          <Gap width="100%" />
          <Tag>{_.find(props.category,
            value => value.id === _.get(recipe, CATEGORY)).name} </Tag>
        </HGroup>,
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
  category: React.PropTypes.array.isRequired,
  onSelect: React.PropTypes.func.isRequired,
};

export default QuickView;
