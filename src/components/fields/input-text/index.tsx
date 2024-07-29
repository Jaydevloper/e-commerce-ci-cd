import { Input } from "antd";
import { TFieldprops } from "../fields.type";
import { ErrorMessage } from "formik";

const InputText = (props: TFieldprops) => {
  const {
    placeholder = "",
    field: { value, name },
    form: { setFieldValue },
    onChange = () => {},
  } = props;
  return (
    <div>
      <Input
        className=""
        type="text"
        size="large"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={(e) => {
          setFieldValue(name, e.target.value);
          onChange(e);
        }}
      />
      <p className="text-red-500">
        <ErrorMessage name={name} />
      </p>
    </div>
  );
};

export default InputText;
