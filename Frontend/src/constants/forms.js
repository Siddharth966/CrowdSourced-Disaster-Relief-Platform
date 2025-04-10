export const registerFields = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Enter Full name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true,
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    required: true,
    options: [
      { value: "", label: "Select Gender" },
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "Other", label: "Other" },
    ],
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "Enter Phone number",
    required: true,
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter Address",
    required: true,
  },
  {
    name: "pincode",
    type: "text",
    label: "Pin Code",
    placeholder: "Enter Pin Code",
    required: true,
  },
  {
    name: "user_type",
    type: "select",
    label: "User Type",
    required: true,
    options: [
      { value: "", label: "Select User Type" },
      { value: "volunteer", label: "Volunteer" },
      { value: "regular_user", label: "Regular User" },
    ],
  },
];

export const emergencyResponderFields = [
  {
    name: "fullName",
    type: "text",
    label: "Full Name",
    placeholder: "Enter Full name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true,
  },
  {
    name: "gender",
    type: "select",
    label: "Gender",
    required: true,
    options: [
      { value: "", label: "Select Gender" },
      { value: "Male", label: "Male" },
      { value: "Female", label: "Female" },
      { value: "Other", label: "Other" },
    ],
  },
  {
    name: "phone",
    type: "tel",
    label: "Phone Number",
    placeholder: "Enter Phone number",
    required: true,
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter Address",
    required: true,
  },
  {
    name: "pincode",
    type: "text",
    label: "Pin Code",
    placeholder: "Enter Pin Code",
    required: true,
  },
  {
    name: "organization",
    type: "text",
    label: "Organization Name",
    placeholder: "Enter Organization Name",
    required: true,
  },
  {
    name: "category",
    type: "select",
    label: "Emergency Response Category",
    required: true,
    options: [
      { value: "", label: "Select Category" },
      { value: "firefighter", label: "Firefighter" },
      { value: "police", label: "Police Officer" },
      { value: "ambulance", label: "Ambulance Service" },
      { value: "ngo", label: "NGO Worker" },
      { value: "rescue_team", label: "Rescue Team" },
      { value: "disaster_management", label: "Disaster Management" },
      { value: "other", label: "Other" },
    ],
  },
  {
    name: "certification",
    type: "text",
    label: "Certification/ID Number",
    placeholder: "Enter Certification or ID Number",
    required: true,
  },
  {
    name: "experience",
    type: "number",
    label: "Years of Experience",
    placeholder: "Enter Years of Experience",
    required: true,
  },
  {
    name: "availability",
    type: "select",
    label: "Availability Status",
    required: true,
    options: [
      { value: "", label: "Select Availability" },
      { value: "full_time", label: "Full Time" },
      { value: "part_time", label: "Part Time" },
      { value: "on_call", label: "On Call" },
    ],
  },
];

export const loginFields = [
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter Password",
    required: true,
  },
];

export const complaintFields = [
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter Address",
    required: true,
  },
  {
    name: "landmark",
    type: "text",
    label: "Landmark",
    placeholder: "Enter Landmark",
    required: true,
  },
  {
    name: "mobileNumber",
    type: "tel",
    label: "Mobile Number",
    placeholder: "Enter Mobile Number",
    required: true,
  },
  {
    name: "severity",
    type: "radio",
    label: "Severity",
    options: [
      { value: "Minor", label: "Minor" },
      { value: "Moderate", label: "Moderate" },
      { value: "Critical", label: "Critical" },
    ],
    required: true,
  },
  {
    name: "photos",
    type: "file",
    label: "Photos",
    placeholder: "Upload Photos",
    accept: "image/*",
    required: true,
  },
  {
    name: "damageDesc",
    type: "textarea",
    label: "Damage Description (Optional)",
    placeholder: "Enter Damage Description",
    required: false,
  },
];

export const contactFields = [
  {
    name: "name",
    type: "text",
    label: "Your Name",
    placeholder: "Enter your name",
    required: true,
  },
  {
    name: "email",
    type: "email",
    label: "Email Address",
    placeholder: "Enter your email",
    required: true,
  },
  {
    name: "subject",
    type: "text",
    label: "Subject",
    placeholder: "Enter subject",
    required: true,
  },
  {
    name: "message",
    type: "textarea",
    label: "Message",
    placeholder: "Write your message here...",
    required: true,
  },
];

export const adminLogin = [
  {
    name: "secret_key",
    type: "text",
    label: "Secret Key",
    placeholder: "Enter Secret Key",
    required: true,
  },
];


