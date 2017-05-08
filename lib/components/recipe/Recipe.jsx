import React from 'react';
import _ from 'lodash';
import { Modal } from 'antd';
import Gap from '../gap/Gap';

class Recipe extends React.Component {

  constructor(props) {
    super(props);
    this.visibleGallery = false;
    this.galleryImageUrl = null;
  }

  onClickGallery(data) {
    this.galleryImageUrl = data;
    this.showGallery();
  }

  showGallery() {
    this.visibleGallery = true;
    this.forceUpdate();
  }

  hideGallery() {
    this.visibleGallery = false;
    this.forceUpdate();
  }

  render() {
    if (!this.props.recipe) return null;

    const components = _.get(this.props.recipe, 'components');
    let componentList = null;

    if (components) {
      componentList = components.map((data, i) => <li key={i}>{data}</li>);
    }

    const gallery = _.map(this.props.recipe.photos, data =>
      <div className="form-gallery">
        <div onClick={() => this.onClickGallery(data)}>
          <img
            src={data}
            style={{ cursor: 'pointer', 'border-radius': '5px' }}
            width="180" height="120"
          />
        </div>
        <Gap />
      </div>,
      );

    return (

      <div className="recipe">
        <Modal
          title="Galeria"
          width={800}
          footer={null}
          visible={this.visibleGallery}
          onCancel={() => this.hideGallery()}
        >
          <img
            style={{ 'border-radius': '10px' }}
            src={this.galleryImageUrl}
            width="100%" height="100%"
          />
        </Modal>

        <div className="form-components">
          <div className="recipe-header-title font-x-large font-bold">{this.props.recipe.title}</div>
          <div className="recipe-header-portion font-large font-bold">Porcja: {this.props.recipe.portion}</div>
        </div>
        <Gap />
        <div className="form-gallery">
          {gallery}
        </div>
        <Gap />
        <div className="recipe-header font-large font-bold">Składniki</div>
        <Gap />
        <div className="recipe-components ">
          <ul>{componentList}</ul>
        </div>
        <Gap />
        <div className="recipe-header font-large font-bold">Przygotowanie</div>
        <Gap />
        <div className="recipe-content">{this.props.recipe.content}</div>
      </div>
    );
  }
}

Recipe.propTypes = {
  recipe: React.PropTypes.object,
};

export default Recipe;
