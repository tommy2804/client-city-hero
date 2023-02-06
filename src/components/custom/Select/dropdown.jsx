import React, { useState } from 'react';

import Select from 'react-select';

export const CustomSelect = ({ option, onChange }) => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        isClearable
        isSearchable
        name="status"
        options={option}
        placeholder="Select Status"
        onChange={(ev) => onChange(ev, 'Municipality-Status')}
      />
    </>
  );
};
