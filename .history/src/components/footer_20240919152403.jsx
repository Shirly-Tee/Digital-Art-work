import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row bg-[#011631] w-full px-10 py-10 justify-between">
      <div className="footer-1 flex flex-col gap-y-5 text-white w-full md:basis-[45%] lg:basis-[33%] xl:basis-[24%] ">
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
      <div className="footer-2 flex flex-col gap-y-5 text-white w-full md:basis-[45%] lg:basis-[33%] xl:basis-[24%]">
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
      <div className="footer-3 flex flex-col gap-y-5 text-white w-full md:basis-[45%] lg:basis-[33%] xl:basis-[24%]">
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
      <div className="FOOTER-4 footer-1 flex flex-col gap-y-5 text-white w-full md:basis-[45%] lg:basis-[33%] xl:basis-[24%] ">
        <p className="text-[30px] font-bold">Latest Update</p>
        <form className="bg-[#011e3e] py-4" action="#">
          <input
            className="bg-transparent"
            type="email"
            placeholder="Your Email Address"
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
