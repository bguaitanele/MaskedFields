import React, { useRef } from "react";
import { Formik, Form, Field } from "formik";
import {
  CepInput,
  DateInput,
  CnpjInput,
  BasicInput,
  CurrencyInput,
  TelefoneInput
} from "./components/MaskedFields";
import { Button, Grid, styled } from "@material-ui/core";

const Col = styled(Grid)({
  margin: "10px 0"
});

function App() {
  return (
    <Formik
      initialValues={{ cep: "", basico: "", data: "", cnpj: "", valor: "" }}
      onSubmit={() => {}}
    >
      {({ values, errors }) => (
        <Form>
          {JSON.stringify(values)}
          <br />
          {JSON.stringify(errors)}
          <br />

          <Col>
            <BasicInput name="basico" label="Basico" />
          </Col>
          <Col>
            <CepInput name="cep" label="cep" />
          </Col>
          <Col>
            <DateInput name="data" label="Data" />
          </Col>
          <Col>
            <CnpjInput name="cnpj" label="CNPJ" />
          </Col>
          <Col>
            <CurrencyInput name="valor" label="Valor" />
          </Col>
          <Col>
            <TelefoneInput name="telefone" label="Telefone" />
          </Col>

          <Button color="primary" variant="contained" type="submit">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default App;
