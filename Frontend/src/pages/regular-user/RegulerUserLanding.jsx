import { useEffect, useState } from "react";
import { getDetails } from "../../service/userService";

import { useParams } from "react-router-dom";
import "../../style/style.css";
import { getComplaints } from "../../service/complaintService";
import UserNavbar from "../../components/UserNavbar";
import ComplaintCard from "../../components/Complaints/ComplaintCard";
import Banner from "../../components/shared/Banner";

const RegulerUserLanding = () => {
  const [details, setDetails] = useState(null);
  const [pendingComplaints, setPendingComplaints] = useState(null);
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
        const pendingItems = await getComplaints(["Pending"],5);
        setPendingComplaints(pendingItems.data);
        const items = await getComplaints(["Done","In Progress"],5);
        setComplaints(items.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchComplaint();
  }, []);
  return (
    <div>
      <UserNavbar fullName={details?.fullName} isRegularUser={true} />
     
        <Banner title="User" description="The responsibilities of an Indian citizen are outlined in Article 51A of the Indian Constitution as Fundamental Duties. These duties encourage every citizen to contribute to the nation's well-being and development." />
      
      <div className="h-96 bg-[#f2f3f7]">
        <h3 className="header ml-3 pt-6 text-2xl">Pending Complaints...</h3>

        <ComplaintCard isRegularUser={true} items={pendingComplaints} />
      </div> 
      <div className="h-96 bg-[#ffffff]">
        <h3 className="header ml-3 pt-6 text-2xl">In Progress Complaints...</h3>

        <ComplaintCard isRegularUser={true} items={complaints} />
      </div>
    </div>
  );
};

export default RegulerUserLanding;
