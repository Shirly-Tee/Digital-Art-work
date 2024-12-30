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
        <a className="hover:bg-[#1eb1fa]" href="#">
          EXPLORE ARTWORK
        </a>
      </div>
    </div>
  );
};

export default Footer;
