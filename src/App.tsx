import * as SC from "./AppStyled"
import Hero from "./components/Hero/Hero";
import Ingredients from "./components/Ingredients/Ingredients";
import Instructions from "./components/Instructions/Instructions";
import Nutrition from "./components/Nutrition/Nutrition";
import Preparation from "./components/Preparation/Preparation";
function App() {
  return (
    <SC.AppCustom>
     <Hero/>
     <Preparation/>
     <Ingredients/>
     <Instructions/>
     <Nutrition/>
    </SC.AppCustom>
  );
}

export default App;
