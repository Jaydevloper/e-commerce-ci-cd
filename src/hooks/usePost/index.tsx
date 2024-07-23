import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "services/api";
import QueryBuilder from "services/queryBuilder";
import { TMethod, TParams } from "services/types/index.type";

interface IProps {
  url: string;
  method: TMethod;
  params?: TParams;
}
interface IPostProps {
  success?: boolean;
  successMessage?: string;
  errorMessage?: string;
  error?: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
const PostData = async (props: IProps) => {
  const { url, method = "post", params } = props;
  return await api[method](QueryBuilder({ url, params: params || {} }));
};

const usePost = ({
  success = true,
  successMessage = "",
  errorMessage = "",
  error = true,
  ...params
}: IPostProps) => {
  return useMutation({
    mutationFn: PostData,
    onSuccess: (data) => {
      if (success) {
        toast.success((data as unknown as { message: string }).message);
        if (successMessage) {
          toast.success(successMessage);
        }
      }
    },
    onError: (data) => {
      if (error) {
        toast.error((data as unknown as { message: string }).message);
        if (errorMessage) {
          toast.error(errorMessage);
        }
      }
    },
    ...params,
  });
};

export default usePost;
