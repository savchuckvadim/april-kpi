import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ManagerFilter(props) {
  let managers = props.managers

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={managers}
      sx={{ width: 300 }}
      onChange={(e, value) => { 
      
        props.changeManager(value)
       }}
      renderInput={(params) => <TextField
        
        {...params}
        label="Manager"
      />}
    />
  );
}
