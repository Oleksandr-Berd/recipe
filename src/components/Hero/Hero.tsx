import * as SC from "./HeroStyled"

import omelette from "../../assets/images/image-omelette.jpeg"

const Hero:React.FC = () => {
    return (
      <SC.HeroCustom>
        <SC.ImageCon>
          <img src={omelette} alt="omelette" />
        </SC.ImageCon>
        <SC.Content>
          <h3>Simple Omelette Recipe</h3>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </SC.Content>
      </SC.HeroCustom>
    );
}
 
export default Hero;