import React from 'react'
import ReactDOM from 'react-dom';
import './Book.css';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';

const Book = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  ReactDOM.render(
    <>
      <div>
        <DateTimePickerComponent placeholder='Choose a date and time' value={date} min={date} format="dd-mm-yyyy HH:mm" step={180}>
        </DateTimePickerComponent>
      </div>

    </>,
    document.getElementById('root')
  );
}


export default Book