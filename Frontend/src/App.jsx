import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./components/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VolunteerLanding from "./pages/volunteer/VolunteerLanding";
import ErLanding from "./pages/emergency-resp/ErLanding";
import RegulerUserLanding from "./pages/regular-user/RegulerUserLanding";
import PrivateRoute from "./components/PrivateRoute";
import ComplaintForm from "./components/regular-user/ComplaintForm";

function App() {
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

          <Route element={<PrivateRoute />}>
            <Route path="/volunteer/:id" element={<VolunteerLanding />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/er/:id" element={<ErLanding />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/regular-user/:id" element={<RegulerUserLanding />} />
            <Route
              path="/regular-user/:id/complaint"
              element={<ComplaintForm />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
