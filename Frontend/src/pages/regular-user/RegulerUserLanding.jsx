import React, { useEffect } from 'react'
import UserNavbar from '../../components/userNavbar'
import { getDetails } from '../../service/userService';
import { useParams } from 'react-router-dom';

const RegulerUserLanding = () => {
  const [details, setDetails] = useState(null);
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
  return (
    <div>
      <UserNavbar fullName={details?.fullName}/>
    </div>
  )
}

export default RegulerUserLanding

