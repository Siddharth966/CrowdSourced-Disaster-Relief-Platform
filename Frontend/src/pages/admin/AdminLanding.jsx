import React, { useEffect, useState } from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { baseUrl } from "../../constants/env";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminLanding = () => {
  const [counts, setCounts] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
        hoverBackgroundColor: [],
      },
    ],
  });

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = async () => {
    try {
      const response = await axios.get(`${baseUrl}/complaint-count`);

      if (response.data && response.data.data) {
        const { total, ...filteredData } = response.data.data; // Remove total

        // Define custom labels for each status
        const statusLabels = {
          pending: "Pending Complaints",
          in_progress: "In Progress",
          done: "Resolved",
        };

        // Extract labels and values using our custom labels
        const labels = Object.keys(filteredData).map((key) => statusLabels[key] || key);
        const data = Object.values(filteredData);

        // Generate colors dynamically
        const backgroundColors = labels.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);

        setCounts({
          labels,
          datasets: [
            {
              data,
              backgroundColor: backgroundColors,
              hoverBackgroundColor: backgroundColors,
            },
          ],
        });
      } else {
        console.error("Invalid API response format:", response.data);
      }
    } catch (error) {
      console.error("Error fetching complaint count:", error);
    }
  };

  return (
    <AdminLayout>
     <h1>This is the Admin Dashboard...</h1>

      <div style={{ width: "400px", margin: "auto" }}>
        {counts.labels.length > 0 ? <Doughnut data={counts} /> : <p>Loading chart...</p>}
      </div>
    </AdminLayout>
  );
};

export default AdminLanding;
