import { FormikProps, FormikValues } from "formik";
import { TFields, TParams } from "services/types/index.type";

export interface IForm {
  url: string;
  name: string;
  children: (formikProps: FormikProps<FormikValues>) => React.ReactNode;
  fields: TFields;
  params?: TParams;
}

export interface MyFormikProps extends FormikProps<FormikValues> {}
