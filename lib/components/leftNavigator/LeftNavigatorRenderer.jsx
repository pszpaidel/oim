import React from 'react';

class LeftNavigatorRenderer extends React.Component {
  render() {
    return (
      <div
        className="left-navigator-renderer"
        onClick={() => this.props.onClick(this.props.data.value)}
      >
        {this.props.data.name}
      </div>
    );
  }
}

LeftNavigatorRenderer.propTypes = {
  data: React.PropTypes.shape({
    name: React.PropTypes.string,
    value: React.PropTypes.number,
  }).isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default LeftNavigatorRenderer;
