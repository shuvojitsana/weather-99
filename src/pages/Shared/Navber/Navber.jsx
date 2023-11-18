
import { FaRedo, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navber = () => {
     
      return (
            <div>
            <nav className=" relative flex flex-wrap items-center justify-between px-2 py-4 bg-gradient-to-r from-[#464646] to-[#1D2540] mb-3">
              <div className="container px-4 mx-auto flex  items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">

                
                       
                  <Link
                    className="text-xl font-bold leading-relaxed flex justify-center items-center gap-3 mr-4 py-2 whitespace-nowrap uppercase text-white"
                    to="/">  <FaSun></FaSun>
                    Weather 99
                  </Link>
                </div>
                <div
                  className=""
                  >
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <h2 className="text-xl font-normal leading-relaxed  mr-4 py-2 whitespace-nowrap  text-white md:flex md:justify-center md:items-center gap-3"><FaRedo ></FaRedo> Refresh</h2>
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
      );
};

export default Navber;