import React from "react";
import { TextFieldProps } from "@material-ui/core";
import MaskedField from "./MaskedField";

type CnpjInput = {} & TextFieldProps;

const CnpjInput: React.FC<CnpjInput> = props => {
  function validateCNPJ(value: string) {
    if (!value) return false;
    return /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value)
      ? false
      : "CNPJ inválido";
  }

  return (
    <MaskedField
      {...props}
      mask={[
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        ".",
        /\d/,
        /\d/,
        /\d/,
        "/",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/
      ]}
      validation={validateCNPJ}
    />
  );
};

export default CnpjInput;
