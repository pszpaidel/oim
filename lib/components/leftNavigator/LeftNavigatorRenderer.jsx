import React from 'react';

class LeftNavigatorRenderer extends React.Component {
  render() {
    return (
      <div className="left-navigator-renderer" >
        {this.props.data}
      </div>
    );
  }
}

LeftNavigatorRenderer.propTypes = {
  data: React.PropTypes.string.isRequired,
};

export default LeftNavigatorRenderer;
