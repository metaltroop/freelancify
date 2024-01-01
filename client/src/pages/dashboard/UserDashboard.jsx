import Sidebar from "../../component/Sidebar"
import {Outlet } from "react-router-dom"

const UserDashboard = () => {
  return (
   
   <>
        <Sidebar/>
        <Outlet/>
   </>
  )
}

export default UserDashboard