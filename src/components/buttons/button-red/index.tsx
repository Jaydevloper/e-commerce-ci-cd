import { Button } from "antd";
type Thtmltype = "button" | "submit" | "reset";
const ButtonRed = ({
  children,
  className = "",
  htmlType,
  loading = false,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  htmlType?: Thtmltype;
  loading?: boolean;
}) => {
  return (
    <Button
      className={
        "py-6 px-12 border-none rounded-[4px] text-base text-white bg-[#DB4444] hover:!bg-[#DB4444] hover:!text-white hover:opacity-60 " +
        className
      }
      htmlType={htmlType}
      loading={loading}
      {...props}
    >
      {children}
    </Button>
  );
};
export default ButtonRed;
