import React from "react";
import { Formik, Form, Field } from "formik";
import { CepInput, DateInput, CnpjInput } from "./components/MaskedInputs";
import { Button } from "@material-ui/core";
function App() {
  return (
    <Formik initialValues={{ cep: "" }} onSubmit={() => {}}>
      {() => (
        <Form>
          <CepInput name="cep" label="cep" />
          <DateInput name="data" label="Data" />
          <CnpjInput name="cnpj" label="CNPJ" />
          <Button color="primary" variant="contained" type="submit">
            Enviar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default App;
