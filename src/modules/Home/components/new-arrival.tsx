import playstationImg from "assets/imgs/playstation.png";
import womensCollectionImg from "assets/imgs/womens-collection.png";
import speakersImg from "assets/imgs/speakers.png";
import perfumeImg from "assets/imgs/perfume.png";
import MarkName from "components/mark-name";
import { Link } from "react-router-dom";
const NewArrival = () => {
  return (
    <div>
      <MarkName text="Featured" />
      <h2 className="font-semibold text-4xl mt-[20px] mb-[60px]">
        New Arrival
      </h2>
      <div className="flex justify-between">
        <div className="relative">
          <img className="max-w-[570px] w-[100%]" src={playstationImg} />
          <div className="absolute top-[446px] left-[32px] max-w-[242px] w-[100%]">
            <h3 className="text-white font-semibold text-2xl">PlayStation 5</h3>
            <p className="text-white my-4 ">
              Black and White version of the PS5 coming out on sale.
            </p>
            <Link
              className="text-base underline flex items-center gap-2 text-white"
              to={"/"}
            >
              Shop Now
            </Link>
          </div>
        </div>
        <section className="flex flex-col gap-8">
          <div className="relative">
            <img className="max-w-[570px] w-[100%]" src={womensCollectionImg} />
            <div className="absolute top-[132px] left-[24px] max-w-[255px] w-[100%]">
              <h3 className="text-white font-semibold text-2xl">
                Women's Collections
              </h3>
              <p className="text-white my-4 ">
                Featured woman collections that give you another vibe.
              </p>
              <Link
                className="text-base underline flex items-center gap-2 text-white "
                to={"/"}
              >
                Shop Now
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="relative">
              <img className="max-w-[270px] w-[100%]" src={speakersImg} />
              <div className="absolute top-[150px] left-[24px] max-w-[191px] w-[100%]">
                <h3 className="text-white font-semibold text-2xl">Speakers</h3>
                <p className="text-white my-4 ">Amazon wireless speakers</p>
                <Link
                  className="text-base underline flex items-center gap-2 text-white "
                  to={"/"}
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="relative">
              <img className="max-w-[270px] w-[100%]" src={perfumeImg} />
              <div className="absolute top-[150px] left-[24px] max-w-[191px] w-[100%]">
                <h3 className="text-white font-semibold text-2xl">Perfume</h3>
                <p className="text-white my-4 ">GUCCI INTENSE OUD EDP</p>
                <Link
                  className="text-base underline flex items-center gap-2 text-white "
                  to={"/"}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default NewArrival;
