import { Minus, MoveRight } from "lucide-react";

const popular = [
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
    art: "Cartoon Art",
    item: "12 items",
  },
  {
    image: "/src/assets/images/collection-7.jpg",
    art: "Cartoon Art",
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
    </div>
  );
};

export default Collection;
