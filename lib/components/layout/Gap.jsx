import React from 'react';

const gap = ({ height, width }) =>
  <div style={{ height, width }} />;

gap.propTypes = {
  width: React.PropTypes.string,
  height: React.PropTypes.string,
};

gap.defaultProps = {
  width: '10px',
  height: '10px',
};

export default gap;
