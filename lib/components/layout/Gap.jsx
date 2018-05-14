import React from 'react';
import T from 'prop-types';
import { Table } from 'antd';

const gap = ({ height, width }) =>
  <div style={{ height, width }} />;

gap.propTypes = {
  width: T.string,
  height: T.string,
};

gap.defaultProps = {
  width: '10px',
  height: '10px',
};

export default gap;
