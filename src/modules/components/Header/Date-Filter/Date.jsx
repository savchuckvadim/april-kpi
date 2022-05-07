import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import './Date.css'



const Date = (props) => {
  const [value1, setValue1] = React.useState(null);
  const [value2, setValue2] = React.useState(null);
  return (
    <div className='date__container'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
        className='date-from'
          label="Basic example"
          value={value1}
          onChange={(newValue) => {
            setValue1(newValue);
            props.changeDateFrom(newValue)
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
         className='date-to'
          label="Basic example"
          value={value2}
          onChange={(newValue) => {
            setValue2(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Date


