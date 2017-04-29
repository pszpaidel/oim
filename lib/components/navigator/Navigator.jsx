import React from 'react';
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
    const list = this.props.categories.map((value, index) =>
      <SubMenu key={index} title={<span>{value.name}</span>}>
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
      </SubMenu>);

    return (
      <div className="navigator">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          selectedKeys={[this.state.current]}
          style={{ width: 240 }}
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
  categories: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default Navigator;
