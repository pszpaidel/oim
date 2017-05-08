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

  onChangecomponents(e, index) {
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
      { photos: _.union(this.state.photos, [value.downloadURL]) }),
    );
  }

  render() {
    const components = _.map(this.state.components,
      ((v, i) =>
        <div key={i}>
          <div className="form-components">
            <Input
              id={`in${i}`}
              style={style}
              onChange={data => this.onChangecomponents(data, i)}
              onPressEnter={() => this.onAddcomponents()}
              value={v}
            />
            <Gap />
            <Button onClick={() => this.onRemovecomponents(i)}>
              <Icon type="minus-circle-o" />
            </Button>
          </div>
          <Gap />
        </div>));

    const gallery = _.map(this.state.photos, (data, i) =>
      <div className="form-gallery">
        <Card style={{ width: 150 }} title={`${i + 1}.`} extra={<a>Usuń</a>}>
          <img alt="img" src={data} width="100%" />
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
          <Button onClick={() => this.onAddcomponents()}>Dodaj składnik <Icon type="plus-circle-o" /></Button>
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
            ref={(value) => { this.uploadInput = value; }}
            type="file"
            name="pic"
            accept="image/*"
            onChange={(e) => {
              this.props.onUpload(e.target.files[0], value => this.onUploadSuccess(value));
            }}
          />
          <Gap />
          <div className="form-gallery">
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
};

export default Form;
