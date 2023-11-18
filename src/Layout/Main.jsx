import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber/Navber";


const Main = () => {
      return (
            <div>
                  <Navber></Navber>
                 <Outlet></Outlet> 
            </div>
      );
};

export default Main;