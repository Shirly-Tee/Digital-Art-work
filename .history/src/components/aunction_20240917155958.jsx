import { Heart, Minus, MoveRight } from "lucide-react";

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
        <div className="art-all flex flex-col lg:w-[32%] bg-[#011e3e] rounded-[20px] p-6 gap- text-white">
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
          <div className="likes flex flex-row justify-between items-center text-white gap-2">
            <div className="img-wrapper flex flex-row items-center text-white gap-2 p-1 ">
              <img
                className="rounded-full border-[#009fed] border-2 "
                src="/src/assets/images/home-creator-1.jpg "
                alt="img"
              />
              <p className="text-[18px]">John wick</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="heart p-3 bg-[#002248] rounded-full items-center">
                <Heart size={19} strokeWidth={2} />
              </div>
              <a href="#">74 Likes</a>
            </div>
          </div>
          <p className="text-[20px]">The Cubic Universe Art</p>
          <div className="art-last flex justify-between bg-[#002248] px-4 py-3 rounded-sm">
            <p className="text-[18px">Current Bid</p>
            <p>0.68 ETH</p>
          </div>
        </div>
        {/* art2 */}
        <div className="art-all flex flex-col lg:w-[32%] bg-[#011e3e] rounded-[20px] p-6 gap-4 text-white">
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
          <div className="likes flex flex-row justify-between items-center text-white gap-2">
            <div className="img-wrapper flex flex-row items-center text-white gap-2 p-1 ">
              <img
                className="rounded-full border-[#009fed] border-2 "
                src="/src/assets/images/home-creator-1.jpg "
                alt="img"
              />
              <p className="text-[18px]">John wick</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="heart p-3 bg-[#002248] rounded-full items-center">
                <Heart size={19} strokeWidth={2} />
              </div>
              <a href="#">74 Likes</a>
            </div>
          </div>
          <p className="text-[20px]">The Cubic Universe Art</p>
          <div className="art-last flex justify-between bg-[#002248] px-4 py-3 rounded-sm">
            <p className="text-[18px">Current Bid</p>
            <p>0.68 ETH</p>
          </div>
        </div>
        {/* art3 */}
        <div className="art-all flex flex-col lg:w-[32%] bg-[#011e3e] rounded-[20px] p-6 gap-4 text-white">
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
          <div className="likes flex flex-row justify-between items-center text-white gap-2">
            <div className="img-wrapper flex flex-row items-center text-white gap-2 p-1 ">
              <img
                className="rounded-full border-[#009fed] border-2 "
                src="/src/assets/images/home-creator-1.jpg "
                alt="img"
              />
              <p className="text-[18px]">John wick</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="heart p-3 bg-[#002248] rounded-full items-center">
                <Heart size={19} strokeWidth={2} />
              </div>
              <a href="#">74 Likes</a>
            </div>
          </div>
          <p className="text-[20px]">The Cubic Universe Art</p>
          <div className="art-last flex justify-between bg-[#002248] px-4 py-3 rounded-sm">
            <p className="text-[18px">Current Bid</p>
            <p>0.68 ETH</p>
          </div>
        </div>
        {/* art3 end */}
      </div>
    </div>
  );
};
