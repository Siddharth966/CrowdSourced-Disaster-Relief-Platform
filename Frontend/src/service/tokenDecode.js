export const tokenActions = {
  extractItems: (token) => {
    if (token) {
      try {
        // JWT structure: Header.Payload.Signature (split and decode payload)
        const decodedToken = JSON.parse(atob(token.split(".")[1]));

        // Extract email, userType, and id
        const { email, user_type, id } = decodedToken;
        return {
          email,
          user_type,
          id,
        };
      } catch (error) {
        console.error("Invalid token or decoding error:", error);
      }
    } else {
      console.log("No token found");
    }
  },

  removeToken: () => {
    localStorage.removeItem("token");
  },
};
