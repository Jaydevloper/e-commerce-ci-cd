import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import HeaderMenu from "./header";
import BreadCurmbs from "./bread-curmbs";
import { Outlet } from "react-router-dom";

const LayoutMenu = () => {
  return (
    <>
      <Layout>
        <HeaderMenu />
        <Content className="px-0 py-12">
          <BreadCurmbs />
          <div className="px-8 py-4">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default LayoutMenu;
