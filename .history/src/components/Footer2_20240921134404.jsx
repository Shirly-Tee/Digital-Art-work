import { Tally1 } from "lucide-react";

const Footer2 = () => {
  return (
    <div className="flex flex-col md:flex-row text-white py-8 w-full px-16 justify-center items-center md:items-start md:justify-between gap-y-6 text-[16px]">
      <div className="left flex flex-col md:flex-row items-center">
        <p>Crypto all Right Reserved. Designed by </p>
        <a
          className="ml-2 text-[#009fed] underline underline-offset-2"
          href="#"
        >
          Templatecoder.com
        </a>
      </div>
      <div className="right flex flex-row items-center">
        <p>PRIVACY POLICY</p>
        <Tally1 className="ml-4" size={20} strokeWidth={1} />
        <p>TERMS & CONDITION</p>
      </div>
    </div>
  );
};

export default Footer2;
