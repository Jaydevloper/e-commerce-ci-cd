import { InputProps } from "antd";
import { FieldProps } from "formik";

export interface ICustomprops extends InputProps {
  label?: string;
  placeholder?: string;
  rootClassName?: string;
}

export type TFieldprops = ICustomprops & FieldProps;
