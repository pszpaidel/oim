import React from "react";

class Unit extends React.Component {

  static propTypes = {
    name: React.PropTypes.string
  }

  render() {
    return (
      <div className="unit">{this.props.name}</div>
    )
  }
}

export default Unit;
