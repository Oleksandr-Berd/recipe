import * as SC from "./IngredientsStyled"

const Ingredients:React.FC = () => {
  return (
    <SC.IngredientsCon>
      <h3>Ingredients</h3>
      <SC.IngredientsList>
        <SC.IngredientItem>
          <p>2-3 large eggs</p>
        </SC.IngredientItem>
        <SC.IngredientItem>
          <p>Salt, to taste</p>
        </SC.IngredientItem>
        <SC.IngredientItem>
          <p>Pepper, to taste</p>
        </SC.IngredientItem>
        <SC.IngredientItem>
          <p>1 tablespoon of butter or oil</p>
        </SC.IngredientItem>
        <SC.IngredientItem>
          <p>
            Optional fillings: cheese, diced vegetables, cooked meats, herbs
          </p>
        </SC.IngredientItem>
      </SC.IngredientsList>
    </SC.IngredientsCon>
  );
};
 
export default Ingredients;