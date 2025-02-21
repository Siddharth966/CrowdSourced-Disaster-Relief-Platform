import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Register from "./components/Register";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegulerUserLanding from "./pages/regular-user/RegulerUserLanding";
import ComplaintForm from "./components/regular-user/ComplaintForm";
import UserLanding from "./pages/";

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
          <Route path="/user/:id" element={<UserLanding />} />

          <Route
            path="/regular-user/:id/complaint"
            element={<ComplaintForm />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
