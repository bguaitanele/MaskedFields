import React from 'react';
import { Field, FieldProps } from 'formik';
import { TextField, TextFieldProps } from '@material-ui/core';

type BasicInput = {
  validation?: (value: string) => string | boolean;
} & TextFieldProps;

const BasicInput: React.FC<BasicInput> = ({
  name,
  validation,
  children,
  ...props
}) => {
  return (
    <Field name={name} validation={validation}>
      {({ field, meta }: FieldProps) => (
        <TextField
          {...field}
          {...props}
          variant="outlined"
          error={!!(meta.touched && meta.error)}
          helperText={!!(meta.touched && meta.error) && meta.error}
        >
          {children}
        </TextField>
      )}
    </Field>
  );
};

export default BasicInput;
