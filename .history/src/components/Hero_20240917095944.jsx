export const Hero = () => {
  return (
    <div className="container hero flex flex-col lg:flex-row w-full justify-center items-center gap-6 xl:px-6 h-screen">
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
          <p className="place w-fit px-4 py-3  bg-[#009fed] rounded-md hover:bg-blue-600 ease-in-out">
            PLACE A BID
          </p>
          <p className="view w-fit px-4 py-3 border-[#009fed] border rounded-md hover:bg-[#009fed] ease-in-out">
            VIEW ARTWORK
          </p>
        </div>
      </div>
      <div className="hero-right lg:w-[48%] px-3 py-6 relative">
        <img
          className=" rounded-lg border-0"
          src="/src/assets/images/home-img-3.jpg"
          alt="img"
        />
        <div className="name flex w-fit flex-row justify-normal items-center gap-3 bg-[#080843] px-6 py-4 absolute bottom-14 left-10 rounded-md">
          <div className="img-wrapper ">
            <img
              className="rounded-full border-[#009fed] border-2"
              src="/src/assets/images/home-creator-1.jpg "
              alt="img"
            />
          </div>
          <div className="nam-lft text-white">
            <h3 className="text-[16px]">Walls color Today</h3>
            <p>
              Created by <span className="text-[#009fed]">Smith</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
