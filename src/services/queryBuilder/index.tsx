import { IQueryProps } from "./queryBuilder.type";

const QueryBuilder = (props: IQueryProps) => {
  const { url, params } = props;
  let str: string = "";
  const obj = {
    filter: "",
    sort: "",
  };
  for (const [key, value] of Object.entries(obj)) {
    if (params[key]) {
      params[key] = value;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      str = "?" + new URLSearchParams(params).toString();
    }
  }

  return url + str;
};
export default QueryBuilder;
