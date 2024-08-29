import CopyRightIcon from "assets/icons/copyright-icon";
import Exclusive from "./components/exclusive";
import Support from "./components/support";
import Account from "./components/account";
import QuickLink from "./components/links";
import DownloadApp from "./components/download";

const MenuFooter = () => {
  return (
    <footer className="site-footer bg-[#000] pt-[30px] pb-6">
      <div className="site-footer__wrapper grid grid-cols-5 gap-[87px] container">
        <Exclusive />
        <Support />
        <Account />
        <QuickLink />
        <DownloadApp />
      </div>
      <p className="flex justify-center items-center gap-1 pt-4 mt-[76px] text-base text-[#fff] ml-auto mr-auto border-t-[1px] border-[#fff] ">
        <span>
          <CopyRightIcon />
        </span>
        Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default MenuFooter;
