import React from 'react';
import T from 'prop-types';

class Display extends React.Component {

  render() {
    return (this.props.when) ? this.props.what : null;
  }
}

Display.propTypes = {
  when: T.bool.isRequired,
  what: T.element.isRequired,
};

export default Display;
