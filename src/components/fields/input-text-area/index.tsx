import useHooks from "hooks/useHooks";
import { TFieldprops } from "../fields.type";
import TextArea from "antd/es/input/TextArea";
import { ErrorMessage } from "formik";

const InputTextArea = (props: TFieldprops) => {
  const {
    placeholder = "",
    rootClassName = "",
    isDisabled = false,
    label = "",
    field: { value, name },
    form: { setFieldValue, touched, errors },
    onChange = () => {},
    ...otherProps
  } = props;
  const { get } = useHooks();
  return (
    <>
      <div className="flex flex-col ">
        {label ? (
          <label className="mb-1 text-base text-[#9a9a9a]">{label}</label>
        ) : null}
        <div className={" w-[100%] input-text " + rootClassName}>
          <TextArea
            size="large"
            placeholder={placeholder}
            value={value}
            name={name}
            status={
              get(touched, name) && get(errors, name) ? "error" : undefined
            }
            onChange={(e) => {
              setFieldValue(name, e.target.value);
              onChange(e);
            }}
            disabled={isDisabled}
            {...otherProps}
          ></TextArea>
        </div>
      </div>
      <p className="text-red-500">
        <ErrorMessage name={name} />
      </p>
    </>
  );
};
export default InputTextArea;
