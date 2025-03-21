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
      { value: "emergency_responder", label: "Emergency Responder" },
      { value: "regular_user", label: "Regular User" },
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
    name: "lat",
    type: "number",
    label: "Latitude",
    placeholder: "Enter Latitude",
    required: false,
  },
  {
    name: "long",
    type: "number",
    label: "Longitude",
    placeholder: "Enter Longitude",
    required: false,
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
  // {
  //   name: "photos",
  //   type: "file",
  //   label: "Photos",
  //   placeholder: "Upload Photos",
  //   accept: "image/*",
  //   required: true,
  // },

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

export const donationFields = [
  {
    name: "donorName",
    type: "text",
    label: "Donor Name",
    placeholder: "Enter your name",
    required: true,
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter your address",
    required: true,
  },
  {
    name: "donationCategory",
    type: "select",
    label: "Donation Category",
    placeholder: "Select a category",
    required: true,
    options: ["Food", "Clothing", "Medical Supplies", "Monetary", "Other"],
  },
  {
    name: "phoneNumber",
    type: "tel",
    label: "Phone Number",
    placeholder: "Enter your phone number",
    required: true,
  },
];

