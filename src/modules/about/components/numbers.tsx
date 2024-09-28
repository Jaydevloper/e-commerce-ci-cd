import MoneyBagIcon from "assets/icons/money-bag-icon";
import MoneySaleIcon from "assets/icons/money-sale-icon";
import ShoppingBagIcon from "assets/icons/shopping-bag-icon";
import ShoppingIcon from "assets/icons/shopping-icon";
import CustomRoll from "components/custom-roll";

const Numbers = () => {
  return (
    <div className="container  flex items-center  justify-between">
      <div className="px-[50px]  py-[30px] border-[1px] border-solid">
        <CustomRoll
          title="10.5k "
          text="Sallers active our site"
          icon={<ShoppingIcon />}
        />
      </div>
      <div className="px-[50px]  py-[30px] border-[1px] border-solid">
        <CustomRoll
          title="33k "
          text="Mopnthly Produduct Sale"
          icon={<MoneySaleIcon />}
        />
      </div>
      <div className="px-[50px]  py-[30px] border-[1px] border-solid">
        <CustomRoll
          title="45.5k"
          text="Customer active in our site"
          icon={<ShoppingBagIcon />}
        />
      </div>
      <div className="px-[50px]  py-[30px] border-[1px] border-solid">
        <CustomRoll
          title="25k"
          text="Anual gross sale in our site"
          icon={<MoneyBagIcon />}
        />
      </div>
    </div>
  );
};
export default Numbers;
