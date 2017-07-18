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
      <Image
        url={data.url}
        width="180px"
        height="120px"
        onClick={() => this.onClickGallery(data.url)}
      />,
    );

    return (
      <div className="recipe">
        <div className="recipe-content">
          <Modal
            title="Galeria"
            width="830"
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

          <div className="display-flex">
            <div className="recipe-header-title font-x-large font-bold">{_.get(recipe, TITLE)}</div>
            <div className="recipe-header-portion font-large font-bold">Porcja: {_.get(recipe, PORTION)}</div>
          </div>
          <Gap />
          <div className="display-flex" style={{ height: '120px' }}>
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
