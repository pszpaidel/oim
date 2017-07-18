import React from 'react';
import clipboard from 'clipboard-js';
import _ from 'lodash';
import { Modal, Button, Tooltip } from 'antd';
import Gap from '../layout/Gap';
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

  copyToClipbard(recipe) {
    clipboard.copy(_.get(recipe, COMPONENTS).join(' \n'));
  }

  render() {
    const { recipe } = this.props;
    if (!recipe) return null;

    const components = _.get(recipe, COMPONENTS);
    let componentList = null;

    if (components) {
      componentList = components.map(data => <li key={data}>{data}</li>);
    }

    const gallery = _.map(_.get(recipe, PHOTOS), data =>
      <div className="display-flex">
        <div onClick={() => this.onClickGallery(data.url)}>
          <img
            src={data.url}
            style={{ cursor: 'pointer', borderRadius: '5px' }}
            width="180" height="120"
          />
        </div>
        <Gap />
      </div>,
    );

    return (
      <div className="recipe">
        <div className="recipe-content">
          <Modal
            title="Galeria"
            footer={null}
            visible={this.visibleGallery}
            onCancel={() => this.hideGallery()}
          >
            <img
              style={{ borderRadius: '10px' }}
              src={this.galleryImageUrl}
              width="100%" height="100%"
            />
          </Modal>

          <div className="display-flex">
            <div className="recipe-header-title font-x-large font-bold">{_.get(recipe, TITLE)}</div>
            <div className="recipe-header-portion font-large font-bold">Porcja: {_.get(recipe, PORTION)}</div>
          </div>
          <Gap />
          <div className="display-flex">
            {gallery}
          </div>
          <Gap />
          <div className="recipe-header font-large font-bold">Składniki</div>
          <Gap />
          <div className="display-flex">
            <div className="recipe-components">
              <ul>{componentList}</ul>
            </div>
            <Tooltip title="Kopiuj listę składników do schowka">
              <Button
                size="large"
                icon="copy"
                shape="circle"
                onClick={() => this.copyToClipbard(recipe, componentList)}
              />
            </Tooltip>
          </div>
          <Gap />

          <Gap />
          <div className="recipe-header font-large font-bold">Przygotowanie</div>
          <Gap />
          <div>{_.get(recipe, CONTENT)}</div>
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  recipe: React.PropTypes.object,
};

export default Recipe;
