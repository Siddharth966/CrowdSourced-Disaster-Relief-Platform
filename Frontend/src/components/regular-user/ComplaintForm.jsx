import React, { useState } from 'react'
import { complaintFields } from '../../constants/forms';
import { useNavigate } from 'react-router';
import { commonClasses } from '../../constants/styleClass';

const ComplaintForm = () => {
    const navigate = useNavigate();
    const initialFormState = complaintFields.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {});
     const [formData, setFormData] = useState(initialFormState);
     
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
      e.preventDefault();
      
    };
     const renderFormField = (field) => {
  return (
    <div key={field.name} className="flex items-center justify-between w-full">
      <label className="w-1/3 text-gray-700 font-medium">{field.label}</label>
      <div className="w-2/3">
        {field.type === "radio" ? (
          field.options.map((option) => (
            <label key={option} className="inline-flex items-center mr-4">
              <input
                type="radio"
                name={field.name}
                value={option}
                checked={formData[field.name] === option}
                onChange={handleChange}
                required={field.required}
                className="mr-2"
              />
              {option}
            </label>
          ))
        ) : (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
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
         <h2 className="text-2xl mb-6 text-center font-semibold">LOGIN</h2>
 
         <form onSubmit={handleSubmit} className="space-y-4">
           {complaintFields .map(renderFormField)}
 
           <button
             type="submit"
             className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
           >
             Raise
           </button>
           
         </form>
       </div>
     </div>
   );
}

export default ComplaintForm
