import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { tokenActions } from "../service/tokenDecode";
import { useParams } from 'react-router-dom';


const UserNavbar = ({ fullName, isRegularUser }) => {
  const navigate = useNavigate();
  const {id} = useParams()

  const handleLogout = () => {
    tokenActions.removeToken();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 p-4 shadow-lg flex items-center">
      {/* Logo or Brand Name */}
      <Link className="text-white text-2xl font-bold w-1/3">ReliefConnect</Link>

      {/* Navigation Links */}
      <ul className="flex space-x-12 w-3/5 items-center justify-center">
        <li>
          <Link className="text-white hover:text-blue-200">Home</Link>
        </li>
        <li>
          <Link className="text-white hover:text-blue-200">Request Help</Link>
        </li>
        <li>
          <Link className="text-white hover:text-blue-200">Volunteer</Link>
        </li>
        <li>
          <Link className="text-white hover:text-blue-200">Donate</Link>
        </li>
        {/* Show Add Button Only for Regular Users */}
        {isRegularUser && (
          <li>
            <button
              onClick={() => navigate(`/regular-user/${id}/complaint`)}
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300 cursor-pointer"
            >
              Raise Complaints
            </button>
          </li>
        )}
      </ul>

      {/* User Info & Logout */}
      <div className="w-1/3 flex items-center justify-center space-x-5">
        <span className="text-white font-medium">{`Hi, ${fullName}`}</span>
        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition duration-300"
        > 
          Logout
        </button>
      </div>
    </nav>
  );
};

export default UserNavbar;
