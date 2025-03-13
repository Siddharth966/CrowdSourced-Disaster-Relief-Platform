import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../../style/style.css";
import { getDetails } from "../../service/userService";
import { getComplaints } from "../../service/complaintService";
import ComplaintCard from "../../components/Complaints/ComplaintCard";
import UserNavbar from "./../../components/UserNavbar";
import Banner from "../../components/shared/Banner";
import { RiNumbersLine } from "react-icons/ri";
import { IoPersonAddOutline, IoPersonOutline } from "react-icons/io5";
import { IoIosInformationCircleOutline } from "react-icons/io";



const VolunteerLanding = () => {
  const [details, setDetails] = useState(null);
  const [complaints, setComplaints] = useState(null);
  const [inProgress, setInProgress] = useState(null);
  const [minorComplaints, setMinorComplaints] = useState([]);
  const { id } = useParams();

 

  useEffect(() => {
    if (complaints) {
      const minorComplaint = complaints.filter(
        (item) => item.severity !== "Critical"
      );
      setMinorComplaints(minorComplaint);
    }
  }, [complaints]);

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
  const menuItems = [
  
    {
      label: "Pending Complaint",
      icon: <IoIosInformationCircleOutline />,
      route: `/volunteer/${id}/pending-complaint`,
    },
    {
      label: "InProgress Complaint",
      icon: <RiNumbersLine />,
      route: `/volunteer/${id}/inprogress-complaint`,
    },
  ];


  useEffect(() => {
    const fetchComplaint = async () => {
      try {
        const pending = await getComplaints(["Pending"], 5);
        setComplaints(pending.data);
        const inprogress = await getComplaints(["In Progress"], 5);
      
        if(inprogress.data){
          const items = inprogress.data.filter(item=>item.severity !=="Critical")
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
      <UserNavbar fullName={details?.fullName} isRegularUser={false} navbarItem={menuItems}/>

      <Banner
        title="Volunteer"
        description="Volunteers play a crucial role in disaster relief efforts by providing immediate assistance, emotional support, and long-term recovery aid to affected communities.Volunteers play a crucial role in disaster relief efforts by providing immediate assistance, emotional support, and long-term recovery aid to affected communities."
      />

     {/* <div className="herosection h-96"></div> */}
     <div className="bg-blue-300">
        <div>
          <h3 className="header ml-3 pt-6 text-2xl">Pending Complaints...</h3>
          <ComplaintCard items={minorComplaints} />
        </div>

        <div>
          <h3 className="header ml-3 pt-6 text-2xl">In Progress Complaints...</h3>
          <ComplaintCard items={inProgress} />
        </div>

      </div>
    </div>
  );
};

export default VolunteerLanding;
