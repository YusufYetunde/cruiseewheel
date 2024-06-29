import Slider from "./components/Slider";
import Explore from "./components/Explore";
import SubFooter from "./components/SubFooter";
import Objective from "./components/Objective";


export default function Home() {
  return (
    <div>
      <Slider/>
      <div className="relative">
        <Explore/>
        <SubFooter/>
        <Objective/>
      </div>
    </div>
  );
}
