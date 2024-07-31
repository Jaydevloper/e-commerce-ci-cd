import InputText from "components/fields/input-text";
import Container from "container";
import { Field } from "formik";
import React from "react";

const Login = () => {
  return (
    <React.Fragment>
      <Container.Form
        url=""
        name=""
        params={{
          filter: "test",
        }}
        fields={[
          {
            name: "test",
            type: "string",
            required: true,
            value: "test",
          },
        ]}
      >
        {() => (
          <>
            <Field name="test" component={InputText} />
            <button className="bg-red-700" type="submit">
              Test
            </button>
          </>
        )}
      </Container.Form>
    </React.Fragment>
  );
};
export default Login;
