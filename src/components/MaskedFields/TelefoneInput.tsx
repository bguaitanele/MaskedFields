import React, { useState } from 'react';
import { TextFieldProps } from '@material-ui/core';
import { useFormikContext } from 'formik';
import MaskedField from './MaskedField';

export const mask8Digitos = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

export const mask9Digitos = [
  '(',
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

type TelefoneInput = {} & TextFieldProps;

const TelefoneInput: React.FC<TelefoneInput> = props => {
  const [mask, setMask] = useState(mask8Digitos);
  const { setFieldValue } = useFormikContext();

  function validateTelefone(value: string) {
    return false;
    // if (!value) return false;
    // return /^[0-9]{5}-[0-9]{3}$/.test(value) ? false : 'CEP inválido';
  }

  function handleChange(e: any) {
    if (!e.target!.value) return;
    const size = e.target!.value!.replace(/[() _-]/g, '').length;
    setMask(size === 11 ? mask9Digitos : mask8Digitos);
    setFieldValue(props!.name!, e.target.value);
  }

  return (
    <MaskedField
      {...props}
      validation={validateTelefone}
      onKeyUp={e => handleChange(e)}
      maskProps={{
        mask,
        guide: false,
      }}
    />
  );
};

export default TelefoneInput;

// onkeyup: e => {
//   const size = e.target.value.replace(/[() _-]/g, '').length;
//   setMask(size === 11 ? mask9Digitos : mask8Digitos);
//   setFieldValue(field.name, e.target.value);
// },
