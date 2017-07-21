import React from 'react';
import { Tag } from 'antd';
import Gap from '../layout/Gap';
import NavigatorContainer from '../../containers/NavigatorContainer';

class Header extends React.Component {

  render() {
    return (
      <div className="header" >
        <div className="header-content">
          <Gap />
          <NavigatorContainer />
          <Tag onClick={this.props.onAddRecipe}>Dodaj przepis</Tag>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onAddRecipe: React.PropTypes.func,
};

export default Header;
