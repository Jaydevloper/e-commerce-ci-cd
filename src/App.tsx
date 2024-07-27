import Container from "container";
import Routes from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage, Field } from "formik";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
      <Container.Form
        url=""
        name=""
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
            <Field name="test" />
            <ErrorMessage name="test" />
            <button type="submit">Test</button>
          </>
        )}
      </Container.Form>
    </>
  );
}

export default App;
