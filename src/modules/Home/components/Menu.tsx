import { Carousel } from "antd";
import ArrowRightIcon from "assets/icons/arrow-right-icon";
import "assets/scss/blocks/_bg-view.scss";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="max-w-[1170px] w-[100%]">
      <Carousel autoplay>
        <div className="bg-view bg-view__top-menu-ad bg-view__top-menu-ad-first text-white  ">
          <div className="pl-[5rem] pt-[14rem] max-w-[500px] w-[100%]">
            <h2 className="text-5xl  font-semibold pb-[21px] leading-[1.5] ">
              Up to 10% off Voucher
            </h2>
            <Link
              className="text-base underline flex items-center gap-2 "
              to={"/"}
            >
              Shop Now
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        <div className="bg-view bg-view__top-menu-ad bg-view__top-menu-ad-first text-white  ">
          <div className="pl-[5rem] pt-[14rem] max-w-[500px] w-[100%]">
            <h2 className="text-5xl  font-semibold pb-[21px] leading-[1.5] ">
              Up to 10% off Voucher
            </h2>
            <Link
              className="text-base underline flex items-center gap-2 "
              to={"/"}
            >
              Shop Now
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};
export default Menu;
