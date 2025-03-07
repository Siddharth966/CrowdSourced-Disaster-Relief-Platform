import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/shared/Table";
import { baseUrl } from "../../constants/env";
import Modal from "../../components/shared/Modal"; // Assuming you have a modal component
import { toast } from "react-toastify";
import { getComplaints } from "../../service/complaintService";

const ErPendingComplaints = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedComplaintId, setSelectedComplaintId] = useState(null);
  const [criticalComplaints, setCriticalComplaints] = useState([]);

  // Fetch complaints function
  const fetchComplaints = async () => {
    try {
      const pending = await getComplaints(["Pending"]);
      console.log("Pending Critical Complaints:", pending);

      // Filter critical complaints
      const criticalItems = pending.data.filter(
        (item) => item.severity === "Critical"
      );

      setCriticalComplaints(criticalItems);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  // Table Headers
  const headers = ["Severity", "Damage", "Address", "Action"];

  // Accept Complaint API Call
  const handleAccept = async (complaintId) => {
    try {
      const response = await axios.put(
        `${baseUrl}/complaint/status/${complaintId}`,
        {
          status: "In Progress",
        }
      );

      if (response.status === 200) {
        toast.success("Complaint Accepted Successfully");
        setIsVisible(false);
        fetchComplaints(); // Refresh the list after accepting
      }
    } catch (error) {
      console.error("Error accepting complaint:", error);
      toast.error("Failed to accept complaint.");
    }
  };

  // Table Data (Including Accept Button)
  const data = criticalComplaints.map((c) => ({
    Severity: c.severity,
    Damage: c.damageDesc,
    Address: c.address,
    Action: (
      <button
        className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-700"
        onClick={() => {
          setSelectedComplaintId(c._id);
          setIsVisible(true);
        }}
      >
        Accept
      </button>
    ),
  }));

  return (
    <>
      {/* Confirmation Modal */}
      {isVisible && (
        <Modal
          question="Are you sure you want to accept this complaint?"
          onConfirm={() => handleAccept(selectedComplaintId)}
          onCancel={() => setIsVisible(false)}
        />
      )}

      <div className="p-6">
        <h3 className="header text-2xl font-semibold mb-4">
          Pending Critical Complaints
        </h3>

        {/* Table of Pending Complaints */}
        <Table headers={headers} data={data} />
      </div>
    </>
  );
};

export default ErPendingComplaints;
