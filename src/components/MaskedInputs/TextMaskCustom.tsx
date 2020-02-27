import React from "react";
import MaskedInput from "react-text-mask";

interface TextMaskCustomProps {
  mask: any[];
  inputRef: (ref: HTMLInputElement | null) => void;
}

const TextMaskCustom = (props: TextMaskCustomProps) => {
  const { inputRef, mask, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref: any) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={mask}
    />
  );
};

export default TextMaskCustom;
