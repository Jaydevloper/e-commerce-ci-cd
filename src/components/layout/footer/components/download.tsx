import QrCode from "assets/imgs/qr-code.png";
import GooglePlay from "assets/imgs/google-play.png";
import AppStore from "assets/imgs/app-store.png";
import FacebookIcon from "assets/icons/facebook-icon";
import TwitterIcon from "assets/icons/twitter-icon";
import InstagramIcon from "assets/icons/instagram-icon";
import LinkidineIcon from "assets/icons/linkidine-icon";
const DownloadApp = () => {
  return (
    <div className="site-footer__wrapper-item  flex items-start max-w-[198px] w-[100%] flex-col gap-6">
      <h2 className="text-[20px] text-[#FAFAFA]">Download App</h2>
      <ul className="site-footer__wrapper-item-list text-xs text-[#FAFAFA] flex flex-col gap-2 ">
        <li>Save $3 with App New User Only</li>
        <li className="flex site-footer__wrapper-item-list-item  gap-2">
          <img className="max-w-[80px] max-h-[80px] w-[100%]" src={QrCode} />
          <span>
            <img className="mb-4 " src={GooglePlay} />
            <img src={AppStore} />
          </span>
        </li>
      </ul>
      <ul className="site-footer__wrapper-item-list-social grid grid-cols-4 gap-6">
        <li>
          <FacebookIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <InstagramIcon />
        </li>
        <li>
          <LinkidineIcon />
        </li>
      </ul>
    </div>
  );
};

export default DownloadApp;
