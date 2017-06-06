import React from 'react';

const style = { height: '10px', width: '10px' };
const gap = props => <div style={props.style ? props.style : style} />;

gap.propTypes = {
  style: React.PropTypes.object,
};

export default gap;
