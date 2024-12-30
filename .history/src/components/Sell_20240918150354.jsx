import { Minus, MoveRight } from "lucide-react";
const nfts = [
  {
    image: "/src/assets/images/wallet.png",
    info: "Set up your wallet",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown specimen book",
  },
  {
    image: "/src/assets/images/collection-icon.png",
    info: "Create your collection",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown specimen book",
  },
  {
    image: "/src/assets/images/add-nft.png",
    info: "Add your nft",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown specimen book",
  },
  {
    image: "/src/assets/images/sell.png",
    info: "Sell your nfts",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown specimen book",
  },
];

const Sell = () => {
  return (
    <div className="sell bg-[#00112b] flex flex-col px-6 w-full py-12 lg:px-12 gap-5 ">
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
      <div className="create text-white flex flex-col md:flex-row w-full flex-wrap gap-x-4 gap-y-6">
        {nfts.map((nft, index) => (
          <div
            key={index}
            className="  bg-[#011631] md:basis-[48%] flex flex-col px-4 py-6"
          >
            <div className="image bg-[#009fed] w-fit">
              <img
                className=" rounded-md flex h-[30px] w-[30px]"
                src={nft.image}
                alt=""
              />
            </div>
            <p className="text-[20px]">{nft.info}</p>
            <p className=" text-[16px] text-center">{nft.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sell;
