export const Hero = () => {
  return (
    <div className="hero flex flex-col md:flex-row w-full justify-center items-center gap-6 px-6 ">
      <div className="hero-left flex flex-col mb-4 md:w-[48%] gap-4 font-[10px] md:font-bold sm:mx-10">
        <h1>
          Discover <span>Collect</span> & Sell Rare Digital Artwork
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          veniam similique dicta ut porro, fugiat ad eaque sapiente a quod.{" "}
        </p>
        <div className="hero-lft-lt flex flex-row">
          <p className="place px-4 py-3 bg-black">PLACE A BID</p>
          <p className="view bg-slate-300">VIEW ARTWORK</p>
        </div>
      </div>
      <div className="hero-right md:w-[48%]">
        <img src="/src/assets/images/home-img-2.jpg" alt="img" />
      </div>
    </div>
  );
};
