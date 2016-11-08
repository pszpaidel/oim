import React from "react";

class Unit extends React.Component {

  render() {
    return (
      <div className="unit">{this.props.name}</div>
    )
  }
}

Unit.propTypes = {
  name: React.PropTypes.string
}

Unit.defaultProps = {
  name: ''
}

export default Unit;
