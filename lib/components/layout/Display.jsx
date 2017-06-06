import React from 'react';

class Display extends React.Component {

  render() {
    return (this.props.when) ? this.props.what : null;
  }
}

Display.propTypes = {
  when: React.PropTypes.bool,
  what: React.PropTypes.element,
};

export default Display;
