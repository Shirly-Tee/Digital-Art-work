export const Hero = () => {
  return (
    <div className="container hero flex flex-col lg:flex-row w-full justify-center items-center gap-6 xl:px-6 ">
      <div className="hero-left flex flex-col mb-4 lg:w-[48%] gap-4 md:gap-10 pt-8 text-white">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl text-center lg:text-left md:text-semibold">
          Discover <span className="text-[#009fed]">Collect</span> & Sell Rare
          Digital Artwork
        </h1>
        <p className="text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          veniam similique dicta ut porro, fugiat ad eaque sapiente a quod.{" "}
        </p>
        <div className="hero-lft-lt flex flex-row justify-center lg:justify-start gap-3">
          <p className="place w-fit px-4 py-3  bg-[#009fed] rounded-md hover:bg-blue-600">
            PLACE A BID
          </p>
          <p className="view w-fit px-4 py-3 border-[#009fed] border rounded-md hover:bg-[#009fed]">
            VIEW ARTWORK
          </p>
        </div>
      </div>
      <div className="hero-right lg:w-[48%] px-3 py-6 ">
        <img
          className=" rounded-lg border-0"
          src="/src/assets/images/home-img-3.jpg"
          alt="img"
        />
      </div>
    </div>
  );
};
