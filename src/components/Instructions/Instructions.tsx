import * as SC from "./InstructionsStyled"

const Instructions:React.FC = () => {
    return (
      <SC.InstructionCon>
        <h3>Instructions</h3>
        <SC.InstructionList>
          <SC.InstructionItem>
            <p>
              <span>Beat the eggs: </span>
              In a bowl, beat the eggs with a pinch of salt and pepper until
              they are well mixed. You can add a tablespoon of water or milk for
              a fluffier texture.
            </p>
          </SC.InstructionItem>
          <SC.InstructionItem>
            <p>
              <span>Heat the pan: </span>
              Heat the pan: Place a non-stick frying pan over medium heat and
              add butter or oil.
            </p>
          </SC.InstructionItem>
          <SC.InstructionItem>
            <p>
              <span>Cook the omelette: </span>
              Cook the omelette: Once the butter is melted and bubbling, pour in
              the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
            </p>
          </SC.InstructionItem>
          <SC.InstructionItem>
            <p>
              <span>Add fillings (optional): </span>
              When the eggs begin to set at the edges but are still slightly
              runny in the middle, sprinkle your chosen fillings over one half
              of the omelette.
            </p>
          </SC.InstructionItem>
          <SC.InstructionItem>
            <p>
              <span>Fold and serve: </span>
              Fold and serve: As the omelette continues to cook, carefully lift
              one edge and fold it over the fillings. Let it cook for another
              minute, then slide it onto a plate.
            </p>
          </SC.InstructionItem>
          <SC.InstructionItem>
            <p>
              <span>Enjoy: </span>
              Serve hot, with additional salt and pepper if needed.
            </p>
          </SC.InstructionItem>
        </SC.InstructionList>
      </SC.InstructionCon>
    );
}
 
export default Instructions;