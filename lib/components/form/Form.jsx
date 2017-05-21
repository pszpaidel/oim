import React from 'react';
import _ from 'lodash';
import * as d3 from 'd3';
import { Input, Button, Select, Icon, Card } from 'antd';
import Gap from '../gap/Gap';
import Recipe from '../../model/recipe';

const Option = Select.Option;
const style = { width: 200 };

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = new Recipe();
    this.isComponentsUpdate = false;
  }

  componentDidUpdate() {
    if (this.isComponentsUpdate) this.onFocus();
    this.isComponentsUpdate = false;
  }

  onChange(e) {
    this.setState(_.assign(
      {},
      this.state,
      { [e.target.id]: e.target.value }));
  }

  onChangeDropDown(value) {
    this.setState(_.assign(
      {},
      this.state,
      { category: value }));
  }

  onAddcomponents() {
    this.isComponentsUpdate = true;
    const prevComponents = _.concat(this.state.components, '');

    this.setState(_.assign(
      {},
      this.state,
      { components: prevComponents }));
  }

  onChangeComponents(e, index) {
    const components = _.clone(this.state.components);
    components[index] = e.target.value;

    this.setState(_.assign(
      {},
      this.state,
      { components }));
  }

  onRemovecomponents(index) {
    _.remove(this.state.components, (v, i) => i === index);
    this.setState(_.assign(
      {},
      this.state,
      { components: _.clone(this.state.components) }));
  }

  onFocus() {
    d3.select(`#in${_.size(this.state.components) - 1}`).node().focus();
  }

  onUploadSuccess(value) {
    this.uploadInput.value = null;
    this.setState(_.assign(
      {},
      this.state,
      {
        photos: _.union(this.state.photos, [
          {
            url: value.downloadURL,
            path: value.ref.location.path,
          },
        ]),
      }),
    );
  }

  onDelete(path) {
    this.props.onDeleteUploadedImage(path);
    this.setState(_.assign(
      {},
      this.state, {
        photos: _.filter(this.state.photos, image => image.path !== path),
      }),
    );
  }

  onMoveComponent(i, to) {
    const result = _.clone(this.state.components);
    const element = result[i];
    result.splice(i, 1);
    result.splice(i + to, 0, element);

    this.setState(_.assign(
      {},
      this.state, {
        components: result,
      }),
    );
  }

  render() {
    const components = _.map(this.state.components,
      ((v, i) =>
        <div key={i}>
          <div className="display-flex">
            <Input
              id={`in${i}`}
              style={style}
              onChange={data => this.onChangeComponents(data, i)}
              onPressEnter={() => this.onAddcomponents()}
              value={v}
            />
            <Gap />
            <div className="display-flex">
              <Button
                icon="close-square-o"
                onClick={() => this.onRemovecomponents(i)}
              />
              <Gap />
              <Gap />
              <Button
                icon="up-square-o"
                disabled={i === 0}
                onClick={() => this.onMoveComponent(i, -1)}
              />
              <Gap style={{ height: '10px', width: '5px' }} />
              <Button
                disabled={i === this.state.components.length - 1}
                icon="down-square-o"
                onClick={() => this.onMoveComponent(i, 1)}
              />
            </div>
          </div>
          <Gap />
        </div>));

    const gallery = _.map(this.state.photos, (data, i) =>
      <div className="dispaly-flex">
        <Card
          style={{ width: 150 }}
          title={`${i + 1}.`}
          extra={<a onClick={() => this.onDelete(data.path)}>Usuń</a>}
        >
          <img alt="img" src={data.url} width="100%" />
        </Card>
        <Gap />
      </div>,
    );

    return (
      <div className="form">
        <div className="form-fields">
          <div className="font-bold">Tytuł</div>
          <Input
            id="title"
            onChange={v => this.onChange(v)}
          />
          <Gap />
          <div className="font-bold">Porcja</div>
          <Input
            id="portion"
            style={style}
            onChange={v => this.onChange(v)}
          />
          <Gap />
          <div className="font-bold">Kategoria</div>
          <Select
            onChange={data => this.onChangeDropDown(data)}
            placeholder="wybierz kategorie"
            style={style}
          >
            <Option value="0">Śniadanie</Option>
            <Option value="1">Obiad</Option>
            <Option value="2">Deser</Option>
            <Option value="3">Kolacja</Option>
            <Option value="5">Koktaile</Option>
            <Option value="4">Inne</Option>
          </Select>
          <Gap />
          <div className="font-bold">Składniki</div>
          {components}
          <Button
            onClick={() => this.onAddcomponents()}
          >Dodaj składnik
            <Icon type="plus-circle-o" /></Button>
          <Gap />
          <div className="font-bold">Przygotowanie</div>
          <Input
            id="content"
            onChange={data => this.onChange(data)}
            type="textarea"
            rows={25}
          />
          <Gap />
          <input
            ref={(value) => {
              this.uploadInput = value;
            }}
            type="file"
            name="pic"
            accept="image/*"
            onChange={(e) => {
              this.props.onUpload(e.target.files[0], value => this.onUploadSuccess(value));
            }}
          />
          <Gap />
          <div className="display-flex">
            {gallery}
          </div>
          <Gap />
          <Button onClick={() => this.props.onSave(this.state)}>Zapisz</Button>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  onSave: React.PropTypes.func.isRequired,
  onUpload: React.PropTypes.func.isRequired,
  onDeleteUploadedImage: React.PropTypes.func.isRequired,
};

export default Form;
