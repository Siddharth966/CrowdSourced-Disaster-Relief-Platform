import { Outlet } from "react-router-dom"; // Import Outlet for nested routes
import { RiNumbersLine } from "react-icons/ri";
import { IoPersonAddOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";
import UserNavbar from "../components/UserNavbar";

const AdminLayout = ({ children }) => {
  const menuItems = [
    {
      label: "View Complaints",
      icon: <IoPersonAddOutline />,
      route: `/view-complaints`,
    },
    {
      label: "View Users",
      icon: <IoPersonOutline />,
      route: `/view-users`,
    },
    {
      label: "View ContactUs",
      icon: <RiNumbersLine />,
      route: `/view-contactus`,
    },
    // {
    //   label: "User Info",
    //   icon: <IoIosInformationCircleOutline />,
    //   route: `/admin/user-info`,
    // },
  ];

  return (
    <>
      <UserNavbar user_type="admin" navbarItem={menuItems} />
      {children || <Outlet />}
    </>
  );
};

export default AdminLayout;