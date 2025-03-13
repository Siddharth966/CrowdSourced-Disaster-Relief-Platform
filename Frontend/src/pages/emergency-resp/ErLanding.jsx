import { useEffect, useState } from "react";
import { getDetails } from "../../service/userService";
import { useParams } from "react-router-dom";
import { getComplaints } from "../../service/complaintService";
import "../../style/style.css";
import ComplaintCard from "../../components/Complaints/ComplaintCard";
import UserNavbar from "../../components/UserNavbar";
import Banner from "../../components/shared/Banner";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiNumbersLine } from "react-icons/ri";



const ErLanding = () => {
  const [details, setDetails] = useState(null);
  const [complaints, setComplaints] = useState(null);
  const [inProgress, setInProgress] = useState(null);
  const [criticalComplaints, setCriticalComplaints] = useState([]);

  useEffect(() => {
    if (complaints) {
      const criticalComplaint = complaints.filter(
        (item) => item.severity === "Critical"
      );
      setCriticalComplaints(criticalComplaint);
    }
   
  }, [complaints]);
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

  const menuItems = [
    
      {
        label: "Pending Complaint",
        icon: <IoIosInformationCircleOutline />,
        route: `/ErLanding/${id}/pending-complaint`,
      },
      {
        label: "InProgress Complaint",
         icon: <RiNumbersLine />,
        route: `/ErLanding/${id}/inprogress-complaint`,
      },
    ];

  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const pending = await getComplaints(["Pending"], 5);
        setComplaints(pending.data);
        const inprogress = await getComplaints(["In Progress"], 5);
        console.log('inprogress',inprogress)
        if(inprogress.data){
          const items = inprogress.data.filter(item=>item.severity==="Critical")
          setInProgress(items);
        }
       
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchComplaint();
  }, []);

  return (
    <div>
      <UserNavbar fullName={details?.fullName} isVolunteer={true} navbarItem={menuItems} />

      <Banner
        title="Emergency Responder"
        description="Emergency responders are trained professionals and volunteers who provide immediate assistance during disasters and crises.
      Emergency responders, including paramedics, firefighters, police officers, and trained volunteers, play a crucial role in saving lives and restoring stability during and after disasters"
      />

      {/* <div className="herosection h-96"></div> */}
      <div className="bg-blue-300">
        <div>
          <h3 className="header ml-3 pt-6 text-2xl">Pending Complaints...</h3>
          <ComplaintCard items={criticalComplaints} />
        </div>

        <div>
          <h3 className="header ml-3 pt-6 text-2xl">In Progress Complaints...</h3>
          <ComplaintCard items={inProgress} />
        </div>

      </div>
    </div>
  );
};

export default ErLanding;
