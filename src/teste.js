import React, { useEffect } from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { InputAdornment } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  }
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;
  useEffect(() => {
    console.log(inputRef);
  }, [inputRef]);

  return (
    <MaskedInput
      {...other}
      ref={ref => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

export default function FormattedInputs() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: "(1  )    -    ",
    numberformat: "1320"
  });

  const handleChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  return (
    <div className={classes.root}>
      <TextField
        label="teste"
        value={values.textmask}
        onChange={handleChange("textmask")}
        id="formatted-text-mask-input"
        InputProps={{
          inputComponent: TextMaskCustom,
          startAdornment: <InputAdornment position="start">R$</InputAdornment>
        }}
        // inputComponent={TextMaskCustom}
      />
    </div>
  );
}
