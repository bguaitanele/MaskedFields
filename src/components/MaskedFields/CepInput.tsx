import React from 'react';
import { TextFieldProps } from '@material-ui/core';
import MaskedField from './MaskedField';

type CepInput = {} & TextFieldProps;

const CepInput: React.FC<CepInput> = props => {
  function validateCep(value: string) {
    if (!value) return false;
    return /^[0-9]{5}-[0-9]{3}$/.test(value) ? false : 'CEP inválido';
  }

  return (
    <MaskedField
      {...props}
      maskProps={{
        mask: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
      }}
      validation={validateCep}
    />
  );
};

export default CepInput;
