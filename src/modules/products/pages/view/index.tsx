import useGet from "hooks/useGet";
import MainSection from "./components/main-section";

import useHooks from "hooks/useHooks";
import Loader from "components/loader";
import { TProducts } from "modules/products/types/products.type";

const ProductView = () => {
  const { params, get } = useHooks();
  const { data, isLoading } = useGet({
    url: `/products/${get(params, "id")}`,
    name: "product-view",
  });
  if (isLoading) return <Loader />;
  return (
    <div className="container">
      <MainSection data={data as TProducts} />
    </div>
  );
};
export default ProductView;
