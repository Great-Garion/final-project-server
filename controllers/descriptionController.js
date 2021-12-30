const desc = require("../models/Description")

module.exports = {
    getAllDesc: async (req, res) => {
        try {
          const Description = await desc.find({}, "-__v");
    
          res.json(Description);
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      getDescbyID: async (req, res) => {
        try {
          const { id } = req.params;
          const descByID = await desc.findById(id, "-__v");
    
          res.json(descByID);
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      addDesc: async (req, res) => {
        try {
          let postDesc = req.body;
          await desc.create(postDesc);
    
          res.json("New Desc has been added");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      deleteDesc: async (req, res) => {
        try {
          const { id } = req.params;
          await desc.findByIdAndDelete(id);
    
          res.json("Deleted Desc successfull");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      editDesc: async (req, res) => {
        try {
          const { id } = req.params;
          const update = {
            addres: req.body.addres,
            attractions: req.body.attractions,
            contact_us: req.body.contact_us,
            information: req.body.information
          };
    
          await Descs.findByIdAndUpdate(id, update);
    
          res.json("Updated Desc Successfull");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
}