import React from 'react';
import { TextFieldProps } from '@material-ui/core';
import { MaskedInputProps } from 'react-text-mask';
import TextMaskCustom from './TextMaskCustom';
import BasicInput from './BasicInput';

type MaskedField = {
  validation: (value: string) => string | boolean;
  maskProps?: MaskedInputProps;
} & TextFieldProps;

const MaskedField: React.FC<MaskedField> = ({
  maskProps,
  validation,
  ...props
}) => {
  return (
    <BasicInput
      {...props}
      validation={validation}
      InputProps={{
        inputComponent: TextMaskCustom as any,
        inputProps: maskProps,
      }}
    />
  );
};

export default MaskedField;
