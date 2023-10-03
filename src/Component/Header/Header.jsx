import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Dashboard from "./dashboartd/Dashboard";

 

const Header = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <Dashboard></Dashboard>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;