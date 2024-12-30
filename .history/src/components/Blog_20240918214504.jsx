import { Minus, MoveRight, MoveRightIcon } from "lucide-react";

const Blog = () => {
  return (
    <div className="aunction bg-[#011631] flex flex-col px-6 w-full py-12 lg:px-12 gap-5">
      <div className="feature text-[#009fed] flex flex-row gap-2 items-center">
        <Minus size={30} strokeWidth={4} />
        <p className="text-start"> Latest Blogs</p>
      </div>
      <div className="live flex flex-row justify-between items-center ">
        <p className="text-white text-[30px] md:text-[40px] font-medium mb-4">
          Read our Blogs
        </p>
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
      <div className="blog flex flex-col lg:flex-row gap-6 justify-center">
        <div className="blog-all flex flex-col lg:w-[32%] bg-[#011e3e] rounded-[20px] p-6 gap-4 text-white">
          <div className=" flex flex-row justify-between items-center text-white gap-2">
            <div className="art-image  relative ">
              <img
                className="p-2 rounded-[20px]"
                src="/src/assets/images/auction-1.jpg"
                alt=""
              />
              <p className="absolute bg-[#1eb1fa] px-4  py-3 bottom-10 left-10 rounded-md text-white font-medium">
                06 : 13 : 53
              </p>
            </div>
            <div className="img-wrapper flex flex-row items-center text-white gap-2 p-1 ">
              <img
                className="rounded-full border-[#009fed] border-2 "
                src="/src/assets/images/blog-1.jpg "
                alt="img"
              />
              <p className="text-[18px]">Larry Jame</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="heart p-3 bg-[#002248] rounded-full items-center">
                <MoveRightIcon size={19} strokeWidth={2} />
              </div>
              <a href="#">18 Likes</a>
            </div>
          </div>
          <p className="text-[20px]">The Cubic Universe Art</p>
          <div className="art-last flex justify-between bg-[#002248] px-4 py-3 rounded-sm">
            <p className="text-[18px]">Current Bid</p>
            <p>0.68 ETH</p>
          </div>
          {/* blog2 */}
        </div>
      </div>
    </div>
  );
};

export default Blog;
