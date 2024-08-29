import { Input } from "antd";
import SendIcon from "assets/icons/send-icon";

const Exclusive = () => {
  return (
    <div className="site-footer__wrapper-item  max-w-[217px] w-[100%]  flex items-start flex-col gap-6">
      <h2 className="text-[20px] text-[#FAFAFA]">Exclusive</h2>
      <h3 className="text-[20px] text-[#FAFAFA]">Subscribe</h3>
      <ul className="text-base text-[#FAFAFA] flex flex-col gap-4 ">
        <li>Get 10% off your first order</li>
        <li>
          <Input
            className="site-footer__wrapper-item-input "
            placeholder="Enter your email"
            prefix={<SendIcon />}
          />
        </li>
      </ul>
    </div>
  );
};

export default Exclusive;
