import React, { useEffect, useState } from "react";
import { getComplaints } from "../../service/complaintService";
import UserNavbar from "../../components/UserNavbar";
import { getDetails } from "../../service/userService";
import { useParams } from "react-router-dom";
import { tokenActions } from "../../service/tokenDecode";
import ComplaintCard from "../../components/Complaints/ComplaintCard";

const AllComplaint = () => {
  const [details, setDetails] = useState(null);
  const [complaints, setComplaints] = useState(null);
  const { id } = useParams();
  const token = localStorage.getItem("token");
  console.log("complaints", complaints);

  useEffect(() => {
    const id = tokenActions.extractItems(token).id;
    console.log("id", id);
    const fetchDetails = async () => {
      try {
        const userDetails = await getDetails(id); // Await the API call
        setDetails(userDetails); // Update state
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    if (id) fetchDetails();
  }, [id]);

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await getComplaints();
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchComplaint();
  }, []);
  return (
    <div>
      <UserNavbar fullName={details?.fullName} isVolunteer={true} />
      <div className="">
        <ComplaintCard items={complaints} />
      </div>
    </div>
  );
};

export default AllComplaint;
