import { MoveDown, MoveRight } from "lucide-react";

export const Aunction = () => {
  return (
    <div className="aunction bg-[#011631] flex flex-col px-6 w-full py-12 lg:px-12 gap-5    ">
      <p className="text-[#009fed] text-start">FEATURED</p>
      <div className="live flex flex-row justify-between ">
        <p className="text-white text-[30px] font-medium">Live Auction</p>
        <div className="view flex flex-col">
          <a className="text-[#009fed] flex" href="#">
            VIEW ALL
            <MoveRight size={20} strokeWidth={1.3} />
          </a>
        </div>
      </div>
    </div>
  );
};
