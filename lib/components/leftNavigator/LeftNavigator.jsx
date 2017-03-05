import React from 'react';

class LeftNavigator extends React.Component {
  render() {
    return (
      <div className="left-navigator" >
        {this.props.items.map(v => v)}
      </div>
    );
  }
}

LeftNavigator.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default LeftNavigator;
