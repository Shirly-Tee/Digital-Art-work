import { Minus, MoveRight } from "lucide-react";

export const Aunction = () => {
  return (
    <div className="aunction bg-[#011631] flex flex-col px-6 w-full py-12 lg:px-12 gap-5    ">
      <div className="feature text-[#009fed] flex flex-row gap-2 items-center">
        <Minus size={30} strokeWidth={4} />
        <p className="text-start"> FEATURED</p>
      </div>
      <div className="live flex flex-row justify-between ">
        <p className="text-white text-[30px] font-medium">Live Auction</p>
        <div className="view flex flex-col">
          <a
            className="text-[#009fed] flex justify-center items-center gap-2"
            href="#"
          >
            VIEW ALL
            <MoveRight size={20} strokeWidth={2} />
          </a>
        </div>
      </div>
      <div className="art flex flex-col lg:flex-row">
        <div className="art-all flex flex-col lg:w-[32%] bg-[#011e3e] rounded-[20px] p-8">
          <div className="art-image  relative ">
            <img
              className="p-2 rounded-[20px]"
              src="/src/assets/images/auction-1.jpg"
              alt=""
            />
            <p className="absolute bg-[#1eb1fa] px-4  py-3 bottom-10 left-10 rounded-md text-white font-medium">
              06 : 13 : 53
            </p>
          </div>
          <div className="img-wrapper flex flex-row items-center text-white gap-2 mt-2 ">
            <img
              className="rounded-full border-[#009fed] border-2"
              src="/src/assets/images/home-creator-1.jpg "
              alt="img"
            />
            <p>John wick</p>
          </div>
        </div>
      </div>
    </div>
  );
};
