import { ICustomrollProps } from "./roll.type";

const CustomRoll = (props: ICustomrollProps) => {
  const { title, text, icon } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-[60%] bg-[#C1C0C1] max-w-[80px]  h-[80px] w-[100%] flex items-center justify-center  ">
        <div className="rounded-[60%] bg-[#000]  max-w-[40px]  p-8 relative ">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {icon}
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-6">{title}</h3>
      <p className="text-sm mt-2">{text}</p>
    </div>
  );
};

export default CustomRoll;
