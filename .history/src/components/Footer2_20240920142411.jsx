import { Tally1 } from "lucide-react";

const Footer2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="left flex flex-row">
        <p>Crypto all Right Reserved.Designed by</p>
        <a href="#">TemplateCoder.com</a>
      </div>
      <div className="right">
        <p>PRIVACY POLICY</p>
        <Tally1 className="ml-4" size={20} strokeWidth={1} />
      </div>
    </div>
  );
};

export default Footer2;
