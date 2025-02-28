import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../../style/style.css";
import { getDetails } from "../../service/userService";
import { getComplaints } from "../../service/complaintService";
import ComplaintCard from "../../components/Complaints/ComplaintCard";
import UserNavbar from "./../../components/UserNavbar";
import Banner from "../../components/shared/Banner";

const VolunteerLanding = () => {
  const [details, setDetails] = useState(null);
  const [complaints, setComplaints] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const userDetails = await getDetails(id); // Await the API call
        setDetails(userDetails); // Update state
        console.log(userDetails);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    if (id) fetchDetails();
  }, [id]);

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await getComplaints([]);
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

      <Banner title="Volunteer" description="Volunteers play a crucial role in disaster relief efforts by providing immediate assistance, emotional support, and long-term recovery aid to affected communities.Volunteers play a crucial role in disaster relief efforts by providing immediate assistance, emotional support, and long-term recovery aid to affected communities." />


      {/* <div className="herosection h-96"></div> */}
      <div className="h-150 bg-blue-300">
        <h3 className="header ml-3 pt-6 text-2xl">Pending Complaints...</h3>

        <ComplaintCard items={complaints} />
      </div>
    </div>
  );
};

export default VolunteerLanding;
