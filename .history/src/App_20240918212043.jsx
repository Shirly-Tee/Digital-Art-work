import Blog from "./components/Blog";
import Collection from "./components/Collection";
import { Creator } from "./components/Creator";
import { Hero } from "./components/Hero";
import Sell from "./components/Sell";
import { Aunction } from "./components/aunction";

const App = () => {
  return (
    <div className=" flex flex-col w-full justify-center items-center bg-[#080843]">
      <Hero />
      <Aunction />
      <Creator />
      <Collection />
      <Sell />
      <Blog />
    </div>
  );
};

export default App;
