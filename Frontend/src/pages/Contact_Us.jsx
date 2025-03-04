import React, { useState } from "react";
import { baseUrl } from "../constants/env";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { btnClass, inputField } from "../constants/styleClass";
import { contactFields } from "../constants/forms";

const ContactUs = () => {
  const initialFormState = contactFields.reduce((acc, field) => {
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
      const response = await axios.post(`${baseUrl}/contact-us`, formData);
      if (response.status === 201) {
        toast.success("Message sent successfully!");
        setFormData(initialFormState);
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {});
    }
  };
  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white shadow-2xl rounded-2xl border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left Section - Disaster Relief Info */}
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">Disaster Relief System</h2>
            <p className="text-lg">
              Our platform helps coordinate aid and support for
              disaster-stricken areas. Whether you are donating supplies,
              volunteering, or reaching out for help, we connect communities to
              relief efforts efficiently.
            </p>
            <ul className="mt-4 space-y-2">
              <li>✔ Quick & Effective Aid Distribution</li>
              <li>✔ Volunteer & Donation Management</li>
              <li>✔ Real-time Updates & Alerts</li>
            </ul>
            <p className="mt-4 text-sm">
              Contact us to contribute or seek help. Every action counts!
            </p>
          </div>

          {/* Address & Contact Details */}
          <div className="mt-6 border-t border-gray-300 pt-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mt-2">📍 **Head Office:**</p>
            <p>Disaster Relief Organization</p>
            <p>123 Relief Street, Disaster City, DR 45678</p>
            <p className="mt-2">📞 **Phone:** +1 (800) 123-4567</p>
            <p>✉ **Email:** support@disasterrelief.com</p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
            Contact Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {contactFields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={inputField}
                    rows="4"
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={inputField}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                )}
              </div>
            ))}

            <button type="submit" className={btnClass}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
