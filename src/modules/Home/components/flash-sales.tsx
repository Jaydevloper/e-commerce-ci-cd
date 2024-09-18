import { Button, Carousel } from "antd";
import { CarouselRef } from "antd/es/carousel";
import NextArrowIcon from "assets/icons/next-arrow-icon";
import PrevArrowIcon from "assets/icons/prev-arrow-icon";
import imgCard from "assets/imgs/cart.png";
import ButtonRed from "components/buttons/button-red";
import Card from "components/card";
import MarkName from "components/mark-name";
import { useRef } from "react";
import Timer from "./timer";

const FlashSales = () => {
  const CaruselRef = useRef<CarouselRef>(null);
  const handleNext = () => {
    CaruselRef?.current?.next();
  };
  const handlePrev = () => {
    CaruselRef?.current?.prev();
  };

  return (
    <div className="border-b-[1px] border-solid pb-[60px] mt-[152px] mb-[80px]">
      <MarkName text="Today's" />
      <div className="flex justify-between items-center mt-[24px] mb-[31px]">
        <div className="flex items-center gap-[87px]">
          <h2 className="font-semibold text-4xl mt-4">Flash Sales</h2>
          <time className="font-bold text-3xl flex itmems-center gap-[20px]">
            <Timer />
          </time>
        </div>
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
      <Carousel
        ref={CaruselRef}
        slidesToShow={4}
        infinite={false}
        dots={false}
        responsive={[
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              vertical: true,
            },
          },
        ]}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} id={""} img={imgCard} title={""} price={0} />
        ))}
      </Carousel>
      <div className="flex justify-center mt-[76px]">
        <ButtonRed>View All Products</ButtonRed>
      </div>
    </div>
  );
};

export default FlashSales;
