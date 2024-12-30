import { Minus, MoveRight } from "lucide-react";

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
    </div>
  );
};

export default Blog;
