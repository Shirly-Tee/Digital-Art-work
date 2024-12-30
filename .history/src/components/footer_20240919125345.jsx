import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row my-4 p-[10px,3px,4px,5px]">
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
