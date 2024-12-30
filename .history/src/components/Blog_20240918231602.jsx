import { Minus, MoveRight, Tally1 } from "lucide-react";

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
        {/* blog1 */}
        <div className="blog-all flex flex-col lg:w-[32%] bg-[#011e3e] rounded-[20px] pb-6 gap-2 text-white">
          <div className="blog-image">
            <img
              className="rounded-[10px]"
              src="/src/assets/images/blog-1.jpg"
              alt=""
            />
          </div>
          <div className="under px-5 py-3 flex flex-col">
            <span className="flex my-3 w-fit items-center">
              <p className=" ">Jan 17,</p>
              <Tally1 className="ml-4" size={20} strokeWidth={1} />
              <p className="ml-0">By Jones</p>
            </span>

            <a className="hover:text-[#009fed] text-[19px]" href="#">
              Honoring Black History Month With Toddler
            </a>
            <p className="text-[14px] my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing eli...
            </p>
            <div className="read flex flex-col">
              <a
                className="text-[#009fed] hover:text-[white] flex  items-center gap-2"
                href="#"
              >
                READ MORE
                <MoveRight size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        {/* blg2 */}
        <div className="blog-all flex flex-col lg:w-[32%] bg-[#011e3e] rounded-[20px] pb-6 gap-2 text-white">
          <div className="blog-image">
            <img
              className="rounded-[10px]"
              src="/src/assets/images/blog-2.jpg"
              alt=""
            />
          </div>
          <div className="under px-5 py-3 flex flex-col">
            <span className="flex my-3 w-fit items-center">
              <p className=" ">Jan 17,</p>
              <Tally1 className="ml-4" size={20} strokeWidth={1} />
              <p className="ml-0">By Jones</p>
            </span>
            <a className="hover:text-[#009fed] text-[19px]" href="#">
              Honoring Black History Month With Toddler
            </a>
            <p className="text-[14px] my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing eli...
            </p>
            <div className="read flex flex-col">
              <a
                className="text-[#009fed] hover:text-[white] flex  items-center gap-2"
                href="#"
              >
                READ MORE
                <MoveRight size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        {/* blog3 */}
        <div className="blog-all flex flex-col lg:w-[32%] bg-[#011e3e] rounded-[20px] pb-6 gap-2 text-white">
          <div className="blog-image">
            <img
              className="rounded-[10px]"
              src="/src/assets/images/blog-3.jpg"
              alt=""
            />
          </div>
          <div className="under px-5 py-3 flex flex-col">
            <span className="flex my-3 w-fit items-center">
              <p className=" ">Jan 17,</p>
              <Tally1 className="ml-4" size={20} strokeWidth={1} />
              <p className="ml-0">By Jones</p>
            </span>

            <a className="hover:text-[#009fed] text-[19px]" href="#">
              Honoring Black History Month With Toddler
            </a>
            <p className="text-[14px] my-3">
              Lorem ipsum dolor sit amet consectetur adipisicing eli...
            </p>
            <div className="read flex flex-col">
              <a
                className="text-[#009fed] hover:text-[white] flex  items-center gap-2"
                href="#"
              >
                READ MORE
                <MoveRight size={20} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
        {/* blog3 end */}
      </div>
    </div>
  );
};

export default Blog;
