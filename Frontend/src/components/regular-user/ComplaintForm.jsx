import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { baseUrl } from "../../constants/env";
import { complaintFields } from "../../constants/forms";
import { commonClasses } from "../../constants/styleClass";

const ComplaintForm = () => {
  const initialFormState = complaintFields.reduce((acc, field) => {
    acc[field.name] = field.type === "radio" ? "" : ""; // Radio fields default to empty string
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialFormState);
  const [files, setFiles] = useState(null); // To handle file uploads

  const handleChange = (e) => {
    if (e.target.type === "file") {
      setFiles(e.target.files); // Handle file selection (ensure files is a FileList object)
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();

    // Append form data fields to FormData
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    // Append files if selected
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        formDataToSend.append("photos", file); // 'photos' is the name of the file input field
      });
    }

    try {
      const response = await axios.post(
        `${baseUrl}/raise-complaint`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // This tells the server to expect file uploads
          },
        }
      );
      if (response.status === 201) {
        toast.success("Complaint raised successfully!");
        setFormData(initialFormState); // Reset form data
        setFiles(null); // Reset file input (clear file selection)
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Error submitting complaint."
      );
      console.error("Error submitting complaint:", error);
    }
  };

  const renderFormField = (field) => {
    return (
      <div
        key={field.name}
        className="flex items-center justify-between w-full"
      >
        <label htmlFor={field.name} className="w-1/3 text-gray-700 font-medium">
          {field.label}
        </label>
        <div className="w-2/3">
          {field.type === "radio" ? (
            <div className="flex space-x-4">
              {field.options.map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name={field.name}
                    value={option.value}
                    checked={formData[field.name] === option.value}
                    onChange={handleChange}
                    className="mr-2"
                    required={field.required}
                  />
                  {option.label}
                </label>
              ))}
            </div>
          ) : field.type === "file" ? (
            <input
              type="file"
              name={field.name}
              onChange={handleChange}
              accept={field.accept || "image/*"} // Default to image/* if not provided
              multiple
              required={field.required}
              className={commonClasses}
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder}
              required={field.required}
              className={commonClasses}
            />
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-6 text-center font-semibold">
          Raise a Complaint
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {complaintFields.map(renderFormField)}

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Raise Complaint
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
