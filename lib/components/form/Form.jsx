import React from 'react';
import _ from 'lodash';
import { Input, Button, Select, Icon } from 'antd';
import Gap from '../gap/Gap';

const Option = Select.Option;

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: null,
      content: '',
      ingredients: [],
    };
  }

  onChange(e) {
    this.setState(_.assign({}, this.state, { [e.target.id]: e.target.value }));
  }

  onChangeDropDown(value) {
    this.setState(_.assign({}, this.state, { category: value }));
  }

  onAddIngredients() {
    const prevIngredients = _.concat(this.state.ingredients, '');
    this.setState(_.assign({}, this.state, { ingredients: prevIngredients }));
  }

  onChangeIngredients(e, index) {
    const ingredients = _.clone(this.state.ingredients);
    ingredients[index] = e.target.value;
    this.setState(_.assign({}, this.state, { ingredients }));
  }

  onRemoveIngredients(index) {
    _.remove(this.state.ingredients, (v, i) => i === index);
    this.setState(_.assign({}, this.state, { ingredients: _.clone(this.state.ingredients) }));
  }


  render() {
    const ingredients = _.map(this.state.ingredients,
      ((v, i) =>
        <div >
          <div className="form-ingredients">
            <Input
              style={{ width: 200 }}
              onChange={data => this.onChangeIngredients(data, i)}
              key={i}
              value={v}
            />
            <Gap />
            <Button onClick={() => this.onRemoveIngredients(i)}><Icon type="minus-circle-o" /></Button>
          </div>
          <Gap />
        </div>));

    return (
      <div className="form">
        <div className="form-fields">
          <div className="font-bold">Tytuł</div>
          <Input
            id="title"
            onChange={v => this.onChange(v)}
          />
          <Gap />
          <div className="font-bold">Kategoria</div>
          <Select
            onChange={v => this.onChangeDropDown(v)}
            placeholder="wybierz kategorie"
            style={{ width: 200 }}
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
          {ingredients}
          <Button onClick={() => this.onAddIngredients()}>Dodaj składnik <Icon type="plus-circle-o" /></Button>

          <Gap />
          <div className="font-bold">Przygotowanie</div>
          <Input
            id="content"
            onChange={v => this.onChange(v)}
            type="textarea"
            rows={25}
          />

          <Gap />
          <Button onClick={() => this.props.onClickSave(this.state)}>Zapisz</Button>

        </div>
      </div>
    );
  }
}

Form.propTypes = {
  onClickSave: React.PropTypes.func.isRequired,
};

export default Form;
