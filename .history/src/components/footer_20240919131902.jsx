import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row bg-[#011631] w-full px-10 py-10">
      <div className="footer-1 flex flex-col gap-2 text-white">
        <img src="/src/assets/images/logo.png" alt="" />
        <div className="logo-under">
          <div className="h-[30px] w-[30px] rounded-full bg-[#2a79cc] items-center justify-center">
            <a href="#">
              <Heart size={19} strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
