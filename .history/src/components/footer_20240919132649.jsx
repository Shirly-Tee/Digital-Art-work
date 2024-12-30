import { FacebookIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row bg-[#011631] w-full px-10 py-10">
      <div className="footer-1 flex flex-col gap-2 text-white">
        <img src="/src/assets/images/logo.png" alt="" />
        <div className="logo-under flex flex-row">
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
              <FacebookIcon size={15} strokeWidth={2} />
            </a>
          </div>
          <div className="h-[40px] w-[40px] rounded-full bg-[#011e3e] flex items-center justify-center">
            <a href="#">
              <FacebookIcon size={15} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
