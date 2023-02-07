import { CleaningServices } from '@mui/icons-material';
import React, { useState } from 'react';

import Select from 'react-select';

export const CustomSelect = ({ option, onChange }) => {
  const options={
    status :[
      { value: 'Sent to the municipality', label: 'Sent to the municipality', isFixed: true },
      { value: 'Sent to the inspector', label: 'Sent to the inspector'},
      {value: 'Hendeled by the inspector and returned',label: 'Hendeled by the inspector and returned'},
    ],
    urgency : [
      { value:'1', label:'1'},
      { value:'2', label:'2'},
      { value:'3', label:'3'},
      { value:'4', label:'4'},
      { value:'5', label:'5'},
      { value:'6', label:'6'},
      { value:'7', label:'7'},
      { value:'8', label:'8'},
      { value:'9', label:'9'},
      { value:'10', label:'10'},
    ]
  }
  const placeholder=`Select ${option}`
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable
        isSearchable
        name="status"
        options={options[option]}
        placeholder={placeholder}
        onChange={(ev) =>console.log(onChange(ev.value, `Municipality-${option}`))}
      />
    </>
  );
};
