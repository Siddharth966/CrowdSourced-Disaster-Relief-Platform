import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { getComplaints } from "../../service/complaintService";
import Table from "../../components/shared/Table";
import { MdDeleteOutline } from "react-icons/md";
import  Modal from "../../components/shared/Modal"
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../constants/env";


const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedComplaintId, setSelectedComplaintId] = useState(null);


  const fetchComplaints = async () => {
    try {
      const response = await getComplaints();
      console.log("response.data", response.data);
      setComplaints(response.data);
    } catch (err) {
      console.error("Error fetching complaints:", err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);
  const actions = complaints.map((c) => () => (
    <button
      className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700"
      onClick={() => {
        setSelectedComplaintId(c._id);
        setIsVisible(true);
      }}
    >
      <MdDeleteOutline/>
    </button>
  ));

  const headers = ["Severity", "Damage", "Address","Landmark", "Status", "CreatedOn","Action"];
  const data = complaints.map((c,i) => ({
    Severity: c.severity,
    Damage: c.damageDesc,
    Address: c.address, 
    Landmark:c.landmark,
    Status: c.status,
    CreatedOn: new Date(c.createdAt).toLocaleDateString(),  // Extracts only the date
  }));
  const handleDelete = async (complaintId) => {
    try {
      const response = await axios.delete(
        `${baseUrl}/delete-complaint/${complaintId}`,
        
      );
      console.log('response',response)


      if (response.status === 200) {
        toast.success(response.data.message); // Show success message
        setIsVisible(false); // Close the modal after successful submission
        fetchComplaints();
      }
    } catch (error) {
      console.error("Error deleting complaint:", error);
      toast.error("Failed to delete complaint."); // Show error message
    }
  };
  return (
    <AdminLayout>
         {isVisible && (
        <Modal
          question="Are you sure you want to delete this complaint?"
          onConfirm={() => {
            handleDelete(selectedComplaintId);
          }}s
          onCancel={() => setIsVisible(false)}
        />
      )}
      <div className="p-2">
        <Table headers={headers} data={data}actions={actions} />
      </div>
    </AdminLayout>
  );
};

export default ViewComplaints;
