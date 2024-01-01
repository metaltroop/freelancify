import Sidebar from "../../component/Sidebar";
import { Outlet } from "react-router-dom";

const UserDashboard = () => {
  return (
    <>
      <div className="bg-slate-500">
          <div className="flex">
            <Sidebar />
            <div className="flex-grow p-4">
              <Outlet />
            </div>
          </div>
      </div>
    </>
  );
};

export default UserDashboard;
