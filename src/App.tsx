import * as SC from "./AppStyled"
import Hero from "./components/Hero/Hero";
import Ingredients from "./components/Ingredients/Ingredients";
import Instructions from "./components/Instructions/Instructions";
import Preparation from "./components/Preparation/Preparation";
function App() {
  return (
    <SC.AppCustom>
     <Hero/>
     <Preparation/>
     <Ingredients/>
     <Instructions/>
    </SC.AppCustom>
  );
}

export default App;
