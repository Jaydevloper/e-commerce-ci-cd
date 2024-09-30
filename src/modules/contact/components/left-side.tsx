import CallUsIcon from "assets/icons/call-us-icon";
import MailUsIcon from "assets/icons/mail-us-icon";

const LeftSide = () => {
  return (
    <div className="shadow-2xl py-10 pl-[35px] rounded max-w-[340px] w-[100%]">
      <div className="border-b-[1px] border-solid pb-[32px]">
        <h2 className="text-base font-semibold flex gap-4 items-center">
          {" "}
          <CallUsIcon />
          Call To Us
        </h2>
        <p className="text-sm mb-4 mt-6">
          We are available 24/7, 7 days a week.
        </p>
        <a className="text-sm" href="tel:+8801611112222">
          Phone: +8801611112222
        </a>
      </div>
      <div className="mt-8">
        <h2 className="text-base font-semibold flex gap-4 items-center">
          {" "}
          <MailUsIcon />
          Write To US
        </h2>
        <p className="text-sm mb-4 mt-6">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <a className="text-sm block mb-4" href="tel:customer@exclusive.com">
          Emails: customer@exclusive.com
        </a>
        <a className="text-sm " href="maiilto:support@exclusive.com">
          Emails: support@exclusive.com
        </a>
      </div>
    </div>
  );
};
export default LeftSide;
