import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import HeaderMenu from "./header";
import TopHeader from "./header/components/top-header";

const LayoutMenu = () => {
  return (
    <>
      <Layout>
        <TopHeader />
        <HeaderMenu />
        <Content className="px-0 py-12">
          {/* <BreadCurmbs /> */}
          <div className="px-8 py-4">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default LayoutMenu;
