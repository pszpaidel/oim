import React from 'react';
import _ from 'lodash';
import { Menu, Button } from 'antd';
import Gap from '../layout/Gap';
import { CATEGORY, TITLE } from '../../model/recipe';

const SubMenu = Menu.SubMenu;

const getEmptyState = () => ({ current: '', open: [] });

class Navigator extends React.Component {

  constructor(props) {
    super(props);
    this.state = getEmptyState();

    this.onOpenChange = (open) => {
      this.setState({ open });
    };

    this.handleClick = (e) => {
      this.setState({ current: e.key });
      this.props.onClick(e.key);
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.recipe) {
      this.setState(getEmptyState());
      return;
    }

    const current = _.findKey(
      nextProps.recipes,
      value => value.title === nextProps.recipe.title);

    if (!current) return;

    const open = [nextProps.recipe.category];
    this.setState({ current, open });
  }

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
          mode="inline"
          openKeys={this.state.open}
          selectedKeys={[this.state.current]}
          style={{ width: 240, borderRight: 0 }}
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
  recipe: React.PropTypes.object,
  recipes: React.PropTypes.object,
  categories: React.PropTypes.array,
  onClick: React.PropTypes.func.isRequired,
  onAddRecipe: React.PropTypes.func.isRequired,
};

export default Navigator;
