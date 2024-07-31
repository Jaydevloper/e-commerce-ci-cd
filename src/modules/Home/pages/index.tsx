import InputText from "components/fields/input-text";
import Container from "container";
import { Field } from "formik";

const Home = () => {
  return (
    <>
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
            <Field name="test" label="test" component={InputText} />
            <button className="bg-red-700" type="submit">
              Test
            </button>
          </>
        )}
      </Container.Form>
    </>
  );
};

export default Home;
