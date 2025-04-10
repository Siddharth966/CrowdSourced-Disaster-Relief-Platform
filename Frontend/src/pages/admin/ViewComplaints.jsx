import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { getComplaints } from "../../service/complaintService";
import Table from "../../components/shared/Table";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../components/shared/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../constants/env";

const ViewComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedComplaintId, setSelectedComplaintId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch complaints
  const fetchComplaints = async () => {
    try {
      setIsLoading(true);
      const response = await getComplaints();
      setComplaints(response.data || []);
    } catch (err) {
      toast.error("Failed to load complaints");
      setComplaints([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  useEffect(() => {
    console.log(complaints); // Logs updated complaints
  }, [complaints]);

  // Optimized delete function (updates state directly)
  const handleDelete = async () => {
    if (!selectedComplaintId) return;
    try {
      const response = await axios.delete(`${baseUrl}/remove-complaints/${selectedComplaintId}`);
      if (response.status === 200) {
        toast.success(response.data.message);
        
        // Update state without refetching
        setComplaints((prev) => prev.filter(c => c._id !== selectedComplaintId));
      }
    } catch (error) {
      console.error("Error deleting complaint:", error);
      toast.error(error.response?.data?.message || "Failed to delete complaint");
    } finally {
      setIsVisible(false);
      setSelectedComplaintId(null);
    }
  };

  const headers = ["Severity", "Damage", "Address", "Landmark", "Status", "CreatedOn", "Action"];
  const data = complaints.map((c) => ({
    Severity: c.severity || "N/A",
    Damage: c.damageDesc || "N/A",
    Address: c.address || "N/A",
    Landmark: c.landmark || "N/A",
    Status: c.status || "N/A",
    CreatedOn: c.createdAt ? new Date(c.createdAt).toLocaleDateString() : "N/A",
    Action: (
      <button
        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700"
        onClick={() => {
          setSelectedComplaintId(c._id);
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
          question="Are you sure you want to delete this complaint?"
          onConfirm={handleDelete}
          onCancel={() => {
            setIsVisible(false);
            setSelectedComplaintId(null);
          }}
        />
      )}
      <div className="p-2">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
          </div>
        ) : complaints.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No complaints found</p>
          </div>
        ) : (
          <Table headers={headers} data={data} />
        )}
      </div>
    </AdminLayout>
  );
};

export default ViewComplaints;
