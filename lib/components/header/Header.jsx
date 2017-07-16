import React from 'react';
import { Tag } from 'antd';
import Gap from '../layout/Gap';
import NavigatorContainer from '../navigator/NavigatorContainer';

class Header extends React.Component {

  render() {
    return (
      <div className="header" >
        <div className="header-content">
          <Gap style={{ width: '10px' }} />
          <NavigatorContainer />
          <Tag onClick={this.props.onAddRecipe} >Dodaj przepis</Tag>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onAddRecipe: React.PropTypes.func,
};

export default Header;
