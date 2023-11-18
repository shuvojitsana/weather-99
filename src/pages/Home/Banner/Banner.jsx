import { FaLocationArrow, FaSearch } from "react-icons/fa";

const Banner = () => {
  return (
   
      <div className="bg-gradient-to-r from-[#E0E8F1] to-[#BFCAD6]">
        <div className="">
          <div className="container px-4 border-b-4  py-3 mx-auto flex  items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <h2 className="text-xl font-normal leading-relaxed  mr-4 py-2 whitespace-nowrap  text-black flex justify-center items-center gap-3">
                <FaLocationArrow></FaLocationArrow> Agra, Uttar Pradesh
              </h2>
              <p>27°10'36" N & 78°0'29" E</p>
            </div>
            <div className="flex justify-center items-center  rounded-xl ">
              <input
                className="py-3 p-6 rounded"
                type="search"
                name="search"
                placeholder="Search your city here"
                id=""
              />
              <FaSearch className=""></FaSearch>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default Banner;
