const lokaKota = require("../models/Wisata");

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
        tourism_spot: req.body.tourism_spot,
        image: req.body.image,
        address: req.body.address,
        desc: req.body.desc,
        kabupaten: req.body.kabupaten,
        attractions: req.body.attractions,
        contact_us: req.body.contact_us,
        police: req.body.police,
        hospital: req.body.hospital,
        hotel: req.body.hotel,
        restaurant: req.body.restaurant,
        worship: req.body.worship,
        jarak: req.body.jarak,
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
};
