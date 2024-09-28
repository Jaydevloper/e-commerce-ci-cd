import InstagramIcon from "assets/icons/instagram-icon";
import LinkidineIcon from "assets/icons/linkidine-icon";
import TwitterIcon from "assets/icons/twitter-icon";
import TomCruiseImg from "assets/imgs/tom-curise.jpg";
import { Link } from "react-router-dom";
const AboutTeam = () => {
  return (
    <div className="flex justify-between items-center container !mt-[140px]">
      <div>
        <img src={TomCruiseImg} />
        <h3 className="text-4xl font-semibold mt-8 mb-2">Tom Cruise</h3>
        <p className="text-base">Founder & Chairman</p>
        <ul className="flex items-center gap-[19px] mt-4">
          <li>
            <Link to={"/"}>
              <TwitterIcon fill="black" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <InstagramIcon fill="black" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <LinkidineIcon fill="black" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={TomCruiseImg} />
        <h3 className="text-4xl font-semibold mt-8 mb-2">Tom Cruise</h3>
        <p className="text-base">Founder & Chairman</p>
        <ul className="flex items-center gap-[19px] mt-4">
          <li>
            <Link to={"/"}>
              <TwitterIcon fill="black" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <InstagramIcon fill="black" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <LinkidineIcon fill="black" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <img src={TomCruiseImg} />
        <h3 className="text-4xl font-semibold mt-8 mb-2">Tom Cruise</h3>
        <p className="text-base">Founder & Chairman</p>
        <ul className="flex items-center gap-[19px] mt-4">
          <li>
            <Link to={"/"}>
              <TwitterIcon fill="black" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <InstagramIcon fill="black" />
            </Link>
          </li>
          <li>
            <Link to={"/"}>
              <LinkidineIcon fill="black" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AboutTeam;
