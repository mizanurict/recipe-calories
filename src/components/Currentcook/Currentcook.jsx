import PropTypes from "prop-types";

const Currentcook = ({currentCookingRecipe,index}) => {
    const { recipe_name, preparing_time, calories } = currentCookingRecipe;
    
    return (
        <div className="my-3">
           <table>
                <tr> 
                    <td className="pl-5">{index+1}</td>
                    <td className="pl-5 w-36">{recipe_name}</td>
                    <td className="pl-5" >{preparing_time} min</td>
                    <td className="pl-10">{calories} calories</td>
                </tr>
            </table>
        </div>
    );
};

Currentcook.propTypes = {
    currentCookingRecipe: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
   
    
};

export default Currentcook;