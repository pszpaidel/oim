import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

class HGroup extends React.Component {

  render() {
    const children = React.Children.map(this.props.children, value => value);
    const className = classNames({
      hgroup: true,
      [this.props.className]: Boolean(this.props.className),
    });

    return (
      <div className={className} onClick={this.props.onClick} >
        {children}
      </div>
    );
  }
}

HGroup.propTypes = {
  children: React.PropTypes.any.isRequired,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

HGroup.defaultProps = {
  className: 'hgroup',
  onClick: _.noop,
};

export default HGroup;
