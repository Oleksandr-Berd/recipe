import * as SC from "./PreparationStyled"

const Preparation:React.FC = () => {
    return (
      <SC.PreparationCustom>
        <h3>Preparation time</h3>

        <SC.PreparationList>
          <SC.PreparationItem>
            <p>
              <span>Total: </span> Approximately 10 minutes
            </p>
          </SC.PreparationItem>
          <SC.PreparationItem>
            {" "}
            <p>
              <span>Preparation: </span> 5 minutes
            </p>
          </SC.PreparationItem>
          <SC.PreparationItem>
            {" "}
            <p>
              <span>Cooking: </span> 5 minutes
            </p>
          </SC.PreparationItem>
        </SC.PreparationList>
      </SC.PreparationCustom>
    );
}
 
export default Preparation;