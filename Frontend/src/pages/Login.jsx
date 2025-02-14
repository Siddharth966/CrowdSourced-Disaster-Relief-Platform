import { useState } from "react";
import axios from "axios";
import { loginFields } from "../constants/forms";
import { commonClasses } from "../constants/styleClass";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../constants/env";
import { toast } from "react-toastify";
import { tokenActions } from "../service/tokenDecode";

const Login = () => {
  const navigate = useNavigate();
  const initialFormState = loginFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request
      const response = await axios.post(`${baseUrl}/login`, {
        email: formData.email,
        password: formData.password,
      });

      // Handle response
      if (response.status === 200) {
        toast.success(response.data.message); // Show success message

        // Store the token in localStorage
        localStorage.setItem("token", response.data.token);

        // Extract token items (e.g., user_type and id)
        const token = response.data.token; // Use the token from the response
        const tokenItems = tokenActions.extractItems(token);

        if (!tokenItems) {
          throw new Error("Invalid token");
        }

        // Navigate based on user_type
        const { user_type, id } = tokenItems;
        switch (user_type) {
          case "volunteer":
            navigate(`/volunteer/${id}`);
            break;
          case "emergency_responder":
            navigate(`/er/${id}`);
            break;
          case "regular_user":
            navigate(`/regular-user/${id}`);
            break;
          default:
            throw new Error("Unknown user type");
        }
      } else {
        toast.error(response.data.message); // Show error message for non-200 status
      }
    } catch (error) {
      // Handle errors
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  const renderFormField = (field) => {
    return (
      <div key={field.name} className="flex items-center justify-between w-full">
        <label htmlFor={field.name} className="w-1/3 text-gray-700 font-medium">
          {field.label}
        </label>
        <div className="w-2/3">
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            placeholder={field.placeholder}
            required={field.required}
            className={commonClasses}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-6 text-center font-semibold">LOGIN</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {loginFields.map(renderFormField)}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;