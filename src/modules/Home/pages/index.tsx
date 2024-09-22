import CustomRoll from "components/custom-roll";
import FlashSales from "../components/flash-sales";
import Menu from "../components/menu";
import NewArrival from "../components/new-arrival";

const Home = () => {
  return (
    <div className="container">
      <Menu />
      <FlashSales />
      <Menu />
      <FlashSales />
      <NewArrival />
      <CustomRoll />
    </div>
  );
};

export default Home;
