import { useEffect, useState } from "react";
import UserNavbar from "../../components/userNavbar";
import { getDetails } from "../../service/userService";
import { useParams } from "react-router-dom";
import ComplaintCard from "../../components/regular-user/ComplaintCard";
import "../../style/style.css";
import { getComplaints } from "../../service/complaintService";

const RegulerUserLanding = () => {
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
        const response = await getComplaints();
        console.log("response", response);
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchComplaint();
  }, []);
  return (
    <div>
      <UserNavbar fullName={details?.fullName} isRegularUser={true} />
      <div className="herosection h-96"></div>
      <div className="h-96">
        <ComplaintCard items={complaints} />
      </div>
    </div>
  );
};

export default RegulerUserLanding;
