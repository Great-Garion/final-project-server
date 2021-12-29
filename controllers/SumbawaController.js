const sumber = require("../models/Sumbawa")

module.exports = {
    getAllDWS: async (req, res) => {
        try {
          const DWS = await sumber.find({}, "-__v");
    
          res.json(DWS);
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      getDWSbyID: async (req, res) => {
        try {
          const { id } = req.params;
          const DWSByID = await sumber.findById(id, "-__v");
    
          res.json(DWSByID);
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      addDWS: async (req, res) => {
        try {
          let postDWS = req.body;
          await sumber.create(postDWS);
    
          res.json("New DWS has been added");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      deleteDWS: async (req, res) => {
        try {
          const { id } = req.params;
          await sumber.findByIdAndDelete(id);
    
          res.json("Deleted DWS successfull");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      editDWS: async (req, res) => {
        try {
          const { id } = req.params;
          const update = {
            tourism_spot: req.body.tourism_spot,
            image: req.body.image,
            description: sumber.description,
            store: sumber.store,
            transportation: sumber.transportation,
            comment: sumber.comment
          };
    
          await sumber.findByIdAndUpdate(id, update);
    
          res.json("Updated DWS Successfull");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
}