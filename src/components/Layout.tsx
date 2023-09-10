import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import { Outlet } from "react-router-dom";

interface Props {}

const Layout = ({}: Props) => {
  return (
    <div className="h-screen flex flex-col justify-between items-center font-sans">
      {/* <Header /> */}
      <div className="w-full h-full">
        <Outlet />
      </div>
      {/* <BottomNavigation /> */}
    </div>
  );
};

export default Layout;
