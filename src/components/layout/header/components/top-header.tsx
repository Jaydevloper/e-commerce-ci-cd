import { Select } from "antd";
import { Link } from "react-router-dom";

const TopHeader = () => {
  return (
    <aside className="top-header py-[15px] bg-[#000]">
      <section className="top-header__wrapper container !p-0 !my-0  text-center">
        <div className="flex items-center justify-between text-white ">
          <div className="top-header__wrapper-texts flex  items-center gap-4 mx-auto">
            <h1 className="text-sm ">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h1>
            <Link className="text-sm underline" to={"/"}>
              ShopNow
            </Link>
          </div>
          <Select
            className="top-header__select w-[88px]"
            defaultValue="English"
            options={[
              { label: "English", value: "English" },
              { label: "Uzbek", value: "Uzbek" },
            ]}
          />
        </div>
      </section>
    </aside>
  );
};

export default TopHeader;
