import PropTypes from "prop-types";

const Bookmark = ({ recipe, index, handleCurrentCook }) => {
    const { recipe_name, preparing_time, calories } = recipe;
    
    return (
        <div className="my-3">
           <table>
                <tr>
                    <td>{index+1}</td>
                    <td className="pl-5">{recipe_name}</td>
                    <td className="pl-5" >{preparing_time} min</td>
                    <td className="pl-5 pr-8">{calories} calories</td>
                    <td className="text-end pl-2"><button onClick={()=>handleCurrentCook(recipe)} className="px-4 py-2 rounded-full bg-green-400 hover:bg-green-300">Preparing</button></td>
                </tr>
            </table>
        </div>
    );
};

Bookmark.propTypes = {
    recipe: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleCurrentCook : PropTypes.func.isRequired
    
};

export default Bookmark;