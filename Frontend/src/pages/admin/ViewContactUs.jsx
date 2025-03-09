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

  const fetchContacts = async () => {
    try {
      const response = await getContact();
      console.log('response',response);
      
      setContacts(response.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };
  useEffect(() => {
  
    fetchContacts();
  }, []);

  const handleDelete = async () => {
    if (!selectedContactId) return;
    try {
      const response = await axios.delete(`${baseUrl}/delete-contact/${selectedContactId}`);

      if (response.status === 200) {
        toast.success(response.data.message);
        fetchContacts();

      }
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Failed to delete contact.");
    } finally {
      setIsVisible(false);
      setSelectedContactId(null);
    }
  };

  const headers = ["Name", "Email", "Subject", "Message", "Created On", "Action"];

  const data = contacts.map((c) => ({
    Name: c.name,
    Email: c.email,
    Subject: c.subject,
    Message: c.message,
    "Created On": new Date(c.createdAt).toLocaleDateString(),
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
          onCancel={() => setIsVisible(false)}
        />
      )}
      <div className="p-2">
        <Table headers={headers} data={data} />
      </div>
    </AdminLayout>
  );
};

export default ViewContactUs;
