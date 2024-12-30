import { Minus, MoveRight } from "lucide-react";

const creators = [
  {
    image: "/src/assets/images/creator-1.jpg",
    name: "John Doe",
    value: "3.767ETH",
  },
  {
    image: "/src/assets/images/creator-2.jpg",
    name: "Anika Reham",
    value: "5.252ETH",
  },
  {
    image: "/src/assets/images/creator-3.jpg",
    name: "David ALEX",
    value: "2.867ETH",
  },
  {
    image: "/src/assets/images/creator-4.jpg",
    name: "Yasmin Dutt",
    value: "3.842ETH",
  },
  {
    image: "/src/assets/images/creator-5.jpg",
    name: "Lorem Smith",
    value: "3.767ETH",
  },
  {
    image: "/src/assets/images/creator-6.jpg",
    name: "Larry James",
    value: "3.767ETH",
  },
  {
    image: "/src/assets/images/creator-7.jpg",
    name: "Larry James",
    value: "3.767ETH",
  },
  {
    image: "/src/assets/images/creator-8.jpg",
    name: "Larry James",
    value: "3.767ETH",
  },
];

export const Creator = () => {
  return (
    <div className="Featured  bg-[#00112b] flex flex-col px-14 w-full py-12 lg:px-12 gap-8">
      <div className="feature text-[#009fed] flex flex-row gap-2 items-center">
        <Minus size={30} strokeWidth={4} />
        <p className="text-start"> TOP ARTIST</p>
      </div>
      <div className="live flex flex-row justify-between ">
        <p className="text-white text-[30px] font-medium">Featured Creator</p>
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
      <div className="create-people flex flex-col gap-4 w-full flex-wrap md:flex-row">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="people flex flex-row w-full justify-center items-center md:w-[45%] lg:w-[30%] xl:w-[23%]  px-4 py-6 text-white gap-3 lg:gap-2 bg-[#011e3e] rounded-md"
          >
            <img
              className="rounded-full border-[#009fed] border-2"
              src={creator.image}
              alt=""
            />
            <a href="#">{creator.name}</a>
            <p className="hover:text-[#009fed] ease-in-out">{creator.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
