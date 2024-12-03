import * as SC from "./AppStyled"
import Hero from "./components/Hero/Hero";
import Ingredients from "./components/Ingredients/Ingredients";
import Preparation from "./components/Preparation/Preparation";
function App() {
  return (
    <SC.AppCustom>
     <Hero/>
     <Preparation/>
     <Ingredients/>
    </SC.AppCustom>
  );
}

export default App;
