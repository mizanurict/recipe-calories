import PropTypes from "prop-types";
import { IoMdTime } from "react-icons/io";
import { AiOutlineFire } from "react-icons/ai";


const Cart = ({ recipe,handleCook }) => {
    const {recipe_name,recipe_image,short_description,preparing_time,calories,ingredients } = recipe;
    
    return (
        <div className="border rounded-xl">
            <div className="p-4 space-y-3 shadow-xl rounded-xl h-full">
                <img className="rounded-xl w-full h-80 object-cover " src={recipe_image} alt="" />
                <h1 className="font-semibold text-xl font-lexend ">{recipe_name}</h1>
                <p className=" opacity-80 font-fira  ">{short_description}</p>
                <hr />
                <h2 className="font-semibold text-xl font-lexend ">Ingredients: {ingredients.length}</h2>
                
                {ingredients.map((arr,idx)=><li key={idx}>{arr}</li>)}                    
               
                <hr />
                <div className="flex justify-between">
                    <div className="flex items-center gap-1"> <IoMdTime /> <span>{preparing_time} min</span></div>
                    <div className="flex items-center gap-1"> <AiOutlineFire /> <span>{calories}</span> calories</div>
                </div>
                <button onClick={()=>handleCook(recipe)} className=" bg-green-400 px-4 py-3 rounded-full hover:bg-green-300 ">Want to Cook</button>
            </div>
           
        </div>
    );
};
Cart.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCook: PropTypes.func.isRequired
    
};
export default Cart;