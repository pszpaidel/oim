import React from 'react';
import _ from 'lodash';
import { Menu, Button } from 'antd';
import Gap from '../gap/Gap';

const SubMenu = Menu.SubMenu;

class Navigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: '',
      openKeys: [],
    };

    this.onOpenChange = (openKeys) => {
      const state = this.state;
      const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
      const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

      let nextOpenKeys = [];
      if (latestOpenKey) {
        nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
      }
      if (latestCloseKey) {
        nextOpenKeys = this.getAncestorKeys(latestCloseKey);
      }
      this.setState({ openKeys: nextOpenKeys });
    };

    this.getAncestorKeys = (key) => {
      const map = {};
      return map[key] || [];
    };

    this.handleClick = (e) => {
      this.setState({ current: e.key });
      this.props.onClick(e.key);
    };
  }

  render() {
    const categories = this.props.model.category;
    const recipes = this.props.model.recipes;

    const list = categories.map((value, index) => {
      const items = [];
      _.forIn(recipes, (v, key) => {
        if (v.category === value.id) {
          items.push(<Menu.Item key={key}>{v.title}</Menu.Item>);
        }
      });

      return (<SubMenu key={index} title={<span>{value.name}</span>}>
        {items}
      </SubMenu>);
    });

    return (
      <div className="navigator">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{ width: 240, 'border-right': 0 }}
          onOpenChange={this.onOpenChange}
          onClick={this.handleClick}
        >
          {list}
        </Menu>
        <div className="navigator-add-button">
          <Gap />
          <Button onClick={this.props.onAddRecipe}>Dodaj przepis</Button>
        </div>
      </div>
    );
  }
}

Navigator.propTypes = {
  model: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
  onAddRecipe: React.PropTypes.func.isRequired,
};

export default Navigator;
