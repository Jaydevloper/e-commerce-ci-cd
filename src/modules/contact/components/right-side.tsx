import ButtonRed from "components/buttons/button-red";
import InputText from "components/fields/input-text";
import InputTextArea from "components/fields/input-text-area";
import Container from "container";
import { Field } from "formik";

const RightSide = () => {
  return (
    <div className="shadow-2xl py-10 px-[35px] rounded max-w-[800px] w-[100%]">
      <Container.Form url="" name="" fields={[]}>
        {() => {
          return (
            <div>
              <div className="flex gap-4 justify-between">
                <Field
                  component={InputText}
                  name="name"
                  placeholder="Your Name *"
                />
                <Field
                  component={InputText}
                  name="name"
                  placeholder="Your Email *"
                />
                <Field
                  component={InputText}
                  name="name"
                  placeholder="Your Phone *"
                />
              </div>
              <Field
                rootClassName=" my-8"
                component={InputTextArea}
                name="name"
                placeholder="Your Massage"
              />
              <div className="flex justify-end">
                <ButtonRed htmlType="submit">Send Massage</ButtonRed>
              </div>
            </div>
          );
        }}
      </Container.Form>
    </div>
  );
};
export default RightSide;
