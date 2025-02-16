export const regularUserService = {
  create: async (model, payload) => {
    try {
      // Dynamically create a new instance using the provided model
      const newEntity = new model(payload);

      // Save the data to the database
      const savedEntity = await newEntity.save();

      // Return a generalized response with the auto-generated _id and the entire payload
      return {
        message: `${model.modelName} successfully created`, // model.modelName provides the model's name
        data: {
          id: savedEntity._id, // MongoDB-generated _id
          ...payload, // Keep all other fields intact
        },
      };
    } catch (error) {
      console.error("Error creating record:", error);
      throw new Error("Internal server error");
    }
  },

  getAll: async (model) => {
    try {
      // Fetch all records from the model
      const allRecords = await model.find();

      // Return the records
      return {
        message: `${model.modelName} records fetched successfully`,
        data: allRecords,
      };
    } catch (error) {
      console.error("Error fetching records:", error);
      throw new Error("Internal server error");
    }
  },
  getItemById: async (model, id) => {
    try {
      // Fetch the record by ID from the model
      const record = await model.findById(id);

      // If no record is found, return an appropriate message
      if (!record) {
        return {
          message: `${model.modelName} with ID not found`,
          data: null,
        };
      }

      // Return the found record
      return {
        message: `${model.modelName} record fetched successfully`,
        data: record,
      };
    } catch (error) {
      console.error("Error fetching record by ID:", error);
      throw new Error("Internal server error");
    }
  },
  deleteById: async (model, id) => {
    try {
      const document = await model.findById(id);
      if (!document) {
        throw new Error(`${model.modelName} not found`);
      }
      // Step 3: Delete the document
      await model.findByIdAndDelete(id);
      return {
        message: `${model.modelName} deleted successfully`,
        data: { id },
      };
    } catch (error) {
      console.error(`Error deleting ${model.modelName}:`, error);
      throw error; // Re-throw the error for the controller to handle
    }
  },
};
