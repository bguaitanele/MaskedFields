import React from "react";
import { TextFieldProps } from "@material-ui/core";
import MaskedField from "./MaskedField";
import { parse, isValid } from "date-fns";

type DateInput = {} & TextFieldProps;

const DateInput: React.FC<DateInput> = props => {
  function validateDate(value: string) {
    if (!value) return false;
    const parsed = parse(value, "dd/MM/yyyy", new Date());
    return isValid(parsed) ? false : "Data inválida";
  }

  return (
    <MaskedField
      {...props}
      mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
      validation={validateDate}
    />
  );
};

export default DateInput;
