/** @format */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";
import Bookmark from "../Bookmark/Bookmark";
import Cart from "../Cart/Cart";
import Currentcook from "../Currentcook/Currentcook";
import Totals from "../Totals/Totals";

const Cards = () => {
  const [recipes, setRecipes] = useState([]);
  const [singleRecipe, setSingleRecipe] = useState([]);
    const [currentCooking, setCurrentCooking] = useState([]);
    const [time, setTime] = useState(0);
    const [calorie, setCalorie] = useState(0);

  useEffect(() => {
    fetch("cards.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleCook = (recipe) => {
    const isExist = singleRecipe.find((pd) => pd.recipe_id === recipe.recipe_id);
    if (!isExist) {
      setSingleRecipe([...singleRecipe, recipe]);
    } else {
        toast("already added !!!");
    }
  };

  const handleCurrentCook = (recipe) => {
    const addCurrentCook = singleRecipe.filter((currentCook) => currentCook.recipe_id !== recipe.recipe_id);
    setSingleRecipe(addCurrentCook);
      setCurrentCooking([...currentCooking, recipe]);
      setTime(time + recipe.preparing_time);
      setCalorie(calorie+ recipe.calories);
    };
    
    

  return (
      <div>
          <ToastContainer />
      <div className=" space-y-4 mb-8">
        <h1 className="font-lexend text-3xl font-semibold text-center ">Our Recipes</h1>
        <p className="text-center lg:px-40 ">
          It is meant to include the technical aspects of a dish while also teaching the artistic combination of flavor and texture. A recipe
          communicates procedures the chef uses to make his creations.
        </p>
      </div>
      <div className="flex items-start gap-2 flex-col lg:flex-row">
        <div className="lg:w-3/5 mx-auto grid lg:grid-cols-2 gap-4">
          {recipes.map((recipe, idx) => (
            <Cart key={idx} recipe={recipe} handleCook={handleCook}></Cart>
          ))}
        </div>
        <div className=" lg:w-2/5 mx-auto ">
          <div className=" rounded-lg border space-y-3 p-4 shadow-lg">
            <h1 className="text-center font-semibold text-xl font-lexend">Want to cook: {singleRecipe.length}</h1>
            <hr className="mx-16" />
            <div className="flex justify-around pr-28 items-center font-semibold opacity-80">
              <h1>Name</h1>
              <h1>Time</h1>
              <h1>Calories</h1>
            </div>
            <div className=" bg-slate-100 rounded-md">
              {singleRecipe.map((recipe, idx) => (
                <Bookmark recipe={recipe} key={idx} index={idx} handleCurrentCook={handleCurrentCook}></Bookmark>
              ))}
            </div>
            {/* currently Cooking  */}
            <div className=" space-y-3 ">
              <h1 className="text-center font-semibold text-xl font-lexend">Currently Cooking: {currentCooking.length}</h1>
              <hr className="mx-16" />
              <div className="flex justify-around px-8 items-center font-semibold opacity-80">
                <h1>Name</h1>
                <h1>Time</h1>
                <h1>Calories</h1>
              </div>
              <div className=" bg-slate-100 rounded-md">
                {currentCooking.map((currentCookingRecipe, idx) => (
                  <Currentcook key={idx} index={idx} currentCookingRecipe={currentCookingRecipe}></Currentcook>
                ))}
                          </div>
                          <div>
                              <Totals
                                  time={ time }
                                  calorie={calorie}
                              ></Totals>
                              
                          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
