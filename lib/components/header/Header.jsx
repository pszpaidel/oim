import React from 'react';
import { Button, Avatar, Tooltip } from 'antd';
import Gap from '../layout/Gap';
import NavigatorContainer from '../navigator/NavigatorContainer';

class Header extends React.Component {

  render() {
    return (
      <div className="header" >
        <div className="header-content">
          <Avatar size="large" src="logo.jpg" />
          <Gap style={{ width: '10px' }} />
          <NavigatorContainer />
          <Tooltip title="Dodaj przepis">
            <Button onClick={this.props.onAddRecipe} shape="circle" icon="plus" />
          </Tooltip>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  onAddRecipe: React.PropTypes.func,
};

export default Header;
