import React from 'react';
import T from 'prop-types';
import { Tag } from 'antd';
import Gap from '../layout/Gap';
import NavigatorContainer from '../../containers/NavigatorContainer';

const Header = props =>
  <div className="header-content" >
    <div className="header">
      <Gap />
      <NavigatorContainer />
      <Tag onClick={props.onAddRecipe}>Dodaj przepis</Tag>
    </div>
  </div>;

Header.propTypes = {
  onAddRecipe: T.func.isRequired,
};

export default Header;
