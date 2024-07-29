import "./assets/scss/index.scss";
import InputText from "components/fields/input-text";
import Container from "container";
import { Field } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/routes";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes />
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
    </>
  );
}

export default App;
