import FastDelviryIcon from "assets/icons/fast-delvirey-icon";
import HeadPhoneIcon from "assets/icons/headphone-icon";
import ShieldIcon from "assets/icons/shield-icon";
import CustomRoll from "components/custom-roll";

const Services = () => {
  return (
    <div className="grid grid-cols-3  container !mt-[140px] ">
      <CustomRoll
        title="FREE AND FAST DELIVERY"
        text="Free delivery for all orders over $140"
        icon={<FastDelviryIcon />}
      />
      <CustomRoll
        title="24/7 CUSTOMER SERVICE"
        text="Friendly 24/7 customer support"
        icon={<HeadPhoneIcon />}
      />
      <CustomRoll
        title="MONEY BACK GUARANTEE"
        text="We reurn money within 30 days"
        icon={<ShieldIcon />}
      />
    </div>
  );
};
export default Services;
