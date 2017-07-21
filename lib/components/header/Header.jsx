import React from 'react';
import { Tag } from 'antd';
import Gap from '../layout/Gap';
import NavigatorContainer from '../../containers/NavigatorContainer';

const Header = props =>
  <div className="header" >
    <div className="header-content">
      <Gap />
      <NavigatorContainer />
      <Tag onClick={props.onAddRecipe}>Dodaj przepis</Tag>
    </div>
  </div>;

Header.propTypes = {
  onAddRecipe: React.PropTypes.func.isRequired,
};

export default Header;
