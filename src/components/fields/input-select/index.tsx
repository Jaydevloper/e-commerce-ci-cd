import { Select } from "antd";
import { ErrorMessage } from "formik";
import { ISelectProps } from "./select.form";

const InputSelect = (props: ISelectProps) => {
  const {
    rootClassName,
    form: { setFieldValue },
    field: { value, name },
    onChange = () => {},
    label = "",
    isDisabled,
    options = [],
    ...otherProps
  } = props;
  return (
    <>
      <div className="flex flex-col ">
        {label ? (
          <label className="mb-1 text-base text-[#9a9a9a]">{label}</label>
        ) : null}
        <Select
          className={"w-[340px] " + rootClassName}
          onChange={(e) => {
            setFieldValue(name, e);
            onChange(e);
          }}
          disabled={isDisabled}
          options={options}
          value={value}
          name={name}
          {...otherProps}
        />
      </div>
      <ErrorMessage name={name} />
    </>
  );
};
export default InputSelect;
