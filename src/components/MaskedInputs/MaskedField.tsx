import React from "react";
import { Field, FieldProps } from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";
import TextMaskCustom from "./TextMaskCustom";

type MaskedField = {
  validation: (value: string) => string | boolean;
  mask: (String | RegExp)[];
} & TextFieldProps;

const MaskedField: React.FC<MaskedField> = ({ mask, validation, ...props }) => {
  return (
    <Field name={props.name} validate={validation}>
      {({ field, meta }: FieldProps) => (
        <TextField
          {...props}
          variant="outlined"
          onChange={field.onChange}
          onBlur={field.onBlur}
          error={!!(meta.touched && meta.error)}
          helperText={!!(meta.touched && meta.error) && meta.error}
          inputProps={{
            mask
          }}
          InputProps={{
            inputComponent: TextMaskCustom as any
          }}
        />
      )}
    </Field>
  );
};

export default MaskedField;
