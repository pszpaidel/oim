import React from 'react';
import T from 'prop-types';
import _ from 'lodash';
import Spinner from '../layout/Spinner';
import Display from '../layout/Display';

class Image extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setState({ isLoading: false });
    }
  }

  onLoad() {
    this.setState({ isLoading: true });
  }

  render() {
    const { width, height } = this.props;

    const spinner = (<div
      style={{
        width,
        height,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: '3px',
      }}
    >
      <Spinner />
    </div>);

    const image = (<img
      src={this.props.url}
      width={width}
      height={height}
      style={{'zindex': 0, cursor: 'pointer', position: 'absolute', borderRadius: '3px', boxShadow: '0 0 1px 1px rgba(0,0,0,.2)' }}
      onLoad={() => this.onLoad()}
      onClick={this.props.onClick}
    />);

    return (
      <div style={{ width, height, position: 'relative', marginRight: '10px' }}>
        <Display when what={image} />
        <Display when={!this.state.isLoading} what={spinner} />
      </div>
    );
  }
}

Image.propTypes = {
  url: T.string,
  width: T.string.isRequired,
  height: T.string.isRequired,
  onClick: T.func,
};

Image.defaultProps = {
  onClick: _.noop,
  url: '',
};

export default Image;
