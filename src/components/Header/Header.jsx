import { RxAvatar } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    return (
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row items-center justify-between py-4">
            <div><button className="text-2xl font-lexend font-bold hover:bg-green-100 hover:rounded-3xl hover:p-3 ">Recipe Calories</button></div>
            <div className="flex gap-5 font-fira opacity-70 "> <a className=" hover:bg-green-100 hover:rounded-2xl hover:p-3" href="">Home</a><a className=" hover:bg-green-100 hover:rounded-2xl hover:p-3" href="">Recipes</a><a className=" hover:bg-green-100 hover:rounded-2xl hover:p-3" href="">About</a><a className=" hover:bg-green-100 hover:rounded-2xl hover:p-3" href="">Search</a>
            </div>
            <div className="flex gap-1 items-center">
                <div className="flex items-center"><input className="relative py-1 px-5 rounded-full bg-gray-200 " type="text" name="" placeholder="  Search" id="" />
                <p className="absolute ml-2  opacity-50"><IoIosSearch /></p></div>
                
                <p className="bg-green-400 rounded-full w-8 h-8 flex items-center justify-center "><a className="text-2xl opacity-60" href=""><RxAvatar /></a></p>
            </div>
        </div>
    );
};

export default Header;