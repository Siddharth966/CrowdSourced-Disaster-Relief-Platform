import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { getUsers } from "../../service/userService";
import Table from "../../components/shared/Table";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../components/shared/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../constants/env";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await getUsers();
      if (response && response.data) {
        setUsers(response.data);
      } else {
        console.error("Invalid response format:", response);
        toast.error("Invalid data format received");
        setUsers([]);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      toast.error(err.response?.data?.message || "Failed to load users");
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${baseUrl}/delete-user/${userId}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        setIsVisible(false);
        fetchUsers();
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error(error.response?.data?.message || "Failed to delete user");
    }
  };

  const headers = [
    "User Type",
    "Full Name",
    "Email",
    "Gender",
    "Address",
    "Action",
  ];

  const data = users.map((u) => ({
    "User Type": u.user_type || "N/A",
    "Full Name": u.fullName || "N/A",
    Email: u.email || "N/A",
    Gender: u.gender || "N/A",
    Address: u.address || "N/A",
    Action: (
      <button
        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700"
        onClick={() => {
          setSelectedUser(u._id);
          setIsVisible(true);
        }}
      >
        <MdDeleteOutline />
      </button>
    ),
  }));

  return (
    <AdminLayout>
      {isVisible && (
        <Modal
          question="Are you sure you want to delete this User?"
          onConfirm={() => handleDelete(selectedUser)}
          onCancel={() => setIsVisible(false)}
        />
      )}
      <div className="p-2">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : users.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No users found</p>
          </div>
        ) : (
          <Table headers={headers} data={data} />
        )}
      </div>
    </AdminLayout>
  );
};

export default ViewUsers;
