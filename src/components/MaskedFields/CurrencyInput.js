import React, { useState, useMemo, useEffect, useRef } from "react";
import { useField } from "formik";
// import Input from './Input';
import { InputAdornment } from "@material-ui/core";
import BasicInput from "./BasicInput";

function formatNumber(value) {
  if (value == null) return;
  return Intl.NumberFormat("pt", {
    style: "decimal",
    minimumFractionDigits: 2
  }).format(value);
}
function cleanNumber(value) {
  return Number(value.replace(/[^0-9]/g, "")) / 100;
}

function getPosicaoReal(pos, valorAnterior, valorNovo) {
  if (!pos) return 0;
  if (pos === 3) return 4;
  const patternNumero = /[0-9]/g;
  const textosAntigos =
    valorAnterior == null ? 0 : valorAnterior.replace(patternNumero, "").length;
  const textosNovos =
    valorNovo == null ? 0 : valorNovo.replace(patternNumero, "").length;
  return pos + (textosAntigos - textosNovos);
}

const Currency = props => {
  const inputRef = useRef(null);
  const [field] = useField(props);
  const [selectionStart, setSelectionStart] = useState();
  const value = useMemo(() => formatNumber(field.value), [field.value]);

  useEffect(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.setSelectionRange(selectionStart, selectionStart);
    }
  }, [inputRef, selectionStart]);

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
      {...props}
      value={value}
      onChange={e => handleChange(e)}
      ref={inputRef}
    />
  );
};

const CurrencyInput = props => {
  return (
    <BasicInput
      {...props}
      InputProps={{
        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
        inputComponent: Currency
      }}
    />
  );
};

export default CurrencyInput;
