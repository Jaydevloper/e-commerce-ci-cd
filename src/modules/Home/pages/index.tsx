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
    </div>
  );
};

export default Home;
