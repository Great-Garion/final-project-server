const sumbar = require("../models/SumbawaBarat")

module.exports = {
    getAllDataKSB: async (req, res) => {
        try {
          const dataKSB = await sumbar.find({}, "-__v");
    
          res.json(dataKSB);
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      getDataKSBByID: async (req, res) => {
        try {
          const { id } = req.params;
          const dataKSBByID = await sumbar.findById(id, "-__v");
    
          res.json(dataKSBByID);
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      addDataKSB: async (req, res) => {
        try {
          let postDataKSB = req.body;
          await sumbar.create(postDataKSB);
    
          res.json("New dataKSB has been added");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      deleteDataKSB: async (req, res) => {
        try {
          const { id } = req.params;
          await sumbar.findByIdAndDelete(id);
    
          res.json("Deleted dataKSB successfull");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      editDataKSB: async (req, res) => {
        try {
          const { id } = req.params;
          const update = {
            tourism_spot: req.body.tourism_spot,
            image: req.body.image,
            description: sumbar.description,
            store: sumbar.store,
            transportation: sumbar.transportation,
            comment: sumbar.comment
          };
    
          await sumbar.findByIdAndUpdate(id, update);
    
          res.json("Updated dataKSB Successfull");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
}