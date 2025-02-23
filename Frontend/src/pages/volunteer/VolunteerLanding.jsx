import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/userNavbar";
import ComplaintCard from "../../components/volunteer/ComplaintCard";
import { useParams } from "react-router-dom";
import "../../style/style.css";
import { getDetails } from "../../service/userService";
import { getComplaints } from "../../service/complaintService";

const VolunteerLanding = () => {
  const [details, setDetails] = useState(null);
  const [complaints, setComplaints] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const userDetails = await getDetails(id); // Await the API call
        setDetails(userDetails); // Update state
        console.log(userDetails)
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
      <div className="herosection h-96"></div>
      <div className="h-96">
        <ComplaintCard items={complaints} />
      </div>
    </div>
  );
};

export default VolunteerLanding;
