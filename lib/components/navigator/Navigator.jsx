import React from 'react';
import _ from 'lodash';
import { Menu } from 'antd';

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
      const items = _.map(_.filter(recipes, r => r.category === value.id),
            v => <Menu.Item key={v.id}>{v.title}</Menu.Item>);

      return (<SubMenu key={index} title={<span>{value.name}</span>} >
        {items}
      </SubMenu>);
    });

    return (
      <div className="navigator">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{ width: 240, height: '100%' }}
          onOpenChange={this.onOpenChange}
          onClick={this.handleClick}
        >
          {list}
        </Menu>
      </div>
    );
  }
}

Navigator.propTypes = {
  model: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Navigator;
