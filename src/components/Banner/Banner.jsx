
const Banner = () => {
    return (
        <div className=" bg rounded-2xl space-y-7">
            <h1 className="text-white text-4xl font-semibold leading-normal font-lexend text-center pt-36 lg:px-44 ">Discover an exceptional cooking 
                class tailored for you!</h1>
            <p className="text-white lg:px-40 text-center font-fira opacity-80">This class stands out because you start with a visit to the local market where you’ll learn about local ingredients for the meal you’ll be cooking. Your chef will share cooking tips throughout the experience.</p>
            <div className=" flex gap-6 font-semibold font-fira justify-center">
                <button className=" bg-green-600 px-5 py-3 rounded-full hover:bg-green-300">Explore Now</button>
                <button  className="px-5 py-3 rounded-full border text-white hover:bg-green-300 hover:text-black">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;