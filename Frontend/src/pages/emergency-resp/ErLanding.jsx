import { useEffect, useState } from "react";
import { getDetails } from "../../service/userService";
import { useParams } from "react-router-dom";
import { getComplaints } from "../../service/complaintService";
import "../../style/style.css";
import ComplaintCard from "../../components/Complaints/ComplaintCard";
import UserNavbar from "../../components/UserNavbar";
import Banner from "../../components/shared/Banner";

const ErLanding = () => {
  const [details, setDetails] = useState(null);
  const [complaints, setComplaints] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const userDetails = await getDetails(id);
        setDetails(userDetails);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    if (id) fetchDetails();
  }, [id]);

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const response = await getComplaints(["Pending"], 5);
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

      <Banner title="Emergency Responder" description="Emergency responders are trained professionals and volunteers who provide immediate assistance during disasters and crises.
      Emergency responders, including paramedics, firefighters, police officers, and trained volunteers, play a crucial role in saving lives and restoring stability during and after disasters" />
      
      {/* <div className="herosection h-96"></div> */}
      <div className="h-150 bg-blue-300">
        <h3 className="header ml-3 pt-6 text-2xl">Pending Complaints...</h3>
        <ComplaintCard items={complaints} />
      </div>
    </div>
  );
};

export default ErLanding;
  