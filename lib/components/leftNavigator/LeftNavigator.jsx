import React from 'react';
import LeftNavigatorRenderer from './LeftNavigatorRenderer';

class LeftNavigator extends React.Component {
  render() {
    const list = this.props.items.map((value, index) =>
      <LeftNavigatorRenderer
        onClick={this.props.onClick}
        key={index}
        data={value}
      />);

    return (
      <div className="left-navigator">
        {list}
      </div>
    );
  }
}

LeftNavigator.propTypes = {
  items: React.PropTypes.array.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default LeftNavigator;
