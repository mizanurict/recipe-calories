import PropTypes from "prop-types";


const Totals = ({ time,calorie }) => {   
    return (
        <div className="my-4 flex justify-end">
           <table>
                <tr> 
                    <td className=" w-28 pr-6">Total Time = { time} min</td>
                    <td className=" w-32 pr-6">Total Calories = { calorie} calories</td>
                </tr>
            </table>
        </div>
    );
};

Totals.propTypes = {
    time: PropTypes.number.isRequired,
    calorie: PropTypes.number.isRequired
    
};
export default Totals;