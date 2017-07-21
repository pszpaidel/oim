import React from 'react';

const style = { height: '10px', width: '10px' };
const gap = props => <div style={props.style} />;

gap.propTypes = {
  style: React.PropTypes.object,
};

gap.defaultProps = {
  style,
};

export default gap;
