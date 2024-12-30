import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row bg-[#011631] w-full px-10 py-10">
      <div className="footer-1 flex flex-col">
        <img src="/src/assets/images/logo.png" alt="" />
        <div className="logo-under">
          <a href="#">
            <Heart size={19} strokeWidth={2} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
