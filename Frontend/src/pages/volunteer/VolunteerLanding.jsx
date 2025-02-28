import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    if (id) fetchDetails();
  }, [id]);

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await getComplaints(["Pending"]);
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

      <Banner
        title="Volunteer"
        description="Volunteers play a crucial role in disaster relief efforts by providing immediate assistance, emotional support, and long-term recovery aid to affected communities.Volunteers play a crucial role in disaster relief efforts by providing immediate assistance, emotional support, and long-term recovery aid to affected communities."
      />
      {/* <div className="herosection h-96"></div> */}
      <div className="h-150 bg-blue-300">
        <div className="flex justify-between">
          <h3 className="header ml-3 text-2xl">Pending Complaints...</h3>
          <Link className="header mr-4 underline" to="/view-complaints">
            View All
          </Link>
        </div>

        <div>
          <ComplaintCard items={complaints} />
        </div>
      </div>
    </div>
  );
};

export default VolunteerLanding;
