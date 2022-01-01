const lokaKota = require("../models/Wisata")

module.exports = {
    getAllDataWisata: async (req, res) => {
        try {
          const dataWisata = await lokaKota.find({}, "-__v");

          res.json(dataWisata);
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      getDataWisataByID: async (req, res) => {
        try {
          const { id } = req.params;
          const dataWisataByID = await lokaKota.findById(id, "-__v");
    
          res.json(dataWisataByID);
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      addDataWisata: async (req, res) => {
        try {
          let postDataWisata = req.body;
          await lokaKota.create(postDataWisata);
    
          res.json("New dataWisata has been added");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      deleteDataWisata: async (req, res) => {
        try {
          const { id } = req.params;
          await lokaKota.findByIdAndDelete(id);
    
          res.json("Deleted dataWisata successfull");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
    
      editDataWisata: async (req, res) => {
        try {
          const { id } = req.params;
          const update = {
           sumbawa: req.body.sumbawa,
           sumbawa_barat: req.body.sumbawa_barat
          };
    
          await lokaKota.findByIdAndUpdate(id, update);
    
          res.json("Updated dataWisata Successfull");
        } catch (error) {
          console.log(error);
          res.status(500).json({
            message: error.message || "Internal Server Error",
          });
        }
      },
}