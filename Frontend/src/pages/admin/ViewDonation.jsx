import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import Table from "../../components/shared/Table";
import { MdDeleteOutline } from "react-icons/md";
import Modal from "../../components/shared/Modal";
import axios from "axios";
import { toast } from "react-toastify";
import { baseUrl } from "../../constants/env";

const ViewDonation = () => {
  const [donation, setDonation] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDonationId, setSelectedDonationId] = useState(null);

  const fetchDonation= async () => {
    try {
      const response = await axios.get(`${baseUrl}/get-donation`);
      console.log('response',response);
      
      setDonation (response.data);
    } catch (err) {
      console.error("Error fetching contacts:", err);
    }
  };
  useEffect(() => {
  
    fetchDonation();
  }, []);

  // const handleDelete = async () => {
  //   if (!selectedDonationId) return;
  //   try {
  //     const response = await axios.delete(`${baseUrl}/delete-donation/${selectedDonationId}`);

  //     if (response.status === 200) {
  //       toast.success(response.data.message);
  //       fetchDonation();

  //     }
  //   } catch (error) {
  //     console.error("Error deleting Donation Items:", error);
  //     toast.error("Failed to delete Donation Items.");
  //   } finally {
  //     setIsVisible(false);
  //     setSelectedDonationId(null);
  //   }
  // };

  const headers = ["Donor_Name", "Address", "Category", "Phone","Donation On","Action"];

  const data = donation.map((c) => ({
    Donor_Name: c.donorName,
    Address: c.address,
    Category: c.donationCategory,
    Phone: c.phoneNumber,
    "Donation On": new Date(c.createdAt).toLocaleDateString(),
    // Action: (
    //   <button
    //     className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-700"
    //     onClick={() => {
    //       setSelectedDonationId(c._id);
    //       setIsVisible(true);
    //     }}
    //   >
    //     <MdDeleteOutline />
    //   </button>
    // ),
  }));

  return (
    <AdminLayout>
      {isVisible && (
        <Modal
          question="Are you sure you want to delete this Donation Items?"
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

export default ViewDonation;
