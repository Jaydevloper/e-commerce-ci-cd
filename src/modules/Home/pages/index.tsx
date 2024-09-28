import FlashSales from "../components/flash-sales";
import Menu from "../components/menu";
import NewArrival from "../components/new-arrival";
import Services from "../components/services";

const Home = () => {
  return (
    <div className="container">
      <Menu />
      <FlashSales />
      <Menu />
      <FlashSales />
      <NewArrival />
      <Services />
    </div>
  );
};

export default Home;
