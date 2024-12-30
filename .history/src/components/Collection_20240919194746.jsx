import { Minus, MoveRight } from "lucide-react";

const populars = [
  {
    image: "/src/assets/images/collection-1.jpg",
    art: "Cartoon Art",
    item: "17 items",
  },
  {
    image: "/src/assets/images/collection-2.jpg",
    art: "Oil Print Art",
    item: "20 items",
  },
  {
    image: "/src/assets/images/collection-3.jpg",
    art: "Super Hero",
    item: "18 items",
  },
  {
    image: "/src/assets/images/collection-4.jpg",
    art: "Virtual World",
    item: "25 items",
  },
  {
    image: "/src/assets/images/collection-5.jpg",
    art: "Oil Paint",
    item: "40 items",
  },
  {
    image: "/src/assets/images/collection-6.jpg",
    art: "Collectibles",
    item: "12 items",
  },
  {
    image: "/src/assets/images/collection-7.jpg",
    art: "Tranding Art",
    item: "17",
  },
  {
    image: "/src/assets/images/collection-1.jpg",
    art: "Moonnight Art",
    item: "17",
  },
];

const Collection = () => {
  return (
    <div className="collection bg-[#011631] flex flex-col px-6 w-full py-12 lg:px-12 gap-5 ">
      <div className="feature text-[#009fed] flex flex-row gap-2 items-center">
        <Minus size={30} strokeWidth={4} />
        <p className="text-start"> FEATURED</p>
      </div>
      <div className="live flex flex-row justify-between items-center">
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
      <div className="create-people flex flex-col w-full flex-wrap md:flex-row">
        {populars.map((popular, index) => (
          <div
            key={index}
            className="people flex flex-row basis-full items-center md:basis-[49%] lg:basis-[32.5%] xl:basis-[24.5%]  px-4 py-4 text-white gap-3 lg:gap-2 bg-[#011e3e] rounded-md people group relative "
          >
            <img className="flex rounded-md " src={popular.image} alt="" />
            <div className=" flex-col opacity-0  bg-[#011631] px-12 py-3 absolute bottom-16 ease-in-out hidden group-hover:flex group-hover:opacity-100  group-hover:duration-1000 left-9">
              <p className="text-[20px]">{popular.art}</p>
              <p className=" text-[16px] text-center">{popular.item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
