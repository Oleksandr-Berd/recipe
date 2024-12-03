import * as SC from "./AppStyled"
import Hero from "./components/Hero/Hero";
import Preparation from "./components/Preparation/Preparation";
function App() {
  return (
    <SC.AppCustom>
     <Hero/>
     <Preparation/>
    </SC.AppCustom>
  );
}

export default App;
