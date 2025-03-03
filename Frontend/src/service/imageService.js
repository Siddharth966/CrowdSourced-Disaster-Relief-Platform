// services/imageService.js

const getPhotoUrl = (photoPath) => {
  console.log('photoPath',photoPath)
  // Replace backslashes with forward slashes and prepend the server URL
  return `http://localhost:5000/uploads/${photoPath}`;
};

export { getPhotoUrl };
