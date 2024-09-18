import dayjs from "dayjs";
import useHooks from "hooks/useHooks";
import { useEffect, useState } from "react";

const Timer = () => {
  const { get } = useHooks();
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    setInterval(() => {
      setTime({
        days: dayjs().day(),
        hours: dayjs().hour(),
        minutes: dayjs().minute(),
        seconds: dayjs().second(),
      });
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dayjs().second()]);
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs"> Days</label>
        <span className="text-[32px] font-bold">
          {get(time, "days", 0)}{" "}
          <span className="text-[#E07575] ml-[17px]">:</span>
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs"> Hours</label>
        <span className="text-[32px] font-bold">
          {get(time, "hours", 0)}{" "}
          <span className="text-[#E07575] ml-[17px]">:</span>
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs"> Minutes</label>
        <span className="text-[32px] font-bold">
          {get(time, "minutes", 0)}{" "}
          <span className="text-[#E07575] ml-[17px]">:</span>
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <label className="text-xs"> Seconds</label>
        <span className="text-[32px] font-bold">{get(time, "seconds", 0)}</span>
      </div>
    </>
  );
};
export default Timer;
