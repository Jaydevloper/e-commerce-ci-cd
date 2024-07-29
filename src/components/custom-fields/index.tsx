import { Field, FieldProps } from "formik";
import { ComponentProps } from "./fields.type";

const CustomFields = ({ ...props }: FieldProps & ComponentProps) => {
  return <Field {...props} />;
};
export default CustomFields;
