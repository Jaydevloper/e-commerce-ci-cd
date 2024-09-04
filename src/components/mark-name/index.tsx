import { IProps } from "./make-name.type";

const MarkName = (props: IProps) => {
  const { text = "", className = "", ...otherProps } = props;
  return (
    <div className={"flex items-center gap-4 " + className} {...otherProps}>
      <div className="px-[10px] py-5 bg-[#DB4444] rounded-[4px]"></div>
      <h3 className="text-[#DB4444] text-base font-semibold">{text}</h3>
    </div>
  );
};
export default MarkName;
