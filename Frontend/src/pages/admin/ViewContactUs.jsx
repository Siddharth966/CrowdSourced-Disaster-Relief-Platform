import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { getContact } from "../../service/contactService";
import Table from "../../components/shared/Table";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../components/shared/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../constants/env";

const ViewContactUs = () => {
  const [contacts, setContacts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch contacts
  const fetchContacts = async () => {
    try {
      setIsLoading(true);
      const response = await getContact();
      setContacts(response.data || []);
    } catch (err) {
      console.error("Error fetching contacts:", err);
      toast.error("Failed to load contacts");
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Optimized Delete Function
  const handleDelete = async () => {
    if (!selectedContactId) return;

    try {
        console.log("Attempting to delete contact with ID:", selectedContactId);

        const apiUrl = `${baseUrl}/delete-contact/${selectedContactId}`;
        console.log("API URL being called:", apiUrl); // Debugging line

        const response = await axios.delete(apiUrl);

        console.log("Delete API response:", response);

        if (response.status === 200) {
            toast.success(response.data.message || "Deleted successfully");

            // Remove from state instead of re-fetching
            setContacts((prevContacts) =>
                prevContacts.filter((contact) => contact._id !== selectedContactId)
            );
        } else {
            toast.error("Failed to delete contact");
        }
    } catch (error) {
        console.error("Error deleting contact:", error);
        toast.error(error.response?.data?.message || "Failed to delete contact");
    } finally {
        setIsVisible(false);
        setSelectedContactId(null);
    }
};


  const headers = ["Name", "Email", "Subject", "Message", "Created On", "Action"];
  const data = contacts.map((c) => ({
    Name: c.name || "N/A",
    Email: c.email || "N/A",
    Subject: c.subject || "N/A",
    Message: c.message || "N/A",
    "Created On": c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "N/A",
    Action: (
      <button
        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700"
        onClick={() => {
          setSelectedContactId(c._id);
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
          question="Are you sure you want to delete this contact?"
          onConfirm={handleDelete}
          onCancel={() => {
            setIsVisible(false);
            setSelectedContactId(null);
          }}
        />
      )}
      <div className="p-2">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : contacts.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No contacts found</p>
          </div>
        ) : (
          <Table headers={headers} data={data} />
        )}
      </div>
    </AdminLayout>
  );
};

export default ViewContactUs;
