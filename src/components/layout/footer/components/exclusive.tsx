import { Input } from "antd";

const Exclusive = () => {
  return (
    <div className="flex items-start flex-col gap-6">
      <h2 className="text-[20px] text-[#FAFAFA]">Exclusive</h2>
      <h3 className="text-[20px] text-[#FAFAFA]">Subscribe</h3>z
      <ul className="text-base text-[#FAFAFA] flex flex-col gap-4 ">
        <li>Get 10% off your first order</li>
        <li>
          <Input />
        </li>
      </ul>
    </div>
  );
};

export default Exclusive;
