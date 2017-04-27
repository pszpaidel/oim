import React from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';

class Recipe extends React.Component {
  render() {
    return (
      <div className="recipe" >
        <DatePicker
          defaultValue={moment()}
          placeholder="Select date"
        />
      </div>
    );
  }
}

export default Recipe;
