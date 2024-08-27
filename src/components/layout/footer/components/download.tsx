import QrCode from "assets/imgs/qr-code.png";
import GooglePlay from "assets/imgs/google-play.png";
import AppStore from "assets/imgs/app-store.png";
import FacebookIcon from "assets/icons/facebook-icon";
import TwitterIcon from "assets/icons/twitter-icon";
const DownloadApp = () => {
  return (
    <div className="flex items-start flex-col gap-6">
      <h2 className="text-[20px] text-[#FAFAFA]">Download App</h2>
      <ul className="text-xs text-[#FAFAFA] flex flex-col gap-2 ">
        <li className="w-[208px]">Save $3 with App New User Only</li>
        <li className="flex  gap-2">
          <img src={QrCode} />
          <span>
            <img className="mb-4 h-[30px] w-[104px]" src={GooglePlay} />
            <img className="h-[30px] w-[104px]" src={AppStore} />
          </span>
        </li>
      </ul>
      <ul className="grid grid-cols-4 gap-6">
        <li>
          <FacebookIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
    </div>
  );
};

export default DownloadApp;
