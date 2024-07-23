import { TParams } from "services/types/index.type";

export interface IQueryProps {
  url: string;
  params: TParams & {
    [key: string]: string;
  };
}
