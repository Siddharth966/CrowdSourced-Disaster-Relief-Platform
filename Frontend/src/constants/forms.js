export const registerFields = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Enter Full name",
    required: true
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter Email",
    required: true
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    required: true,
    options: [
      { value: "", label: "Select Gender" },
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "other", label: "Other" }
    ]
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "Enter Phone number",
    required: true
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter Address",
    required: true
  },
  {
    name: "pincode",
    type: "text",
    label: "Pin Code",
    placeholder: "Enter Pin Code",
    required: true
  },
  {
    name: "user_type",
    type: "select",
    label: "User Type",
    required: true,
    options: [
      { value: "", label: "Select User Type" },
      { value: "volunteer", label: "Volunteer" },
      { value: "emergency_responder", label: "Emergency Responder" },
      { value: "regular_user", label: "Regular User" }
    ]
  },
];
export const loginFields = [
 
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter Email",
    required: true
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true
  },
];

export const complaintFields = [
  {
    name: "complaint",
    type: "text",
    label: "Complaint",
    placeholder: "Enter Complaint",
    required: true,
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter Accident ",
    required: true,
  },
  {
    name: "landmark",
    type: "text",
    label: "Landmark",
    placeholder: "Nearby landmark (if any)",
    required: false,
  },
  {
    name: "latitude",
    type: "number",
    label: "Latitude (Optional)",
    placeholder: "Enter GPS coordinates",
    required: false,
  },
  {
    name: "longitude",
    type: "number",
    label: "Longitude (Optional)",
    placeholder: "Enter GPS coordinates",
    required: false,
  },
  {
    name: "severity",
    type: "radio",
    label: "Severity",
    options: ["Minor", "Moderate", "Severe"],
    required: true,
  },
  {
    name: "photos",
    type: "file",
    label: "Upload Photos",
    accept: "image/*",
    multiple: true,
    required: false,
  },
  {
    name: "urgency",
    type: "radio",
    label: "Urgency",
    options: ["Low", "Medium", "High"],
    required: true,
  },
  {
    name: "damage_desc",
    type: "text",
    label: "Any Damage?",
    placeholder: "Enter Damage",
    required: false,
  },
  {
    name: "name",
    type: "text",
    label: "Name (Optional)",
    placeholder: "Enter name",
    required: false,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter Email",
    required: false,
  },
];
