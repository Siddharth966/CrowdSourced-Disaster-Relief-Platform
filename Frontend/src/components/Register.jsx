import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { commonClasses } from "../constants/styleClass";
import { registerFields } from "../constants/forms";
import { baseUrl } from "../constants/env";
import { toast } from "react-toastify";


const Register = () => {
  const navigate = useNavigate();

  const initialFormState = registerFields.reduce((acc, field) => {
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
      const response = await axios.post(
        `${baseUrl}/register`,
        formData
      );
      if(response.status===201){
        toast.success(response.data.message)
        navigate("/login");
      }else if(response.status!==200){
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error registering volunteer");
    }
  };

  const renderFormField = (field) => {
    return (
      <div key={field.name} className="flex items-center justify-between w-full space-x-8">
      
        <label htmlFor={field.name} className="w-1/3 text-gray-700 font-medium">
          {field.label}
        </label>
        <div className="w-2/3">
          {field.type === "select" ? (
            <select
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required={field.required}
              className="w-full p-2 border border-gray-300 rounded-lg"
            >
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          )}
        </div>
      </div>
    );
  };
  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg ">
        <h2 className="text-2xl mb-6 text-center font-semibold">
          REGISTRATION
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {registerFields.map(renderFormField)}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 "
          >
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
