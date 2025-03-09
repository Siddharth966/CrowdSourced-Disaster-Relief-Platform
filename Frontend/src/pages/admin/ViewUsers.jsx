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
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      console.log("response.data", response);
      setUsers(response);
    } catch (err) {
      console.error("Error fetching users:", err);
      toast.error("Failed to load users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const headers = [
    "User Type",
    "Full Name",
    "Email",
    "Gender",
    "Address",
    "Action",
  ];

  const userData = users.map((u) => ({
    "User Type": u.user_type,
    "Full Name": u.fullName,
    Email: u.email,
    Gender: u.gender,
    Address: u.address,
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

  const handleDelete = async (userId) => {
    try {
      const response = await axios.delete(`${baseUrl}/delete-user/${userId}`);
      console.log("response", response);

      if (response.status === 200) {
        toast.success(response.data.message); // Show success message
        setIsVisible(false); // Close the modal after successful deletion
        fetchUsers(); // Refresh user list
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete user.");
    }
  };

  return (
    <AdminLayout>
      {isVisible && (
        <Modal
          question="Are you sure you want to delete this User?"
          onConfirm={() => {
            handleDelete(selectedUser);
          }}
          onCancel={() => setIsVisible(false)}
        />
      )}
      <div className="p-2">
        <Table headers={headers} data={userData} />
      </div>
    </AdminLayout>
  );
};

export default ViewUsers;
