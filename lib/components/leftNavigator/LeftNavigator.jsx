import React from 'react';
import LeftNavigatorRenderer from './LeftNavigatorRenderer';

class LeftNavigator extends React.Component {
  render() {
    const list = this.props.items.map((v, index) => <LeftNavigatorRenderer key={index} data={v} />);

    return (
      <div className="left-navigator" >
        {list}
      </div>
    );
  }
}

LeftNavigator.propTypes = {
  items: React.PropTypes.array.isRequired,
};

export default LeftNavigator;
