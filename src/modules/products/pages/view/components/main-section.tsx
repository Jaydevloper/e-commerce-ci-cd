import { SyncOutlined } from "@ant-design/icons";
import { Button, Rate } from "antd";
import ButtonRed from "components/buttons/button-red";
import useHooks from "hooks/useHooks";
import { TProducts } from "modules/products/types/products.type";

const MainSection = ({ data }: { data: TProducts }) => {
  const { get } = useHooks();
  return (
    <div>
      <div className="flex justify-between">
        <section className="flex gap-[30px]">
          <div className="flex flex-col gap-4 overflow-y-auto">
            {get(data, "images", []).map((el, index) => {
              return (
                <img
                  className="w-[170px] h-[138px] bg-[#dcdcdc90] rounded"
                  src={el}
                  key={index}
                  loading="lazy"
                  alt={get(data, "brand")}
                />
              );
            })}
          </div>
          <img
            className="w-[500px] h-[600px] bg-[#dcdcdc90] rounded"
            src={get(data, "thumbnail")}
            alt={get(data, "brand")}
          />
        </section>
        <section className="max-w-[399px] w-[100%]">
          <h2 className="text-2xl font-bold">{get(data, "title", "-")}</h2>
          <div className="my-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Rate allowHalf value={get(data, "rating")} />
              <span className="text-[#808080] text-sm">
                ({get(data, "reviews", [])?.length} Reviews)
              </span>
            </div>
            <span className="text-[#DB4444] text-sm border-solid border-l-[1px] pl-4">
              {get(data, "availabilityStatus", "-")}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-2xl font-semibold">
                ${get(data, "price", "-")}
              </span>
              <span className="ml-4 line-through text-[#DB4444] text-lg">
                ${get(data, "discountPercentage", "-")}
              </span>
            </div>
            <h3 className="text-lg text-semibold">
              {get(data, "warrantyInformation")}
            </h3>
          </div>
          <p className="text-sm mt-[14px] pb-6">
            {get(data, "description", "-")}
          </p>

          <div className="border-solid border-t-[1px] pt-6">
            <Button className="py-6 px-12 mr-4">Add to Cart</Button>
            <ButtonRed>Buy</ButtonRed>
            <p className="text-xl font-semibold mt-4">
              <SyncOutlined spin /> {get(data, "returnPolicy")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MainSection;
