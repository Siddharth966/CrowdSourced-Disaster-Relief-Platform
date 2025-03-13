import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/shared/Table";
import { baseUrl } from "../../constants/env";
import Modal from "../../components/shared/Modal"; // Assuming you have a modal component
import { toast } from "react-toastify";
import { getComplaints } from "../../service/complaintService";

const VolPendingComplaint = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedComplaintId, setSelectedComplaintId] = useState(null);
  const [noncriticalComplaints, setNonCriticalComplaints] = useState([]);

  // Fetch complaints function
  const fetchComplaints = async () => {
    try {
      const pending = await getComplaints(["Pending"]);
      console.log("pending Complaints", pending);
      // Filter non-critical complaints immediately after fetching
      const nonCriticalItems = pending.data.filter(
        (item) => item.severity !== "Critical"
      );
      setNonCriticalComplaints(nonCriticalItems);
    } catch (error) {
      console.error("Error fetching complaints:", error);
    }
  };

  // Fetch complaints when component mounts
  useEffect(() => {
    fetchComplaints();
  }, []);

  // Table Headers
  const headers = ["Severity", "Damage", "Address", "Action"];

  // Table Data
  const data = noncriticalComplaints.map((c) => ({
    Severity: c.severity,
    Damage: c.damageDesc,
    Address: c.address,
  }));

  // Accept Complaint API Call
  const handleAccept = async (complaintId) => {
    try {
      const response = await axios.put(
        `${baseUrl}/complaint/status/${complaintId}`,
        {
          status: "In Progress",
        }
      );

      // Update the complaints list after accepting
      setNonCriticalComplaints((prevComplaints) =>
        prevComplaints.filter((c) => c._id !== complaintId)
      ); // Remove accepted complaint from list

      if (response.status === 200) {
        toast.success("Complaint Accepted Successfully"); // Show success message
        setIsVisible(false); // Close the modal after successful submission

        // Re-fetch complaints after accepting
        fetchComplaints();
      }
    } catch (error) {
      console.error("Error accepting complaint:", error);
      toast.error("Failed to accept complaint."); // Show error message
    }
  };

  // Actions for each row
  const actions = noncriticalComplaints.map((c) => () => (
    <button
      className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-700"
      onClick={() => {
        setSelectedComplaintId(c._id);
        setIsVisible(true);
      }}
    >
      Accept
    </button>
  ));

  return (
    <>
      {/* Confirmation Modal */}
      {isVisible && (
        <Modal
          question="Are you sure you want to accept this complaint?"
          onConfirm={() => {
            handleAccept(selectedComplaintId);
          }}
          onCancel={() => setIsVisible(false)}
        />
      )}

      <div className="p-6">
        <h3 className="header text-2xl font-semibold mb-4">
          Pending Complaints
        </h3>

        {/* Table of Pending Complaints */}
        <Table headers={headers} data={data} actions={actions} />
      </div>
    </>
  );
};

export default VolPendingComplaint;
