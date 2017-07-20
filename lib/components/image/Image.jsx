import React from 'react';
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
      style={{ cursor: 'pointer', position: 'absolute', borderRadius: '3px', boxShadow: '0 0 1px 1px rgba(0,0,0,.4)' }}
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
  url: React.PropTypes.string,
  width: React.PropTypes.string,
  height: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default Image;
