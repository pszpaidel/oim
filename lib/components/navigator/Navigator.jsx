import React from 'react';
import _ from 'lodash';
import { Menu, Button } from 'antd';
import Gap from '../gap/Gap';

const SubMenu = Menu.SubMenu;

const getEmptyState = () => ({ current: '', openKeys: [] });

class Navigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = getEmptyState();

    this.onOpenChange = (openKeys) => {
      this.setState({ openKeys });
    };

    this.handleClick = (e) => {
      this.setState({ current: e.key });
      this.props.onClick(e.key);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.model || !nextProps.model.recipe) {
      this.setState(getEmptyState());
      return;
    }

    const current = _.findKey(
      nextProps.model.recipes,
      value => value.title === nextProps.model.recipe.title);

    if (!current) return;

    const openKeys = [nextProps.model.recipe.category];
    this.setState({ current, openKeys });
  }

  render() {
    const categories = this.props.model.category;
    const recipes = this.props.model.recipes;

    const list = categories.map((value) => {
      const items = [];
      _.forIn(recipes, (v, key) => {
        if (v.category === value.id) {
          items.push(<Menu.Item key={key}>{v.title}</Menu.Item>);
        }
      });

      return (<SubMenu key={value.id} title={<span>{value.name}</span>}>
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
          onClick={this.handleClick}
          onOpenChange={this.onOpenChange}
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
