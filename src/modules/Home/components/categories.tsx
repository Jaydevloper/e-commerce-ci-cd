import { Button } from "antd";
import { CarouselRef } from "antd/es/carousel";
import NextArrowIcon from "assets/icons/next-arrow-icon";
import PrevArrowIcon from "assets/icons/prev-arrow-icon";
import MarkName from "components/mark-name";
import { useRef } from "react";

const Categories = () => {
  const CaruselRef = useRef<CarouselRef>(null);
  const handleNext = () => {
    CaruselRef?.current?.next();
  };
  const handlePrev = () => {
    CaruselRef?.current?.prev();
  };
  return (
    <div>
      <MarkName text="Categories" />
      <div className="flex justify-between items-center mt-[24px]">
        <h2 className="font-semibold text-4xl mt-4">Browse By Category</h2>
        <div className="flex gap-2">
          <Button
            className="py-[24px] px-[15px] bg-[#F5F5F5] rounded-[60%] hover:!bg-[#db4444] border-none"
            onClick={handlePrev}
          >
            <PrevArrowIcon />
          </Button>
          <Button
            className="py-[24px] px-[15px] bg-[#F5F5F5] rounded-[60%] hover:!bg-[#db4444] border-none"
            onClick={handleNext}
          >
            <NextArrowIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Categories;
