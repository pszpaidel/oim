import React from 'react';
import _ from 'lodash';
import { Menu } from 'antd';
import { CATEGORY, TITLE } from '../../model/recipe';

const SubMenu = Menu.SubMenu;

class Navigator extends React.Component {

  render() {
    const { categories, recipes } = this.props;

    if (!categories) return null;

    const list = categories.map((value) => {
      const items = [];
      _.forIn(recipes, (recipe, key) => {
        if (_.get(recipe, CATEGORY) === value.id) {
          items.push(<Menu.Item key={key}>{_.get(recipe, TITLE)}</Menu.Item>);
        }
      });

      return (
        <SubMenu key={value.id} title={<span>{value.name}</span>}>
          {items}
        </SubMenu>);
    });

    return (
      <div className="navigator">
        <Menu
          style={{ borderRight: 0 }}
          onClick={e => this.props.onClick(e.key)}
          mode="horizontal"
        >
          {list}
        </Menu>
      </div>
    );
  }
}

Navigator.propTypes = {
  recipe: React.PropTypes.object,
  recipes: React.PropTypes.object,
  categories: React.PropTypes.array,
  onClick: React.PropTypes.func.isRequired,
};

export default Navigator;
