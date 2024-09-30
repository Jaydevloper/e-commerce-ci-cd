import { Header } from "antd/es/layout/layout";
import CartIcon from "assets/icons/cart-icon";
import SaveIcon from "assets/icons/save-icon";
import InputSearch from "components/fields/input-search";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <Header className="site-header  bg-white flex-1 border-b-[1px] pt-10 pb-16">
      <div className="site-header__wrapper container flex justify-between items-center !mt-0 !py-0 ">
        <Link className="site-header__wrapper-logo text-2xl font-bold" to={"/"}>
          Exclusive
        </Link>
        <ul className="site-header__wrapper-menu text-base grid grid-cols-4 gap-12 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Sign up</Link>
          </li>
        </ul>

        <section className="site-header__wrapper-right flex items-center gap-[22px] ">
          <InputSearch placeholder="What are you looking for?" />
          <Link to={"/"}>
            <SaveIcon />
          </Link>
          <Link to={"/"}>
            <CartIcon />
          </Link>
        </section>
      </div>
    </Header>
  );
};

export default HeaderMenu;
