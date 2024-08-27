import { Header } from "antd/es/layout/layout";
import SaveIcon from "assets/icons/save-icon";
import InputSearch from "components/fields/input-search";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <Header className="site-header  bg-white flex-1">
      <div className="site-header__wrapper container flex justify-between items-center">
        <h2 className="text-2xl font-bold">Exclusive</h2>
        <ul className="site-header__wrapper-menu text-base grid grid-cols-4 gap-12 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Sign up</Link>
          </li>
        </ul>

        <section>
          <InputSearch placeholder="What are you looking for?" />
          <SaveIcon />
        </section>
      </div>
    </Header>
  );
};

export default HeaderMenu;
