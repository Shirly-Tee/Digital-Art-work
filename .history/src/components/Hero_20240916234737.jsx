export const Hero = () => {
  return (
    <div className="container hero flex flex-col md:flex-row w-full justify-center items-center gap-6 px-6 ">
      <div className="hero-left flex flex-col mb-4 md:w-[48%] gap-4 md:gap-10 pt-8 text-white">
        <h1 className="text-lg text-center md:text-left md:text-semibold">
          Discover <span className="text-[#009fed]">Collect</span> & Sell Rare
          Digital Artwork
        </h1>
        <p className="text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          veniam similique dicta ut porro, fugiat ad eaque sapiente a quod.{" "}
        </p>
        <div className="hero-lft-lt flex flex-row justify-center md:justify-start gap-3">
          <p className="place w-fit px-4 py-3  bg-[#009fed] rounded-md ">
            PLACE A BID
          </p>
          <p className="view w-fit px-4 py-3 border-[#009fed] border rounded-md ">
            VIEW ARTWORK
          </p>
        </div>
      </div>
      <div className="hero-right md:w-[48%]">
        <img src="/src/assets/images/home-img-2.jpg" alt="img" />
      </div>
    </div>
  );
};
