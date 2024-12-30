import { MoveDown } from "lucide-react";

export const Aunction = () => {
  return (
    <div className="aunction bg-[#011631] flex flex-col px-6 w-full py-12 lg:px-12 gap-5    ">
      <p className="text-[#009fed] text-start">FEATURED</p>
      <div className="live flex flex-row justify-between ">
        <p className="text-white text-[30px] font-medium">Live Auction</p>
        <div className="view flex flex-col">
          <a className="text-[#009fed]" href="#">
            VIEW ALL
            <MoveDown />
          </a>
        </div>
      </div>
    </div>
  );
};
