import React from 'react';
import clipboard from 'clipboard-js';
import _ from 'lodash';
import { Modal, Button, Tooltip } from 'antd';
import Gap from '../layout/Gap';
import Image from '../image/Image';
import { COMPONENTS, CONTENT, PHOTOS, TITLE, PORTION } from '../../model/recipe';

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
    const { recipe } = this.props;
    if (!recipe) return null;

    const components = _.get(recipe, COMPONENTS);
    let componentList = null;
    if (components) {
      componentList = components.map(data => <li key={data}>{data}</li>);
    }

    const galleryItems = _.map(_.get(recipe, PHOTOS), (data, i) =>
      <Image
        key={i}
        url={data.url}
        width="160px"
        height="120px"
        onClick={() => this.onClickGallery(data.url)}
      />,
    );

    const gallery = !_.isEmpty(galleryItems) ?
      (<div className="gallery">
        {galleryItems}
      </div>) : null;

    return (
      <div className="recipe-content">
        <Gap />
        <div className="recipe">
          <Modal
            title="Galeria"
            width="830px"
            footer={null}
            visible={this.visibleGallery}
            onCancel={() => this.hideGallery()}
          >
            <Image
              width="800px"
              height="600px"
              url={this.galleryImageUrl}
            />
          </Modal>
          <div className="recipe-bar">
            <Gap />
            <Gap />
            <div className="recipe-bar-title">{_.get(recipe, TITLE)}</div>
            <div className="recipe-bar-portion">Porcja: {_.get(recipe, PORTION)}</div>
            <Gap />
          </div>
          <Gap />
          {gallery}
          <Gap />
          <div className="recipe-bar">
            <Gap />Składniki
          </div>
          <Gap />
          <div className="display-row">
            <Gap />
            <Gap />
            <div className="recipe-components">
              <ul>{componentList}</ul>
            </div>
            <Tooltip title="Kopiuj listę składników do schowka">
              <Button
                size="large"
                icon="copy"
                shape="circle"
                onClick={() => clipboard.copy(_.get(recipe, COMPONENTS).join(' \n'))}
              />
            </Tooltip>
          </div>
          <Gap />
          <div className="recipe-bar">
            <Gap />Przygotowanie
          </div>
          <Gap />
          <div>{_.get(recipe, CONTENT)}</div>
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired,
};

export default Recipe;
