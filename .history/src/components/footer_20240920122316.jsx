import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="footer flex flex-col bg-[#011631] w-full px-10 py-10  md:flex-row flex-wrap">
      <div className="footer-1 flex flex-col gap-y-5 text-white w-full md:basis-[45%] lg:basis-[24%]">
        <img src="/src/assets/images/logo.png" alt="" />
        <div className="logo-under flex flex-row gap-x-3">
          <div className="h-[40px] w-[40px] rounded-full bg-[#011e3e] flex items-center justify-center">
            <a href="#">
              <FacebookIcon size={15} strokeWidth={2} />
            </a>
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-[#011e3e] flex items-center justify-center">
            <a href="#">
              <TwitterIcon size={15} strokeWidth={2} />
            </a>
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-[#011e3e] flex items-center justify-center">
            <a href="#">
              <InstagramIcon size={15} strokeWidth={2} />
            </a>
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-[#011e3e] flex items-center justify-center">
            <a href="#">
              <LinkedinIcon size={15} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-2 flex flex-col gap-y-5 text-white w-full md:basis-[45%] lg:basis-[24%]">
        <p className="text-[30px] font-bold">Explore</p>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          EXPLORE ARTWORK
        </a>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          SINGLE ARTWORK
        </a>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          EXPLORE ARTWORK
        </a>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          SINGLE ARTWORK
        </a>
      </div>
      <div className="footer-3 flex flex-col gap-y-5 text-white w-full md:basis-[45%] lg:basis-[24%]">
        <p className="text-[30px] font-bold">Navigation</p>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          HOME
        </a>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          EXPLORE
        </a>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          PAGES
        </a>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          ACTIVITY
        </a>
        <a className="hover:text-[#1eb1fa] text-[14px]" href="#">
          BLOG
        </a>
      </div>
      <div className="footer-4 flex flex-col gap-y-5 text-white w-full md:basis-[45%] lg:basis-[24%]">
        <p className="text-[30px] font-bold">Latest Update</p>
        <form className="bg-[#011e3e] py-4 px-4 w-fit" action="#">
          <input
            className="bg-transparent focus:outline-none focus:border-none"
            type="email"
            placeholder="Your Email Address"
          />
        </form>
        <p className="sub w-fit px-8 py-3  bg-[#009fed] rounded-md hover:bg-blue-600 ease-in-out text-[16px]">
          Subscribe
        </p>
      </div>
    </div>
  );
};

export default Footer;
