import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

const HeaderMenu = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={[
          {
            key: 1,
            label: "Home",
          },
          {
            key: 2,
            label: "About",
          },
          {
            key: 3,
            label: "Contact",
          },
        ]}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default HeaderMenu;
