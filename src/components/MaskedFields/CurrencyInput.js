import React, { useState, useMemo, useEffect } from 'react';
import { useField } from 'formik';
import numero from 'src/config/numero';
// import Input from './Input';
import { InputAdornment } from '@material-ui/core';
import BasicInput from './BasicInput';

function formatNumber(value) {
  return numero.format(value);
}
function cleanNumber(value) {
  return Number(value.replace(/[^0-9]/g, '')) / 100;
}

function getPosicaoReal(pos, valorAnterior, valorNovo) {
  if (!pos) return 0;
  if (pos === 6) return 7;
  const patternNumero = /[0-9]/g;
  const textosAntigos = valorAnterior.replace(patternNumero, '').length;
  const textosNovos = valorNovo.replace(patternNumero, '').length;
  return pos + (textosAntigos - textosNovos);
}

const Currency = props => {
  const [field] = useField(props);
  const { inputRef, ...other } = props;
  const [selectionStart, setSelectionStart] = useState();
  const value = useMemo(() => formatNumber(field.value), [field.value]);
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setSelectionRange(selectionStart, selectionStart);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectionStart]);

  function handleChange(e) {
    setSelectionStart(
      getPosicaoReal(
        e.target.selectionStart,
        formatNumber(cleanNumber(e.target.value)),
        formatNumber(field.value)
      )
    );
    e.target.value = cleanNumber(e.target.value);
    field.onChange(e);
    if (props.onChangeValue) props.onChangeValue(e);
  }

  return (
    <input
      {...other}
      value={value}
      onChange={e => handleChange(e)}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
    />
  );
};

const CurrencyInput = props => (
  <BasicInput
    {...props}
    InputProps={{
      startAdornment: <InputAdornment position="start">R$</InputAdornment>,
      inputComponent: Currency,
    }}
  />
);

export default CurrencyInput;
