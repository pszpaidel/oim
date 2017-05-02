import React from 'react';
import { Input, Button, Select } from 'antd';
import _ from 'lodash';

const Option = Select.Option;

class Form extends React.Component {

  onChange(e) {
    this.setState(_.assign({}, this.state, { [e.target.id]: e.target.value }));
  }

  onChangeDropDown(value) {
    this.setState(_.assign({}, this.state, { category: value }));
  }

  render() {
    console.log(this.state);
    return (
      <div className="form">
        <div className="form-fields">
          <div className="font-bold">Tytuł</div>
          <Input
            id="title"
            onChange={v => this.onChange(v)}
          />
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
          <div className="font-bold">Składniki</div>
          <Input id="ingredients" onChange={v => this.onChange(v)} />
          <div className="font-bold">Przygotowanie</div>
          <Input
            id="content"
            onChange={v => this.onChange(v)}
            type="textarea"
            rows={25}
          />
          <div>
            <br />
            <Button onClick={() => this.props.onClickSave(this.state)}>Zapisz</Button>
          </div>
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  onClickSave: React.PropTypes.func.isRequired,
};

export default Form;
