import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/userNavbar";
import { useParams } from "react-router-dom";
import { getDetails } from "../../service/userService";

const VolunteerLanding = () => {
  const [details, setDetails] = useState(null);
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
  

  return (
    <>
            <UserNavbar fullName={details?.fullName} />

      </>
  );
};

export default VolunteerLanding;
