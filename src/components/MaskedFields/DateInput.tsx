import React from 'react';
import { TextFieldProps } from '@material-ui/core';
import { parse, isValid } from 'date-fns';
import MaskedField from './MaskedField';

type DateInput = {} & TextFieldProps;

const DateInput: React.FC<DateInput> = props => {
  function validateDate(value: string) {
    if (!value) return false;
    const parsed = parse(value, 'dd/MM/yyyy', new Date());
    return isValid(parsed) ? false : 'Data inválida';
  }

  return (
    <MaskedField
      {...props}
      maskProps={{
        mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
      }}
      validation={validateDate}
    />
  );
};

export default DateInput;
