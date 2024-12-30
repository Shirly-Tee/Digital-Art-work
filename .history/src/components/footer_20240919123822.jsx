import { Heart } from "lucide-react";

const footer = () => {
  return (
    <div className="footer flex flex-col md:flex-row">
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

export default footer;
