export const Header = () => {
  return (
    <div className="hero flex flex-col md:flex-row w-full justify-center items-center ">
      <div className="hero-left flex flex-col mb-4 w-1/2">
        <h1>
          Discover <span>Collect</span>& Sell Rare Digital Artwork
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          veniam similique dicta ut porro, fugiat ad eaque sapiente a quod.{" "}
        </p>
        <div className="hero-lft-lt">
          <p className="place px-4 py-3 bg-black">PLACE A BID</p>
          <p className="view">VIEW ARTWORK</p>
        </div>
      </div>
      <div className="hero-right w-1/2">
        <img src="/src/assets/images/home-img-2.jpg" alt="img" />
      </div>
    </div>
  );
};
