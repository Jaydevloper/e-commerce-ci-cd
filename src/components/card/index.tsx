import { Button, Rate } from "antd";
import { Link } from "react-router-dom";
import { IProps } from "./card.type";
const Card = (props: IProps) => {
  const {
    img = "",
    title = "",
    price = 0,
    discount = 0,
    rating = 0,
    id,
  } = props;
  return (
    <div className="site-card">
      <div className="site-card__wrapper ">
        <Link className="site-card__wrapper-link" to={`/products/view/${id}`}>
          <img src={img} alt="coat" loading="lazy" />
        </Link>
        <Button className="visually-hidden site-card__wrapper-button">
          Add To Cart
        </Button>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h3 className="text-base  font-bold">{title}</h3>
        <div className="flex items-center gap-3">
          <span className="text-base text-[#DB4444] font-semibold">
            ${price}
          </span>
          <span className="line-through text-[#808080] text-base">
            ${discount}
          </span>
        </div>
        <Rate allowHalf value={rating} />
      </div>
    </div>
  );
};
export default Card;
