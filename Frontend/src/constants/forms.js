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

