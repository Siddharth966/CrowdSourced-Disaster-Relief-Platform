import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { emergencyResponderFields } from "../constants/forms";
import { baseUrl } from "../constants/env";

const EmergencyResponderRegister = () => {
  const navigate = useNavigate();

  // Initialize form state
  const initialFormState = emergencyResponderFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [phoneError, setPhoneError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Real-time phone number validation
    if (name === "phone") {
      if (value.length > 10) {
        setPhoneError("Phone number cannot exceed 10 digits.");
      } else if (!/^\d*$/.test(value)) {
        setPhoneError("Phone number must contain only digits.");
      } else {
        setPhoneError("");
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number before submission
    if (formData.phone.length !== 10) {
      toast.error("Phone number must be exactly 10 digits.");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/auth/register/emergency-responder`, {
        ...formData,
        user_type: "emergency_responder",
      });
      
      if (response.status === 201) {
        toast.success(response.data.message);
        navigate("/loginresponder");
      } else if (response.status !== 200) {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error registering emergency responder"
      );
    }
  };

  // Render form fields dynamically
  const renderFormField = (field) => {
    return (
      <div key={field.name} className="mb-3">
        <label 
          htmlFor={field.name} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {field.label}
        </label>
        <div className="mt-1">
          {field.type === "select" ? (
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
              <option value="">Select {field.label}</option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <div>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                maxLength={field.name === "phone" ? 10 : undefined}
              />
              {field.name === "phone" && phoneError && (
                <p className="mt-1 text-sm text-red-600">{phoneError}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Split fields into two columns
  const midPoint = Math.ceil(emergencyResponderFields.length / 2);
  const leftColumnFields = emergencyResponderFields.slice(0, midPoint);
  const rightColumnFields = emergencyResponderFields.slice(midPoint);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-2xl p-8 transform transition-all duration-300 hover:scale-[1.01]">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Emergency Responder
          </h2>
          <p className="text-sm text-gray-600">
            Join our team of emergency responders
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-8">
            {/* Left Column */}
            <div className="flex-1 space-y-3">
              {leftColumnFields.map(renderFormField)}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-3">
              {rightColumnFields.map(renderFormField)}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Link 
              to="/loginresponder" 
              className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
            >
              Already have an account? Login here
            </Link>
            <button
              type="submit"
              className="flex justify-center py-2.5 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 transform hover:scale-[1.02]"
            >
              Register as Emergency Responder
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmergencyResponderRegister; 