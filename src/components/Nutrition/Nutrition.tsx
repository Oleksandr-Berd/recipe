import * as SC from "./NutritionStyled"
const Nutrition = () => {
    return (
      <SC.NutritionCon>
        <SC.NutritionTitle>Nutrition</SC.NutritionTitle>
        <p>
          The table below shows nutritional values per serving without the
          additional fillings.
        </p>
        <SC.NutritionListCon>
          <ul>
            <li>Calories</li>
            <li>Carbs</li>
            <li>Protein</li>
            <li>Fat</li>
          </ul>
          <ul>
            <li>277kcal</li>
            <li>0g</li>
            <li>20g</li>
            <li>22g</li>
          </ul>
        </SC.NutritionListCon>
      </SC.NutritionCon>
    );
}
 
export default Nutrition;