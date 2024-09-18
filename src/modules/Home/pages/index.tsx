import Categories from "../components/categories";
import FlashSales from "../components/flash-sales";
import Menu from "../components/menu";

const Home = () => {
  return (
    <div className="container">
      <Menu />
      <FlashSales />
      <Categories />
    </div>
  );
};

export default Home;
