import { Minus, MoveRight } from "lucide-react";

const creators = [
  {
    image: "/src/assets/images/home-creator-1.jpg",
    name: "John Doe",
    value: "3.767ETH",
  },
  {
    image: "/src/assets/images/home-creator-2.jpg",
    name: "Anika Reham",
    value: "5.252ETH",
  },
  {
    image: "/src/assets/images/home-creator-3.jpg",
    name: "David ALEX",
    value: "2.867ETH",
  },
  {
    image: "/assets/images/home-creator-4.jpg",
    name: "Yasmin Dutt",
    value: "3.842ETH",
  },
  {
    image: "/assets/images/home-creator-5.jpg",
    name: "Lorem Smith",
    value: "3.767ETH",
  },
  {
    image: "/assets/images/home-creator-6.jpg",
    name: "Larry James",
    value: "3.767ETH",
  },
];

export const Creator = () => {
  return (
    <div className="Featured  bg-[#011631] flex flex-col px-6 w-full py-12 lg:px-12 gap-5 ">
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
      <div className="create-people flex flex-col md:flex-row gap-4">
        {creators.map((creator, index) => (
          <div
            key={index}
            className="people flex flex-row justify-center items-center md:w-[40%] lg-w[30%] xl:w-[23%]            bg-[#011e3e] p-10"
          >
            <img
              className="rounded-full border-[#009fed] border-2"
              src={creator.image}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};
