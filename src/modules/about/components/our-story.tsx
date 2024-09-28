import storyImg from "assets/imgs/story.jpg";
const OurStory = () => {
  return (
    <div className="flex justify-between items-center container !mb-[140px]">
      <div className="max-w-[525px] w-[100%]">
        <h2 className="text-6xl font-semibold mb-10 mt-0">Our Story</h2>
        <p className="text-base mb-6">
          Launced in 2015, Exclusive is South Asia's premier online shopping
          makterplace with an active presense in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sallers and 300 brands and serves 3 millioons customers across
          the region.
        </p>
        <p className="text-base">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast. Exclusive offers a diverse assotment in categories ranging from
          consumer.
        </p>
      </div>
      <img className="max-w-[525px] w-[100%]" src={storyImg} />
    </div>
  );
};

export default OurStory;
