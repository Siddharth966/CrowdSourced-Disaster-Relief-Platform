export const commanService = {
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
  getAll: async (model, params) => {
    try {
      // Fetch all records from the model
      const { limitNumber, filter, totalItems } = params;

      const allRecords = await model.find(filter).limit(limitNumber);

      // Return the records
      return {
        message: `${model.modelName} records fetched successfully`,
        data: allRecords,
        count: totalItems,
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
  update: async (model, id, payload) => {
    try {
      // Find the entity by ID and update it with the provided payload
      const updatedEntity = await model.findByIdAndUpdate(
        id,
        payload,
        { new: true } // Return the updated document
      );

      // If the entity is not found, throw an error
      if (!updatedEntity) {
        throw new Error(`${model.modelName} not found`);
      }

      // Return a generalized response with the updated data
      return {
        message: `${model.modelName} successfully updated`,
        data: updatedEntity,
      };
    } catch (error) {
      console.error("Error updating record:", error);
      throw new Error("Internal server error");
    }
  },
};
