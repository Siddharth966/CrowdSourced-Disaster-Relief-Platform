import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./components/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegulerUserLanding from "./pages/regular-user/RegulerUserLanding";
import ComplaintForm from "./components/Complaints/ComplaintForm";
import PrivateRoute from "./components/PrivateRoute";
import VolunteerLanding from "./pages/volunteer/VolunteerLanding";
import ErLanding from "./pages/emergency-resp/ErLanding";

function App() {
  const isAuthenticated = localStorage.getItem("token");
  return (
    <>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/regular-user/:id" element={<RegulerUserLanding />} />
            <Route
              path="/regular-user/:id/complaint"
              element={<ComplaintForm />}
            />
            <Route path="/volunteer/:id" element={<VolunteerLanding />} />
            <Route path="/er/:id" element={<ErLanding />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
