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
      <div className="create-people flex flex-col gap gap-y-4 w-full flex-wrap md:flex-row justify-between">
        {populars.map((popular, index) => (
          <div
            key={index}
            className="people flex flex-row basis-full justify-center items-center md:basis-[45%] lg:basis-[33%] xl:basis-[24%]  px-4 py-6 text-white gap-3 lg:gap-2 bg-[#011e3e] rounded-md"
          >
            <img
              className="rounded-full border-[#009fed] border-2"
              src={popular.image}
              alt=""
            />
            <a href="#">{popular.art}</a>
            <p className="hover:text-[#009fed] ease-in-out">{popular.items}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
